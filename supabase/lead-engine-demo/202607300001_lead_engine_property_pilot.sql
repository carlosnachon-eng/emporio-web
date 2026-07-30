begin;

create extension if not exists pgcrypto;

create table public.lead_engine_identities (
  id uuid primary key default gen_random_uuid(),
  status text not null default 'provisional',
  phone_fingerprint text,
  email_fingerprint text,
  hmac_version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lead_engine_identities_status_chk
    check (status in ('provisional', 'possible_duplicate', 'resolved')),
  constraint lead_engine_identities_fingerprint_chk
    check (phone_fingerprint is not null or email_fingerprint is not null),
  constraint lead_engine_identities_phone_chk
    check (phone_fingerprint is null or phone_fingerprint ~ '^v[0-9]+:[0-9a-f]{64}$'),
  constraint lead_engine_identities_email_chk
    check (email_fingerprint is null or email_fingerprint ~ '^v[0-9]+:[0-9a-f]{64}$'),
  constraint lead_engine_identities_version_chk
    check (hmac_version ~ '^v[0-9]+$')
);

create table public.lead_engine_identity_candidates (
  id uuid primary key default gen_random_uuid(),
  identity_id uuid not null
    references public.lead_engine_identities(id) on delete cascade,
  candidate_identity_id uuid not null
    references public.lead_engine_identities(id) on delete restrict,
  match_on text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  constraint lead_engine_identity_candidates_not_self_chk
    check (identity_id <> candidate_identity_id),
  constraint lead_engine_identity_candidates_match_chk
    check (match_on in ('phone', 'email', 'conflict', 'multiple')),
  constraint lead_engine_identity_candidates_status_chk
    check (status in ('pending', 'confirmed', 'rejected')),
  constraint lead_engine_identity_candidates_unique
    unique (identity_id, candidate_identity_id, match_on)
);

create table public.lead_engine_leads (
  id uuid primary key default gen_random_uuid(),
  identity_id uuid not null
    references public.lead_engine_identities(id) on delete restrict,
  domain text not null default 'commercial',
  intent text not null default 'property_interest',
  party_role text not null default 'interested_party',
  status text not null default 'new',
  source_system text not null default 'emporio_web',
  subject_ref text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lead_engine_leads_domain_chk check (domain = 'commercial'),
  constraint lead_engine_leads_intent_chk check (intent = 'property_interest'),
  constraint lead_engine_leads_subject_chk check (length(subject_ref) between 1 and 128),
  constraint lead_engine_leads_status_chk
    check (status in ('new', 'contacted', 'qualified', 'follow_up', 'converted', 'disqualified', 'lost', 'duplicate', 'closed'))
);

create table public.lead_engine_attributions (
  id uuid primary key default gen_random_uuid(),
  attribution_id uuid not null unique,
  first_source text,
  first_medium text,
  first_campaign text,
  first_content text,
  first_term text,
  first_landing_path text not null,
  first_referrer text,
  first_seen_at timestamptz not null,
  last_source text,
  last_medium text,
  last_campaign text,
  last_content text,
  last_term text,
  last_landing_path text not null,
  last_referrer text,
  last_seen_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lead_engine_attributions_first_path_chk
    check (first_landing_path ~ '^/' and length(first_landing_path) <= 240),
  constraint lead_engine_attributions_last_path_chk
    check (last_landing_path ~ '^/' and length(last_landing_path) <= 240),
  constraint lead_engine_attributions_referrer_chk
    check (coalesce(length(first_referrer), 0) <= 300 and coalesce(length(last_referrer), 0) <= 300),
  constraint lead_engine_attributions_order_chk check (first_seen_at <= last_seen_at)
);

