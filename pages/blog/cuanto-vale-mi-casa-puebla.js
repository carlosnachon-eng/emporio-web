import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "como-vender-casa-puebla-rapido", titulo: "¿Cómo vender una casa en Puebla rápido?", emoji: "🏡" },
  { slug: "colonias-para-vivir-puebla", titulo: "Las mejores colonias para vivir en Puebla en 2025", emoji: "📍" },
  { slug: "preventa-departamentos-puebla", titulo: "Departamentos en preventa en Puebla — qué considerar", emoji: "🏗️" },
];

const FACTORES = [
  { icon: "📍", factor: "Ubicación y colonia", desc: "Es el factor más determinante. Una propiedad en Lomas de Angelópolis puede valer el doble que una de características similares en una zona menos consolidada." },
  { icon: "📐", factor: "Metros cuadrados de construcción y terreno", desc: "El precio por m² varía según la zona. En Cholula ronda los $18,000–$28,000/m²; en Lomas de Angelópolis puede llegar a $35,000/m² o más." },
  { icon: "🔧", factor: "Estado de conservación", desc: "Una propiedad bien mantenida puede valer entre 10% y 20% más que una similar en mal estado. Las remodelaciones recientes suman valor real." },
  { icon: "🏗️", factor: "Antigüedad y tipo de construcción", desc: "Las construcciones nuevas o de menos de 10 años generalmente tienen mejor precio. Las más antiguas pueden compensar con ubicación o terreno." },
  { icon: "🚗", factor: "Accesibilidad y servicios cercanos", desc: "Cercanía a centros comerciales, hospitales, escuelas y vías rápidas impacta directamente en el valor de la propiedad." },
  { icon: "📊", factor: "Oferta y demanda en la zona", desc: "Si hay muchas propiedades similares en venta en tu colonia, el precio baja. Si la demanda es alta y la oferta escasa, el precio sube." },
];

const PRECIOS = [
  { zona: "Lomas de Angelópolis", casa: "$2.5M – $6M", depto: "$1.8M – $4M", terreno: "$4,000–$8,000/m²" },
  { zona: "San Andrés Cholula", casa: "$2M – $5M", depto: "$1.5M – $3.5M", terreno: "$3,500–$7,000/m²" },
  { zona: "Zerezotla / Atlixcáyotl", casa: "$3M – $8M", depto: "$2M – $5M", terreno: "$5,000–$10,000/m²" },
  { zona: "Cuautlancingo", casa: "$900K – $2.5M", depto: "$800K – $1.8M", terreno: "$1,500–$3,500/m²" },
  { zona: "Centro Histórico", casa: "$1.5M – $4M", depto: "$1.2M – $3M", terreno: "$3,000–$6,000/m²" },
];

