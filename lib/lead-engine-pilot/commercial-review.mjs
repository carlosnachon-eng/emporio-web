import { loadLeadEngineConfig } from "./config.mjs";
import { prepareLeadEngineServerClient } from "./supabase-client.mjs";

const VALUES = Object.freeze({
  attention: new Set(["new", "contacted", "no_response", "discarded"]),
  qualification: new Set(["qualified", "potential", "not_qualified", "undetermined"]),
  progress: new Set(["none", "appointment_scheduled", "visit_completed", "follow_up"]),
  result: new Set(["none", "operation_in_process", "closed_won", "closed_lost"]),
});

function requirePreview(env) {
  const config = loadLeadEngineConfig(env);
  if (!config.enabled || config.deploymentEnvironment !== "preview") throw new Error("preview_only");
  return config;
}

async function preparedClient({ env, createClient, fetchImpl }) {
  requirePreview(env);
  const prepared = await prepareLeadEngineServerClient({ env, createClient, fetchImpl });
  if (!prepared.enabled || !prepared.client) throw new Error("lead_engine_preflight_failed");
  return prepared.client;
}

export function validateCommercialState(input) {
  const leadId = String(input?.leadId || "").trim();
  const attention = String(input?.attention || "").trim();
  const qualification = String(input?.qualification || "").trim();
  const progress = String(input?.progress || "").trim();
  const result = String(input?.result || "").trim();
  if (!/^[0-9a-f-]{36}$/i.test(leadId) || !VALUES.attention.has(attention) ||
      !VALUES.qualification.has(qualification) || !VALUES.progress.has(progress) ||
      !VALUES.result.has(result)) return null;
  return Object.freeze({ leadId, attention, qualification, progress, result });
}

export async function listDemoLeads({ env, createClient, fetchImpl }) {
  const client = await preparedClient({ env, createClient, fetchImpl });
  const { data: conversions, error } = await client
    .from("lead_engine_conversions")
    .select("id,lead_id,attribution_record_id,property_public_id,property_slug,conversion_path,converted_at")
    .order("converted_at", { ascending: false })
    .limit(100);
  if (error) throw new Error("lead_engine_list_failed");
  const leadIds = [...new Set((conversions || []).map((item) => item.lead_id))];
  const attributionIds = [...new Set((conversions || []).map((item) => item.attribution_record_id).filter(Boolean))];
  if (!leadIds.length) return [];

  const [leadResponse, stateResponse, attributionResponse] = await Promise.all([
    client.from("lead_engine_leads").select("id,status,subject_ref,created_at,updated_at").in("id", leadIds),
    client.from("lead_engine_commercial_states").select("lead_id,attention_status,qualification_status,progress_status,commercial_result,updated_at").in("lead_id", leadIds),
    attributionIds.length
      ? client.from("lead_engine_attributions").select("id,first_source,first_medium,first_campaign,first_landing_path,first_seen_at,last_source,last_medium,last_campaign,last_landing_path,last_seen_at").in("id", attributionIds)
      : Promise.resolve({ data: [], error: null }),
  ]);
  if (leadResponse.error || stateResponse.error || attributionResponse.error) throw new Error("lead_engine_relations_failed");
  const leads = new Map((leadResponse.data || []).map((item) => [item.id, item]));
  const states = new Map((stateResponse.data || []).map((item) => [item.lead_id, item]));
  const attributions = new Map((attributionResponse.data || []).map((item) => [item.id, item]));

  return (conversions || []).map((conversion) => ({
    conversion,
    lead: leads.get(conversion.lead_id) || null,
    state: states.get(conversion.lead_id) || null,
    attribution: attributions.get(conversion.attribution_record_id) || null,
  }));
}

export async function updateDemoLead({ env, input, createClient, fetchImpl }) {
  const value = validateCommercialState(input);
  if (!value) throw new Error("invalid_commercial_state");
  const client = await preparedClient({ env, createClient, fetchImpl });
  const { data, error } = await client.rpc("lead_engine_update_commercial_state", {
    p_lead_id: value.leadId,
    p_attention_status: value.attention,
    p_qualification_status: value.qualification,
    p_progress_status: value.progress,
    p_commercial_result: value.result,
  });
  if (error) throw new Error("lead_engine_update_failed");
  return data;
}
