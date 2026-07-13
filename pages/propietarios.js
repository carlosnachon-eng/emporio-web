import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CSS = `
* { box-sizing: border-box; }
@media (max-width: 768px) {
  .g2  { grid-template-columns: 1fr !important; }
  .g3  { grid-template-columns: 1fr 1fr !important; }
  .g5  { grid-template-columns: 1fr 1fr !important; }
  .g-form { grid-template-columns: 1fr !important; }
  .hero-pad { padding: 48px 20px 60px !important; }
  .sec-pad  { padding: 52px 20px !important; }
  .h1 { font-size: 32px !important; }
  .h2 { font-size: 24px !important; }
  .tabs { flex-direction: column !important; }
  .tabla-grid { grid-template-columns: 1fr !important; }
  .honorarios-grid { grid-template-columns: 1fr !important; }
}
@media (max-width: 480px) {
  .g3 { grid-template-columns: 1fr !important; }
  .g5 { grid-template-columns: 1fr !important; }
  .h1 { font-size: 26px !important; }
}
`;

const BENEFICIOS = [
  { icon: "💸", title: "Sin costo hasta cerrar", desc: "No pagas nada hasta que se firma el contrato. Cero riesgo para ti." },
  { icon: "🏆", title: "+20 años de experiencia", desc: "Conocemos el mercado poblano mejor que nadie." },
  { icon: "📱", title: "+20 portales especializados", desc: "Tu propiedad en TikTok, Instagram, Facebook y más de 20 portales inmobiliarios." },
  { icon: "🔍", title: "Filtramos a los clientes", desc: "Verificamos a los interesados y acompañamos cada visita." },
  { icon: "⚖️", title: "Asesoría legal incluida", desc: "Contrato y revisión legal sin costo adicional." },
  { icon: "📊", title: "Reportes periódicos", desc: "Te informamos del avance de tu propiedad de forma regular." },
];

const PASOS = [
  { num: "01", icon: "🏠", title: "Nos compartes tu propiedad", desc: "Cuéntanos los detalles y agendamos una visita." },
  { num: "02", icon: "📸", title: "Fotos y publicación", desc: "Tomamos fotos y publicamos en redes y portales." },
  { num: "03", icon: "💬", title: "Filtramos interesados", desc: "Atendemos clientes y coordinamos visitas." },
  { num: "04", icon: "📝", title: "Firma de contrato", desc: "Firmamos con asesoría legal incluida." },
  { num: "05", icon: "💰", title: "Tú cobras", desc: "Recibes tu renta o venta, nosotros cobramos al cierre." },
];

const VENTA_SERVICIOS = [
  { icon: "📢", text: "Difusión profesional en redes sociales, portales, TikTok, Google y más." },
  { icon: "📸", text: "Fotografías y video de alta calidad." },
  { icon: "🎯", text: "Segmentación y publicidad pagada para llegar a compradores reales." },
  { icon: "📞", text: "Atención y seguimiento a todos los interesados." },
  { icon: "📝", text: "Apoyo en negociación, firma de promesa de compraventa y cierre notarial." },
  { icon: "📑", text: "Trámite completo del crédito hipotecario del comprador (si aplica)." },
  { icon: "💼", text: "Asesoría al vendedor en tema de impuestos y gastos notariales." },
  { icon: "✅", text: "Asesoría legal durante todo el proceso." },
  { icon: "📊", text: "Reportes periódicos sobre el avance y actividad de tu propiedad." },
  { icon: "📂", text: "Te decimos exactamente qué documentos entregar — tú solo te presentas a firmar." },
];

const TABLA_SERVICIOS = [
  { servicio: "Difusión en redes, TikTok y portales", promocion: true, admin: true },
  { servicio: "Atención de prospectos y visitas", promocion: true, admin: true },
  { servicio: "Investigación de inquilino", promocion: true, admin: true },
  { servicio: "Contrato con póliza jurídica", promocion: true, admin: true },
  { servicio: "Firma y entrega inicial", promocion: true, admin: true },
  { servicio: "Cobranza mensual", promocion: false, admin: true },
  { servicio: "Recordatorios y depósitos", promocion: false, admin: true },
  { servicio: "Supervisión de renovaciones", promocion: false, admin: true },
  { servicio: "Reporte mensual", promocion: false, admin: true },
  { servicio: "Garantía de renta en 30 días", promocion: false, admin: true },
];

