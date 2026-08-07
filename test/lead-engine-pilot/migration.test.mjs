import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const migrationUrl = new URL(
  "../../supabase/lead-engine-demo/202607300001_lead_engine_property_pilot.sql",
  import.meta.url,
);
const rollbackUrl = new URL(
  "../../supabase/lead-engine-demo/202607300001_lead_engine_property_pilot.rollback.sql",
  import.meta.url,
);

const migration = await readFile(migrationUrl, "utf8");
const rollback = await readFile(rollbackUrl, "utf8");
const commercialMigration = await readFile(
  new URL("../../supabase/lead-engine-demo/202608070001_lead_engine_commercial_state.sql", import.meta.url),
  "utf8",
);
const commercialRollback = await readFile(
  new URL("../../supabase/lead-engine-demo/202608070001_lead_engine_commercial_state.rollback.sql", import.meta.url),
  "utf8",
);
const nonceMigration = await readFile(
  new URL("../../supabase/lead-engine-demo/202608070002_lead_engine_test_nonces.sql", import.meta.url),
  "utf8",
);
const nonceRollback = await readFile(
  new URL("../../supabase/lead-engine-demo/202608070002_lead_engine_test_nonces.rollback.sql", import.meta.url),
  "utf8",
);

test("la migración sólo crea objetos aislados del Lead Engine", () => {
  assert.match(migration, /create table public\.lead_engine_identities/i);
  assert.match(migration, /create function public\.lead_engine_capture_property_pilot/i);
  assert.doesNotMatch(migration, /alter table public\.(clientes|propiedades|solicitudes_contacto_propiedad)/i);
  assert.doesNotMatch(migration, /\b(insert|update|delete)\s+(into\s+|from\s+)?public\.(clientes|propiedades|solicitudes_contacto_propiedad)\b/i);
});

test("las conversiones usan referencias externas sin duplicar PII", () => {
  assert.match(migration, /source_request_id text not null unique/i);
  assert.match(migration, /property_public_id text not null/i);
  assert.doesNotMatch(
    migration,
    /\n\s+(nombre|telefono|email|mensaje|ip_address|user_agent)\s+(text|varchar|character varying|jsonb?)\b/i,
  );
});

test("RLS y permisos bloquean anon y authenticated", () => {
  for (const table of [
    "lead_engine_identities",
    "lead_engine_identity_candidates",
    "lead_engine_leads",
    "lead_engine_attributions",
    "lead_engine_conversions",
  ]) {
    assert.match(migration, new RegExp(`alter table public\\.${table} enable row level security`, "i"));
    assert.match(migration, new RegExp(`revoke all on public\\.${table} from public, anon, authenticated`, "i"));
  }
  assert.match(migration, /grant execute on function public\.lead_engine_capture_property_pilot[\s\S]+to service_role/i);
});

test("el rollback elimina exclusivamente objetos nuevos", () => {
  assert.match(rollback, /drop function if exists public\.lead_engine_capture_property_pilot/i);
  assert.doesNotMatch(rollback, /drop table if exists public\.(clientes|propiedades|solicitudes_contacto_propiedad)/i);
  assert.doesNotMatch(rollback, /\btruncate\b/i);
});

test("seguimiento comercial es aditivo, protegido y reversible", () => {
  assert.match(commercialMigration, /create table if not exists public\.lead_engine_commercial_states/i);
  assert.match(commercialMigration, /force row level security/i);
  assert.match(commercialMigration, /revoke all[\s\S]+from public, anon, authenticated/i);
  assert.match(commercialMigration, /grant execute[\s\S]+to service_role/i);
  assert.doesNotMatch(commercialMigration, /alter table public\.(clientes|propiedades|contratos|operaciones)/i);
  assert.match(commercialRollback, /drop table if exists public\.lead_engine_commercial_states/i);
  assert.doesNotMatch(commercialRollback, /drop table if exists public\.(clientes|propiedades|contratos|operaciones)/i);
});

test("nonces firmados son Demo-only, anti-replay y reversibles", () => {
  assert.match(nonceMigration, /create table if not exists public\.lead_engine_test_nonces/i);
  assert.match(nonceMigration, /nonce uuid primary key/i);
  assert.match(nonceMigration, /on conflict \(nonce\) do nothing/i);
  assert.match(nonceMigration, /force row level security/i);
  assert.match(nonceMigration, /grant execute[\s\S]+to service_role/i);
  assert.doesNotMatch(nonceMigration, /public\.(clientes|propiedades|solicitudes_contacto_propiedad)/i);
  assert.match(nonceRollback, /drop table if exists public\.lead_engine_test_nonces/i);
});
