import { LEAD_ENGINE_ERROR, LEAD_ENGINE_RESULT } from "./contracts.mjs";

function timeoutError() {
  const error = new Error("Lead Engine operation timed out");
  error.code = LEAD_ENGINE_ERROR.timeout;
  return error;
}

function safeErrorCode(error) {
  if (error?.code === LEAD_ENGINE_ERROR.timeout) return LEAD_ENGINE_ERROR.timeout;
  return LEAD_ENGINE_ERROR.operationFailed;
}

export async function runLeadEngineFailOpen({
  enabled,
  operation,
  execute,
  timeoutMs = 800,
  logger = null,
}) {
  const startedAt = Date.now();
  if (!enabled) {
    return Object.freeze({
      status: LEAD_ENGINE_RESULT.disabled,
      operation,
      durationMs: Date.now() - startedAt,
    });
  }
  if (typeof execute !== "function") throw new TypeError("execute debe ser una función.");
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 5000) {
    throw new RangeError("timeoutMs debe estar entre 1 y 5000 ms.");
  }

  let timer;
  try {
    const value = await Promise.race([
      Promise.resolve().then(execute),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(timeoutError()), timeoutMs);
      }),
    ]);
    return Object.freeze({
      status: LEAD_ENGINE_RESULT.succeeded,
      operation,
      durationMs: Date.now() - startedAt,
      value,
    });
  } catch (error) {
    const errorCode = safeErrorCode(error);
    logger?.warn?.("Lead Engine fail-open", { operation, errorCode });
    return Object.freeze({
      status:
        errorCode === LEAD_ENGINE_ERROR.timeout
          ? LEAD_ENGINE_RESULT.timedOut
          : LEAD_ENGINE_RESULT.failedOpen,
      operation,
      durationMs: Date.now() - startedAt,
      errorCode,
    });
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export async function runLeadEngineOperationsFailOpen(operations) {
  return Promise.all(operations.map((operation) => runLeadEngineFailOpen(operation)));
}

