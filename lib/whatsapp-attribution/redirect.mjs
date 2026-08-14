const SITE_ORIGIN = "https://www.emporioinmobiliario.com.mx";
const MAX_UTM_VALUE_LENGTH = 100;

export const PROPERTY_ATTRIBUTION_QUERY_KEYS = Object.freeze([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
]);

function cleanUtmValue(value) {
  const normalized = String(value || "").normalize("NFKC").trim();
  const limited = normalized ? normalized.slice(0, MAX_UTM_VALUE_LENGTH) : null;
  if (!limited || /@/.test(limited)) return null;
  const phoneCandidate = limited.replace(/[\s()+.\-]/g, "");
  return /^\d{7,15}$/.test(phoneCandidate) ? null : limited;
}

function safeUrl(value) {
  try {
    return new URL(String(value || ""), SITE_ORIGIN);
  } catch {
    return null;
  }
}

export function propertyCanonicalRedirectDestination({ canonicalPath, resolvedUrl }) {
  const target = safeUrl(canonicalPath);
  const source = safeUrl(resolvedUrl);
  if (!target || !source || !target.pathname.startsWith("/propiedades/")) return canonicalPath;

  for (const key of PROPERTY_ATTRIBUTION_QUERY_KEYS) {
    const value = cleanUtmValue(source.searchParams.get(key));
    if (value) target.searchParams.set(key, value);
  }

  return `${target.pathname}${target.search}`;
}

export { MAX_UTM_VALUE_LENGTH };
