import test from "node:test";
import assert from "node:assert/strict";
import { deriveTouch, mergeAttribution, sanitizeReferrer, validateAttributionPayload } from "../../lib/lead-engine-pilot/attribution.mjs";

const ID = "10000000-0000-4000-8000-000000000001";

test("clasifica Google orgánico y elimina query del referrer", () => {
  const touch = deriveTouch({ url: "https://www.emporioinmobiliario.com.mx/propiedades/casa", referrer: "https://www.google.com/search?q=casa", now: "2026-08-07T12:00:00Z" });
  assert.equal(touch.source, "google");
  assert.equal(touch.medium, "organic");
  assert.equal(touch.referrer, "https://www.google.com/search");
});

test("conserva first touch TikTok y actualiza last touch Google", () => {
  const first = deriveTouch({ url: "https://www.emporioinmobiliario.com.mx/propiedades/a?utm_source=tiktok&utm_medium=social&utm_campaign=rentas", now: "2026-08-01T12:00:00Z" });
  const initial = mergeAttribution({ existing: null, touch: first, idFactory: () => ID });
  const last = deriveTouch({ url: "https://www.emporioinmobiliario.com.mx/propiedades/a", referrer: "https://google.com/search?q=emporio", now: "2026-08-07T12:00:00Z" });
  const updated = mergeAttribution({ existing: initial, touch: last, idFactory: () => "unused" });
  assert.equal(updated.first_touch.source, "tiktok");
  assert.equal(updated.last_touch.source, "google");
  assert.equal(updated.attribution_id, ID);
});

test("no conserva query, hash ni referrer interno", () => {
  assert.equal(sanitizeReferrer("https://www.emporioinmobiliario.com.mx/?email=persona@example.com"), null);
  const touch = deriveTouch({ url: "https://www.emporioinmobiliario.com.mx/propiedades/a?utm_source=mail#persona", now: "2026-08-07T12:00:00Z" });
  assert.equal(touch.landing_path.includes("#"), false);
  assert.equal(JSON.stringify(touch).includes("persona"), false);
});

test("rechaza atribución manipulada", () => {
  assert.equal(validateAttributionPayload({ attribution_id: "bad", first_touch: {}, last_touch: {} }), null);
});
