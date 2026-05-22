import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "como-rentar-departamento-puebla", titulo: "¿Cómo rentar un departamento en Puebla en 2025?", emoji: "🏠" },
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
  { slug: "administracion-inmuebles-puebla", titulo: "¿Vale la pena contratar administración de inmuebles en Puebla?", emoji: "⚙️" },
];

const COLONIAS = [
  {
    nombre: "Lomas de Angelópolis",
    emoji: "🏙️",
    renta: "$8,000 – $25,000",
    compra: "$1.8M – $6M",
    perfil: "Familias y ejecutivos",
    pros: ["Zona residencial consolidada", "Centros comerciales y servicios", "Buena conectividad a la autopista", "Opciones de preventa activas"],
    contras: ["Tráfico intenso en horas pico", "Precios por encima del promedio"],
    para: "Ideal para familias con hijos y ejecutivos que valoran servicios y plusvalía.",
    color: "#1a1a2e",
  },
  {
    nombre: "San Andrés Cholula",
    emoji: "🎓",
    renta: "$7,000 – $18,000",
    compra: "$1.5M – $4M",
    perfil: "Jóvenes, universitarios y parejas",
    pros: ["Ambiente dinámico y cosmopolita", "Zona gastronómica de primer nivel", "Cerca de UDLAP y otras universidades", "Alta demanda de renta"],
    contras: ["Mucho ruido nocturno en ciertas zonas", "Estacionamiento limitado"],
    para: "Perfecta para quienes buscan vida activa, buena gastronomía y ambiente joven.",
    color: "#C8102E",
  },
  {
    nombre: "Zerezotla / Reserva Atlixcáyotl",
    emoji: "✨",
    renta: "$9,000 – $22,000",
    compra: "$2M – $7M",
    perfil: "Ejecutivos y familias premium",
    pros: ["Zona tranquila y arbolada", "Alta plusvalía", "Cerca de corporativos y hospitales", "Seguridad privada en muchos desarrollos"],
    contras: ["Poca vida comercial caminable", "Requiere auto para todo"],
    para: "Para quienes buscan tranquilidad, seguridad y estatus en una zona de alto nivel.",
    color: "#1a1a2e",
  },
  {
    nombre: "Cuautlancingo",
    emoji: "🏭",
    renta: "$5,500 – $12,000",
    compra: "$900K – $2.5M",
    perfil: "Trabajadores industriales y familias",
    pros: ["Precios más accesibles", "Cerca del corredor industrial", "Buena infraestructura vial", "Opciones nuevas de desarrollo"],
    contras: ["Menos servicios que otras zonas", "Lejos del centro histórico"],
    para: "Excelente opción para trabajadores de la zona industrial y familias con presupuesto ajustado.",
    color: "#C8102E",
  },
  {
    nombre: "Centro Histórico",
    emoji: "🏛️",
    renta: "$6,000 – $15,000",
    compra: "$1.2M – $4M",
    perfil: "Profesionales y amantes de la cultura",
    pros: ["Ubicación privilegiada", "Rica oferta cultural y gastronómica", "Arquitectura única", "Fácil acceso a toda la ciudad"],
    contras: ["Tráfico y estacionamiento complicados", "Algunas zonas con inseguridad"],
    para: "Ideal para quienes valoran la vida urbana, la cultura y estar en el corazón de Puebla.",
    color: "#1a1a2e",
  },
];

