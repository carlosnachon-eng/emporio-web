import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "como-rentar-mi-casa-puebla", titulo: "¿Cómo rentar mi casa en Puebla? Guía para propietarios", emoji: "🏠" },
  { slug: "como-saber-si-inquilino-es-confiable", titulo: "¿Cómo saber si un inquilino es confiable?", emoji: "🔍" },
  { slug: "cuanto-cobra-inmobiliaria-puebla", titulo: "¿Cuánto cobra una inmobiliaria en Puebla?", emoji: "💰" },
];

export default function ArticuloRequisitosRentar() {
  return (
    <>
      <Head>
        <title>Requisitos para rentar una propiedad en Puebla — Guía para propietarios 2025</title>
        <meta name="description" content="Todo lo que necesitas tener listo para rentar tu propiedad en Puebla: documentos, contrato, depósito, póliza jurídica y obligaciones fiscales del propietario." />
        <meta name="keywords" content="requisitos rentar propiedad puebla, documentos para rentar casa puebla, qué necesito para rentar mi propiedad puebla, obligaciones propietario arrendamiento puebla" />
        <meta property="og:title" content="Requisitos para rentar una propiedad en Puebla — Guía para propietarios 2025" />
        <meta property="og:description" content="Documentos, contrato, depósito y todo lo que necesitas para rentar tu propiedad en Puebla correctamente." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/requisitos-rentar-propiedad-puebla-propietario" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/requisitos-rentar-propiedad-puebla-propietario" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Requisitos para rentar una propiedad en Puebla — Guía para propietarios 2025",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-09-04",
          "url": "https://www.emporioinmobiliario.com.mx/blog/requisitos-rentar-propiedad-puebla-propietario"
        })}} />
      </Head>
      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar />
        <div style={{ background: "linear-gradient(120deg, #1a1a2e 0%, #0f1520 100%)", padding: "64px 32px 56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <a href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Inicio</a>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <a href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</a>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Requisitos para propietarios</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para propietarios</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Requisitos para rentar una propiedad en Puebla
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Todo lo que necesitas tener listo como propietario: documentos, contrato, depósito, póliza jurídica y obligaciones fiscales.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 4 de septiembre, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 5 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Muchos propietarios quieren rentar su propiedad pero no saben exactamente qué necesitan tener listo. La buena noticia es que el proceso no es complicado — pero sí requiere tener ciertos elementos en orden para que el arrendamiento funcione bien desde el inicio.
          </p>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Lo que necesitas como propietario</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
            {[
              { num: "01", titulo: "Escrituras de la propiedad", desc: "Documento que acredita que eres el dueño. No necesitas presentarlas al inquilino, pero sí tenerlas disponibles para el proceso de contrato y en caso de cualquier situación legal." },
              { num: "02", titulo: "Identificación oficial vigente", desc: "INE o pasaporte vigente del propietario. Si hay copropietarios, todos deben estar identificados y autorizados para el arrendamiento." },
              { num: "03", titulo: "Predial al corriente", desc: "El impuesto predial debe estar pagado. Algunos inquilinos lo piden como verificación de que la propiedad está en regla. Además es un requisito para trámites posteriores." },
              { num: "04", titulo: "Servicios en orden", desc: "Agua, luz y gas deben estar funcionando correctamente al momento de la entrega. Las lecturas iniciales de los medidores deben quedar registradas en el contrato." },
              { num: "05", titulo: "Contrato de arrendamiento", desc: "Elaborado por un especialista o inmobiliaria. Debe incluir: monto de renta, fecha de pago, depósito, vigencia, condiciones de renovación y cláusulas de terminación." },
              { num: "06", titulo: "Garantía del arrendamiento", desc: "Puedes pedir aval o póliza jurídica. En Puebla la póliza jurídica es cada vez más común porque ofrece mayor protección y el proceso de recuperación es más claro si algo falla." },
              { num: "07", titulo: "Depósito en garantía", desc: "Generalmente 1 mes de renta que se devuelve al final si la propiedad está en buen estado. Se recomienda especificar en el contrato las condiciones exactas de devolución." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 24px", border: "1px solid #f3f4f6", borderRadius: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, flexShrink: 0 }}>{item.num}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px" }}>{item.titulo}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Obligaciones fiscales del propietario</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Rentar una propiedad genera ingresos que debes declarar ante el SAT. Esto es algo que muchos propietarios desconocen o ignoran, pero es importante hacerlo correctamente.
          </p>
          <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 16, padding: "28px 32px", marginBottom: 48 }}>
            {[
              { titulo: "Régimen de Arrendamiento", desc: "Puedes tributar como persona física en el régimen de arrendamiento. Puedes deducir hasta el 35% de los ingresos en gastos o deducir gastos reales comprobables." },
              { titulo: "Emisión de CFDI", desc: "Debes emitir un recibo de arrendamiento (CFDI) mensualmente a tu inquilino. Esto protege a ambas partes y es obligatorio para deducibilidad." },
              { titulo: "Declaraciones mensuales o anuales", desc: "Dependiendo de tu situación fiscal, puede ser mensual o anual. Si tienes dudas, consulta a un contador — los costos de no declarar son mayores que los de cumplir." },
            ].map((item, i) => (
              <div key={i} style={{ paddingBottom: i < 2 ? 16 : 0, marginBottom: i < 2 ? 16 : 0, borderBottom: i < 2 ? "1px solid #f3f4f6" : "none" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px" }}>{item.titulo}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Te ayudamos a rentar tu propiedad correctamente</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Nos encargamos de todo el proceso — contrato, investigación del inquilino, póliza jurídica y administración mensual si lo necesitas.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propietarios" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver servicios para propietarios →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20rentar%20mi%20propiedad%20en%20Puebla" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Hablar con un asesor
                </a>
              </div>
            </div>
          </div>

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
