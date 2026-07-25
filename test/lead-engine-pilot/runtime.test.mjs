import test from "node:test";
import assert from "node:assert/strict";
import {
  runLeadEngineFailOpen,
  runLeadEngineOperationsFailOpen,
} from "../../lib/lead-engine-pilot/fail-open.mjs";
import { createLeadEngineSupabaseClient } from "../../lib/lead-engine-pilot/supabase-client.mjs";
import {
  prepareLeadEngineServerClient,
  verifyLeadEngineSupabaseCredentials,
} from "../../lib/lead-engine-pilot/supabase-client.mjs";
import { LEAD_ENGINE_RESULT } from "../../lib/lead-engine-pilot/contracts.mjs";

test("no crea cliente cuando el feature flag está apagado", () => {
  let calls = 0;
  const client = createLeadEngineSupabaseClient({ enabled: false }, () => {
    calls += 1;
  });
  assert.equal(client, null);
  assert.equal(calls, 0);
});

test("crea el cliente privilegiado sólo con dependencia explícita", () => {
  const received = [];
  const expected = { kind: "fake-client" };
  const client = createLeadEngineSupabaseClient({
    enabled: true,
    supabaseUrl: "https://kmxzvcngfrzcasedtexw.supabase.co",
    serviceRoleKey: "server-secret",
  }, (...args) => {
    received.push(args);
    return expected;
  });
  assert.equal(client, expected);
  assert.equal(received.length, 1);
  assert.equal(received[0][2].auth.persistSession, false);
  assert.equal(received[0][2].auth.autoRefreshToken, false);
});

test("verifica la service role contra la URL Demo sin realizar escrituras", async () => {
  const calls = [];
  const result = await verifyLeadEngineSupabaseCredentials({
    enabled: true,
    projectRef: "kmxzvcngfrzcasedtexw",
    supabaseUrl: "https://kmxzvcngfrzcasedtexw.supabase.co",
    serviceRoleKey: "server-secret",
  }, async (...args) => {
    calls.push(args);
    return { ok: true };
  });
  assert.equal(result.verified, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0][1].method, "GET");
  assert.equal("body" in calls[0][1], false);
});

test("preflight fallido no crea cliente y no registra secretos", async () => {
  let clientCalls = 0;
  const logs = [];
  const env = {
    LEAD_ENGINE_PROPERTY_PILOT_ENABLED: "true",
    LEAD_ENGINE_SUPABASE_URL: "https://kmxzvcngfrzcasedtexw.supabase.co",
    LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY: "sb_secret_demo_only_not_a_browser_key",
    LEAD_ENGINE_IDENTITY_HMAC_SECRET: "0123456789abcdef0123456789abcdef",
    LEAD_ENGINE_ALLOWED_PROJECT_REF: "kmxzvcngfrzcasedtexw",
    LEAD_ENGINE_BLOCKED_PROJECT_REFS: "bnzrnizrmonjxlktbhlp",
    VERCEL_ENV: "preview",
  };
  const result = await prepareLeadEngineServerClient({
    env,
    createClient: () => { clientCalls += 1; },
    fetchImpl: async () => ({ ok: false, status: 401 }),
    logger: { warn: (...args) => logs.push(args) },
  });
  assert.equal(result.enabled, false);
  assert.equal(clientCalls, 0);
  const serialized = JSON.stringify(logs);
  assert.equal(serialized.includes(env.LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY), false);
  assert.equal(serialized.includes(env.LEAD_ENGINE_IDENTITY_HMAC_SECRET), false);
});

test("fail-open devuelve éxito sin alterar el valor", async () => {
  const result = await runLeadEngineFailOpen({
    enabled: true,
    operation: "pilot-test",
    execute: async () => ({ stored: true }),
  });
  assert.equal(result.status, LEAD_ENGINE_RESULT.succeeded);
  assert.deepEqual(result.value, { stored: true });
});

test("fail-open absorbe errores y registra sólo un código seguro", async () => {
  const logs = [];
  const result = await runLeadEngineFailOpen({
    enabled: true,
    operation: "pilot-test",
    execute: async () => {
      throw new Error("persona@ejemplo.com no debe llegar al log");
    },
    logger: { warn: (...args) => logs.push(args) },
  });
  assert.equal(result.status, LEAD_ENGINE_RESULT.failedOpen);
  assert.equal(JSON.stringify(logs).includes("persona@ejemplo.com"), false);
});

test("fail-open limita el tiempo de una operación", async () => {
  const result = await runLeadEngineFailOpen({
    enabled: true,
    operation: "pilot-timeout",
    execute: () => new Promise(() => {}),
    timeoutMs: 10,
  });
  assert.equal(result.status, LEAD_ENGINE_RESULT.timedOut);
});

test("ejecuta operaciones independientes en paralelo", async () => {
  const results = await runLeadEngineOperationsFailOpen([
    { enabled: false, operation: "disabled", execute: async () => true },
    { enabled: true, operation: "enabled", execute: async () => true },
  ]);
  assert.deepEqual(results.map((item) => item.status), [
    LEAD_ENGINE_RESULT.disabled,
    LEAD_ENGINE_RESULT.succeeded,
  ]);
});
