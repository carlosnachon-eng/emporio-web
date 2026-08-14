const DEV_PROJECT_REF = "hjfwjnejbcpmknvfpdcq";
const PROD_PROJECT_REF = "bnzrnizrmonjxlktbhlp";
const SUPABASE_URL = /^https:\/\/([a-z0-9-]+)\.supabase\.co\/?$/i;

export function projectRefFromUrl(value) {
  return String(value || "").trim().match(SUPABASE_URL)?.[1] || null;
}

export function loadWhatsappAttributionPilotConfig(env = process.env) {
  const enabled = String(env.WHATSAPP_ATTRIBUTION_PILOT_ENABLED || "").trim().toLowerCase() === "true";
  if (!enabled) return Object.freeze({ enabled: false });

  if (String(env.VERCEL_ENV || "").trim().toLowerCase() !== "preview") {
    const error = new Error("whatsapp_attribution_preview_only");
    error.code = "unsafe_environment";
    throw error;
  }

  const supabaseUrl = String(env.WHATSAPP_ATTRIBUTION_SUPABASE_URL || "").trim();
  const projectRef = projectRefFromUrl(supabaseUrl);
  const allowedRef = String(env.WHATSAPP_ATTRIBUTION_ALLOWED_PROJECT_REF || "").trim();
  const blocked = new Set(String(env.WHATSAPP_ATTRIBUTION_BLOCKED_PROJECT_REFS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean));
  const serviceRoleKey = String(env.WHATSAPP_ATTRIBUTION_SUPABASE_SERVICE_ROLE_KEY || "").trim();

  if (projectRef !== DEV_PROJECT_REF
      || allowedRef !== DEV_PROJECT_REF
      || blocked.has(projectRef)
      || !blocked.has(PROD_PROJECT_REF)
      || !serviceRoleKey) {
    const error = new Error("whatsapp_attribution_unsafe_target");
    error.code = "unsafe_target";
    throw error;
  }

  const parts = serviceRoleKey.split(".");
  if (parts.length === 3) {
    let claims;
    try {
      claims = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
    } catch {
      const error = new Error("whatsapp_attribution_invalid_service_key");
      error.code = "invalid_service_key";
      throw error;
    }
    if (claims.role !== "service_role" || (claims.ref && claims.ref !== DEV_PROJECT_REF)) {
      const error = new Error("whatsapp_attribution_wrong_service_key");
      error.code = "unsafe_target";
      throw error;
    }
  } else if (!serviceRoleKey.startsWith("sb_secret_")) {
    const error = new Error("whatsapp_attribution_invalid_service_key");
    error.code = "invalid_service_key";
    throw error;
  }

  return Object.freeze({ enabled: true, supabaseUrl, serviceRoleKey, projectRef });
}

export function inspectWhatsappAttributionPilot(env = process.env) {
  try {
    const config = loadWhatsappAttributionPilotConfig(env);
    return Object.freeze({
      ready: config.enabled === true,
      enabled: config.enabled === true,
      projectRef: config.projectRef || null,
      environment: config.enabled ? "preview" : null,
      errorCode: null,
    });
  } catch (error) {
    return Object.freeze({
      ready: false,
      enabled: false,
      projectRef: null,
      environment: null,
      errorCode: error?.code || "configuration_error",
    });
  }
}
