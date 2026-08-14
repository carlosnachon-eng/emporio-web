import { captureWhatsappTouch } from "./context.mjs";
import { propertyWhatsappHref } from "./reference.mjs";

const REQUEST_TIMEOUT_MS = 900;

function propertyService(operation) {
  if (operation === "sale") return "property_sale";
  if (operation === "lease") return "property_lease";
  return "property_interest";
}

function navigateWhatsapp(targetWindow, href, currentWindow) {
  try {
    if (targetWindow && !targetWindow.closed) {
      targetWindow.opener = null;
      targetWindow.location.replace(href);
      return;
    }
  } catch {
    // Fail-open: use the current window if the pre-opened tab became unusable.
  }
  currentWindow.location.assign(href);
}

export function whatsappAttributionEnabled(env = process.env) {
  return String(env.NEXT_PUBLIC_WHATSAPP_ATTRIBUTION_PILOT_ENABLED || "").trim().toLowerCase() === "true";
}

export function createPropertyWhatsappClickHandler({
  property,
  browser = globalThis.window,
  fetchImpl = globalThis.fetch,
  timeoutMs = REQUEST_TIMEOUT_MS,
  enabled = whatsappAttributionEnabled(),
} = {}) {
  const baseHref = propertyWhatsappHref({ publicId: property?.public_id, title: property?.titulo });

  return async function handlePropertyWhatsappClick(event) {
    if (!enabled || !browser?.location || typeof fetchImpl !== "function") return;

    event?.preventDefault?.();
    const targetWindow = browser.open?.("about:blank", "_blank") || null;
    if (targetWindow) targetWindow.opener = null;

    const touches = captureWhatsappTouch(browser);
    const controller = new AbortController();
    const timeout = browser.setTimeout(() => controller.abort(), timeoutMs);

    try {
      if (!touches || typeof browser.crypto?.randomUUID !== "function") throw new Error("context_unavailable");
      const response = await fetchImpl("/api/whatsapp-attribution/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: browser.crypto.randomUUID(),
          pagePath: browser.location.pathname,
          propertyId: property?.id || null,
          propertyPublicId: property?.public_id,
          propertySlug: browser.location.pathname.split("/").filter(Boolean).pop() || null,
          service: propertyService(property?.operacion),
          cta: "property_contact_card_whatsapp",
          firstTouch: touches.first_touch,
          lastTouch: touches.last_touch,
        }),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.reference) throw new Error("attribution_unavailable");

      navigateWhatsapp(targetWindow, propertyWhatsappHref({
        publicId: property?.public_id,
        title: property?.titulo,
        referenceCode: result.reference,
      }), browser);
    } catch {
      navigateWhatsapp(targetWindow, baseHref, browser);
    } finally {
      browser.clearTimeout(timeout);
    }
  };
}

export { REQUEST_TIMEOUT_MS, propertyService };
