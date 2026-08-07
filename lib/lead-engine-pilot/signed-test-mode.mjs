import crypto from "node:crypto";
import { loadLeadEngineConfig } from "./config.mjs";

export const SIGNED_TEST_HEADERS = Object.freeze({
  timestamp: "x-lead-engine-test-timestamp",
  nonce: "x-lead-engine-test-nonce",
  signature: "x-lead-engine-test-signature",
});

const DEMO_PROJECT_REF = "kmxzvcngfrzcasedtexw";
const PRODUCTION_PROJECT_REF = "bnzrnizrmonjxlktbhlp";
const MAX_AGE_MS = 120_000;

function normalizedHeaders(headers = {}) {
  return Object.fromEntries(Object.entries(headers).map(([key, value]) => [key.toLowerCase(), Array.isArray(value) ? value[0] : value]));
}

export function canonicalJson(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
}

export function signedTestMessage({ timestamp, nonce, method, path, body }) {
  const bodyHash = crypto.createHash("sha256").update(canonicalJson(body)).digest("hex");
  return `${timestamp}\n${nonce}\n${String(method).toUpperCase()}\n${path}\n${bodyHash}`;
}

export function createSignedTestSignature({ secret, ...request }) {
  const digest = crypto.createHmac("sha256", secret).update(signedTestMessage(request)).digest("hex");
  return `v1=${digest}`;
}

function safeEqual(received, expected) {
  const left = Buffer.from(String(received || ""));
  const right = Buffer.from(expected);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function splitList(value) {
  return new Set(String(value || "").split(",").map((item) => item.trim()).filter(Boolean));
}

export function isSyntheticTestPayload(body) {
  const marker = body?.lead_engine?.synthetic === true;
  const name = String(body?.nombre || "").normalize("NFKC").trim();
  const email = String(body?.email || "").normalize("NFKC").trim().toLowerCase();
  const phone = String(body?.telefono || "").replace(/\D/g, "");
  return marker && /^PRUEBA SINT[EÉ]TICA\b/i.test(name) && email.endsWith(".invalid") && phone.length === 10;
}

export async function authorizeSignedTestMode({ env, method, path, body, headers, now = Date.now(), reserveNonce }) {
  const normalized = normalizedHeaders(headers);
  const timestamp = String(normalized[SIGNED_TEST_HEADERS.timestamp] || "").trim();
  const nonce = String(normalized[SIGNED_TEST_HEADERS.nonce] || "").trim();
  const signature = String(normalized[SIGNED_TEST_HEADERS.signature] || "").trim();
  const requested = Boolean(timestamp || nonce || signature);
  if (!requested) return Object.freeze({ requested: false, authorized: false, status: 0, reason: null });

  const reject = (reason, status = 403) => Object.freeze({ requested: true, authorized: false, status, reason });
  if (env.VERCEL_ENV !== "preview") return reject("preview_only");
  if (env.LEAD_ENGINE_PROPERTY_PILOT_ENABLED !== "true") return reject("flag_disabled");
  if (!isSyntheticTestPayload(body)) return reject("synthetic_payload_required", 400);
  if (!/^\d{13}$/.test(timestamp) || !/^[0-9a-f-]{36}$/i.test(nonce) || !/^v1=[0-9a-f]{64}$/i.test(signature)) return reject("invalid_signature_envelope");
  const age = now - Number(timestamp);
  if (age < -30_000 || age > MAX_AGE_MS) return reject("expired_signature");

  let config;
  try {
    config = loadLeadEngineConfig(env);
  } catch {
    return reject("unsafe_lead_engine_target");
  }
  const blocked = splitList(env.LEAD_ENGINE_BLOCKED_PROJECT_REFS);
  if (config.projectRef !== DEMO_PROJECT_REF || env.LEAD_ENGINE_ALLOWED_PROJECT_REF !== DEMO_PROJECT_REF || !blocked.has(PRODUCTION_PROJECT_REF)) {
    return reject("unsafe_lead_engine_target");
  }

  const secret = String(env.LEAD_ENGINE_TEST_HMAC_SECRET || "");
  if (Buffer.byteLength(secret, "utf8") < 32) return reject("test_secret_missing");
  const expected = createSignedTestSignature({ secret, timestamp, nonce, method, path, body });
  if (!safeEqual(signature, expected)) return reject("invalid_signature");
  if (typeof reserveNonce !== "function") return reject("nonce_store_unavailable");
  const reserved = await reserveNonce({ nonce, signedAt: new Date(Number(timestamp)).toISOString() });
  if (!reserved) return reject("replay_rejected", 409);

  return Object.freeze({ requested: true, authorized: true, status: 200, reason: null, projectRef: config.projectRef });
}
