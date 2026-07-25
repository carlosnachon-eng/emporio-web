export const LEAD_ENGINE_ENV = Object.freeze({
  serverFlag: "LEAD_ENGINE_PROPERTY_PILOT_ENABLED",
  supabaseUrl: "LEAD_ENGINE_SUPABASE_URL",
  serviceRoleKey: "LEAD_ENGINE_SUPABASE_SERVICE_ROLE_KEY",
  hmacSecret: "LEAD_ENGINE_IDENTITY_HMAC_SECRET",
  allowedProjectRef: "LEAD_ENGINE_ALLOWED_PROJECT_REF",
  blockedProjectRefs: "LEAD_ENGINE_BLOCKED_PROJECT_REFS",
});

export const LEAD_ENGINE_RESULT = Object.freeze({
  disabled: "disabled",
  succeeded: "succeeded",
  failedOpen: "failed_open",
  timedOut: "timed_out",
});

export const LEAD_ENGINE_ERROR = Object.freeze({
  configuration: "LEAD_ENGINE_CONFIGURATION_ERROR",
  unsafeTarget: "LEAD_ENGINE_UNSAFE_TARGET",
  invalidIdentity: "LEAD_ENGINE_INVALID_IDENTITY",
  timeout: "LEAD_ENGINE_TIMEOUT",
  operationFailed: "LEAD_ENGINE_OPERATION_FAILED",
});

export class LeadEngineConfigurationError extends Error {
  constructor(code, detail) {
    super(detail);
    this.name = "LeadEngineConfigurationError";
    this.code = code;
  }
}

/**
 * @typedef {Object} LeadEngineRuntimeConfig
 * @property {boolean} enabled
 * @property {"demo"|null} environment
 * @property {"preview"|"development"|null} deploymentEnvironment
 * @property {string|null} projectRef
 * @property {string|null} supabaseUrl
 * @property {string|null} serviceRoleKey
 * @property {string|null} hmacSecret
 * @property {string} hmacVersion
 */

/**
 * @typedef {Object} LeadEngineOperationResult
 * @property {string} status
 * @property {string} operation
 * @property {number} durationMs
 * @property {unknown} [value]
 * @property {string} [errorCode]
 */
