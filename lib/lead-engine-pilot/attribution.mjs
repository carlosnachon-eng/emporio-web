const MAX = Object.freeze({ source: 100, medium: 100, campaign: 100, content: 100, term: 100, path: 240, referrer: 300 });

function clean(value, maxLength) {
  const normalized = String(value || "").normalize("NFKC").trim();
  return normalized ? normalized.slice(0, maxLength) : null;
}

function safeUrl(value, base) {
  try {
    return new URL(String(value || ""), base);
  } catch {
    return null;
  }
}

export function sanitizeLandingPath(value) {
  const parsed = safeUrl(value, "https://www.emporioinmobiliario.com.mx");
  if (!parsed) return "/";
  const path = `${parsed.pathname || "/"}${parsed.search || ""}`;
  return clean(path.startsWith("/") ? path : "/", MAX.path) || "/";
}

export function sanitizeReferrer(value, siteOrigin = "https://www.emporioinmobiliario.com.mx") {
  const parsed = safeUrl(value);
  const site = safeUrl(siteOrigin);
  if (!parsed || !site || parsed.origin === site.origin) return null;
  return clean(`${parsed.origin}${parsed.pathname || "/"}`, MAX.referrer);
}

function referralChannel(hostname) {
  const host = String(hostname || "").toLowerCase().replace(/^www\./, "");
  if (/^(google\.|googleusercontent\.)/.test(host)) return { source: "google", medium: "organic" };
  if (host === "tiktok.com" || host.endsWith(".tiktok.com")) return { source: "tiktok", medium: "social" };
  if (host === "instagram.com" || host.endsWith(".instagram.com")) return { source: "instagram", medium: "social" };
  if (host === "facebook.com" || host.endsWith(".facebook.com") || host === "l.facebook.com") return { source: "facebook", medium: "social" };
  if (host === "wa.me" || host === "whatsapp.com" || host.endsWith(".whatsapp.com")) return { source: "whatsapp", medium: "messaging" };
  return { source: clean(host, MAX.source) || "referral", medium: "referral" };
}

export function deriveTouch({ url, referrer, now = new Date().toISOString(), siteOrigin } = {}) {
  const parsed = safeUrl(url, siteOrigin || "https://www.emporioinmobiliario.com.mx");
  if (!parsed) return null;
  const source = clean(parsed.searchParams.get("utm_source"), MAX.source);
  const medium = clean(parsed.searchParams.get("utm_medium"), MAX.medium);
  const sanitizedReferrer = sanitizeReferrer(referrer, siteOrigin || parsed.origin);
  const referral = sanitizedReferrer ? referralChannel(safeUrl(sanitizedReferrer)?.hostname) : null;

  return Object.freeze({
    source: source || referral?.source || "direct",
    medium: medium || (source ? "campaign" : referral?.medium || "(none)"),
    campaign: clean(parsed.searchParams.get("utm_campaign"), MAX.campaign),
    content: clean(parsed.searchParams.get("utm_content"), MAX.content),
    term: clean(parsed.searchParams.get("utm_term"), MAX.term),
    landing_path: sanitizeLandingPath(parsed.href),
    referrer: sanitizedReferrer,
    seen_at: new Date(now).toISOString(),
  });
}

export function validateAttributionPayload(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const attributionId = clean(input.attribution_id, 36);
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(attributionId || "")) return null;

  const touch = (value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const seenAt = new Date(value.seen_at);
    const landingPath = clean(value.landing_path, MAX.path);
    if (!landingPath?.startsWith("/") || Number.isNaN(seenAt.getTime())) return null;
    return Object.freeze({
      source: clean(value.source, MAX.source) || "direct",
      medium: clean(value.medium, MAX.medium) || "(none)",
      campaign: clean(value.campaign, MAX.campaign),
      content: clean(value.content, MAX.content),
      term: clean(value.term, MAX.term),
      landing_path: landingPath,
      referrer: clean(value.referrer, MAX.referrer),
      seen_at: seenAt.toISOString(),
    });
  };

  const firstTouch = touch(input.first_touch);
  const lastTouch = touch(input.last_touch);
  if (!firstTouch || !lastTouch || new Date(firstTouch.seen_at) > new Date(lastTouch.seen_at)) return null;
  return Object.freeze({ attributionId, firstTouch, lastTouch });
}

export function mergeAttribution({ existing, touch, idFactory }) {
  if (!touch) return null;
  const previous = validateAttributionPayload(existing);
  return Object.freeze({
    attribution_id: previous?.attributionId || idFactory(),
    first_touch: previous?.firstTouch || touch,
    last_touch: touch,
  });
}
