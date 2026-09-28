import { useState } from "react";
import { registrarEventoSitio } from "../lib/siteAnalytics";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const INITIAL = {
  nombre: "", whatsapp: "", email: "", tipo: "", zona: "", enVenta: "",
  precio: "", comentarios: "", ownerScenario: "opinion_valor",
};
const inputStyle = {
  display: "block", width: "100%", marginTop: 7, padding: "13px 14px",
  border: "1px solid #cbd5e1", borderRadius: 9, font: "inherit",
  color: "#111827", background: "#fff",
};

function clean(value, limit = 120) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function readUtm(search = "") {
  const params = new URLSearchParams(search);
  return Object.fromEntries(UTM_KEYS.map((key) => [key, clean(params.get(key), 120)]));
}

export default function OwnerLeadForm({ config, requestedScenario = "opinion_valor" }) {
  const [form, setForm] = useState({
    ...INITIAL,
    ownerScenario: requestedScenario,
    enVenta: requestedScenario === "propiedad_publicada" ? "si" : "",
  });
  const [status, setStatus] = useState("idle");
  const change = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    const utm = readUtm(window.location.search);
    const payload = {
      nombre: clean(form.nombre, 120),
      whatsapp: clean(form.whatsapp, 40),
      email: clean(form.email, 160),
      tipo: clean(form.tipo, 80),
      colonia: clean(form.zona, 160),
      propiedad_en_venta: form.enVenta === "si" ? "Sí" : form.enVenta === "no" ? "No" : "",
      precio_esperado: clean(form.precio, 80),
      comentarios: clean(form.comentarios, 1000),
      owner_scenario: clean(form.ownerScenario || config.defaultScenario, 50),
      asunto: clean(config.subject, 160),
      plaza: clean(config.plaza, 32).toUpperCase(),
      service: "SELL_PROPERTY",
      source: "website",
      campaign: utm.utm_campaign,
      landing_path: clean(window.location.pathname || config.landingPath, 180),
      ...utm,
    };
    const analytics = {
      contexto: config.analyticsContext,
      tipo_formulario: "opinion_valor_propietario",
      ruta: payload.landing_path,
      plaza: payload.plaza,
      servicio: payload.service,
      source: payload.source,
      campaign: payload.campaign,
      owner_scenario: payload.owner_scenario,
    };
    try {
      const response = await fetch("/api/contacto", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("send_error");
      setStatus("sent");
      registrarEventoSitio("site_form_submit", analytics);
      registrarEventoSitio(config.conversionEvent, analytics);
    } catch {
      setStatus("error");
      registrarEventoSitio("site_form_error", { ...analytics, estado: "send_error" });
    }
  };

  if (status === "sent") {
    return <div className="owner-success" role="status"><strong>Recibimos tu solicitud.</strong><span>El equipo de Emporio revisará la información y se pondrá en contacto contigo.</span></div>;
  }

  return (
    <form id="formulario" className="owner-form" onSubmit={submit} data-owner-lead-form={config.plaza} data-owner-scenario={requestedScenario}>
      <p className="owner-eyebrow">Opinión de Valor</p>
      <h2>Cuéntanos sobre tu propiedad</h2>
      <p className="owner-form-intro">Sólo necesitamos los datos esenciales para iniciar. Después podremos solicitar información más detallada.</p>
      <div className="owner-form-grid">
        <label>Nombre *<input style={inputStyle} autoComplete="name" required maxLength="120" value={form.nombre} onChange={change("nombre")} placeholder="Tu nombre" /></label>
        <label>WhatsApp o teléfono *<input style={inputStyle} autoComplete="tel" required maxLength="40" type="tel" inputMode="tel" value={form.whatsapp} onChange={change("whatsapp")} placeholder="229 000 0000" /></label>
        <label>Email<input style={inputStyle} autoComplete="email" maxLength="160" type="email" inputMode="email" value={form.email} onChange={change("email")} placeholder="tu@email.com" /></label>
        <label>Tipo de propiedad *<select style={inputStyle} required value={form.tipo} onChange={change("tipo")}><option value="">Selecciona una opción</option><option>Casa</option><option>Departamento</option><option>Terreno</option><option>Local comercial</option><option>Oficina</option><option>Bodega</option><option>Otro</option></select></label>
        <label>Ciudad o zona *<input style={inputStyle} required maxLength="160" value={form.zona} onChange={change("zona")} placeholder={config.zonePlaceholder} /></label>
        <label>¿La propiedad ya está en venta? *<select style={inputStyle} required value={form.enVenta} onChange={change("enVenta")}><option value="">Selecciona una opción</option><option value="si">Sí</option><option value="no">No</option></select></label>
        <label className="owner-wide">Precio actual o esperado <span>(opcional)</span><input style={inputStyle} maxLength="80" inputMode="numeric" value={form.precio} onChange={change("precio")} placeholder="$0 MXN" /></label>
        <label className="owner-wide">Comentario breve <span>(opcional)</span><textarea style={{ ...inputStyle, minHeight: 92, resize: "vertical" }} maxLength="1000" value={form.comentarios} onChange={change("comentarios")} placeholder="Cuéntanos lo más importante sobre tu propiedad" /></label>
      </div>
      {status === "error" && <p className="owner-error" role="alert">No pudimos enviar la solicitud. Intenta nuevamente en unos minutos.</p>}
      <button className="owner-submit" disabled={status === "sending"} type="submit">{status === "sending" ? "Enviando…" : "Solicitar Opinión de Valor"}</button>
      <p className="owner-privacy">Usaremos tus datos únicamente para atender esta solicitud. La Opinión de Valor es una orientación comercial y no sustituye un avalúo bancario o certificado.</p>
    </form>
  );
}
