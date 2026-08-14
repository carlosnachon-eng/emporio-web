import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import test from "node:test";

import {
  createPropertyWhatsappClickHandler,
  whatsappAttributionEnabled,
} from "../lib/whatsapp-attribution/client.mjs";
import {
  captureWhatsappTouch,
  deriveWhatsappTouch,
  validateWhatsappTouch,
} from "../lib/whatsapp-attribution/context.mjs";
import {
  generateWhatsappAttributionReference,
  normalizeWhatsappAttributionReference,
  propertyWhatsappHref,
  propertyWhatsappMessage,
  WHATSAPP_REFERENCE_PATTERN,
} from "../lib/whatsapp-attribution/reference.mjs";
import {
  MAX_UTM_VALUE_LENGTH,
  propertyCanonicalRedirectDestination,
} from "../lib/whatsapp-attribution/redirect.mjs";
import {
  loadWhatsappAttributionConfig,
} from "../lib/whatsapp-attribution/config.mjs";
import {
  createWhatsappAttributionClick,
  sameOriginRequest,
  validateWhatsappClickInput,
} from "../lib/whatsapp-attribution/server.mjs";

const PROD_REF = "bnzrnizrmonjxlktbhlp";
const REQUEST_ID = "10000000-0000-4000-8000-000000000001";
const PROPERTY_ID = "30000000-0000-4000-8000-000000000001";
const PROPERTY = {
  id: PROPERTY_ID,
  public_id: "EMP-QA001",
  titulo: "Propiedad sintética QA",
  operacion: "lease",
};
const TOUCH = {
  source: "tiktok",
  medium: "paid_social",
  campaign: "qa-pilot",
  content: null,
  term: null,
  landing_path: "/propiedades/qa",
  seen_at: "2026-08-14T12:00:00.000Z",
};

function serviceRoleFor(ref = PROD_REF) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({ role: "service_role", ref })).toString("base64url");
  return `${header}.${payload}.qa-signature`;
}

function enabledEnv(overrides = {}) {
  return {
    WHATSAPP_ATTRIBUTION_ENABLED: "true",
    VERCEL_ENV: "production",
    WHATSAPP_ATTRIBUTION_SUPABASE_URL: `https://${PROD_REF}.supabase.co`,
    WHATSAPP_ATTRIBUTION_SUPABASE_SERVICE_ROLE_KEY: serviceRoleFor(),
    ...overrides,
  };
}

test("genera referencias opacas de 100 bits con patrón humano estable", () => {
  const references = new Set();
  for (let index = 0; index < 1_000; index += 1) {
    const reference = generateWhatsappAttributionReference(randomBytes);
    assert.match(reference, WHATSAPP_REFERENCE_PATTERN);
    references.add(reference);
  }
  assert.equal(references.size, 1_000);
});

test("normaliza únicamente referencias Crockford válidas", () => {
  assert.equal(normalizeWhatsappAttributionReference(" abcde-fghjk-mnpqr-stvwz "), "ABCDE-FGHJK-MNPQR-STVWZ");
  for (const invalid of ["", "short-ref", "OOOOO-OOOOO-OOOOO-OOOOO", "ABCDE-FGHJK-MNPQR-STVWZ-extra"]) {
    assert.equal(normalizeWhatsappAttributionReference(invalid), null);
  }
});

test("conserva literalmente el mensaje comercial y solo añade Ref al final", () => {
  const base = propertyWhatsappMessage({ publicId: PROPERTY.public_id, title: PROPERTY.titulo });
  const attributed = propertyWhatsappMessage({
    publicId: PROPERTY.public_id,
    title: PROPERTY.titulo,
    referenceCode: "ABCDE-FGHJK-MNPQR-STVWZ",
  });
  assert.equal(base, "Hola, me interesa la propiedad EMP-QA001 - Propiedad sintética QA");
  assert.equal(attributed, `${base}. Ref: ABCDE-FGHJK-MNPQR-STVWZ`);
  assert.equal(new URL(propertyWhatsappHref({ ...PROPERTY, publicId: PROPERTY.public_id, title: PROPERTY.titulo })).hostname, "wa.me");
});

