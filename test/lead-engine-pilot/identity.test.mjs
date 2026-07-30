import test from "node:test";
import assert from "node:assert/strict";
import {
  buildIdentityFingerprints,
  fingerprintLeadEmail,
  fingerprintLeadPhone,
  normalizeLeadEmail,
  normalizeLeadPhone,
} from "../../lib/lead-engine-pilot/identity.mjs";

const config = Object.freeze({
  hmacSecret: "0123456789abcdef0123456789abcdef",
  hmacVersion: "v1",
});

test("normaliza correo y teléfono sin conservar formato", () => {
  assert.equal(normalizeLeadEmail("  Persona@Ejemplo.COM "), "persona@ejemplo.com");
  assert.equal(normalizeLeadPhone("+52 (222) 123-4567"), "2221234567");
});

test("fingerprints equivalentes producen el mismo HMAC versionado", () => {
  assert.equal(
    fingerprintLeadEmail("Persona@Ejemplo.com", config),
    fingerprintLeadEmail(" persona@ejemplo.COM ", config),
  );
  assert.equal(
    fingerprintLeadPhone("+52 222 123 4567", config),
    fingerprintLeadPhone("2221234567", config),
  );
});

test("el resultado no contiene PII directa", () => {
  const result = buildIdentityFingerprints({
    email: "persona@ejemplo.com",
    phone: "+52 222 123 4567",
  }, config);
  const serialized = JSON.stringify(result);
  assert.match(result.emailFingerprint, /^v1:[a-f0-9]{64}$/);
  assert.equal(serialized.includes("persona@ejemplo.com"), false);
  assert.equal(serialized.includes("2221234567"), false);
});

test("rechaza identidades inválidas y secretos débiles", () => {
  assert.throws(() => fingerprintLeadEmail("no-es-email", config));
  assert.throws(() => fingerprintLeadPhone("123", config));
  assert.throws(() => fingerprintLeadEmail("persona@ejemplo.com", {
    hmacSecret: "débil",
    hmacVersion: "v1",
  }));
});
