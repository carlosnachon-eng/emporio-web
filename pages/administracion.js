import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CSS = `
  * { box-sizing: border-box; }
  @media (max-width: 768px) {
    .hero-grid   { grid-template-columns: 1fr !important; }
    .inc-grid    { grid-template-columns: 1fr 1fr !important; }
    .pasos-grid  { grid-template-columns: 1fr 1fr !important; }
    .portales-grid { grid-template-columns: 1fr 1fr !important; }
    .dif-grid    { grid-template-columns: 1fr 1fr !important; }
    .hero-title  { font-size: 34px !important; }
    .hero-pad    { padding: 44px 20px 56px !important; }
    .sec-pad     { padding: 52px 20px !important; }
    .sec-title   { font-size: 26px !important; }
    .cta-title   { font-size: 28px !important; }
  }
  @media (max-width: 480px) {
    .inc-grid    { grid-template-columns: 1fr !important; }
    .pasos-grid  { grid-template-columns: 1fr !important; }
    .dif-grid    { grid-template-columns: 1fr !important; }
    .hero-title  { font-size: 28px !important; }
  }
`;

const INCLUYE = [
  { icon: "📣", title: "Promoción del inmueble",         desc: "Publicamos tu propiedad en TikTok, Instagram, Facebook y más de 20 portales especializados para encontrar al mejor inquilino." },
  { icon: "🔍", title: "Investigación y selección",       desc: "Verificamos ingresos, referencias y antecedentes jurídicos de cada candidato antes de presentártelo." },
  { icon: "📄", title: "Contratos y firma",               desc: "Elaboramos y firmamos el contrato de arrendamiento en tu nombre, con toda la validez legal." },
  { icon: "💰", title: "Cobranza y recibos",              desc: "Cobramos la renta mensual, emitimos recibos y te entregamos la renta neta con reporte detallado." },
  { icon: "🔧", title: "Mantenimiento preventivo y correctivo", desc: "Gestionamos reparaciones con nuestro personal. Montos menores al 10% de la renta se autorizan automáticamente con evidencia fotográfica y comprobantes." },
  { icon: "🤝", title: "Representación ante inquilinos", desc: "Somos tu punto de contacto con el inquilino para cualquier gestión, incidencia o seguimiento durante la vigencia del contrato." },
  { icon: "📊", title: "Liquidación mensual con reporte", desc: "Recibes cada mes la renta neta más un reporte detallado de ingresos, descuentos y gastos aplicados." },
  { icon: "🔄", title: "Renovaciones y finiquitos",       desc: "Gestionamos renovaciones de contrato y finiquitos al término del arrendamiento." },
];

const PASOS = [
  { num: "01", title: "Nos compartes tu propiedad",    desc: "Agendamos una visita, evaluamos el inmueble y firmamos el contrato de administración." },
  { num: "02", title: "Promoción inmediata",           desc: "Publicamos en todos los portales y redes sociales para encontrar al inquilino ideal." },
  { num: "03", title: "Investigamos al candidato",     desc: "Verificamos ingresos, referencias y antecedentes jurídicos antes de cualquier firma." },
  { num: "04", title: "Firmamos el contrato",          desc: "Elaboramos y firmamos el contrato de arrendamiento en tu representación." },
  { num: "05", title: "Operación mensual",             desc: "Cobramos la renta, atendemos al inquilino y coordinamos mantenimiento si se requiere." },
  { num: "06", title: "Te liquidamos cada mes",        desc: "Recibes la renta neta con reporte detallado de ingresos y gastos vía transferencia bancaria." },
];

