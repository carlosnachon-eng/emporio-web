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
  inspectWhatsappAttributionPilot,
  loadWhatsappAttributionPilotConfig,
} from "../lib/whatsapp-attribution/config.mjs";
import {
  createWhatsappAttributionClick,
  sameOriginRequest,
  validateWhatsappClickInput,
} from "../lib/whatsapp-attribution/server.mjs";

const DEV_REF = "hjfwjnejbcpmknvfpdcq";
const PROD_REF = "bnzrnizrmonjxlktbhlp";
const REQUEST_ID = "10000000-0000-4000-8000-000000000001";
const PROPERTY_ID = "30000000-0000-4000-8000-000000000001";
const PROPERTY = {
  id: PROPERTY_ID,
  public_id: "DEV-GV-001",
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

function serviceRoleFor(ref = DEV_REF) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({ role: "service_role", ref })).toString("base64url");
  return `${header}.${payload}.qa-signature`;
}

function enabledEnv(overrides = {}) {
  return {
    WHATSAPP_ATTRIBUTION_PILOT_ENABLED: "true",
    VERCEL_ENV: "preview",
    WHATSAPP_ATTRIBUTION_SUPABASE_URL: `https://${DEV_REF}.supabase.co`,
    WHATSAPP_ATTRIBUTION_SUPABASE_SERVICE_ROLE_KEY: serviceRoleFor(),
    WHATSAPP_ATTRIBUTION_ALLOWED_PROJECT_REF: DEV_REF,
    WHATSAPP_ATTRIBUTION_BLOCKED_PROJECT_REFS: PROD_REF,
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
  assert.equal(base, "Hola, me interesa la propiedad DEV-GV-001 - Propiedad sintética QA");
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

test("configuración está apagada por defecto y solo permite Preview -> DEV", () => {
  assert.deepEqual(loadWhatsappAttributionPilotConfig({}), { enabled: false });
  const config = loadWhatsappAttributionPilotConfig(enabledEnv());
  assert.equal(config.enabled, true);
  assert.equal(config.projectRef, DEV_REF);
  assert.equal(inspectWhatsappAttributionPilot(enabledEnv()).ready, true);

  for (const unsafe of [
    { VERCEL_ENV: "production" },
    { WHATSAPP_ATTRIBUTION_SUPABASE_URL: `https://${PROD_REF}.supabase.co` },
    { WHATSAPP_ATTRIBUTION_ALLOWED_PROJECT_REF: PROD_REF },
    { WHATSAPP_ATTRIBUTION_BLOCKED_PROJECT_REFS: "" },
    { WHATSAPP_ATTRIBUTION_SUPABASE_SERVICE_ROLE_KEY: serviceRoleFor(PROD_REF) },
  ]) assert.throws(() => loadWhatsappAttributionPilotConfig(enabledEnv(unsafe)));
});

test("el flag público del cliente admite configuración explícita y default compilable", async () => {
  assert.equal(whatsappAttributionEnabled({ NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_PILOT_ENABLED: "true" }), true);
  assert.equal(whatsappAttributionEnabled({ NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_PILOT_ENABLED: "false" }), false);

  const previous = process.env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_PILOT_ENABLED;
  process.env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_PILOT_ENABLED = "true";
  try {
    const module = await import(`../lib/whatsapp-attribution/client.mjs?qa-flag=${Date.now()}`);
    assert.equal(module.whatsappAttributionEnabled(), true);
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_PILOT_ENABLED;
    else process.env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_PILOT_ENABLED = previous;
  }
});

test("entrada server-side acepta solo contexto allowlisted y sin PII", () => {
  const value = validateWhatsappClickInput({
    requestId: REQUEST_ID,
    propertyId: PROPERTY_ID,
    propertyPublicId: PROPERTY.public_id,
    propertySlug: "propiedad-qa-DEV-GV-001",
    pagePath: "/propiedades/propiedad-qa-DEV-GV-001",
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
      propertySlug: "propiedad-qa-DEV-GV-001",
      pagePath: "/propiedades/propiedad-qa-DEV-GV-001",
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
    assert.match(decodeURIComponent(navigations[0].href), /Hola, me interesa la propiedad DEV-GV-001/);
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