test("deriva TikTok/Google/direct sin guardar query, hash ni referrer", () => {
  const tiktok = deriveWhatsappTouch({
    url: "https://preview.example/propiedades/qa?utm_source=tiktok&utm_medium=paid_social&utm_campaign=piloto#cta",
    referrer: "https://www.tiktok.com/@qa?email=pii@example.invalid",
    siteOrigin: "https://preview.example",
    now: TOUCH.seen_at,
  });
  assert.deepEqual(tiktok, {
    source: "tiktok", medium: "paid_social", campaign: "piloto", content: null, term: null,
    landing_path: "/propiedades/qa", seen_at: TOUCH.seen_at,
  });
  assert.doesNotMatch(JSON.stringify(tiktok), /email|example\.invalid|\?|#/);

  const google = deriveWhatsappTouch({
    url: "https://preview.example/propiedades/qa",
    referrer: "https://www.google.com/search?q=qa",
    siteOrigin: "https://preview.example",
    now: TOUCH.seen_at,
  });
  assert.equal(google.source, "google");
  assert.equal(google.medium, "organic");

  const direct = deriveWhatsappTouch({
    url: "https://preview.example/propiedades/qa",
    referrer: "",
    siteOrigin: "https://preview.example",
    now: TOUCH.seen_at,
  });
  assert.equal(direct.source, "direct");
  assert.equal(direct.medium, "(none)");
});

test("first touch no se sobrescribe y direct no borra last touch atribuido", () => {
  const storage = new Map();
  const browser = {
    location: {
      href: "https://preview.example/propiedades/qa",
      origin: "https://preview.example",
    },
    document: { referrer: "" },
    localStorage: {
      getItem: (key) => storage.get(key) || null,
      setItem: (key, value) => storage.set(key, value),
    },
  };
  storage.set("emporio_whatsapp_attribution_touch_v1", JSON.stringify({
    first_touch: TOUCH,
    last_touch: TOUCH,
  }));
  const result = captureWhatsappTouch(browser);
  assert.deepEqual(result.first_touch, TOUCH);
  assert.deepEqual(result.last_touch, TOUCH);
});

test("validador de touch rechaza rutas con query/hash", () => {
  assert.equal(validateWhatsappTouch({ ...TOUCH, landing_path: "/qa?phone=222" }), null);
  assert.equal(validateWhatsappTouch({ ...TOUCH, landing_path: "/qa#email" }), null);
});

test("configuración está apagada por defecto y solo permite Production -> Supabase Production", () => {
  assert.deepEqual(loadWhatsappAttributionConfig({}), { enabled: false });
  const config = loadWhatsappAttributionConfig(enabledEnv());
  assert.equal(config.enabled, true);
  assert.equal(config.projectRef, PROD_REF);
  for (const unsafe of [
    { VERCEL_ENV: "preview" },
    { WHATSAPP_ATTRIBUTION_SUPABASE_URL: "https://hjfwjnejbcpmknvfpdcq.supabase.co" },
    { WHATSAPP_ATTRIBUTION_SUPABASE_SERVICE_ROLE_KEY: serviceRoleFor("hjfwjnejbcpmknvfpdcq") },
  ]) assert.throws(() => loadWhatsappAttributionConfig(enabledEnv(unsafe)));
});

test("el flag público del cliente admite configuración explícita y default compilable", async () => {
  assert.equal(whatsappAttributionEnabled({ NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_ENABLED: "true" }), true);
  assert.equal(whatsappAttributionEnabled({ NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_ENABLED: "false" }), false);

  const previous = process.env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_ENABLED;
  process.env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_ENABLED = "true";
  try {
    const module = await import(`../lib/whatsapp-attribution/client.mjs?qa-flag=${Date.now()}`);
    assert.equal(module.whatsappAttributionEnabled(), true);
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_ENABLED;
    else process.env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_ENABLED = previous;
  }
});

test("entrada server-side acepta solo contexto allowlisted y sin PII", () => {
  const value = validateWhatsappClickInput({
    requestId: REQUEST_ID,
    propertyId: PROPERTY_ID,
    propertyPublicId: PROPERTY.public_id,
    propertySlug: "propiedad-qa-EMP-QA001",
    pagePath: "/propiedades/propiedad-qa-EMP-QA001",
    service: "property_lease",
    cta: "property_contact_card_whatsapp",
    firstTouch: TOUCH,
    lastTouch: TOUCH,
    name: "must-not-pass",
    phone: "2220000000",
    email: "qa@example.invalid",
  });
  assert.ok(value);
  assert.deepEqual(Object.keys(value).sort(), [
    "cta", "firstTouch", "lastTouch", "pagePath", "propertyId", "propertyPublicId",
    "propertySlug", "requestId", "service",
  ]);
  assert.doesNotMatch(JSON.stringify(value), /must-not-pass|2220000000|example\.invalid/);
});

test("same-origin requiere Origin y Host equivalentes", () => {
  assert.equal(sameOriginRequest({ headers: { origin: "https://preview.example", host: "preview.example" } }), true);
  assert.equal(sameOriginRequest({ headers: { origin: "https://evil.example", host: "preview.example" } }), false);
  assert.equal(sameOriginRequest({ headers: { host: "preview.example" } }), false);
});

test("RPC recibe solo metadata autorizada y conserva idempotencia del request_id", async () => {
  const calls = [];
  const clientFactory = () => ({
    async rpc(name, args) {
      calls.push({ name, args });
      return { data: { status: "created", attribution_id: "qa", reference_code: args.p_reference_code }, error: null };
    },
  });
  const result = await createWhatsappAttributionClick({
    env: enabledEnv(),
    input: {
      requestId: REQUEST_ID,
      propertyId: PROPERTY_ID,
      propertyPublicId: PROPERTY.public_id,
      propertySlug: "propiedad-qa-EMP-QA001",
      pagePath: "/propiedades/propiedad-qa-EMP-QA001",
      service: "property_lease",
      cta: "property_contact_card_whatsapp",
      firstTouch: TOUCH,
      lastTouch: TOUCH,
    },
    clientFactory,
  });
  assert.equal(result.status, "created");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].name, "create_whatsapp_attribution_click");
  assert.equal(calls[0].args.p_request_id, REQUEST_ID);
  assert.doesNotMatch(JSON.stringify(calls[0].args), /must-not-pass|2220000000|qa@example\.invalid/);
});

