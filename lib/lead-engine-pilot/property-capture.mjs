import crypto from "node:crypto";
import { loadLeadEngineConfig } from "./config.mjs";
import { LEAD_ENGINE_RESULT } from "./contracts.mjs";
import { runLeadEngineFailOpen } from "./fail-open.mjs";
import { buildIdentityFingerprints } from "./identity.mjs";
import { prepareLeadEngineServerClient } from "./supabase-client.mjs";
import { validatePilotEnvelope } from "./validation.mjs";

function safeLogger(logger) {
  return {
    warn(message, metadata = {}) {
      logger?.warn?.(message, {
        operation: metadata.operation || "property_capture",
        errorCode: metadata.errorCode || "LEAD_ENGINE_OPERATION_FAILED",
      });
    },
  };
}

function cleanOptional(value, maxLength) {
  const cleaned = String(value || "").normalize("NFKC").trim();
  return cleaned ? cleaned.slice(0, maxLength) : null;
}

/**
 * Captura paralela y fail-open. Nunca modifica el resultado del formulario actual.
 */
export async function capturePropertyLeadPilot({
  env,
  input,
  createClient,
  fetchImpl,
  logger = null,
  timeoutMs = 800,
}) {
  const operation = "property_capture";
  const loggerWithoutPii = safeLogger(logger);

  let config;
  try {
    config = loadLeadEngineConfig(env);
  } catch (error) {
    loggerWithoutPii.warn("Lead Engine disabled by configuration", {
      operation,
      errorCode: error?.code,
    });
    return Object.freeze({
      status: LEAD_ENGINE_RESULT.failedOpen,
      operation,
      durationMs: 0,
      errorCode: error?.code || "LEAD_ENGINE_CONFIGURATION_ERROR",
    });
  }

  if (!config.enabled) {
    return Object.freeze({ status: LEAD_ENGINE_RESULT.disabled, operation, durationMs: 0 });
  }

  return runLeadEngineFailOpen({
    enabled: true,
    operation,
    timeoutMs,
    logger: loggerWithoutPii,
    execute: async () => {
      const requestId = cleanOptional(input?.submissionId, 128) || crypto.randomUUID();
      const propertyPublicId = cleanOptional(input?.propertyPublicId, 128);
      const envelope = validatePilotEnvelope({
        requestId,
        source: "property_detail_form",
        propertyPublicId,
      });
      if (!envelope.valid) throw new Error("invalid_pilot_envelope");

      const prepared = await prepareLeadEngineServerClient({
        env,
        createClient,
        fetchImpl,
        logger: loggerWithoutPii,
      });
      if (!prepared.enabled || !prepared.client) {
        throw new Error(prepared.errorCode || "lead_engine_preflight_failed");
      }

      const identity = buildIdentityFingerprints({
        email: cleanOptional(input?.email, 320),
        phone: cleanOptional(input?.phone, 40),
      }, config);

      const { data, error } = await prepared.client.rpc(
        "lead_engine_capture_property_pilot",
        {
          p_submission_id: requestId,
          p_source_request_id: requestId,
          p_property_public_id: envelope.value.propertyPublicId,
          p_conversion_path:
            cleanOptional(input?.conversionPath, 240) ||
            `/propiedades/${encodeURIComponent(envelope.value.propertyPublicId)}`,
          p_hmac_version: identity.hmacVersion,
          p_phone_fingerprint: identity.phoneFingerprint,
          p_email_fingerprint: identity.emailFingerprint,
          p_property_source_id: cleanOptional(input?.propertySourceId, 128),
          p_property_slug: cleanOptional(input?.propertySlug, 180),
          p_attribution_id: null,
          p_first_touch: null,
          p_last_touch: null,
        },
      );
      if (error) {
        const rpcError = new Error("lead_engine_rpc_failed");
        rpcError.code = error.code || "LEAD_ENGINE_RPC_FAILED";
        throw rpcError;
      }
      return Object.freeze({
        stored: data?.status === "created" || data?.status === "deduplicated",
        status: data?.status || "unknown",
      });
    },
  });
}
