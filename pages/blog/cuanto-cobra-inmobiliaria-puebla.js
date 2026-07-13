import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "como-rentar-mi-casa-puebla", titulo: "¿Cómo rentar mi casa en Puebla? Guía para propietarios", emoji: "🏠" },
  { slug: "administracion-inmuebles-puebla", titulo: "¿Vale la pena contratar administración de inmuebles en Puebla?", emoji: "⚙️" },
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
];

export default function ArticuloCuantoCobra() {
  return (
    <>
      <Head>
        <title>¿Cuánto cobra una inmobiliaria en Puebla?</title>
        <meta name="description" content="Conoce la comisión de una inmobiliaria en Puebla por vender, rentar o administrar una propiedad, qué incluye y cuándo se paga." />
        <meta name="keywords" content="cuánto cobra inmobiliaria puebla, comisión inmobiliaria puebla, honorarios inmobiliaria puebla, costo inmobiliaria renta venta puebla" />
        <meta property="og:title" content="¿Cuánto cobra una inmobiliaria en Puebla?" />
        <meta property="og:description" content="Comisiones por vender, rentar y administrar una propiedad en Puebla." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/cuanto-cobra-inmobiliaria-puebla" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/cuanto-cobra-inmobiliaria-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Cuánto cobra una inmobiliaria en Puebla?",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-08-14",
          "url": "https://www.emporioinmobiliario.com.mx/blog/cuanto-cobra-inmobiliaria-puebla"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Comisiones inmobiliaria Puebla</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para propietarios</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Cuánto cobra una inmobiliaria en Puebla?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Comisiones reales del mercado para renta, venta y administración. Lo que incluye cada servicio y cómo evaluar si vale la pena.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 14 de agosto, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 4 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Una de las primeras preguntas que se hace un propietario al considerar trabajar con una inmobiliaria es cuánto le va a costar. La respuesta depende del tipo de servicio — no es lo mismo contratar a alguien para encontrar un inquilino que para administrar la propiedad de forma continua. Aquí te explicamos las comisiones reales del mercado en Puebla.
          </p>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Tabla de comisiones — mercado Puebla 2025</h2>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 48, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#C8102E" }}>
              {["Servicio", "Comisión típica", "Quién paga"].map((h, i) => (
                <div key={i} style={{ padding: "12px 20px", fontSize: 12, fontWeight: 800, color: "#fff", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>{h}</div>
              ))}
            </div>
            {[
              { servicio: "Colocación de inquilino (renta)", comision: "1 mes de renta", quien: "Propietario" },
              { servicio: "Administración mensual", comision: "10% de la renta", quien: "Propietario" },
              { servicio: "Venta de propiedad", comision: "3% a 5% del precio", quien: "Propietario" },
              { servicio: "Póliza jurídica", comision: "Desde $2,800/año", quien: "Inquilino" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "14px 20px", fontSize: 14, color: "#1a1a2e", fontWeight: 600 }}>{row.servicio}</div>
                <div style={{ padding: "14px 20px", fontSize: 14, color: "#C8102E", fontWeight: 800, borderLeft: "1px solid #f3f4f6" }}>{row.comision}</div>
                <div style={{ padding: "14px 20px", fontSize: 14, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{row.quien}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>¿Qué incluye cada servicio?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
            {[
              { titulo: "Colocación de inquilino — 1 mes de renta", items: ["Promoción en redes sociales y portales", "Atención a interesados y visitas", "Investigación del candidato", "Elaboración del contrato de arrendamiento", "Firma y entrega de llaves"] },
              { titulo: "Administración mensual — 10% de la renta", items: ["Todo lo de colocación incluido", "Cobranza mensual y liquidación al propietario", "Reporte mensual de ingresos y gastos", "Coordinación de mantenimiento", "Atención continua al inquilino", "Gestión de renovaciones"] },
              { titulo: "Venta — 3% a 5% del precio de venta", items: ["Valuación de mercado", "Promoción profesional con fotos y video", "Atención a compradores y visitas", "Negociación en representación del propietario", "Gestión del proceso legal hasta escrituración"] },
            ].map((serv, i) => (
              <div key={i} style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 14, padding: "24px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: "0 0 14px" }}>{serv.titulo}</h3>
                {serv.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                    <span style={{ color: "#C8102E", fontSize: 12, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>¿Vale la pena pagar la comisión?</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 16px" }}>
            La pregunta correcta no es cuánto cobra la inmobiliaria — sino cuánto te cuesta no contratarla. Considera esto:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              "Una propiedad vacía 2 meses por falta de difusión cuesta más que 1 mes de comisión",
              "Un inquilino mal investigado puede costarte 3-6 meses de renta perdida más un proceso legal",
              "El tiempo que inviertes en administrar tú mismo la propiedad tiene un costo real",
              "Una inmobiliaria con experiencia consigue mejores inquilinos y cierra más rápido",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "14px 16px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10 }}>
                <span style={{ color: "#166534", fontSize: 14, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: "#374151" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>¿Quieres saber cuánto vale tu propiedad y en cuánto se puede rentar?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>Sin compromiso. Te hacemos una evaluación gratuita y te explicamos todo el proceso.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propietarios" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver servicios para propietarios →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20rentar%20mi%20propiedad%20en%20Puebla" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Consultar sin compromiso
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