function browserFixture() {
  const navigations = [];
  const storage = new Map();
  const targetWindow = {
    closed: false,
    opener: {},
    location: { replace: (href) => navigations.push({ target: "tab", href }) },
  };
  const browser = {
    location: {
      href: "https://preview.example/propiedades/qa?utm_source=tiktok&utm_medium=paid_social",
      origin: "https://preview.example",
      pathname: "/propiedades/qa",
      assign: (href) => navigations.push({ target: "self", href }),
    },
    document: { referrer: "" },
    localStorage: {
      getItem: (key) => storage.get(key) || null,
      setItem: (key, value) => storage.set(key, value),
    },
    crypto: { randomUUID: () => REQUEST_ID },
    open: () => targetWindow,
    setTimeout,
    clearTimeout,
  };
  return { browser, navigations, targetWindow };
}

function browserFixtureForUrl(url) {
  const fixture = browserFixture();
  const parsed = new URL(url);
  fixture.browser.location.href = parsed.href;
  fixture.browser.location.origin = parsed.origin;
  fixture.browser.location.pathname = parsed.pathname;
  return fixture;
}

test("redirect canónico conserva únicamente los cinco UTM allowlisted", () => {
  const destination = propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: "/propiedades/EMP-QA001?utm_source=tiktok&utm_medium=paid_social&utm_campaign=piloto&utm_content=video_1&utm_term=casas&email=pii%40example.invalid&gclid=tracking-id#cta",
  });
  const parsed = new URL(destination, "https://preview.example");
  assert.equal(parsed.pathname, "/propiedades/casa-renta-centro-puebla-EMP-QA001");
  assert.deepEqual(Object.fromEntries(parsed.searchParams), {
    utm_source: "tiktok",
    utm_medium: "paid_social",
    utm_campaign: "piloto",
    utm_content: "video_1",
    utm_term: "casas",
  });
  assert.doesNotMatch(destination, /email|example\.invalid|gclid|tracking-id|#cta/);
});

test("redirect canónico mantiene direct limpio y admite UTM parciales", () => {
  assert.equal(propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: "/propiedades/EMP-QA001",
  }), "/propiedades/casa-renta-centro-puebla-EMP-QA001");

  const partial = propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: "/propiedades/EMP-QA001?utm_campaign=google-rentas&utm_term=&phone=2220000000",
  });
  assert.deepEqual(Object.fromEntries(new URL(partial, "https://preview.example").searchParams), {
    utm_campaign: "google-rentas",
  });
  assert.doesNotMatch(partial, /phone|2220000000/);
});

