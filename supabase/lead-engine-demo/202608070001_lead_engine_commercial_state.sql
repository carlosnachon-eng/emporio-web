begin;

create table if not exists public.lead_engine_commercial_states (
  lead_id uuid primary key references public.lead_engine_leads(id) on delete cascade,
  attention_status text not null default 'new',
  qualification_status text not null default 'undetermined',
  progress_status text not null default 'none',
  commercial_result text not null default 'none',
  contacted_at timestamptz,
  appointment_at timestamptz,
  visited_at timestamptz,
  closed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lead_engine_commercial_attention_chk
    check (attention_status in ('new', 'contacted', 'no_response', 'discarded')),
  constraint lead_engine_commercial_qualification_chk
    check (qualification_status in ('qualified', 'potential', 'not_qualified', 'undetermined')),
  constraint lead_engine_commercial_progress_chk
    check (progress_status in ('none', 'appointment_scheduled', 'visit_completed', 'follow_up')),
  constraint lead_engine_commercial_result_chk
    check (commercial_result in ('none', 'operation_in_process', 'closed_won', 'closed_lost'))
);

create index if not exists lead_engine_commercial_attention_idx
  on public.lead_engine_commercial_states(attention_status, updated_at desc);
create index if not exists lead_engine_commercial_result_idx
  on public.lead_engine_commercial_states(commercial_result, updated_at desc);

drop trigger if exists lead_engine_commercial_states_updated_at on public.lead_engine_commercial_states;
create trigger lead_engine_commercial_states_updated_at
before update on public.lead_engine_commercial_states
for each row execute function public.lead_engine_set_updated_at();

alter table public.lead_engine_commercial_states enable row level security;
alter table public.lead_engine_commercial_states force row level security;
revoke all on public.lead_engine_commercial_states from public, anon, authenticated;
grant all on public.lead_engine_commercial_states to service_role;

create or replace function public.lead_engine_update_commercial_state(
  p_lead_id uuid,
  p_attention_status text,
  p_qualification_status text,
  p_progress_status text,
  p_commercial_result text
)
returns public.lead_engine_commercial_states
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_state public.lead_engine_commercial_states;
begin
  if not exists (select 1 from public.lead_engine_leads where id = p_lead_id) then
    raise exception 'lead not found';
  end if;

  insert into public.lead_engine_commercial_states (
    lead_id, attention_status, qualification_status, progress_status, commercial_result,
    contacted_at, appointment_at, visited_at, closed_at
  ) values (
    p_lead_id, p_attention_status, p_qualification_status, p_progress_status, p_commercial_result,
    case when p_attention_status <> 'new' then now() end,
    case when p_progress_status = 'appointment_scheduled' then now() end,
    case when p_progress_status = 'visit_completed' then now() end,
    case when p_commercial_result in ('closed_won', 'closed_lost') then now() end
  )
  on conflict (lead_id) do update set
    attention_status = excluded.attention_status,
    qualification_status = excluded.qualification_status,
    progress_status = excluded.progress_status,
    commercial_result = excluded.commercial_result,
    contacted_at = coalesce(public.lead_engine_commercial_states.contacted_at, excluded.contacted_at),
    appointment_at = coalesce(public.lead_engine_commercial_states.appointment_at, excluded.appointment_at),
    visited_at = coalesce(public.lead_engine_commercial_states.visited_at, excluded.visited_at),
    closed_at = coalesce(public.lead_engine_commercial_states.closed_at, excluded.closed_at)
  returning * into v_state;

  return v_state;
end;
$$;

revoke execute on function public.lead_engine_update_commercial_state(uuid, text, text, text, text)
  from public, anon, authenticated;
grant execute on function public.lead_engine_update_commercial_state(uuid, text, text, text, text)
  to service_role;

comment on table public.lead_engine_commercial_states is
  'Demo-only minimal commercial follow-up. It contains no attribution or direct contact PII.';

commit;
