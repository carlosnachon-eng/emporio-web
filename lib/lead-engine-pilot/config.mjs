import {
  LEAD_ENGINE_ENV,
  LEAD_ENGINE_ERROR,
  LeadEngineConfigurationError,
} from "./contracts.mjs";

const SUPABASE_HOST = /^([a-z0-9]{20})\.supabase\.co$/;
const PLACEHOLDER = /^(change-me|changeme|replace-me|secret|test|demo|password)$/i;

function splitList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseFlag(value, name) {
  if (value == null || value === "") return false;
  if (value === "true") return true;
  if (value === "false") return false;
  throw new LeadEngineConfigurationError(
    LEAD_ENGINE_ERROR.configuration,
    `${name} debe ser exactamente true o false.`,
  );
}

export function projectRefFromSupabaseUrl(value) {
  let parsed;
  try {
    parsed = new URL(String(value || ""));
  } catch {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.configuration,
      `${LEAD_ENGINE_ENV.supabaseUrl} no es una URL válida.`,
    );
  }

  const match = parsed.hostname.match(SUPABASE_HOST);
  if (
    parsed.protocol !== "https:" ||
    parsed.username ||
    parsed.password ||
    parsed.pathname !== "/" ||
    parsed.search ||
    parsed.hash ||
    !match
  ) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.configuration,
      `${LEAD_ENGINE_ENV.supabaseUrl} no corresponde a un proyecto Supabase canónico.`,
    );
  }
  return match[1];
}

function jwtClaimsIfAvailable(token) {
  const parts = String(token || "").split(".");
  if (parts.length !== 3) return null;
  try {
    return JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
  } catch {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.configuration,
      `${LEAD_ENGINE_ENV.serviceRoleKey} contiene un JWT inválido.`,
    );
  }
}

function validateHmacSecret(secret) {
  const bytes = Buffer.byteLength(String(secret || ""), "utf8");
  if (bytes < 32 || PLACEHOLDER.test(String(secret || "").trim())) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.configuration,
      `${LEAD_ENGINE_ENV.hmacSecret} debe ser un secreto aleatorio de al menos 32 bytes.`,
    );
  }
}

/**
 * Construye la configuración sin leer process.env de forma implícita.
 * Si el flag está apagado no exige secretos ni crea clientes.
 *
 * @param {Record<string, string|undefined>} env
 * @returns {import("./contracts.mjs").LeadEngineRuntimeConfig}
 */
export function loadLeadEngineConfig(env) {
  const serverEnabled = parseFlag(env[LEAD_ENGINE_ENV.serverFlag], LEAD_ENGINE_ENV.serverFlag);
  const hmacVersion = "v1";

  if (!serverEnabled) {
    return Object.freeze({
      enabled: false,
      environment: null,
      deploymentEnvironment: null,
      projectRef: null,
      supabaseUrl: null,
      serviceRoleKey: null,
      hmacSecret: null,
      hmacVersion,
    });
  }

  const deploymentEnvironment = String(env.VERCEL_ENV || "").trim();
  if (!new Set(["production", "preview", "development"]).has(deploymentEnvironment)) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.unsafeTarget,
      "El piloto sólo puede activarse en un entorno Vercel reconocido.",
    );
  }

  const supabaseUrl = String(env[LEAD_ENGINE_ENV.supabaseUrl] || "").trim();
  const projectRef = projectRefFromSupabaseUrl(supabaseUrl);
  const allowed = String(env[LEAD_ENGINE_ENV.allowedProjectRef] || "").trim();
  const blocked = new Set(splitList(env[LEAD_ENGINE_ENV.blockedProjectRefs]));

  if (allowed !== projectRef || blocked.has(projectRef)) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.unsafeTarget,
      "El Project Reference activo no coincide exclusivamente con la allowlist configurada.",
    );
  }

  const serviceRoleKey = String(env[LEAD_ENGINE_ENV.serviceRoleKey] || "").trim();
  if (!serviceRoleKey) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.configuration,
      `Falta ${LEAD_ENGINE_ENV.serviceRoleKey}.`,
    );
  }
  const claims = jwtClaimsIfAvailable(serviceRoleKey);
  if (claims && (claims.role !== "service_role" || claims.ref !== projectRef)) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.unsafeTarget,
      "La service role JWT no pertenece al proyecto permitido.",
    );
  }
  if (!claims && (!serviceRoleKey.startsWith("sb_secret_") || serviceRoleKey.length < 24)) {
    throw new LeadEngineConfigurationError(
      LEAD_ENGINE_ERROR.configuration,
      `${LEAD_ENGINE_ENV.serviceRoleKey} no tiene formato de secret key server-side.`,
    );
  }

  const hmacSecret = String(env[LEAD_ENGINE_ENV.hmacSecret] || "");
  validateHmacSecret(hmacSecret);

  return Object.freeze({
    enabled: true,
    environment: deploymentEnvironment,
    deploymentEnvironment,
    projectRef,
    supabaseUrl,
    serviceRoleKey,
    hmacSecret,
    hmacVersion,
  });
}

export function inspectLeadEnginePreflight(env) {
  try {
    const config = loadLeadEngineConfig(env);
    return Object.freeze({
      ready: config.enabled,
      enabled: config.enabled,
      projectRef: config.projectRef,
      environment: config.environment,
      deploymentEnvironment: config.deploymentEnvironment,
      errorCode: null,
    });
  } catch (error) {
    return Object.freeze({
      ready: false,
      enabled: false,
      projectRef: null,
      environment: null,
      deploymentEnvironment: null,
      errorCode: error?.code || LEAD_ENGINE_ERROR.configuration,
    });
  }
}