test("redirect canónico decodifica, normaliza y recodifica UTM sin doble encoding", () => {
  const destination = propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: "/propiedades/EMP-QA001?utm_source=Google%20Ads&utm_campaign=Rentas%20%26%20M%C3%A1s&utm_content=video%2Fvertical&utm_term=C%2B%2B",
  });
  const parsed = new URL(destination, "https://preview.example");
  assert.equal(parsed.searchParams.get("utm_source"), "Google Ads");
  assert.equal(parsed.searchParams.get("utm_campaign"), "Rentas & Más");
  assert.equal(parsed.searchParams.get("utm_content"), "video/vertical");
  assert.equal(parsed.searchParams.get("utm_term"), "C++");
  assert.doesNotMatch(destination, /%2520|%2526|%252F|%252B/);
});

test("redirect canónico limita valores y usa la primera ocurrencia de cada UTM", () => {
  const destination = propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: `/propiedades/EMP-QA001?utm_source=first&utm_source=second&utm_campaign=${"x".repeat(140)}`,
  });
  const parsed = new URL(destination, "https://preview.example");
  assert.equal(parsed.searchParams.get("utm_source"), "first");
  assert.equal(parsed.searchParams.get("utm_campaign").length, MAX_UTM_VALUE_LENGTH);
});

test("redirect y contexto descartan PII evidente incluso dentro de UTM allowlisted", () => {
  const destination = propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: "/propiedades/EMP-QA001?utm_source=qa%40example.invalid&utm_medium=222-000-0000&utm_campaign=campaign-safe",
  });
  assert.deepEqual(Object.fromEntries(new URL(destination, "https://preview.example").searchParams), {
    utm_campaign: "campaign-safe",
  });

  const touch = deriveWhatsappTouch({
    url: `https://preview.example${destination}`,
    referrer: "",
    siteOrigin: "https://preview.example",
    now: TOUCH.seen_at,
  });
  assert.equal(touch.source, "direct");
  assert.equal(touch.medium, "(none)");
  assert.doesNotMatch(JSON.stringify(touch), /example\.invalid|2220000000/);
});