create table public.lead_engine_conversions (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null unique,
  source_request_id text not null unique,
  lead_id uuid not null
    references public.lead_engine_leads(id) on delete restrict,
  attribution_record_id uuid
    references public.lead_engine_attributions(id) on delete set null,
  property_source_id text,
  property_public_id text not null,
  property_slug text,
  conversion_path text not null,
  conversion_type text not null default 'property_form_submit',
  cta_location text not null default 'property_detail_form',
  converted_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint lead_engine_conversions_source_request_chk
    check (length(source_request_id) between 1 and 128),
  constraint lead_engine_conversions_path_chk
    check (conversion_path ~ '^/' and length(conversion_path) <= 240),
  constraint lead_engine_conversions_public_id_chk
    check (length(property_public_id) between 1 and 128),
  constraint lead_engine_conversions_source_id_chk
    check (property_source_id is null or length(property_source_id) <= 128),
  constraint lead_engine_conversions_slug_chk
    check (property_slug is null or length(property_slug) <= 180),
  constraint lead_engine_conversions_type_chk check (conversion_type = 'property_form_submit'),
  constraint lead_engine_conversions_cta_chk check (cta_location = 'property_detail_form')
);

create index lead_engine_identities_phone_idx
  on public.lead_engine_identities(phone_fingerprint)
  where phone_fingerprint is not null;
create index lead_engine_identities_email_idx
  on public.lead_engine_identities(email_fingerprint)
  where email_fingerprint is not null;
create index lead_engine_identity_candidates_pending_idx
  on public.lead_engine_identity_candidates(identity_id, created_at)
  where status = 'pending';
create index lead_engine_leads_identity_status_idx
  on public.lead_engine_leads(identity_id, status, created_at desc);
create index lead_engine_attributions_last_seen_idx
  on public.lead_engine_attributions(last_seen_at desc);
create index lead_engine_conversions_lead_idx
  on public.lead_engine_conversions(lead_id, converted_at desc);
create index lead_engine_conversions_property_idx
  on public.lead_engine_conversions(property_public_id, converted_at desc);

create function public.lead_engine_set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create function public.lead_engine_protect_first_touch()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if row(
    new.first_source, new.first_medium, new.first_campaign,
    new.first_content, new.first_term, new.first_landing_path,
    new.first_referrer, new.first_seen_at
  ) is distinct from row(
    old.first_source, old.first_medium, old.first_campaign,
    old.first_content, old.first_term, old.first_landing_path,
    old.first_referrer, old.first_seen_at
  ) then
    raise exception 'first touch is immutable';
  end if;
  if new.last_seen_at < old.last_seen_at then
    raise exception 'last touch cannot move backwards';
  end if;
  new.updated_at := now();
  return new;
end;
$$;

create function public.lead_engine_prevent_conversion_mutation()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  raise exception 'lead engine conversions are append-only';
end;
$$;

create trigger lead_engine_identities_updated_at
before update on public.lead_engine_identities
for each row execute function public.lead_engine_set_updated_at();

create trigger lead_engine_leads_updated_at
before update on public.lead_engine_leads
for each row execute function public.lead_engine_set_updated_at();

create trigger lead_engine_attributions_protect_first
before update on public.lead_engine_attributions
for each row execute function public.lead_engine_protect_first_touch();

create trigger lead_engine_conversions_append_only
before update or delete on public.lead_engine_conversions
for each row execute function public.lead_engine_prevent_conversion_mutation();

alter table public.lead_engine_identities enable row level security;
alter table public.lead_engine_identities force row level security;
alter table public.lead_engine_identity_candidates enable row level security;
alter table public.lead_engine_identity_candidates force row level security;
alter table public.lead_engine_leads enable row level security;
alter table public.lead_engine_leads force row level security;
alter table public.lead_engine_attributions enable row level security;
alter table public.lead_engine_attributions force row level security;
alter table public.lead_engine_conversions enable row level security;
alter table public.lead_engine_conversions force row level security;

revoke all on public.lead_engine_identities from public, anon, authenticated;
revoke all on public.lead_engine_identity_candidates from public, anon, authenticated;
revoke all on public.lead_engine_leads from public, anon, authenticated;
revoke all on public.lead_engine_attributions from public, anon, authenticated;
revoke all on public.lead_engine_conversions from public, anon, authenticated;

grant all on public.lead_engine_identities to service_role;
grant all on public.lead_engine_identity_candidates to service_role;
grant all on public.lead_engine_leads to service_role;
grant all on public.lead_engine_attributions to service_role;
grant all on public.lead_engine_conversions to service_role;

