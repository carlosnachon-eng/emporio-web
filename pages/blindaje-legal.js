import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CSS = `
  * { box-sizing: border-box; }
  @media (max-width: 768px) {
    .hero-grid   { grid-template-columns: 1fr !important; }
    .inv-grid    { grid-template-columns: 1fr !important; }
    .inc-grid    { grid-template-columns: 1fr !important; }
    .dif-grid    { grid-template-columns: 1fr 1fr !important; }
    .pasos-grid  { grid-template-columns: 1fr 1fr !important; }
    .precio-grid { grid-template-columns: 1fr !important; }
    .hero-title  { font-size: 34px !important; }
    .hero-pad    { padding: 44px 20px 56px !important; }
    .sec-pad     { padding: 52px 20px !important; }
    .sec-title   { font-size: 26px !important; }
    .cta-title   { font-size: 28px !important; }
  }
  @media (max-width: 480px) {
    .dif-grid    { grid-template-columns: 1fr !important; }
    .pasos-grid  { grid-template-columns: 1fr !important; }
    .hero-title  { font-size: 28px !important; }
  }
`;

const INVESTIGACION = [
  {
    icon: "💰",
    title: "Verificación de ingresos",
    desc: "Confirmamos que los ingresos sean suficientes para cubrir la renta y que provengan de una fuente lícita y comprobable. Estados de cuenta verificados, no solo presentados.",
  },
  {
    icon: "👥",
    title: "Referencias personales, familiares y laborales",
    desc: "Contactamos y verificamos referencias en los tres ámbitos, incluyendo referencias de arrendamientos previos cuando existen.",
  },
  {
    icon: "⚖️",
    title: "Antecedentes jurídicos — Buró México",
    desc: "Consultamos el historial legal del candidato para detectar juicios de arrendamiento, conflictos mercantiles u otros antecedentes relevantes.",
  },
  {
    icon: "🪪",
    title: "Validación de documentos",
    desc: "Verificamos que la INE esté vigente, que los estados de cuenta sean auténticos y que todos los datos del expediente sean válidos y consistentes.",
  },
  {
    icon: "📊",
    title: "Dictamen formal del candidato",
    desc: "Con base en toda la investigación emitimos un dictamen oficial. Tú decides con información verificada, no con intuición.",
  },
];

const PASOS_BL = [
  { num: "01", title: "Nos contactas", desc: "Cuéntanos sobre tu inmueble y el candidato. Te explicamos el proceso y la inversión." },
  { num: "02", title: "Candidato sube expediente", desc: "El inquilino carga su documentación completa en nuestra plataforma de forma segura." },
  { num: "03", title: "Investigación completa", desc: "Revisamos ingresos, referencias y antecedentes, y validamos cada documento del expediente." },
  { num: "04", title: "Dictamen del candidato", desc: "Te entregamos un dictamen formal con el resultado de la investigación." },
  { num: "05", title: "Contrato y póliza", desc: "Elaboramos el contrato y emitimos tu póliza jurídica formal con vigencia de 12 meses." },
  { num: "06", title: "Cobertura activa", desc: "Tu propiedad queda protegida. Si el inquilino incumple, activamos el respaldo jurídico." },
];

const INCLUYE = [
  { icon: "🔍", title: "Investigación del candidato", desc: "Ingresos verificados, referencias contactadas, Buró México y validación completa de documentos." },
  { icon: "📊", title: "Dictamen formal", desc: "Documento oficial con el resultado de la investigación para tomar decisiones con respaldo real." },
  { icon: "📄", title: "Contrato de arrendamiento", desc: "Redactado por especialistas, jurídicamente sólido y personalizado para tu inmueble." },
  { icon: "🛡️", title: "Póliza jurídica formal", desc: "Documento oficial con los términos de tu cobertura durante toda la vigencia del arrendamiento." },
  { icon: "📞", title: "Cobranza extrajudicial", desc: "Si hay incumplimiento, actuamos primero por la vía extrajudicial para resolver sin llegar a litigio." },
  { icon: "⚖️", title: "Recuperación judicial", desc: "Si el proceso extrajudicial no funciona, activamos el litigio con nuestro despacho jurídico aliado." },
  { icon: "🔐", title: "Protección ante extinción de dominio", desc: "Resguardo frente a riesgos de lavado de dinero u otros ilícitos que puedan comprometer tu propiedad." },
  { icon: "👩‍⚖️", title: "Abogada especializada", desc: "Atención con abogada propia en arrendamiento durante toda la vigencia del contrato." },
];

