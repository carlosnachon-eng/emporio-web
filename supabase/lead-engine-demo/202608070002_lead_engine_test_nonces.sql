begin;

create table if not exists public.lead_engine_test_nonces (
  nonce uuid primary key,
  signed_at timestamptz not null,
  used_at timestamptz not null default now(),
  expires_at timestamptz not null,
  constraint lead_engine_test_nonce_window_chk check (expires_at > signed_at)
);

create index if not exists lead_engine_test_nonces_expiry_idx
  on public.lead_engine_test_nonces(expires_at);

alter table public.lead_engine_test_nonces enable row level security;
alter table public.lead_engine_test_nonces force row level security;
revoke all on public.lead_engine_test_nonces from public, anon, authenticated;
grant all on public.lead_engine_test_nonces to service_role;

create or replace function public.lead_engine_reserve_test_nonce(
  p_nonce uuid,
  p_signed_at timestamptz
)
returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_inserted integer;
begin
  if p_nonce is null or p_signed_at is null then return false; end if;
  if p_signed_at < now() - interval '2 minutes' or p_signed_at > now() + interval '30 seconds' then
    return false;
  end if;

  delete from public.lead_engine_test_nonces where expires_at < now() - interval '5 minutes';
  insert into public.lead_engine_test_nonces (nonce, signed_at, expires_at)
  values (p_nonce, p_signed_at, p_signed_at + interval '2 minutes')
  on conflict (nonce) do nothing;
  get diagnostics v_inserted = row_count;
  return v_inserted = 1;
end;
$$;

revoke execute on function public.lead_engine_reserve_test_nonce(uuid, timestamptz)
  from public, anon, authenticated;
grant execute on function public.lead_engine_reserve_test_nonce(uuid, timestamptz)
  to service_role;

comment on table public.lead_engine_test_nonces is
  'Preview-only anti-replay nonces for signed synthetic Lead Engine tests.';

commit;