create function public.lead_engine_capture_property_pilot(
  p_submission_id uuid,
  p_source_request_id text,
  p_property_public_id text,
  p_conversion_path text,
  p_hmac_version text,
  p_phone_fingerprint text default null,
  p_email_fingerprint text default null,
  p_property_source_id text default null,
  p_property_slug text default null,
  p_attribution_id uuid default null,
  p_first_touch jsonb default null,
  p_last_touch jsonb default null
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_existing_conversion public.lead_engine_conversions%rowtype;
  v_identity_id uuid;
  v_phone_identity_id uuid;
  v_email_identity_id uuid;
  v_phone_matches integer := 0;
  v_email_matches integer := 0;
  v_identity_reused boolean := false;
  v_candidate_count integer := 0;
  v_lead_id uuid;
  v_attribution_record_id uuid;
  v_conversion_id uuid;
  v_match_class text := 'new_identity';
  v_first_seen timestamptz;
  v_last_seen timestamptz;
begin
  if p_submission_id is null then raise exception 'submission_id is required'; end if;
  if coalesce(length(trim(p_source_request_id)), 0) not between 1 and 128 then
    raise exception 'invalid source_request_id';
  end if;
  if coalesce(length(trim(p_property_public_id)), 0) not between 1 and 128 then
    raise exception 'invalid property_public_id';
  end if;
  if p_conversion_path !~ '^/' or length(p_conversion_path) > 240 then
    raise exception 'invalid conversion_path';
  end if;
  if p_hmac_version !~ '^v[0-9]+$' then raise exception 'invalid hmac_version'; end if;
  if p_phone_fingerprint is null and p_email_fingerprint is null then
    raise exception 'at least one identity fingerprint is required';
  end if;
  if p_phone_fingerprint is not null and p_phone_fingerprint !~ ('^' || p_hmac_version || ':[0-9a-f]{64}$') then
    raise exception 'invalid phone fingerprint';
  end if;
  if p_email_fingerprint is not null and p_email_fingerprint !~ ('^' || p_hmac_version || ':[0-9a-f]{64}$') then
    raise exception 'invalid email fingerprint';
  end if;

  perform pg_advisory_xact_lock(hashtextextended(trim(p_source_request_id), 0));

  select * into v_existing_conversion
  from public.lead_engine_conversions
  where submission_id = p_submission_id or source_request_id = trim(p_source_request_id)
  order by created_at
  limit 1;

  if found then
    return jsonb_build_object(
      'status', 'deduplicated',
      'conversion_id', v_existing_conversion.id,
      'lead_id', v_existing_conversion.lead_id
    );
  end if;

  if p_phone_fingerprint is not null then
    select count(*), (array_agg(id order by created_at, id))[1]
    into v_phone_matches, v_phone_identity_id
    from public.lead_engine_identities
    where phone_fingerprint = p_phone_fingerprint;
  end if;
  if p_email_fingerprint is not null then
    select count(*), (array_agg(id order by created_at, id))[1]
    into v_email_matches, v_email_identity_id
    from public.lead_engine_identities
    where email_fingerprint = p_email_fingerprint;
  end if;

  if p_phone_fingerprint is not null and p_email_fingerprint is not null
     and v_phone_matches = 1 and v_email_matches = 1
     and v_phone_identity_id = v_email_identity_id then
    v_identity_id := v_phone_identity_id;
    v_identity_reused := true;
    v_match_class := 'exact_both';
  else
    insert into public.lead_engine_identities (
      phone_fingerprint, email_fingerprint, hmac_version
    ) values (
      p_phone_fingerprint, p_email_fingerprint, p_hmac_version
    ) returning id into v_identity_id;

    insert into public.lead_engine_identity_candidates (identity_id, candidate_identity_id, match_on)
    select v_identity_id, id, 'phone'
    from public.lead_engine_identities
    where id <> v_identity_id and p_phone_fingerprint is not null
      and phone_fingerprint = p_phone_fingerprint
    on conflict do nothing;
    get diagnostics v_candidate_count = row_count;

    insert into public.lead_engine_identity_candidates (identity_id, candidate_identity_id, match_on)
    select v_identity_id, id, 'email'
    from public.lead_engine_identities
    where id <> v_identity_id and p_email_fingerprint is not null
      and email_fingerprint = p_email_fingerprint
    on conflict do nothing;
    get diagnostics v_email_matches = row_count;
    v_candidate_count := v_candidate_count + v_email_matches;

    if v_candidate_count > 0 then
      update public.lead_engine_identities
      set status = 'possible_duplicate'
      where id = v_identity_id;
      v_match_class := 'candidate_created';
    end if;
  end if;

  if v_identity_reused then
    select id into v_lead_id
    from public.lead_engine_leads
    where identity_id = v_identity_id
      and subject_ref = trim(p_property_public_id)
      and status in ('new', 'contacted', 'qualified', 'follow_up')
    order by created_at desc
    limit 1;
  end if;

  if v_lead_id is null then
    insert into public.lead_engine_leads (identity_id, subject_ref)
    values (v_identity_id, trim(p_property_public_id))
    returning id into v_lead_id;
  end if;

  if p_attribution_id is not null and p_first_touch is not null and p_last_touch is not null then
    v_first_seen := (p_first_touch->>'seen_at')::timestamptz;
    v_last_seen := (p_last_touch->>'seen_at')::timestamptz;
    insert into public.lead_engine_attributions (
      attribution_id,
      first_source, first_medium, first_campaign, first_content, first_term,
      first_landing_path, first_referrer, first_seen_at,
      last_source, last_medium, last_campaign, last_content, last_term,
      last_landing_path, last_referrer, last_seen_at
    ) values (
      p_attribution_id,
      left(p_first_touch->>'source', 100), left(p_first_touch->>'medium', 100),
      left(p_first_touch->>'campaign', 100), left(p_first_touch->>'content', 100),
      left(p_first_touch->>'term', 100), left(p_first_touch->>'landing_path', 240),
      left(p_first_touch->>'referrer', 300), v_first_seen,
      left(p_last_touch->>'source', 100), left(p_last_touch->>'medium', 100),
      left(p_last_touch->>'campaign', 100), left(p_last_touch->>'content', 100),
      left(p_last_touch->>'term', 100), left(p_last_touch->>'landing_path', 240),
      left(p_last_touch->>'referrer', 300), v_last_seen
    )
    on conflict (attribution_id) do update set
      last_source = excluded.last_source,
      last_medium = excluded.last_medium,
      last_campaign = excluded.last_campaign,
      last_content = excluded.last_content,
      last_term = excluded.last_term,
      last_landing_path = excluded.last_landing_path,
      last_referrer = excluded.last_referrer,
      last_seen_at = greatest(public.lead_engine_attributions.last_seen_at, excluded.last_seen_at)
    returning id into v_attribution_record_id;
  end if;

  insert into public.lead_engine_conversions (
    submission_id, source_request_id, lead_id, attribution_record_id,
    property_source_id, property_public_id, property_slug, conversion_path
  ) values (
    p_submission_id, trim(p_source_request_id), v_lead_id, v_attribution_record_id,
    nullif(trim(p_property_source_id), ''), trim(p_property_public_id),
    nullif(trim(p_property_slug), ''), p_conversion_path
  ) returning id into v_conversion_id;

  return jsonb_build_object(
    'status', 'created',
    'identity_id', v_identity_id,
    'lead_id', v_lead_id,
    'conversion_id', v_conversion_id,
    'match_class', v_match_class
  );
end;
$$;

revoke execute on function public.lead_engine_set_updated_at() from public, anon, authenticated;
revoke execute on function public.lead_engine_protect_first_touch() from public, anon, authenticated;
revoke execute on function public.lead_engine_prevent_conversion_mutation() from public, anon, authenticated;
revoke execute on function public.lead_engine_capture_property_pilot(
  uuid, text, text, text, text, text, text, text, text, uuid, jsonb, jsonb
) from public, anon, authenticated;
grant execute on function public.lead_engine_capture_property_pilot(
  uuid, text, text, text, text, text, text, text, text, uuid, jsonb, jsonb
) to service_role;

comment on table public.lead_engine_identities is
  'Pilot identities without direct PII. Fingerprints are server-side HMACs.';
comment on table public.lead_engine_conversions is
  'Append-only property-form conversions. Source IDs are external because Preview and Demo use separate databases.';

commit;