export default function ArticuloColonias() {
  return (
    <>
      <Head>
        <title>Las mejores colonias para vivir en Puebla en 2025 — Emporio Inmobiliario</title>
        <meta name="description" content="Guía completa de las mejores zonas para vivir en Puebla: Lomas de Angelópolis, Cholula, Cuautlancingo, Centro Histórico y más. Precios de renta y compra por colonia 2025." />
        <meta name="keywords" content="mejores colonias puebla, dónde vivir en puebla, colonias seguras puebla, lomas angelópolis renta, san andrés cholula departamentos, cuautlancingo renta" />
        <meta property="og:title" content="Las mejores colonias para vivir en Puebla en 2025" />
        <meta property="og:description" content="Guía de las mejores zonas para vivir en Puebla con precios de renta y compra actualizados 2025." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/colonias-para-vivir-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/colonias-para-vivir-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Las mejores colonias para vivir en Puebla en 2025",
          "description": "Guía de las mejores zonas para vivir en Puebla con precios actualizados.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-06-19",
          "url": "https://www.emporioinmobiliario.com.mx/blog/colonias-para-vivir-puebla"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Colonias Puebla</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Mercado Inmobiliario</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Las mejores colonias para vivir en Puebla en 2025
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Desde Lomas de Angelópolis hasta el Centro Histórico. Comparamos las zonas más buscadas con precios de renta, compra y el perfil de cada colonia para que encuentres la que mejor se adapta a ti.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 19 de junio, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 7 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            Puebla ha crecido de forma acelerada en los últimos años. Lo que antes era periferia hoy son zonas consolidadas con servicios, plusvalía y alta demanda. Si estás buscando dónde vivir en Puebla — ya sea para rentar o comprar — esta guía te ayuda a comparar las principales zonas con datos reales del mercado.
          </p>

          {/* Colonias */}
          {COLONIAS.map((col, i) => (
            <div key={i} style={{ marginBottom: 48 }}>
              {/* Header de colonia */}
              <div style={{ background: col.color, borderRadius: "16px 16px 0 0", padding: "28px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: -20, right: -10, fontSize: 80, opacity: 0.15 }}>{col.emoji}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 28 }}>{col.emoji}</span>
                    <h2 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: 0 }}>{col.nombre}</h2>
                  </div>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>Perfil: {col.perfil}</span>
                </div>
              </div>

              {/* Precios */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderLeft: "1px solid #f3f4f6", borderRight: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ padding: "16px 24px", borderRight: "1px solid #f3f4f6" }}>
                  <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Renta mensual</p>
                  <p style={{ fontSize: 18, fontWeight: 900, color: "#C8102E", margin: 0 }}>{col.renta}</p>
                </div>
                <div style={{ padding: "16px 24px" }}>
                  <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Precio de compra</p>
                  <p style={{ fontSize: 18, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>{col.compra}</p>
                </div>
              </div>

              {/* Pros y contras */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #f3f4f6", borderTop: "none" }}>
                <div style={{ padding: "20px 24px", borderRight: "1px solid #f3f4f6" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#166534", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>✓ Ventajas</p>
                  {col.pros.map((pro, j) => (
                    <p key={j} style={{ fontSize: 13, color: "#374151", margin: "0 0 6px", lineHeight: 1.5 }}>• {pro}</p>
                  ))}
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#991b1b", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>✗ Desventajas</p>
                  {col.contras.map((con, j) => (
                    <p key={j} style={{ fontSize: 13, color: "#374151", margin: "0 0 6px", lineHeight: 1.5 }}>• {con}</p>
                  ))}
                </div>
              </div>

              {/* Para quién */}
              <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderTop: "none", borderRadius: "0 0 16px 16px", padding: "16px 24px" }}>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                  <strong style={{ color: "#1a1a2e" }}>¿Para quién es ideal?</strong> {col.para}
                </p>
              </div>
            </div>
          ))}

          {/* Resumen */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>
            ¿Cuál zona es la mejor para ti?
          </h2>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 48, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#1a1a2e" }}>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff" }}>Si buscas...</div>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Elige...</div>
            </div>
            {[
              { busca: "La mejor relación precio-calidad", elige: "San Andrés Cholula" },
              { busca: "Máxima plusvalía a largo plazo", elige: "Lomas de Angelópolis o Zerezotla" },
              { busca: "Precio más accesible", elige: "Cuautlancingo" },
              { busca: "Vida urbana y cultural", elige: "Centro Histórico" },
              { busca: "Tranquilidad y seguridad", elige: "Reserva Atlixcáyotl / Zerezotla" },
              { busca: "Ambiente joven y gastronómico", elige: "San Andrés Cholula" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#374151" }}>{row.busca}</div>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#C8102E", fontWeight: 700, borderLeft: "1px solid #f3f4f6" }}>{row.elige}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Tenemos propiedades en todas estas zonas</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Con más de 20 años en el mercado de Puebla, conocemos cada colonia a fondo. Cuéntanos qué buscas y te mostramos las mejores opciones disponibles.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propiedades" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver propiedades disponibles →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20busco%20propiedad%20en%20Puebla%20y%20quisiera%20orientación%20sobre%20zonas" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Pedir asesoría de zona
                </a>
              </div>
            </div>
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
