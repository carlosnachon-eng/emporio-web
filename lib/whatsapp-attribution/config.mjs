const PROD_PROJECT_REF = "bnzrnizrmonjxlktbhlp";
const SUPABASE_URL = /^https:\/\/([a-z0-9-]+)\.supabase\.co\/?$/i;

export function projectRefFromUrl(value) {
  return String(value || "").trim().match(SUPABASE_URL)?.[1] || null;
}

export function loadWhatsappAttributionConfig(env = process.env) {
  const enabled = String(env.WHATSAPP_ATTRIBUTION_ENABLED || "").trim().toLowerCase() === "true";
  if (!enabled) return Object.freeze({ enabled: false });

  if (String(env.VERCEL_ENV || "").trim().toLowerCase() !== "production") {
    const error = new Error("whatsapp_attribution_production_only");
    error.code = "unsafe_environment";
    throw error;
  }

  const supabaseUrl = String(env.WHATSAPP_ATTRIBUTION_SUPABASE_URL || "").trim();
  const projectRef = projectRefFromUrl(supabaseUrl);
  const serviceRoleKey = String(env.WHATSAPP_ATTRIBUTION_SUPABASE_SERVICE_ROLE_KEY || "").trim();

  if (projectRef !== PROD_PROJECT_REF || !serviceRoleKey) {
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
    if (claims.role !== "service_role" || (claims.ref && claims.ref !== PROD_PROJECT_REF)) {
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