const PRECIOS = [
  { renta: "Hasta $7,000",        costo: "$2,800" },
  { renta: "$7,001 a $10,000",    costo: "$3,200" },
  { renta: "$10,001 a $15,000",   costo: "$3,800" },
  { renta: "$15,001 a $20,000",   costo: "$4,500" },
  { renta: "$20,001 a $25,000",   costo: "$5,200" },
  { renta: "$25,001 a $30,000",   costo: "$6,100" },
  { renta: "$30,001 a $40,000",   costo: "$9,500" },
  { renta: "$40,001 a $50,000",   costo: "$12,500" },
  { renta: "$50,001 en adelante", costo: "25% de una renta mensual" },
];

const DIFERENCIADORES = [
  { icon: "🏛️", title: "Somos la inmobiliaria y el blindaje", desc: "Conocemos Puebla, sus colonias, sus precios y sus riesgos reales. Eso se refleja directamente en cómo investigamos a cada candidato.", dark: true },
  { icon: "💻", title: "Proceso 100% digital", desc: "Todo el expediente, la investigación y el contrato se gestionan en nuestra plataforma propia. Sin papeles, sin traslados, sin procesos opacos.", dark: false },
  { icon: "📍", title: "Expertos locales en Puebla", desc: "Llevamos más de 20 años aquí. No somos una franquicia que opera el mercado de lejos — tenemos el contexto y las relaciones que eso implica.", dark: true },
  { icon: "⚡", title: "Cobertura jurídica real", desc: "Abogada especializada para la operación diaria y despacho jurídico externo para litigios. No solo promesas — respaldo concreto.", dark: false },
];

