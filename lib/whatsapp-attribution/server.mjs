import { createClient } from "@supabase/supabase-js";
import { randomBytes } from "node:crypto";

import { loadWhatsappAttributionPilotConfig } from "./config.mjs";
import { generateWhatsappAttributionReference } from "./reference.mjs";
import { validateWhatsappTouch } from "./context.mjs";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const PUBLIC_ID = /^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/;

function clean(value, max) {
  const normalized = String(value || "").normalize("NFKC").trim();
  return normalized ? normalized.slice(0, max) : null;
}

export function validateWhatsappClickInput(input) {
  const requestId = clean(input?.requestId, 36);
  const pagePath = clean(input?.pagePath, 240);
  const propertyId = clean(input?.propertyId, 36);
  const propertyPublicId = clean(input?.propertyPublicId, 128);
  const propertySlug = clean(input?.propertySlug, 180);
  const service = clean(input?.service, 40);
  const cta = clean(input?.cta, 80);
  const firstTouch = validateWhatsappTouch(input?.firstTouch);
  const lastTouch = validateWhatsappTouch(input?.lastTouch);

  if (!UUID.test(requestId || "")
      || (propertyId && !UUID.test(propertyId))
      || !PUBLIC_ID.test(propertyPublicId || "")
      || !pagePath?.startsWith("/")
      || /[?#]/.test(pagePath)
      || !new Set(["property_sale", "property_lease", "property_interest"]).has(service)
      || cta !== "property_contact_card_whatsapp"
      || !firstTouch
      || !lastTouch) return null;

  return Object.freeze({
    requestId,
    pagePath,
    propertyId,
    propertyPublicId,
    propertySlug,
    service,
    cta,
    firstTouch,
    lastTouch,
  });
}

export function sameOriginRequest(req) {
  const origin = String(req?.headers?.origin || "");
  const host = String(req?.headers?.host || "");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function createWhatsappAttributionClick({ env, input, clientFactory = createClient }) {
  const config = loadWhatsappAttributionPilotConfig(env);
  if (!config.enabled) return { status: "disabled" };
  const value = validateWhatsappClickInput(input);
  if (!value) {
    const error = new Error("invalid_click_context");
    error.statusCode = 400;
    throw error;
  }

  const admin = clientFactory(config.supabaseUrl, config.serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const referenceCode = generateWhatsappAttributionReference(randomBytes);
    const { data, error } = await admin.rpc("create_whatsapp_attribution_click", {
      p_request_id: value.requestId,
      p_reference_code: referenceCode,
      p_page_path: value.pagePath,
      p_property_id: value.propertyId,
      p_property_public_id: value.propertyPublicId,
      p_property_slug: value.propertySlug,
      p_service: value.service,
      p_cta: value.cta,
      p_first_touch: value.firstTouch,
      p_last_touch: value.lastTouch,
    });
    if (!error) return data;
    if (error.code !== "23505") throw error;
  }
  throw new Error("reference_generation_exhausted");
}

export async function verifyWhatsappAttributionStorage({ env, clientFactory = createClient }) {
  const config = loadWhatsappAttributionPilotConfig(env);
  if (!config.enabled) return { ready: false, enabled: false, projectRef: null };
  const admin = clientFactory(config.supabaseUrl, config.serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  const { error } = await admin.from("whatsapp_attributions").select("id").limit(1);
  if (error) throw error;
  return { ready: true, enabled: true, projectRef: config.projectRef };
}
