begin;

drop function if exists public.lead_engine_update_commercial_state(uuid, text, text, text, text);
drop table if exists public.lead_engine_commercial_states;

commit;
