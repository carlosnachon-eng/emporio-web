const STORAGE_KEY = "emporio_whatsapp_attribution_touch_v1";
const MAX = Object.freeze({ source: 100, medium: 100, campaign: 100, content: 100, term: 100, path: 240 });

function clean(value, max) {
  const normalized = String(value || "").normalize("NFKC").trim();
  return normalized ? normalized.slice(0, max) : null;
}

function safeUrl(value, base) {
  try {
    return new URL(String(value || ""), base);
  } catch {
    return null;
  }
}

function externalReferrer(value, siteOrigin) {
  const referrer = safeUrl(value);
  const site = safeUrl(siteOrigin);
  if (!referrer || !site || referrer.origin === site.origin) return null;
  return referrer;
}

function referralChannel(hostname) {
  const host = String(hostname || "").toLowerCase().replace(/^www\./, "");
  if (host.startsWith("google.")) return { source: "google", medium: "organic" };
  if (host === "tiktok.com" || host.endsWith(".tiktok.com")) return { source: "tiktok", medium: "social" };
  if (host === "instagram.com" || host.endsWith(".instagram.com")) return { source: "instagram", medium: "social" };
  if (host === "facebook.com" || host.endsWith(".facebook.com")) return { source: "facebook", medium: "social" };
  return { source: clean(host, MAX.source) || "referral", medium: "referral" };
}

export function deriveWhatsappTouch({ url, referrer, siteOrigin, now = new Date().toISOString() }) {
  const parsed = safeUrl(url, siteOrigin || "https://www.emporioinmobiliario.com.mx");
  if (!parsed) return null;
  const external = externalReferrer(referrer, siteOrigin || parsed.origin);
  const referral = external ? referralChannel(external.hostname) : null;
  const utmSource = clean(parsed.searchParams.get("utm_source"), MAX.source);
  const utmMedium = clean(parsed.searchParams.get("utm_medium"), MAX.medium);
  return Object.freeze({
    source: utmSource || referral?.source || "direct",
    medium: utmMedium || (utmSource ? "campaign" : referral?.medium || "(none)"),
    campaign: clean(parsed.searchParams.get("utm_campaign"), MAX.campaign),
    content: clean(parsed.searchParams.get("utm_content"), MAX.content),
    term: clean(parsed.searchParams.get("utm_term"), MAX.term),
    landing_path: clean(parsed.pathname || "/", MAX.path) || "/",
    seen_at: new Date(now).toISOString(),
  });
}

export function validateWhatsappTouch(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const seenAt = new Date(value.seen_at);
  const path = clean(value.landing_path, MAX.path);
  if (Number.isNaN(seenAt.getTime()) || !path?.startsWith("/") || /[?#]/.test(path)) return null;
  return Object.freeze({
    source: clean(value.source, MAX.source) || "direct",
    medium: clean(value.medium, MAX.medium) || "(none)",
    campaign: clean(value.campaign, MAX.campaign),
    content: clean(value.content, MAX.content),
    term: clean(value.term, MAX.term),
    landing_path: path,
    seen_at: seenAt.toISOString(),
  });
}

export function captureWhatsappTouch(browser = globalThis.window) {
  if (!browser?.location) return null;
  const current = deriveWhatsappTouch({
    url: browser.location.href,
    referrer: browser.document?.referrer,
    siteOrigin: browser.location.origin,
  });
  if (!current) return null;
  try {
    const stored = JSON.parse(browser.localStorage?.getItem(STORAGE_KEY) || "null");
    const firstTouch = validateWhatsappTouch(stored?.first_touch) || current;
    const previousLast = validateWhatsappTouch(stored?.last_touch);
    const preserveAttributedLast = current.source === "direct"
      && previousLast
      && previousLast.source !== "direct";
    const lastTouch = preserveAttributedLast ? previousLast : current;
    const result = { first_touch: firstTouch, last_touch: lastTouch };
    browser.localStorage?.setItem(STORAGE_KEY, JSON.stringify(result));
    return Object.freeze(result);
  } catch {
    return Object.freeze({ first_touch: current, last_touch: current });
  }
}
