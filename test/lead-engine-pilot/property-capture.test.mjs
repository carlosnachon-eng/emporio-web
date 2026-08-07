import test from "node:test";
import assert from "node:assert/strict";
import { capturePropertyLeadPilot } from "../../lib/lead-engine-pilot/property-capture.mjs";
import { LEAD_ENGINE_RESULT } from "../../lib/lead-engine-pilot/contracts.mjs";

const DEMO_REF = "kmxzvcngfrzcasedtexw";

function enabledEnv(overrides = {}) {
  return {
    LEAD_ENGINE_PROPERTY_PILOT_ENABLED: "true",
    LEAD_ENGINE_SUPABASE_URL: `https://${DEMO_REF}.supabase.co`,
    LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY: "sb_secret_demo_only_not_a_browser_key",
    LEAD_ENGINE_IDENTITY_HMAC_SECRET: "0123456789abcdef0123456789abcdef",
    LEAD_ENGINE_ALLOWED_PROJECT_REF: DEMO_REF,
    LEAD_ENGINE_BLOCKED_PROJECT_REFS: "bnzrnizrmonjxlktbhlp",
    VERCEL_ENV: "preview",
    ...overrides,
  };
}

const input = {
  submissionId: "10000000-0000-4000-8000-000000000002",
  email: "persona@example.invalid",
  phone: "222 000 0000",
  propertyPublicId: "LE-DEMO-001",
  propertySourceId: "demo-property-001",
  conversionPath: "/propiedades/lead-engine-demo",
  attribution: {
    attribution_id: "10000000-0000-4000-8000-000000000003",
    first_touch: { source: "tiktok", medium: "social", campaign: "rentas", content: null, term: null, landing_path: "/propiedades/lead-engine-demo", referrer: null, seen_at: "2026-08-01T12:00:00.000Z" },
    last_touch: { source: "google", medium: "organic", campaign: null, content: null, term: null, landing_path: "/propiedades/lead-engine-demo", referrer: "https://google.com/search", seen_at: "2026-08-07T12:00:00.000Z" },
  },
};

test("flag apagado no crea cliente ni llama a la red", async () => {
  let clientCalls = 0;
  let fetchCalls = 0;
  const result = await capturePropertyLeadPilot({
    env: {},
    input,
    createClient: () => { clientCalls += 1; },
    fetchImpl: async () => { fetchCalls += 1; },
  });
  assert.equal(result.status, LEAD_ENGINE_RESULT.disabled);
  assert.equal(clientCalls, 0);
  assert.equal(fetchCalls, 0);
});

test("envío habilitado usa fingerprints y nunca PII directa en el RPC", async () => {
  let rpcPayload;
  const fakeClient = {
    async rpc(name, payload) {
      assert.equal(name, "lead_engine_capture_property_pilot");
      rpcPayload = payload;
      return { data: { status: "created" }, error: null };
    },
  };
  const result = await capturePropertyLeadPilot({
    env: enabledEnv(),
    input,
    createClient: () => fakeClient,
    fetchImpl: async () => ({ ok: true }),
  });
  assert.equal(result.status, LEAD_ENGINE_RESULT.succeeded);
  assert.equal(rpcPayload.p_submission_id, input.submissionId);
  assert.match(rpcPayload.p_phone_fingerprint, /^v1:[0-9a-f]{64}$/);
  assert.match(rpcPayload.p_email_fingerprint, /^v1:[0-9a-f]{64}$/);
  assert.equal(rpcPayload.p_first_touch.source, "tiktok");
  assert.equal(rpcPayload.p_last_touch.source, "google");
  const serialized = JSON.stringify(rpcPayload);
  assert.equal(serialized.includes(input.email), false);
  assert.equal(serialized.includes("2220000000"), false);
});

test("un error RPC falla abierto y no registra PII", async () => {
  const logs = [];
  const result = await capturePropertyLeadPilot({
    env: enabledEnv(),
    input,
    createClient: () => ({
      rpc: async () => ({ data: null, error: { code: "PILOT_FAILURE" } }),
    }),
    fetchImpl: async () => ({ ok: true }),
    logger: { warn: (...args) => logs.push(args) },
  });
  assert.equal(result.status, LEAD_ENGINE_RESULT.failedOpen);
  const serialized = JSON.stringify(logs);
  assert.equal(serialized.includes(input.email), false);
  assert.equal(serialized.includes(input.phone), false);
});