export default function Administracion() {
  return (
    <>
      <Head>
        <title>Administración de Inmuebles y Rentas en Puebla</title>
        <meta name="description" content="Administramos tu propiedad en Puebla: cobranza, mantenimiento, reportes y atención al inquilino por 10% de la renta. Solicita una evaluación." />
        <meta name="keywords" content="administración de inmuebles puebla, administradora de rentas puebla, gestión de propiedades puebla, administración departamentos puebla, cobro de renta puebla" />
        <meta property="og:title" content="Administración de Inmuebles en Puebla — Emporio Inmobiliario" />
        <meta property="og:description" content="Nos encargamos de todo: cobranza, mantenimiento, reportes y representación. Tú recibes tu renta, nosotros gestionamos lo demás." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/administracion" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Administración de Inmuebles y Rentas en Puebla" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/administracion" />
      </Head>
      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)" }} />
        <div className="hero-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px 88px", position: "relative", zIndex: 1 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            {/* LEFT */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff0f2", border: "1px solid #fecdd3", padding: "6px 14px", borderRadius: 99, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
                <span style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Servicio especializado · Puebla</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: 52, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
                Tu propiedad,<br /><span style={{ color: "#C8102E" }}>administrada</span><br />sin complicaciones.
              </h1>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, margin: "0 0 32px" }}>
                Nos encargamos de todo: promoción, selección de inquilinos, cobranza, mantenimiento y reportes mensuales. Tú recibes tu renta, nosotros gestionamos lo demás.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20administración%20de%20inmuebles" target="_blank" rel="noreferrer"
                  style={{ background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                  💬 Solicitar información
                </a>
                <a href="https://app.emporioinmobiliario.com.mx/registro-propietario" target="_blank" rel="noreferrer"
                  style={{ background: "#1a1a2e", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                  🏠 Registrar mi propiedad →
                </a>
              </div>
            </div>

            {/* RIGHT — pricing card */}
            <div style={{ background: "#1a1a2e", borderRadius: 24, padding: 36, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C8102E", margin: "0 0 8px" }}>Honorarios</p>
              <div style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1, margin: "0 0 4px" }}>10%</div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", margin: "0 0 28px" }}>de la renta mensual efectivamente cobrada</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {[
                  "Gestión integral del inmueble incluida",
                  "Se descuenta de la renta antes de entregártela",
                  "Sin costos ocultos ni cuotas fijas mensuales",
                  "Vigencia de 1 año con renovación automática",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: "#C8102E", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, margin: "0 0 6px" }}>Nota sobre contratación</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>Al inicio de cada arrendamiento nuevo se cobra el equivalente a <strong style={{ color: "#fff" }}>un mes de renta</strong> por concepto de promoción y contratación. En renovaciones con el mismo inquilino aplica el mismo monto.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <a href="https://app.emporioinmobiliario.com.mx/propietario" target="_blank" rel="noreferrer"
                  style={{ background: "#C8102E", color: "#fff", padding: "10px 14px", borderRadius: 10, fontWeight: 700, fontSize: 12, textDecoration: "none", textAlign: "center" }}>
                  🏠 Portal propietario
                </a>
                <a href="https://app.emporioinmobiliario.com.mx/inquilino" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "10px 14px", borderRadius: 10, fontWeight: 700, fontSize: 12, textDecoration: "none", textAlign: "center", border: "1px solid rgba(255,255,255,0.2)" }}>
                  🔑 Portal inquilino
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── QUÉ INCLUYE ──────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Servicio completo</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 12px" }}>Todo lo que incluye la administración.</h2>
            <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>Un solo servicio que cubre el ciclo completo del arrendamiento, de principio a fin.</p>
          </div>
          <div className="inc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {INCLUYE.map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 16, padding: "24px 20px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESO ──────────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Paso a paso</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: 0 }}>Así funciona el servicio.</h2>
          </div>
          <div className="pasos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
            {PASOS.map((paso, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 16px", textAlign: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, margin: "0 auto 14px" }}>{paso.num}</div>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: "0 0 6px", lineHeight: 1.4 }}>{paso.title}</h4>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MANTENIMIENTO ────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="hero-grid">
            <div>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Mantenimiento</p>
              <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Personal propio para mantenimiento y reparaciones.</h2>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.75, margin: "0 0 28px" }}>
                A diferencia de otras administradoras que subcontratan, contamos con personal propio para atender mantenimiento preventivo y correctivo. Eso significa tiempos de respuesta más rápidos y costos controlados.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                {[
                  { icon: "⚡", title: "Reparaciones menores sin trámite", desc: "Hasta el 10% del ingreso mensual se autoriza automáticamente. Sin esperas, sin burocracia." },
                  { icon: "📸", title: "Evidencia fotográfica y comprobantes", desc: "Todo gasto de mantenimiento se documenta con fotos y comprobantes fiscales incluidos en tu liquidación mensual." },
                  { icon: "✅", title: "Reparaciones mayores con tu autorización", desc: "Para trabajos que excedan el límite, te consultamos y pedimos tu aprobación por escrito antes de proceder." },
                  { icon: "📋", title: "Cotización sin compromiso", desc: "Para trabajos de mayor alcance, te enviamos cotización detallada. Tú decides si lo autorizas." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/522222573237?text=Hola,%20quiero%20una%20cotización%20de%20mantenimiento" target="_blank" rel="noreferrer"
                style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                Solicitar cotización de mantenimiento →
              </a>
            </div>
            <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 20, padding: "40px 32px" }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🔧</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px", lineHeight: 1.2 }}>¿Qué tipos de mantenimiento cubrimos?</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Plomería y sanitarios",
                  "Instalaciones eléctricas",
                  "Pintura y acabados",
                  "Cerrajería y herrería",
                  "Impermeabilización",
                  "Reparaciones de inmueble en general",
                  "Mantenimiento preventivo programado",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "#fff", border: "1px solid #f3f4f6", borderRadius: 8 }}>
                    <span style={{ color: "#C8102E", fontSize: 13, fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 16, fontStyle: "italic" }}>
                *El mantenimiento es un servicio independiente de la administración. Se cotiza según el alcance del trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PORTALES DIGITALES ───────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Tecnología incluida</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 12px" }}>Portales digitales para propietario e inquilino.</h2>
            <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              Tanto tú como tu inquilino tienen acceso a una plataforma propia para dar seguimiento a todo en tiempo real.
            </p>
          </div>
          <div className="portales-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

            {/* Propietario */}
            <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
              <div style={{ fontSize: 40, marginBottom: 16 }}>🏠</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>Portal del propietario</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 24px" }}>Consulta el estado de tu propiedad, revisa rentas cobradas, reportes mensuales y el historial completo de tu inmueble.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {["Estado de tu contrato de arrendamiento", "Historial de rentas cobradas y liquidaciones", "Reportes de mantenimiento con evidencia", "Documentos y contratos vigentes"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ color: "#C8102E", fontSize: 12 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="https://app.emporioinmobiliario.com.mx/propietario" target="_blank" rel="noreferrer"
                style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "11px 22px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                Acceder al portal →
              </a>
            </div>

            {/* Inquilino */}
            <div style={{ background: "#C8102E", borderRadius: 20, padding: "40px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔑</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>Portal del inquilino</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 24px" }}>Reporta pagos de renta, abre tickets de mantenimiento, consulta tu contrato y lleva el seguimiento de tu arrendamiento.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {["Reporte y seguimiento de pago de renta", "Tickets de mantenimiento y seguimiento", "Consulta de contrato vigente", "Historial de pagos y documentos"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="https://app.emporioinmobiliario.com.mx/inquilino" target="_blank" rel="noreferrer"
                style={{ display: "inline-block", background: "#fff", color: "#C8102E", padding: "11px 22px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                Acceder al portal →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONDICIONES CLAVE ────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Lo que debes saber</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Condiciones del servicio.</h2>
          </div>
          <div className="dif-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { icon: "📅", title: "Vigencia de 1 año", desc: "El contrato tiene duración de 1 año con renovación automática. Cualquiera de las partes puede cancelar con 30 días de aviso.", dark: false },
              { icon: "⚖️", title: "Representación legal plena", desc: "Nos autorizas a firmar contratos, recibos y convenios en tu nombre para la operación diaria del inmueble.", dark: true },
              { icon: "🧾", title: "Obligaciones fiscales del propietario", desc: "Las obligaciones fiscales derivadas del arrendamiento corresponden al propietario. Emitimos constancias mensuales si lo solicitas.", dark: false },
              { icon: "🔒", title: "Cumplimiento PLD", desc: "Como administradora de inmuebles cumplimos con la Ley Federal de Prevención de Lavado de Dinero (LFPIORPI), recabando la documentación necesaria de todas las partes.", dark: true },
            ].map((item, i) => (
              <div key={i} style={{ background: item.dark ? "#1a1a2e" : "#fafafa", border: `1px solid ${item.dark ? "transparent" : "#f3f4f6"}`, borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: item.dark ? "#fff" : "#1a1a2e", margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: item.dark ? "rgba(255,255,255,0.55)" : "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COMBO CON BLINDAJE ───────────────────────────── */}
      <div className="sec-pad" style={{ padding: "64px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ background: "#1a1a2e", borderRadius: 24, padding: "48px 40px", position: "relative", overflow: "hidden", textAlign: "center" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.2) 0%, transparent 70%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Recomendado</p>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>
                Combínalo con <span style={{ color: "#C8102E" }}>Emporio Blindaje Legal</span>
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
                Administración + Blindaje Legal es la protección total para tu inmueble. La administración gestiona el día a día; el blindaje te protege si algo sale mal jurídicamente.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
                {[
                  { icon: "⚙️", label: "Administración", sublabel: "10% renta mensual" },
                  { icon: "+", label: "", sublabel: "" },
                  { icon: "🛡️", label: "Blindaje Legal", sublabel: "Desde $2,800 anuales" },
                  { icon: "=", label: "", sublabel: "" },
                  { icon: "✅", label: "Protección total", sublabel: "Gestión + cobertura jurídica" },
                ].map((item, i) => (
                  item.label === "" ?
                    <div key={i} style={{ display: "flex", alignItems: "center", fontSize: 28, color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>{item.icon}</div>
                    :
                    <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "20px 24px", textAlign: "center", minWidth: 140 }}>
                      <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{item.sublabel}</div>
                    </div>
                ))}
              </div>
              <a href="/blindaje-legal"
                style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                Conocer Emporio Blindaje Legal →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 className="cta-title" style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>
            ¿Listo para dejar de preocuparte por tu propiedad?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", margin: "0 0 36px", lineHeight: 1.7 }}>
            Cuéntanos sobre tu inmueble y te explicamos cómo funciona el servicio. Sin costo de asesoría inicial.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
            <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20administración%20de%20inmuebles" target="_blank" rel="noreferrer"
              style={{ background: "#fff", color: "#C8102E", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
              💬 Escríbenos por WhatsApp
            </a>
            <a href="https://app.emporioinmobiliario.com.mx/registro-propietario" target="_blank" rel="noreferrer"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              🏠 Registrar mi propiedad →
            </a>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Puebla, México · 222 257 3237 · ventas@emporioinmobiliario.mx</p>
        </div>
      </div>

      <Footer />

      {/* WhatsApp flotante */}
      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer"
        style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>
        💬
      </a>
      </div>
    </>
  );
}
