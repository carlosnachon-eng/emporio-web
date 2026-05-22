import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
  { slug: "poliza-juridica-vs-aval-puebla", titulo: "Póliza jurídica vs aval: ¿cuál conviene más en Puebla?", emoji: "⚖️" },
  { slug: "colonias-para-vivir-puebla", titulo: "Las mejores colonias para vivir en Puebla en 2025", emoji: "📍" },
];

export default function ArticuloAdministracion() {
  return (
    <>
      <Head>
        <title>¿Vale la pena contratar administración de inmuebles en Puebla? — Emporio Inmobiliario</title>
        <meta name="description" content="Si tienes una o más propiedades en renta en Puebla, la administración profesional puede ahorrarte tiempo, dinero y conflictos. Te explicamos cuándo conviene y cuánto cuesta." />
        <meta name="keywords" content="administración de inmuebles puebla, administradora de rentas puebla, gestión de propiedades puebla, administración departamentos puebla, vale la pena administración inmuebles" />
        <meta property="og:title" content="¿Vale la pena contratar administración de inmuebles en Puebla?" />
        <meta property="og:description" content="Cuándo conviene contratar administración de inmuebles en Puebla y qué incluye el servicio. Costo: 10% de la renta mensual." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/administracion-inmuebles-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/administracion-inmuebles-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Vale la pena contratar administración de inmuebles en Puebla?",
          "description": "Cuándo conviene contratar administración de inmuebles en Puebla y qué incluye.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-06-26",
          "url": "https://www.emporioinmobiliario.com.mx/blog/administracion-inmuebles-puebla"
        })}} />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar />

        {/* Hero */}
        <div style={{ background: "linear-gradient(120deg, #1a1a2e 0%, #0f1520 100%)", padding: "64px 32px 56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <a href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Inicio</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <a href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Administración de inmuebles</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para propietarios</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Vale la pena contratar administración de inmuebles en Puebla?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Si tienes una propiedad en renta en Puebla, en algún momento te has preguntado si vale la pena delegar la administración. La respuesta depende de tu situación — aquí te ayudamos a decidir.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 26 de junio, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 5 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Tener un inmueble en renta debería ser una fuente de ingresos pasivos. En la práctica, para muchos propietarios se convierte en una segunda ocupación: llamadas del inquilino, seguimiento de pagos, coordinación de reparaciones y gestión de conflictos. La administración profesional de inmuebles existe para que eso no pase.
          </p>

          {/* Qué incluye */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>¿Qué incluye la administración de inmuebles?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
            {[
              { icon: "📣", title: "Promoción del inmueble", desc: "Cuando hay vacancia, publicamos la propiedad en TikTok, Instagram, Facebook y más de 20 portales especializados para encontrar al mejor candidato." },
              { icon: "🔍", title: "Investigación y selección del inquilino", desc: "Verificamos ingresos, referencias y antecedentes jurídicos de cada candidato antes de presentártelo. Tú apruebas, nosotros filtramos." },
              { icon: "📄", title: "Contratos y firma", desc: "Elaboramos y firmamos el contrato de arrendamiento en tu representación, con toda la validez legal correspondiente." },
              { icon: "💰", title: "Cobranza y liquidación mensual", desc: "Cobramos la renta, emitimos recibos y te depositamos la renta neta con un reporte detallado de ingresos y gastos." },
              { icon: "🔧", title: "Coordinación de mantenimiento", desc: "Gestionamos reparaciones con personal propio. Gastos menores se ejecutan sin necesidad de consultarte. Para montos mayores, pedimos tu autorización." },
              { icon: "👥", title: "Atención al inquilino", desc: "Somos el punto de contacto directo con el inquilino para cualquier gestión, reporte o incidencia durante la vigencia del contrato." },
              { icon: "📱", title: "Portal digital para propietario e inquilino", desc: "Tanto tú como tu inquilino tienen acceso a una plataforma para dar seguimiento a pagos, contratos, tickets de mantenimiento y reportes en tiempo real." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", border: "1px solid #f3f4f6", borderRadius: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cuánto cuesta */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>¿Cuánto cuesta la administración?</h2>
          <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 16, padding: "32px", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Honorario mensual</p>
                <p style={{ fontSize: 52, fontWeight: 900, color: "#C8102E", lineHeight: 1, margin: 0 }}>10%</p>
                <p style={{ fontSize: 14, color: "#6b7280", margin: "4px 0 0" }}>de la renta mensual efectivamente cobrada</p>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, margin: 0 }}>
                  El 10% se descuenta de la renta antes de entregártela. No hay cuotas fijas ni costos ocultos — solo pagas cuando tu propiedad está rentada y cobrando.
                </p>
              </div>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 16px", fontStyle: "italic" }}>
            Ejemplo: si tu renta es $12,000/mes, recibes $10,800 netos y la administradora recibe $1,200 + IVA.
          </p>
          <div style={{ background: "#fff5f5", border: "1px solid #fecdd3", borderRadius: 12, padding: "16px 20px", marginBottom: 48 }}>
            <p style={{ fontSize: 14, color: "#991b1b", fontWeight: 600, margin: "0 0 4px" }}>⚠️ Nota sobre contratación nueva</p>
            <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.7 }}>
              Al inicio de cada arrendamiento nuevo se cobra el equivalente a un mes de renta por concepto de promoción y contratación. En renovaciones con el mismo inquilino aplica el mismo monto.
            </p>
          </div>

          {/* Cuándo conviene */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>¿Cuándo conviene contratar administración?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
            {[
              { conviene: true,  texto: "Tienes más de una propiedad en renta y no puedes atender todo" },
              { conviene: true,  texto: "Vives en otra ciudad o país y no puedes estar presente" },
              { conviene: true,  texto: "Tienes un trabajo de tiempo completo y no quieres lidiar con inquilinos" },
              { conviene: true,  texto: "Has tenido malas experiencias con inquilinos anteriores" },
              { conviene: true,  texto: "Quieres que el inmueble se promueva profesionalmente cuando haya vacancia" },
              { conviene: false, texto: "Tienes mucho tiempo libre y disfrutas gestionar la propiedad tú mismo" },
              { conviene: false, texto: "El margen de tu renta es muy bajo y el 10% representa una carga significativa" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: item.conviene ? "#f0fdf4" : "#fafafa", border: `1px solid ${item.conviene ? "#bbf7d0" : "#f3f4f6"}`, borderRadius: 10 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{item.conviene ? "✅" : "➖"}</span>
                <span style={{ fontSize: 14, color: "#374151", fontWeight: item.conviene ? 500 : 400 }}>{item.texto}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.8, margin: "16px 0 48px" }}>
            Para la mayoría de propietarios en Puebla que rentan como inversión — no como ocupación principal — la administración profesional tiene sentido financiero claro: el 10% que pagas se recupera en tiempo ahorrado, conflictos evitados y una gestión más profesional que generalmente resulta en menos vacancia y mejores inquilinos.
          </p>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Administra tu propiedad con nosotros</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Más de 20 años administrando inmuebles en Puebla. Tú recibes tu renta cada mes, nosotros nos encargamos del resto. Sin complicaciones.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/administracion" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver servicio de administración →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20administración%20de%20mi%20inmueble" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Consultar sin compromiso
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 24px" }}>Preguntas frecuentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 56 }}>
            {[
              { q: "¿Puedo terminar el contrato de administración cuando quiera?", a: "Sí. El contrato tiene vigencia de 1 año con renovación automática, pero cualquiera de las partes puede terminarlo con 30 días de aviso previo sin penalización." },
              { q: "¿Quién decide si se acepta a un inquilino?", a: "Tú como propietario tienes la decisión final. La administradora investiga y presenta candidatos, pero la aprobación es tuya." },
              { q: "¿Qué pasa si el inquilino deja de pagar?", a: "La administradora activa el proceso de cobranza extrajudicial. Si no hay resolución, se escala al proceso judicial. Si tienes también la póliza jurídica de Emporio Blindaje Legal, el respaldo jurídico está incluido." },
              { q: "¿Puedo contratar administración y póliza jurídica juntas?", a: "Sí y es lo que más recomendamos. La administración cubre la gestión diaria, y la póliza jurídica cubre el respaldo legal. Juntas son la protección completa para tu inmueble." },
              { q: "¿Cómo me entero de lo que pasa con mi propiedad?", a: "A través del portal digital de propietarios, donde puedes ver en tiempo real: rentas cobradas, reportes de mantenimiento, documentos del contrato y el historial completo de tu inmueble." },
            ].map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid #f3f4f6", padding: "24px 0" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>❓ {faq.q}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Relacionados */}
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>También te puede interesar</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ARTICULOS_RELACIONADOS.map(art => (
              <a key={art.slug} href={`/blog/${art.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", border: "1px solid #f3f4f6", borderRadius: 12 }}
                  onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
                  onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{art.emoji}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a2e" }}>{art.titulo}</span>
                  <span style={{ marginLeft: "auto", fontSize: 13, color: "#C8102E", fontWeight: 700, flexShrink: 0 }}>Leer →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <Footer />
        <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer"
          style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>
          💬
        </a>
      </div>
    </>
  );
}
