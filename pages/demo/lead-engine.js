import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

const OPTIONS = Object.freeze({
  attention: [["new", "Nuevo"], ["contacted", "Contactado"], ["no_response", "Sin respuesta"], ["discarded", "Descartado"]],
  qualification: [["undetermined", "No determinado"], ["qualified", "Calificado"], ["potential", "Potencial"], ["not_qualified", "No calificado"]],
  progress: [["none", "Sin avance"], ["appointment_scheduled", "Cita agendada"], ["visit_completed", "Visita realizada"], ["follow_up", "Seguimiento"]],
  result: [["none", "Sin resultado"], ["operation_in_process", "Operación en proceso"], ["closed_won", "Cerrado ganado"], ["closed_lost", "Cerrado perdido"]],
});

const initialState = (item) => ({
  attention: item.state?.attention_status || "new",
  qualification: item.state?.qualification_status || "undetermined",
  progress: item.state?.progress_status || "none",
  result: item.state?.commercial_result || "none",
});

function Select({ label, value, options, onChange }) {
  return <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 700 }}>
    {label}
    <select value={value} onChange={(event) => onChange(event.target.value)} style={{ padding: "10px 12px", border: "1px solid #d1d5db", borderRadius: 8, background: "white" }}>
      {options.map(([key, text]) => <option value={key} key={key}>{text}</option>)}
    </select>
  </label>;
}

function LeadCard({ item, onSaved }) {
  const [state, setState] = useState(() => initialState(item));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const set = (field) => (value) => setState((current) => ({ ...current, [field]: value }));
  const save = async () => {
    setSaving(true); setMessage("");
    const response = await fetch("/api/lead-engine-demo/leads", {
      method: "PATCH", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadId: item.lead.id, ...state }),
    });
    setSaving(false);
    setMessage(response.ok ? "Guardado" : "No se pudo guardar");
    if (response.ok) onSaved();
  };
  const attribution = item.attribution;
  return <article style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: 20, display: "grid", gap: 16 }}>
    <header>
      <div style={{ color: "#c8102e", fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>PROSPECTO DEMO</div>
      <h2 style={{ margin: "5px 0" }}>{item.conversion.property_public_id}</h2>
      <div style={{ color: "#6b7280", fontSize: 13 }}>{new Date(item.conversion.converted_at).toLocaleString("es-MX")}</div>
    </header>
    <div style={{ fontSize: 14, lineHeight: 1.6, background: "#f9fafb", borderRadius: 10, padding: 12 }}>
      <strong>Fuente:</strong> {attribution ? `${attribution.first_source} / ${attribution.first_medium}` : "Sin atribución"}<br />
      <strong>Landing:</strong> {attribution?.first_landing_path || "—"}<br />
      <strong>Conversión:</strong> {item.conversion.conversion_path}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
      <Select label="1. Resultado del contacto" value={state.attention} options={OPTIONS.attention} onChange={set("attention")} />
      <Select label="2. Calificación" value={state.qualification} options={OPTIONS.qualification} onChange={set("qualification")} />
      <Select label="3. Cita o visita" value={state.progress} options={OPTIONS.progress} onChange={set("progress")} />
      <Select label="4. Resultado comercial" value={state.result} options={OPTIONS.result} onChange={set("result")} />
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button onClick={save} disabled={saving} style={{ border: 0, borderRadius: 9, background: "#c8102e", color: "white", padding: "11px 18px", fontWeight: 800, cursor: "pointer" }}>{saving ? "Guardando…" : "Guardar seguimiento"}</button>
      <span role="status" style={{ color: "#166534", fontSize: 13 }}>{message}</span>
    </div>
  </article>;
}

export default function LeadEngineDemo() {
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState("Cargando Demo…");
  const load = useCallback(async () => {
    const response = await fetch("/api/lead-engine-demo/leads", { cache: "no-store" });
    if (!response.ok) { setStatus("El piloto está apagado o no disponible."); return; }
    const data = await response.json(); setLeads(data.leads || []); setStatus("");
  }, []);
  useEffect(() => { load(); }, [load]);
  return <>
    <Head><title>Lead Engine Demo · Emporio</title><meta name="robots" content="noindex,nofollow,noarchive" /></Head>
    <main style={{ minHeight: "100vh", background: "#f4f5f7", padding: "32px 18px", fontFamily: "Montserrat, Arial, sans-serif" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gap: 20 }}>
        <header><div style={{ color: "#c8102e", fontWeight: 900 }}>EMPORIO · DEMO AISLADO</div><h1 style={{ marginBottom: 8 }}>Seguimiento comercial mínimo</h1><p style={{ color: "#4b5563", margin: 0 }}>Sólo registra lo que el sistema no puede conocer automáticamente.</p></header>
        {status && <div style={{ background: "white", borderRadius: 12, padding: 18 }}>{status}</div>}
        {leads.map((item) => <LeadCard item={item} key={item.conversion.id} onSaved={load} />)}
      </div>
    </main>
  </>;
}
