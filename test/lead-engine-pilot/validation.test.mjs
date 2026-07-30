import test from "node:test";
import assert from "node:assert/strict";
import { validatePilotEnvelope } from "../../lib/lead-engine-pilot/validation.mjs";

test("acepta un envelope técnico mínimo y elimina espacios", () => {
  const result = validatePilotEnvelope({
    requestId: " req-123 ",
    source: " property-contact ",
    propertyPublicId: " EB-ABC123 ",
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.value, {
    requestId: "req-123",
    source: "property-contact",
    propertyPublicId: "EB-ABC123",
  });
});

test("rechaza envelopes incompletos o demasiado largos", () => {
  assert.equal(validatePilotEnvelope(null).valid, false);
  const result = validatePilotEnvelope({
    requestId: "x".repeat(129),
    source: "property-contact",
    propertyPublicId: "",
  });
  assert.equal(result.valid, false);
  assert.deepEqual(result.errors, ["invalid_request_id", "invalid_property_id"]);
});