export default function ArticuloCuantoVale() {
  return (
    <>
      <Head>
        <title>¿Cuánto vale mi casa en Puebla? Precios por zona 2025 — Emporio Inmobiliario</title>
        <meta name="description" content="Conoce el valor de tu propiedad en Puebla. Precios de casas, departamentos y terrenos por zona en 2025. Factores que determinan el precio y cómo hacer un avalúo." />
        <meta name="keywords" content="cuánto vale mi casa puebla, precio casas puebla 2025, valor propiedad puebla, avalúo inmueble puebla, precio m2 puebla, lomas angelópolis precio" />
        <meta property="og:title" content="¿Cuánto vale mi casa en Puebla? Precios por zona 2025" />
        <meta property="og:description" content="Precios de casas, departamentos y terrenos en Puebla por zona. Actualizado 2025." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/cuanto-vale-mi-casa-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/cuanto-vale-mi-casa-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Cuánto vale mi casa en Puebla? Precios por zona 2025",
          "description": "Precios de casas, departamentos y terrenos en Puebla por zona. Actualizado 2025.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-07-03",
          "url": "https://www.emporioinmobiliario.com.mx/blog/cuanto-vale-mi-casa-puebla"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>¿Cuánto vale mi casa?</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para propietarios</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Cuánto vale mi casa en Puebla?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Precios actualizados por zona, factores que determinan el valor de tu propiedad y cómo obtener un avalúo real en Puebla.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 3 de julio, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 5 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Saber cuánto vale tu propiedad es el primer paso antes de tomar cualquier decisión — ya sea venderla, rentarla, usarla como garantía o simplemente conocer el estado de tu patrimonio. En Puebla, los precios varían significativamente según la zona y varios factores que te explicamos a continuación.
          </p>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Factores que determinan el valor de tu propiedad</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
            {FACTORES.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", border: "1px solid #f3f4f6", borderRadius: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{f.factor}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Precios por zona en Puebla 2025</h2>
          <p style={{ fontSize: 15, color: "#6b7280", margin: "0 0 20px", lineHeight: 1.7 }}>Rangos aproximados de mercado para propiedades en buen estado de conservación.</p>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", background: "#C8102E" }}>
              {["Zona", "Casa", "Departamento", "Terreno /m²"].map((h, i) => (
                <div key={i} style={{ padding: "12px 16px", fontSize: 12, fontWeight: 800, color: "#fff", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>{h}</div>
              ))}
            </div>
            {PRECIOS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "13px 16px", fontSize: 13, color: "#1a1a2e", fontWeight: 700 }}>{row.zona}</div>
                <div style={{ padding: "13px 16px", fontSize: 13, color: "#C8102E", fontWeight: 700, borderLeft: "1px solid #f3f4f6" }}>{row.casa}</div>
                <div style={{ padding: "13px 16px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{row.depto}</div>
                <div style={{ padding: "13px 16px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{row.terreno}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic", margin: "0 0 48px" }}>*Precios de referencia de mercado. El valor exacto depende de las características específicas de cada propiedad.</p>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>¿Cómo saber el valor exacto de mi propiedad?</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 16px" }}>
            Los rangos de mercado te dan una idea general, pero el valor exacto de tu propiedad requiere un análisis más detallado. Hay tres formas de obtenerlo:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
            {[
              { num: "1", title: "Avalúo profesional", desc: "Lo realiza un perito valuador certificado. Es el método más preciso y es el que se usa para trámites bancarios, herencias o procesos legales. Costo aproximado: $3,000–$8,000 dependiendo del inmueble." },
              { num: "2", title: "Análisis comparativo de mercado", desc: "Una inmobiliaria con experiencia en tu zona puede hacer una estimación basada en propiedades similares que se han vendido recientemente en tu colonia. Es más rápido y generalmente gratuito." },
              { num: "3", title: "Portales inmobiliarios", desc: "Buscar propiedades similares en Inmuebles24 o Vivanuncios en tu colonia te da una referencia rápida, aunque no considera las características específicas de tu inmueble." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", border: "1px solid #f3f4f6", borderRadius: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, flexShrink: 0 }}>{item.num}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>¿Quieres saber cuánto vale tu propiedad en Puebla?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Con más de 20 años en el mercado inmobiliario de Puebla, podemos darte una estimación del valor de tu propiedad sin costo. Cuéntanos sobre tu inmueble y te respondemos.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20saber%20cuánto%20vale%20mi%20propiedad%20en%20Puebla" target="_blank" rel="noreferrer"
                  style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  💬 Consultar valor de mi propiedad
                </a>
                <a href="/propietarios" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  Ver servicios para propietarios →
                </a>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 24px" }}>Preguntas frecuentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 56 }}>
            {[
              { q: "¿Mi propiedad ha ganado plusvalía en los últimos años?", a: "En zonas como Lomas de Angelópolis, San Andrés Cholula y Zerezotla, la plusvalía ha sido consistente en los últimos 10 años. En términos generales, las propiedades bien ubicadas en Puebla han incrementado entre 8% y 15% anual en valor." },
              { q: "¿Vale más rentar o vender mi propiedad?", a: "Depende de tus necesidades de liquidez y del mercado en tu zona. Si el rendimiento de la renta es menor al 5% anual del valor del inmueble, puede ser más conveniente vender y reinvertir. Un asesor inmobiliario puede ayudarte a hacer ese cálculo." },
              { q: "¿Cuánto tiempo tarda vender una casa en Puebla?", a: "En zonas de alta demanda como Cholula o Lomas, una propiedad bien valuada puede venderse en 30-90 días. En zonas con menor demanda o propiedades sobrevaloradas, puede tomar 6 meses o más." },
            ].map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid #f3f4f6", padding: "24px 0" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>❓ {faq.q}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
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
