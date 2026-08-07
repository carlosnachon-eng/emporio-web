begin;

drop function if exists public.lead_engine_reserve_test_nonce(uuid, timestamptz);
drop table if exists public.lead_engine_test_nonces;

commit;
