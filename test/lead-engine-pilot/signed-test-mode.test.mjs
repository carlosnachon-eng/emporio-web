import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { authorizeSignedTestMode, createSignedTestSignature } from "../../lib/lead-engine-pilot/signed-test-mode.mjs";

const DEMO = "kmxzvcngfrzcasedtexw";
const PROD = "bnzrnizrmonjxlktbhlp";
const SECRET = "signed-preview-test-secret-0123456789abcdef";
const NOW = 1786118400000;
const NONCE = "10000000-0000-4000-8000-000000000099";
const body = {
  nombre: "PRUEBA SINTÉTICA PILOTO",
  telefono: "2220000099",
  email: "lead-engine@example.invalid",
  propiedad_id: "LE-SYNTHETIC-001",
  lead_engine: { synthetic: true, submission_id: "10000000-0000-4000-8000-000000000098" },
};

function env(overrides = {}) {
  return {
    VERCEL_ENV: "preview",
    LEAD_ENGINE_PROPERTY_PILOT_ENABLED: "true",
    LEAD_ENGINE_SUPABASE_URL: `https://${DEMO}.supabase.co`,
    LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY: "sb_secret_demo_only_not_a_browser_key",
    LEAD_ENGINE_IDENTITY_HMAC_SECRET: "0123456789abcdef0123456789abcdef",
    LEAD_ENGINE_TEST_HMAC_SECRET: SECRET,
    LEAD_ENGINE_ALLOWED_PROJECT_REF: DEMO,
    LEAD_ENGINE_BLOCKED_PROJECT_REFS: PROD,
    ...overrides,
  };
}

function signedHeaders(payload = body, timestamp = String(NOW), nonce = NONCE, secret = SECRET) {
  return {
    "x-lead-engine-test-timestamp": timestamp,
    "x-lead-engine-test-nonce": nonce,
    "x-lead-engine-test-signature": createSignedTestSignature({ secret, timestamp, nonce, method: "POST", path: "/api/contacto-propiedad", body: payload }),
  };
}

const authorize = (options = {}) => authorizeSignedTestMode({
  env: options.env || env(), method: "POST", path: "/api/contacto-propiedad",
  body: options.body || body, headers: options.headers || signedHeaders(), now: options.now || NOW,
  reserveNonce: options.reserveNonce || (async () => true),
});

test("Preview + firma válida autoriza exclusivamente Demo", async () => {
  const result = await authorize();
  assert.equal(result.authorized, true);
  assert.equal(result.projectRef, DEMO);
});

test("firma inválida y firma expirada se rechazan", async () => {
  const invalid = await authorize({ headers: { ...signedHeaders(), "x-lead-engine-test-signature": `v1=${"0".repeat(64)}` } });
  assert.equal(invalid.authorized, false);
  assert.equal(invalid.reason, "invalid_signature");
  const old = String(NOW - 121000);
  const expired = await authorize({ headers: signedHeaders(body, old), now: NOW });
  assert.equal(expired.reason, "expired_signature");
});

test("flag apagado, Production y Project Ref Production se rechazan", async () => {
  assert.equal((await authorize({ env: env({ LEAD_ENGINE_PROPERTY_PILOT_ENABLED: "false" }) })).reason, "flag_disabled");
  assert.equal((await authorize({ env: env({ VERCEL_ENV: "production" }) })).reason, "preview_only");
  const productionEnv = env({
    LEAD_ENGINE_SUPABASE_URL: `https://${PROD}.supabase.co`,
    LEAD_ENGINE_ALLOWED_PROJECT_REF: PROD,
    LEAD_ENGINE_BLOCKED_PROJECT_REFS: DEMO,
  });
  assert.equal((await authorize({ env: productionEnv })).reason, "unsafe_lead_engine_target");
});

test("nonce repetido se rechaza como replay", async () => {
  const used = new Set();
  const reserveNonce = async ({ nonce }) => used.has(nonce) ? false : (used.add(nonce), true);
  assert.equal((await authorize({ reserveNonce })).authorized, true);
  const replay = await authorize({ reserveNonce });
  assert.equal(replay.status, 409);
  assert.equal(replay.reason, "replay_rejected");
});

test("payload sin marcadores sintéticos se rechaza antes de reservar nonce", async () => {
  let calls = 0;
  const realLooking = { ...body, nombre: "Persona real", email: "persona@example.com" };
  const result = await authorize({ body: realLooking, headers: signedHeaders(realLooking), reserveNonce: async () => { calls += 1; return true; } });
  assert.equal(result.reason, "synthetic_payload_required");
  assert.equal(calls, 0);
});

test("el endpoint salta persistencia heredada y Resend sólo después de autorización", async () => {
  const source = await readFile(new URL("../../pages/api/contacto-propiedad.js", import.meta.url), "utf8");
  const authorizedBranch = source.indexOf("if (signedTest.authorized)");
  const legacyWrite = source.indexOf('.from("solicitudes_contacto_propiedad")');
  const resend = source.indexOf('fetch("https://api.resend.com/emails"');
  assert.ok(authorizedBranch > 0 && authorizedBranch < legacyWrite && legacyWrite < resend);
  const branch = source.slice(authorizedBranch, legacyWrite);
  assert.match(branch, /return res\.status\(200\)\.json/);
  assert.doesNotMatch(branch, /solicitudes_contacto_propiedad|api\.resend\.com/);
});
