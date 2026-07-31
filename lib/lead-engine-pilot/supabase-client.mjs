import { LEAD_ENGINE_ERROR, LeadEngineConfigurationError } from "./contracts.mjs";
import { loadLeadEngineConfig } from "./config.mjs";

function assertServerRuntime() {
  if (typeof window !== "undefined") {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.unsafeTarget,
      "El cliente privilegiado del Lead Engine sólo puede crearse en servidor.",
    );
  }
}

/**
 * Fábrica inyectable. No importa Supabase ni abre conexiones por sí misma.
 *
 * @param {import("./contracts.mjs").LeadEngineRuntimeConfig} config
 * @param {(url:string,key:string,options:object)=>unknown} createClient
 */
export function createLeadEngineSupabaseClient(config, createClient) {
  assertServerRuntime();
  if (!config?.enabled) return null;
  if (typeof createClient !== "function") {
    throw new TypeError("createClient debe proporcionarse explícitamente.");
  }

  return createClient(config.supabaseUrl, config.serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: { "X-Client-Info": "emporio-lead-engine-pilot" },
    },
  });
}

export async function verifyLeadEngineSupabaseCredentials(config, fetchImpl) {
  assertServerRuntime();
  if (!config?.enabled) return Object.freeze({ verified: false, disabled: true });
  if (typeof fetchImpl !== "function") throw new TypeError("fetchImpl debe proporcionarse explícitamente.");

  const response = await fetchImpl(`${config.supabaseUrl}/rest/v1/`, {
    method: "GET",
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      Accept: "application/openapi+json",
    },
  });

  if (!response?.ok) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.unsafeTarget,
      "La credencial privilegiada no fue aceptada por el proyecto permitido.",
    );
  }

  return Object.freeze({
    verified: true,
    disabled: false,
    projectRef: config.projectRef,
  });
}

export async function prepareLeadEngineServerClient({
  env,
  createClient,
  fetchImpl,
  logger = null,
}) {
  assertServerRuntime();
  try {
    const config = loadLeadEngineConfig(env);
    if (!config.enabled) {
      return Object.freeze({ enabled: false, client: null, errorCode: null });
    }
    await verifyLeadEngineSupabaseCredentials(config, fetchImpl);
    return Object.freeze({
      enabled: true,
      client: createLeadEngineSupabaseClient(config, createClient),
      errorCode: null,
      projectRef: config.projectRef,
    });
  } catch (error) {
    const errorCode = error?.code || LEAD_ENGINE_ERROR.configuration;
    logger?.warn?.("Lead Engine disabled by preflight", { errorCode });
    return Object.freeze({ enabled: false, client: null, errorCode });
  }
}
