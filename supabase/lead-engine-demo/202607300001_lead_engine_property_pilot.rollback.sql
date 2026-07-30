begin;

drop function if exists public.lead_engine_capture_property_pilot(
  uuid, text, text, text, text, text, text, text, text, uuid, jsonb, jsonb
);

drop table if exists public.lead_engine_conversions;
drop table if exists public.lead_engine_identity_candidates;
drop table if exists public.lead_engine_leads;
drop table if exists public.lead_engine_attributions;
drop table if exists public.lead_engine_identities;

drop function if exists public.lead_engine_prevent_conversion_mutation();
drop function if exists public.lead_engine_protect_first_touch();
drop function if exists public.lead_engine_set_updated_at();

commit;
