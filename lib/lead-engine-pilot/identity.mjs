import crypto from "node:crypto";
import { LEAD_ENGINE_ERROR, LeadEngineConfigurationError } from "./contracts.mjs";

export function normalizeLeadEmail(value) {
  const normalized = String(value || "").normalize("NFKC").trim().toLowerCase();
  if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return null;
  return normalized;
}

export function normalizeLeadPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length < 10) return null;
  return digits.slice(-10);
}

function fingerprint(normalized, secret, version) {
  if (!normalized) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.invalidIdentity,
      "La identidad no puede normalizarse de forma segura.",
    );
  }
  if (Buffer.byteLength(String(secret || ""), "utf8") < 32) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.configuration,
      "El secreto HMAC no cumple la longitud mínima.",
    );
  }
  const digest = crypto
    .createHmac("sha256", secret)
    .update(`${version}:${normalized}`, "utf8")
    .digest("hex");
  return `${version}:${digest}`;
}

export function fingerprintLeadEmail(value, config) {
  return fingerprint(normalizeLeadEmail(value), config.hmacSecret, config.hmacVersion);
}

export function fingerprintLeadPhone(value, config) {
  return fingerprint(normalizeLeadPhone(value), config.hmacSecret, config.hmacVersion);
}

export function buildIdentityFingerprints({ email, phone }, config) {
  return Object.freeze({
    emailFingerprint: email ? fingerprintLeadEmail(email, config) : null,
    phoneFingerprint: phone ? fingerprintLeadPhone(phone, config) : null,
    hmacVersion: config.hmacVersion,
  });
}

