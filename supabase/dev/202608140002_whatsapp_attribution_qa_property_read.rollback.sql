-- DEV ONLY rollback for the QA-only property read policy.

begin;

drop policy if exists propiedades_preview_qa_select on public.propiedades;
revoke select on table public.propiedades from anon;

commit;