export default function BlindajeLegal() {
  return (
    <>
      <Head>
        <title>Emporio Blindaje Legal — Póliza Jurídica para Arrendamiento en Puebla</title>
        <meta name="description" content="Protección jurídica total para tu inmueble en Puebla. Investigamos al inquilino, elaboramos el contrato y te respaldamos si algo falla. Desde $2,800 + IVA." />
        <meta name="keywords" content="póliza jurídica puebla, protección jurídica arrendamiento puebla, investigación de inquilinos puebla, contrato arrendamiento puebla, blindaje legal inmueble puebla" />
        <meta property="og:title" content="Emporio Blindaje Legal — Póliza Jurídica en Puebla" />
        <meta property="og:description" content="Investigamos al inquilino, elaboramos el contrato y te respaldamos jurídicamente durante todo el arrendamiento." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blindaje-legal" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blindaje-legal" />
      </Head>
      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(120deg, #1a1a2e 0%, #0f1520 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.18) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)" }} />
        <div className="hero-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px 88px", position: "relative", zIndex: 1 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            {/* LEFT */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "6px 14px", borderRadius: 99, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
                <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Servicio especializado · Puebla</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: 52, fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
                Emporio
              </h1>
              <h1 className="hero-title" style={{ fontSize: 52, fontWeight: 900, color: "#C8102E", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
                Blindaje Legal
              </h1>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: "0 0 32px" }}>
                Renta tu inmueble con la certeza de que tu patrimonio está protegido. Investigamos a fondo a cada candidato, elaboramos tu contrato y te respaldamos jurídicamente durante todo el arrendamiento.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Emporio%20Blindaje%20Legal" target="_blank" rel="noreferrer"
                  style={{ background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                  💬 Solicitar información
                </a>
                <a href="#proceso"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Ver cómo funciona →
                </a>
              </div>
            </div>

            {/* RIGHT — card */}
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f59e0b", margin: "0 0 20px" }}>✦ &nbsp;Lo que incluye tu póliza</p>
              {[
                { icon: "🔍", title: "Investigación del candidato", desc: "Ingresos, referencias, antecedentes jurídicos y validación de documentos." },
                { icon: "📄", title: "Contrato de arrendamiento", desc: "Redactado por especialistas, blindado jurídicamente." },
                { icon: "🛡️", title: "Póliza jurídica formal", desc: "Cobertura activa durante toda la vigencia del contrato." },
                { icon: "⚖️", title: "Recuperación del inmueble", desc: "Proceso judicial si el inquilino no desaloja." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: i < 3 ? 16 : 0 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(200,16,46,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#fff" }}>{item.title}</p>
                    <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              {/* stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(255,255,255,0.1)", borderRadius: 12, overflow: "hidden", marginTop: 24 }}>
                {[{ val: "20+", label: "Años en Puebla" }, { val: "100%", label: "Digital" }, { val: "5", label: "Filtros" }].map((s, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", padding: "14px 10px", textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 900, color: "#f59e0b", lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              {/* quick links */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 16 }}>
                <a href="https://app.emporioinmobiliario.com.mx/registro-propietario" target="_blank" rel="noreferrer"
                  style={{ background: "#C8102E", color: "#fff", padding: "10px 14px", borderRadius: 10, fontWeight: 700, fontSize: 12, textDecoration: "none", textAlign: "center" }}>
                  🏠 Registro propietario
                </a>
                <a href="https://app.emporioinmobiliario.com.mx/solicitud-inquilino" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "10px 14px", borderRadius: 10, fontWeight: 700, fontSize: 12, textDecoration: "none", textAlign: "center", border: "1px solid rgba(255,255,255,0.2)" }}>
                  🔑 Soy inquilino
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PARA QUIÉN ───────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>¿Para quién es?</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Protección para todo propietario que renta.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { icon: "🏠", title: "Propietario independiente", desc: "Rentas tu propiedad por tu cuenta y quieres hacerlo con la estructura jurídica correcta, sin depender de suerte o buena voluntad." },
              { icon: "🏢", title: "Cartera de inmuebles", desc: "Tienes varias propiedades en renta y necesitas un proceso estandarizado de investigación y protección en cada una." },
              { icon: "📋", title: "Ya tienes candidato", desc: "Tienes a alguien en mente pero quieres verificar que todo esté en orden antes de firmar. Investigamos y elaboramos el contrato." },
              { icon: "🔑", title: "Tuviste problemas antes", desc: "Viviste una mala experiencia con un inquilino anterior y esta vez quieres blindar tu propiedad antes de volver a rentar." },
            ].map((c, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INVESTIGACIÓN ────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Proceso de investigación</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 12px" }}>Cinco filtros antes de que firmes un solo papel.</h2>
            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, maxWidth: 560, margin: 0 }}>No aceptamos candidatos sin haber revisado cada uno de estos puntos. Así de serios somos con tu patrimonio.</p>
          </div>
          <div className="inv-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {INVESTIGACION.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px", border: "1px solid #f3f4f6", borderRadius: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "36px 32px", position: "sticky", top: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C8102E", marginBottom: 8 }}>Proceso digital</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>El expediente se gestiona 100% en línea</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "0 0 24px" }}>El candidato sube su documentación en nuestra plataforma. Nosotros revisamos, verificamos y te entregamos el dictamen. Sin papeles físicos.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {["Ingresos lícitos", "Referencias contactadas", "Buró México", "INE vigente", "Estados de cuenta auténticos", "Arrendamientos previos"].map((tag, i) => (
                  <span key={i} style={{ fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 99, background: i < 5 ? "rgba(200,16,46,0.25)" : "rgba(255,255,255,0.08)", color: i < 5 ? "#fca5a5" : "rgba(255,255,255,0.6)", border: `1px solid ${i < 5 ? "rgba(200,16,46,0.4)" : "rgba(255,255,255,0.12)"}` }}>{tag}</span>
                ))}
              </div>
              <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#f59e0b", marginBottom: 8 }}>Resultado</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 20px" }}>Un dictamen formal del candidato y el contrato listo para firma — o la certeza de que ese candidato no era el indicado para tu propiedad.</p>
                <a href="https://app.emporioinmobiliario.com.mx/solicitud-inquilino" target="_blank" rel="noreferrer"
                  style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "11px 20px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
                  🔑 Solicitud de inquilino →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROCESO ──────────────────────────────────────── */}
      <div className="sec-pad" id="proceso" style={{ padding: "72px 32px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Paso a paso</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: 0 }}>Así funciona Emporio Blindaje Legal.</h2>
          </div>
          <div className="pasos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
            {PASOS_BL.map((paso, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 16px", textAlign: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, margin: "0 auto 14px" }}>{paso.num}</div>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: "0 0 6px", lineHeight: 1.4 }}>{paso.title}</h4>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── QUÉ INCLUYE ──────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Cobertura completa</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Todo lo que cubre tu Blindaje Legal.</h2>
          </div>
          <div className="inc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {INCLUYE.map((item, i) => (
              <div key={i} style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 16, padding: "24px 20px" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ADMINISTRACIÓN ───────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="inv-grid">
            <div>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Servicio adicional</p>
              <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Administración y mantenimiento de tu inmueble.</h2>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.75, margin: "0 0 28px" }}>
                Además del blindaje jurídico, Emporio ofrece un servicio independiente de administración completa de tu propiedad. Tú recibes tu renta, nosotros nos encargamos de todo lo demás.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {[
                  { icon: "💰", text: "Cobro de renta y seguimiento a pagos" },
                  { icon: "📊", text: "Reportes periódicos al propietario" },
                  { icon: "🔧", text: "Coordinación de mantenimiento y reparaciones" },
                  { icon: "📞", text: "Atención directa al inquilino" },
                  { icon: "📋", text: "Gestión de renovaciones y finiquitos" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "#fff0f2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
                    <p style={{ fontSize: 14, color: "#374151", fontWeight: 500, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <a href="/administracion"
                style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                Conocer el servicio →
              </a>
            </div>
            <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 32px" }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🏗️</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>¿Tienes una propiedad que ya está rentada?</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 24px" }}>
                Nuestro servicio de administración y mantenimiento es independiente del Blindaje Legal. Puedes contratarlos juntos o por separado, según lo que necesites.
              </p>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "20px" }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, margin: "0 0 10px" }}>Disponibles por separado</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#C8102E", fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Blindaje Legal (investigación + póliza)</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#C8102E", fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Administración y mantenimiento</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#f59e0b", fontSize: 14 }}>★</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Ambos servicios juntos (recomendado)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRECIOS ──────────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Inversión</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 12px" }}>Póliza Jurídica Emporio</h2>
            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
              Cobertura jurídica anual: investigación, contrato, pagarés y recuperación del inmueble.
            </p>
          </div>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            {/* table header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#C8102E" }}>
              <div style={{ padding: "14px 24px", fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: "0.05em" }}>Renta mensual</div>
              <div style={{ padding: "14px 24px", fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: "0.05em", borderLeft: "1px solid rgba(255,255,255,0.2)" }}>Costo de la póliza</div>
            </div>
            {PRECIOS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "16px 24px", fontSize: 14, color: "#374151", fontWeight: 500 }}>{row.renta}</div>
                <div style={{ padding: "16px 24px", fontSize: 14, color: "#C8102E", fontWeight: 800, borderLeft: "1px solid #f3f4f6" }}>{row.costo}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", marginTop: 16, fontStyle: "italic" }}>
            *Todos los precios son más IVA. Vigencia: 12 meses.*
          </p>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="https://app.emporioinmobiliario.com.mx/registro-propietario" target="_blank" rel="noreferrer"
              style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
              🏠 Registrar mi propiedad →
            </a>
          </div>
        </div>
      </div>

      {/* ── POR QUÉ EMPORIO ──────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Por qué elegirnos</p>
            <h2 className="sec-title" style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 12px" }}>Lo que ninguna otra empresa de pólizas puede ofrecerte.</h2>
            <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 540, margin: "0 auto" }}>Somos una inmobiliaria con 20 años en Puebla. No una empresa jurídica genérica que opera el mercado de lejos.</p>
          </div>
          <div className="dif-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {DIFERENCIADORES.map((d, i) => (
              <div key={i} style={{ background: d.dark ? "#1a1a2e" : "#fff", border: `1px solid ${d.dark ? "transparent" : "#f3f4f6"}`, borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{d.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: d.dark ? "#fff" : "#1a1a2e", margin: "0 0 8px" }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: d.dark ? "rgba(255,255,255,0.55)" : "#6b7280", lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <div className="sec-pad" style={{ padding: "72px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 className="cta-title" style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>
            ¿Listo para proteger tu propiedad?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", margin: "0 0 36px", lineHeight: 1.7 }}>
            Sin costo de asesoría inicial. Cuéntanos sobre tu inmueble y te explicamos qué incluye el servicio y cuál es la inversión.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
            <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Emporio%20Blindaje%20Legal" target="_blank" rel="noreferrer"
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
