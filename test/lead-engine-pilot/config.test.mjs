import test from "node:test";
import assert from "node:assert/strict";
import {
  inspectLeadEnginePreflight,
  loadLeadEngineConfig,
  projectRefFromSupabaseUrl,
} from "../../lib/lead-engine-pilot/config.mjs";
import { LEAD_ENGINE_ERROR } from "../../lib/lead-engine-pilot/contracts.mjs";

const DEMO_REF = "kmxzvcngfrzcasedtexw";
const PROD_REF = "bnzrnizrmonjxlktbhlp";

function enabledEnv(overrides = {}) {
  return {
    LEAD_ENGINE_PROPERTY_PILOT_ENABLED: "true",
    LEAD_ENGINE_SUPABASE_URL: `https://${DEMO_REF}.supabase.co`,
    LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY: "sb_secret_demo_only_not_a_browser_key",
    LEAD_ENGINE_IDENTITY_HMAC_SECRET: "0123456789abcdef0123456789abcdef",
    LEAD_ENGINE_ALLOWED_PROJECT_REF: DEMO_REF,
    LEAD_ENGINE_BLOCKED_PROJECT_REFS: PROD_REF,
    VERCEL_ENV: "preview",
    ...overrides,
  };
}

function jwt(payload) {
  return ["header", Buffer.from(JSON.stringify(payload)).toString("base64url"), "signature"].join(".");
}

test("permanece apagado sin secretos ni variables", () => {
  const config = loadLeadEngineConfig({});
  assert.equal(config.enabled, false);
  assert.equal(config.serviceRoleKey, null);
  assert.equal(config.hmacSecret, null);
});

test("acepta únicamente Demo en Preview con allowlist exacta", () => {
  const config = loadLeadEngineConfig(enabledEnv());
  assert.equal(config.enabled, true);
  assert.equal(config.projectRef, DEMO_REF);
  assert.equal(config.deploymentEnvironment, "preview");
});

test("rechaza Production aunque los demás valores sean válidos", () => {
  assert.throws(
    () => loadLeadEngineConfig(enabledEnv({ VERCEL_ENV: "production" })),
    (error) => error.code === LEAD_ENGINE_ERROR.unsafeTarget,
  );
});

test("rechaza referencias bloqueadas o fuera de la allowlist", () => {
  assert.throws(
    () => loadLeadEngineConfig(enabledEnv({
      LEAD_ENGINE_SUPABASE_URL: `https://${PROD_REF}.supabase.co`,
      LEAD_ENGINE_ALLOWED_PROJECT_REF: PROD_REF,
    })),
    (error) => error.code === LEAD_ENGINE_ERROR.unsafeTarget,
  );
});

test("valida role y referencia cuando la clave es JWT", () => {
  const correct = loadLeadEngineConfig(enabledEnv({
    LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY: jwt({ role: "service_role", ref: DEMO_REF }),
  }));
  assert.equal(correct.projectRef, DEMO_REF);

  assert.throws(
    () => loadLeadEngineConfig(enabledEnv({
      LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY: jwt({ role: "anon", ref: DEMO_REF }),
    })),
    (error) => error.code === LEAD_ENGINE_ERROR.unsafeTarget,
  );
});

test("rechaza una publishable key como credencial privilegiada", () => {
  assert.throws(
    () => loadLeadEngineConfig(enabledEnv({
      LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY: "sb_publishable_demo_key_not_allowed",
    })),
    (error) => error.code === LEAD_ENGINE_ERROR.configuration,
  );
});

test("el diagnóstico seguro nunca expone secretos", () => {
  const env = enabledEnv();
  const report = inspectLeadEnginePreflight(env);
  const serialized = JSON.stringify(report);
  assert.equal(report.ready, true);
  assert.equal(serialized.includes(env.LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY), false);
  assert.equal(serialized.includes(env.LEAD_ENGINE_IDENTITY_HMAC_SECRET), false);
});

test("extrae sólo referencias de URLs Supabase canónicas", () => {
  assert.equal(projectRefFromSupabaseUrl(`https://${DEMO_REF}.supabase.co`), DEMO_REF);
  assert.throws(() => projectRefFromSupabaseUrl(`http://${DEMO_REF}.supabase.co`));
  assert.throws(() => projectRefFromSupabaseUrl(`https://${DEMO_REF}.supabase.co/rest/v1`));
});
