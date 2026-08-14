export const WHATSAPP_REFERENCE_PATTERN =
  /^[0-9A-HJKMNP-TV-Z]{5}(?:-[0-9A-HJKMNP-TV-Z]{5}){3}$/;

const CROCKFORD_ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

export function encodeCrockfordBits(bytes, characters = 20) {
  let bits = 0;
  let value = 0;
  let output = "";
  for (const byte of bytes) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5 && output.length < characters) {
      bits -= 5;
      output += CROCKFORD_ALPHABET[(value >>> bits) & 31];
      value &= (1 << bits) - 1;
    }
    if (output.length === characters) break;
  }
  if (output.length !== characters) throw new Error("insufficient_randomness");
  return output;
}

export function generateWhatsappAttributionReference(randomBytes) {
  if (typeof randomBytes !== "function") throw new Error("secure_random_source_required");
  const compact = encodeCrockfordBits(randomBytes(13), 20);
  return compact.match(/.{5}/g).join("-");
}

export function normalizeWhatsappAttributionReference(value) {
  const normalized = String(value || "").normalize("NFKC").trim().toUpperCase();
  return WHATSAPP_REFERENCE_PATTERN.test(normalized) ? normalized : null;
}

export function propertyWhatsappMessage({ publicId, title, referenceCode = null }) {
  const current = `Hola, me interesa la propiedad ${String(publicId || "")} - ${String(title || "")}`;
  return referenceCode ? `${current}. Ref: ${referenceCode}` : current;
}

export function propertyWhatsappHref(input) {
  return `https://wa.me/522222573237?text=${encodeURIComponent(propertyWhatsappMessage(input))}`;
}
