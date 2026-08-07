import { deriveTouch, mergeAttribution, validateAttributionPayload } from "./attribution.mjs";

const STORAGE_KEY = "emporio_lead_attribution_v1";

function randomUuid(browser) {
  if (browser?.crypto?.randomUUID) return browser.crypto.randomUUID();
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (character) =>
    (character ^ browser.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> character / 4).toString(16),
  );
}

export function captureLeadAttribution(browser = globalThis.window) {
  if (!browser?.location || !browser?.localStorage) return null;
  try {
    const touch = deriveTouch({
      url: browser.location.href,
      referrer: browser.document?.referrer,
      siteOrigin: browser.location.origin,
    });
    const stored = JSON.parse(browser.localStorage.getItem(STORAGE_KEY) || "null");
    const attribution = mergeAttribution({ existing: stored, touch, idFactory: () => randomUuid(browser) });
    browser.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    return attribution;
  } catch {
    return null;
  }
}

export function readLeadAttribution(browser = globalThis.window) {
  try {
    const stored = JSON.parse(browser?.localStorage?.getItem(STORAGE_KEY) || "null");
    const validated = validateAttributionPayload(stored);
    return validated ? Object.freeze({
      attribution_id: validated.attributionId,
      first_touch: validated.firstTouch,
      last_touch: validated.lastTouch,
    }) : null;
  } catch {
    return null;
  }
}