test("TikTok UTM sobre URL legacy conserva contexto hasta CTA y Ref", async () => {
  const canonicalDestination = propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: "/propiedades/EMP-QA001?utm_source=tiktok&utm_medium=paid_social&utm_campaign=qa-pilot&utm_content=video-7&utm_term=tecaxco",
  });
  const { browser, navigations } = browserFixtureForUrl(`https://preview.example${canonicalDestination}`);
  let clickContext;
  const handler = createPropertyWhatsappClickHandler({
    property: PROPERTY,
    browser,
    enabled: true,
    fetchImpl: async (_url, init) => {
      clickContext = JSON.parse(init.body);
      return new Response(JSON.stringify({ reference: "ABCDE-FGHJK-MNPQR-STVWZ" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });
  await handler({ preventDefault() {} });
  assert.equal(clickContext.pagePath, "/propiedades/casa-renta-centro-puebla-EMP-QA001");
  assert.equal(clickContext.propertyPublicId, PROPERTY.public_id);
  assert.deepEqual(clickContext.lastTouch, {
    source: "tiktok",
    medium: "paid_social",
    campaign: "qa-pilot",
    content: "video-7",
    term: "tecaxco",
    landing_path: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    seen_at: clickContext.lastTouch.seen_at,
  });
  assert.match(decodeURIComponent(navigations[0].href), /Ref: ABCDE-FGHJK-MNPQR-STVWZ$/);
});

test("Google campaign llega al CTA y direct permanece limpio después del redirect", async () => {
  const googleDestination = propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: "/propiedades/EMP-QA001?utm_source=google&utm_medium=cpc&utm_campaign=rentas-puebla",
  });
  const googleFixture = browserFixtureForUrl(`https://preview.example${googleDestination}`);
  let googleClickContext;
  const googleHandler = createPropertyWhatsappClickHandler({
    property: PROPERTY,
    browser: googleFixture.browser,
    enabled: true,
    fetchImpl: async (_url, init) => {
      googleClickContext = JSON.parse(init.body);
      return new Response(JSON.stringify({ reference: "ABCDE-FGHJK-MNPQR-STVWZ" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });
  await googleHandler({ preventDefault() {} });
  assert.deepEqual({
    source: googleClickContext.lastTouch.source,
    medium: googleClickContext.lastTouch.medium,
    campaign: googleClickContext.lastTouch.campaign,
  }, {
    source: "google", medium: "cpc", campaign: "rentas-puebla",
  });
  assert.match(decodeURIComponent(googleFixture.navigations[0].href), /Ref: ABCDE-FGHJK-MNPQR-STVWZ$/);

  const directDestination = propertyCanonicalRedirectDestination({
    canonicalPath: "/propiedades/casa-renta-centro-puebla-EMP-QA001",
    resolvedUrl: "/propiedades/EMP-QA001?fbclid=not-preserved",
  });
  const direct = deriveWhatsappTouch({
    url: `https://preview.example${directDestination}`,
    referrer: "",
    siteOrigin: "https://preview.example",
    now: TOUCH.seen_at,
  });
  assert.equal(directDestination, "/propiedades/casa-renta-centro-puebla-EMP-QA001");
  assert.equal(direct.source, "direct");
  assert.equal(direct.medium, "(none)");
});

test("la página de propiedad usa el helper seguro en el redirect permanente", async () => {
  const source = await import("node:fs/promises").then(({ readFile }) => readFile(
    new URL("../pages/propiedades/[id].js", import.meta.url),
    "utf8",
  ));
  assert.match(source, /destination:\s*propertyCanonicalRedirectDestination\(\{/);
  assert.match(source, /resolvedUrl,/);
});

test("CTA exitoso abre WhatsApp con Ref sin enviar Ref a GA4", async () => {
  const { browser, navigations, targetWindow } = browserFixture();
  let prevented = false;
  let request;
  const handler = createPropertyWhatsappClickHandler({
    property: PROPERTY,
    browser,
    enabled: true,
    fetchImpl: async (url, init) => {
      request = { url, init };
      return new Response(JSON.stringify({ reference: "ABCDE-FGHJK-MNPQR-STVWZ" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });
  await handler({ preventDefault: () => { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(targetWindow.opener, null);
  assert.equal(request.url, "/api/whatsapp-attribution/click");
  assert.doesNotMatch(request.init.body, /whatsappAttributionId|reference/i);
  assert.equal(navigations.length, 1);
  assert.match(decodeURIComponent(navigations[0].href), /Ref: ABCDE-FGHJK-MNPQR-STVWZ$/);
});

test("GA4 conserva evento agregado sin Ref, UTM ni PII", async () => {
  const [analytics, siteAnalytics] = await Promise.all([
    import("node:fs/promises").then(({ readFile }) => readFile(
      new URL("../lib/siteAnalytics.js", import.meta.url), "utf8",
    )),
    import("node:fs/promises").then(({ readFile }) => readFile(
      new URL("../components/SiteAnalytics.js", import.meta.url), "utf8",
    )),
  ]);
  assert.match(siteAnalytics, /site_whatsapp_click/);
  assert.match(siteAnalytics, /split\(\/\[\?\#\]\//);
  assert.doesNotMatch(`${analytics}\n${siteAnalytics}`, /whatsapp_attribution_id|reference_code|respond_contact_id/);
  assert.doesNotMatch(analytics, /"(?:utm_source|utm_medium|utm_campaign|utm_content|utm_term|telefono|email)"/);
});

test("fallo o timeout de atribución abre WhatsApp sin Ref (fail-open)", async () => {
  for (const fetchImpl of [
    async () => new Response("{}", { status: 503 }),
    async () => { throw new Error("network"); },
  ]) {
    const { browser, navigations } = browserFixture();
    const handler = createPropertyWhatsappClickHandler({ property: PROPERTY, browser, enabled: true, fetchImpl });
    await handler({ preventDefault() {} });
    assert.equal(navigations.length, 1);
    assert.doesNotMatch(decodeURIComponent(navigations[0].href), /Ref:/);
    assert.match(decodeURIComponent(navigations[0].href), /Hola, me interesa la propiedad EMP-QA001/);
  }
});

test("piloto apagado no intercepta el CTA ni hace requests", async () => {
  const { browser, navigations } = browserFixture();
  let requested = false;
  let prevented = false;
  const handler = createPropertyWhatsappClickHandler({
    property: PROPERTY,
    browser,
    enabled: false,
    fetchImpl: async () => { requested = true; },
  });
  await handler({ preventDefault: () => { prevented = true; } });
  assert.equal(prevented, false);
  assert.equal(requested, false);
  assert.equal(navigations.length, 0);
});
