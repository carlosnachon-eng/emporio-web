const MAX = Object.freeze({
  requestId: 128,
  source: 64,
  propertyId: 128,
});

function clean(value, maxLength) {
  const normalized = String(value || "").normalize("NFKC").trim();
  return normalized && normalized.length <= maxLength ? normalized : null;
}

export function validatePilotEnvelope(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return Object.freeze({ valid: false, errors: ["invalid_envelope"] });
  }

  const requestId = clean(input.requestId, MAX.requestId);
  const source = clean(input.source, MAX.source);
  const propertyPublicId = clean(input.propertyPublicId, MAX.propertyId);
  const errors = [];
  if (!requestId) errors.push("invalid_request_id");
  if (!source) errors.push("invalid_source");
  if (!propertyPublicId) errors.push("invalid_property_id");

  if (errors.length) return Object.freeze({ valid: false, errors: Object.freeze(errors) });
  return Object.freeze({
    valid: true,
    value: Object.freeze({ requestId, source, propertyPublicId }),
    errors: Object.freeze([]),
  });
}