const Check = () => (
  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", background: "#dcfce7", color: "#16a34a", fontSize: 14, fontWeight: 900 }}>✓</span>
);
const Cross = () => (
  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", background: "#fee2e2", color: "#dc2626", fontSize: 14, fontWeight: 900 }}>✕</span>
);

export default function Propietarios() {
  const [form, setForm] = useState({ nombre: "", email: "", whatsapp: "", colonia: "", tipo: "", operacion: "", comentarios: "" });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = async () => {
    setEnviando(true);
    try {
      await fetch("/api/contacto", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, asunto: "Nuevo propietario interesado" }) });
      setEnviado(true);
    } catch (e) { console.error(e); }
    setEnviando(false);
  };

  return (
    <>
      <Head>
        <title>Renta o Vende tu Propiedad en Puebla — Emporio Inmobiliario</title>
        <meta name="description" content="Promovemos tu propiedad en Puebla sin costo hasta cerrar. Publicamos en TikTok, Instagram y más de 20 portales. Más de 20 años de experiencia en el mercado poblano." />
        <meta name="keywords" content="rentar propiedad puebla, vender casa puebla, promover inmueble puebla, inmobiliaria propietarios puebla, publicar propiedad puebla" />
        <meta property="og:title" content="Renta o Vende tu Propiedad en Puebla — Emporio Inmobiliario" />
        <meta property="og:description" content="Sin costo hasta cerrar. Publicamos tu propiedad en todos los portales y filtramos a los mejores candidatos." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/propietarios" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/propietarios" />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Navbar />

        {/* Hero */}
        <div style={{ background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)" }} />
          <div className="hero-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px 88px", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: 640 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff0f2", border: "1px solid #fecdd3", padding: "6px 16px", borderRadius: 99, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
                <span style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para propietarios</span>
              </div>
              <h1 className="h1" style={{ fontSize: 52, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1, margin: "0 0 20px" }}>
                ¿Tienes una propiedad<br />en <span style={{ color: "#C8102E" }}>Puebla?</span>
              </h1>
              <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.7, margin: "0 0 36px" }}>
                Nosotros encontramos al cliente ideal, te acompañamos en todo el proceso y tú no pagas un solo peso hasta que se cierre la operación.
              </p>
              <a href="#formulario" style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                Quiero promover mi propiedad →
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="sec-pad" style={{ padding: "48px 32px", background: "#fafafa", borderBottom: "1px solid #f3f4f6" }}>
          <div className="g3" style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, textAlign: "center" }}>
            {[["5,000+", "Propiedades promovidas", "🏠"], ["3,000+", "Operaciones cerradas", "🤝"], ["20+", "Años de experiencia", "⭐"]].map(([val, label, icon]) => (
              <div key={label}>
                <div style={{ fontSize: 26, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Por qué elegirnos</p>
              <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Beneficios Emporio</h2>
            </div>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {BENEFICIOS.map((b, i) => (
                <div key={i} style={{ background: "#fafafa", borderRadius: 16, padding: "28px 24px", border: "1px solid #f3f4f6" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{b.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{b.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cómo funciona */}
        <div className="sec-pad" style={{ padding: "72px 32px", background: "#1a1a2e" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>El proceso</p>
              <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: 0 }}>¿Cómo funciona?</h2>
            </div>
            <div className="g5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
              {PASOS.map((paso, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 16px", textAlign: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, margin: "0 auto 12px" }}>{paso.num}</div>
                  <div style={{ fontSize: 26, marginBottom: 10 }}>{paso.icon}</div>
                  <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: "0 0 6px", lineHeight: 1.4 }}>{paso.title}</h4>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECCIÓN VENTA ── */}
        <div className="sec-pad" style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <div style={{ width: 4, height: 48, background: "#C8102E", borderRadius: 4, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 4px" }}>Servicio de venta</p>
                <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Vende tu propiedad</h2>
              </div>
            </div>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, margin: "0 0 40px 20px", maxWidth: 620 }}>
              No solo publicamos tu propiedad — la promovemos estratégicamente hasta lograr el cierre. Tenemos la experiencia, el equipo y los canales adecuados para llevarla al comprador correcto.
            </p>

            <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
              {/* Servicios */}
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e", margin: "0 0 20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>¿Qué incluye?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {VENTA_SERVICIOS.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", background: "#fafafa", borderRadius: 12, border: "1px solid #f3f4f6" }}>
                      <span style={{ fontSize: 18, flexShrink: 0, lineHeight: 1.4 }}>{s.icon}</span>
                      <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honorarios + CTA */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Honorarios */}
                <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "36px 32px", color: "#fff" }}>
                  <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Honorarios</p>
                  <div style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1, margin: "0 0 8px" }}>5%</div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.6 }}>
                    sobre el valor total de la operación.<br />
                    <strong style={{ color: "#fff" }}>Solo cobramos si logramos cerrar la venta.</strong>
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", gap: 16 }}>
                    {["Sin anticipos", "Sin costos ocultos", "Cero riesgo"].map(t => (
                      <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                        <span style={{ color: "#C8102E", fontWeight: 900 }}>✓</span> {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA cierre */}
                <div style={{ background: "#fff0f2", border: "1.5px solid #fecdd3", borderRadius: 20, padding: "28px 28px" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>✍️</div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", margin: "0 0 10px" }}>Solo necesitas dos cosas</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                    {["Entregarnos tu documentación", "Presentarte a firmar en notaría"].map(t => (
                      <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151", fontWeight: 600 }}>
                        <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, flexShrink: 0 }}>✓</span>
                        {t}
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 20px", lineHeight: 1.6 }}>
                    Nosotros nos encargamos de todo lo demás para que tu experiencia de venta sea profesional, clara y sin estrés.
                  </p>
                  <a href="#formulario" style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "12px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                    Quiero vender mi propiedad →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECCIÓN RENTA ── */}
        <div className="sec-pad" style={{ padding: "80px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <div style={{ width: 4, height: 48, background: "#C8102E", borderRadius: 4, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 4px" }}>Servicio de renta</p>
                <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Renta tu propiedad</h2>
              </div>
            </div>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, margin: "0 0 40px 20px", maxWidth: 620 }}>
              Elige el esquema que más te convenga. Tú decides cuánto quieres involucrarte — nosotros te respaldamos en cualquiera de los dos.
            </p>

            {/* Tabla comparativa */}
            <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #f3f4f6", overflow: "hidden", marginBottom: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
              {/* Header tabla */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 200px", background: "#1a1a2e" }}>
                <div style={{ padding: "16px 24px", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Servicio</div>
                <div style={{ padding: "16px 16px", fontSize: 12, fontWeight: 800, color: "#fff", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                  Solo Promoción
                </div>
                <div style={{ padding: "16px 16px", fontSize: 12, fontWeight: 800, color: "#fff", textAlign: "center", background: "#C8102E", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                  Promoción +<br />Administración
                  <div style={{ fontSize: 9, fontWeight: 600, opacity: 0.85, marginTop: 2 }}>RECOMENDADO</div>
                </div>
              </div>

              {/* Filas */}
              {TABLA_SERVICIOS.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 160px 200px", borderTop: "1px solid #f3f4f6", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <div style={{ padding: "14px 24px", fontSize: 13, color: "#374151", fontWeight: 500 }}>{row.servicio}</div>
                  <div style={{ padding: "14px 16px", textAlign: "center", borderLeft: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {row.promocion ? <Check /> : <Cross />}
                  </div>
                  <div style={{ padding: "14px 16px", textAlign: "center", borderLeft: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(200,16,46,0.03)" }}>
                    {row.admin ? <Check /> : <Cross />}
                  </div>
                </div>
              ))}
            </div>

            {/* Honorarios renta */}
            <div className="honorarios-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
              {/* Solo promoción */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "28px 28px", border: "1.5px solid #e5e7eb" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#6b7280", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#1a1a2e", textTransform: "uppercase", letterSpacing: "0.05em" }}>Solo Promoción</span>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#1a1a2e", lineHeight: 1, margin: "0 0 6px" }}>1 mes de renta</div>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>por única vez, al momento del cierre.</p>
              </div>

              {/* Promoción + Admin */}
              <div style={{ background: "#1a1a2e", borderRadius: 16, padding: "28px 28px", border: "1.5px solid #1a1a2e", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 12, right: 12, background: "#C8102E", color: "#fff", fontSize: 9, fontWeight: 800, padding: "4px 10px", borderRadius: 99, letterSpacing: "0.08em", textTransform: "uppercase" }}>Recomendado</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#C8102E", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Promoción + Administración</span>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1, margin: "0 0 6px" }}>1 mes + 10% mensual</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: 0 }}>al cierre y durante la administración.</p>
              </div>
            </div>

            {/* Links a servicios relacionados */}
            <div className="honorarios-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <a href="/administracion" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 16, background: "#fff", borderRadius: 16, padding: "20px 24px", border: "1.5px solid #e5e7eb", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#C8102E"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>📊</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>Administración de Inmuebles</div>
                  <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>Cobranza, mantenimiento y reportes mensuales. Tú solo recibes tu renta.</div>
                  <div style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, marginTop: 6 }}>Ver servicio completo →</div>
                </div>
              </a>
              <a href="/blindaje-legal" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 16, background: "#fff", borderRadius: 16, padding: "20px 24px", border: "1.5px solid #e5e7eb", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#C8102E"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>🛡️</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>Emporio Blindaje Legal</div>
                  <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>Investigación de inquilino, póliza jurídica y respaldo legal durante todo el contrato.</div>
                  <div style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, marginTop: 6 }}>Ver servicio completo →</div>
                </div>
              </a>
            </div>

            {/* Garantía */}
            <div style={{ background: "linear-gradient(135deg, #C8102E 0%, #9b0d23 100%)", borderRadius: 20, padding: "32px 36px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div style={{ fontSize: 48, flexShrink: 0 }}>🛡️</div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: "#fff", margin: "0 0 8px" }}>Garantía exclusiva: renta en 30 días o menos</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.6 }}>
                  Si no rentamos tu propiedad en 30 días, te damos un <strong style={{ color: "#fff" }}>20% de descuento</strong> en nuestros honorarios. Disponible en el esquema Promoción + Administración.
                </p>
              </div>
              <a href="#formulario" style={{ display: "inline-block", background: "#fff", color: "#C8102E", padding: "12px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none", flexShrink: 0 }}>
                Quiero rentar →
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div id="formulario" className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Empecemos</p>
              <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 12px" }}>¿Listo para rentar o vender?</h2>
              <p style={{ fontSize: 15, color: "#6b7280", margin: 0 }}>Llena el formulario y un asesor te contactará a la brevedad.</p>
            </div>

            {enviado ? (
              <div style={{ background: "#f0fdf4", borderRadius: 20, padding: 48, textAlign: "center" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#065f46", margin: "0 0 8px", fontSize: 22 }}>¡Recibimos tu información!</h3>
                <p style={{ color: "#6b7280", margin: 0 }}>Un asesor te contactará muy pronto.</p>
              </div>
            ) : (
              <div style={{ background: "#fafafa", borderRadius: 24, padding: "40px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6" }}>
                <div className="g-form" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[
                    { label: "Nombre completo", key: "nombre", type: "text", placeholder: "Tu nombre" },
                    { label: "Correo electrónico", key: "email", type: "email", placeholder: "tu@email.com" },
                    { label: "WhatsApp", key: "whatsapp", type: "tel", placeholder: "2221234567" },
                    { label: "Colonia o zona", key: "colonia", type: "text", placeholder: "Ej. Angelópolis" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))}
                        style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e5e7eb", fontSize: 14, boxSizing: "border-box", fontFamily: "'Montserrat', sans-serif", background: "#fff" }} />
                    </div>
                  ))}
                </div>
                <div className="g-form" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Tipo de propiedad</label>
                    <select value={form.tipo} onChange={e => setForm(v => ({ ...v, tipo: e.target.value }))} style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff", fontFamily: "'Montserrat', sans-serif" }}>
                      <option value="">Seleccionar</option>
                      <option>Casa</option><option>Departamento</option><option>Terreno</option><option>Local</option><option>Oficina</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Venta o Renta</label>
                    <select value={form.operacion} onChange={e => setForm(v => ({ ...v, operacion: e.target.value }))} style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff", fontFamily: "'Montserrat', sans-serif" }}>
                      <option value="">Seleccionar</option>
                      <option>Venta</option><option>Renta</option><option>Ambas</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Comentarios adicionales</label>
                  <textarea placeholder="Cuéntanos más sobre tu propiedad..." value={form.comentarios} onChange={e => setForm(v => ({ ...v, comentarios: e.target.value }))}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e5e7eb", fontSize: 14, minHeight: 90, resize: "vertical", boxSizing: "border-box", fontFamily: "'Montserrat', sans-serif", background: "#fff" }} />
                </div>
                <button onClick={handleEnviar} disabled={enviando || !form.nombre || !form.whatsapp}
                  style={{ width: "100%", background: "#C8102E", color: "#fff", border: "none", borderRadius: 12, padding: "15px", fontWeight: 800, fontSize: 16, cursor: enviando ? "not-allowed" : "pointer", opacity: enviando ? 0.7 : 1, fontFamily: "'Montserrat', sans-serif" }}>
                  {enviando ? "Enviando..." : "📩 Quiero que promuevan mi propiedad"}
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
        <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>💬</a>
      </div>
    </>
  );
}
