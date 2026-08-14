-- DEV ONLY. Never run as a production migration.
-- Allows Emporio Web Preview to render only synthetic DEV properties.

begin;

grant select on table public.propiedades to anon;

drop policy if exists propiedades_preview_qa_select on public.propiedades;
create policy propiedades_preview_qa_select
on public.propiedades
for select
to anon
using (
  public_id like 'DEV-%'
  and status in ('published', 'reserved')
);

commit;
