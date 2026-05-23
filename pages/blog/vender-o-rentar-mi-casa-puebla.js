import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "cuanto-vale-mi-casa-puebla", titulo: "¿Cuánto vale mi casa en Puebla? Precios por zona 2025", emoji: "💰" },
  { slug: "como-rentar-mi-casa-puebla", titulo: "¿Cómo rentar mi casa en Puebla?", emoji: "🏠" },
  { slug: "como-vender-casa-puebla-rapido", titulo: "¿Cómo vender una casa en Puebla rápido?", emoji: "🏡" },
];

export default function ArticuloVenderORentar() {
  return (
    <>
      <Head>
        <title>¿Conviene más vender o rentar mi casa en Puebla? — Emporio Inmobiliario</title>
        <meta name="description" content="¿Vender o rentar tu propiedad en Puebla? Comparamos ambas opciones con números reales para que tomes la mejor decisión según tu situación." />
        <meta name="keywords" content="vender o rentar mi casa puebla, conviene más vender o rentar puebla, qué hacer con mi propiedad puebla, rentabilidad renta vs venta puebla" />
        <meta property="og:title" content="¿Conviene más vender o rentar mi casa en Puebla?" />
        <meta property="og:description" content="Comparamos vender vs rentar con números reales para que tomes la mejor decisión para tu propiedad en Puebla." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/vender-o-rentar-mi-casa-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/vender-o-rentar-mi-casa-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Conviene más vender o rentar mi casa en Puebla?",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-09-11",
          "url": "https://www.emporioinmobiliario.com.mx/blog/vender-o-rentar-mi-casa-puebla"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>¿Vender o rentar?</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para propietarios</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Conviene más vender o rentar mi casa en Puebla?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              No hay una respuesta única — depende de tu situación financiera, tus planes a futuro y el mercado en tu zona. Te ayudamos a pensar la decisión con números reales.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 11 de septiembre, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 5 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Es una de las preguntas más frecuentes que recibimos en Emporio Inmobiliario: "tengo una propiedad y no sé si venderla o rentarla." La respuesta depende de varios factores — tu situación financiera, tus planes a futuro y lo que está pasando en el mercado de tu zona. Aquí te damos el análisis honesto.
          </p>

          {/* Comparativa */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Comparativa: vender vs rentar</h2>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 48, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", background: "#1a1a2e" }}>
              {["Aspecto", "Vender", "Rentar"].map((h, i) => (
                <div key={i} style={{ padding: "12px 20px", fontSize: 12, fontWeight: 800, color: i === 2 ? "#f59e0b" : "#fff", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>{h}</div>
              ))}
            </div>
            {[
              { aspecto: "Liquidez inmediata", vender: "✅ Alta — recibes todo el dinero", rentar: "❌ Baja — ingresos mensuales" },
              { aspecto: "Ingreso a largo plazo", vender: "❌ Una sola vez", rentar: "✅ Continuo mes a mes" },
              { aspecto: "Plusvalía futura", vender: "❌ Pierdes el activo", rentar: "✅ Conservas la propiedad" },
              { aspecto: "Esfuerzo de gestión", vender: "✅ Bajo — una sola transacción", rentar: "❌ Continuo (o delegado)" },
              { aspecto: "Riesgo", vender: "✅ Bajo — operación cerrada", rentar: "⚠️ Medio — depende del inquilino" },
              { aspecto: "Flexibilidad", vender: "❌ Irreversible", rentar: "✅ Puedes vender después" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#374151", fontWeight: 600 }}>{row.aspecto}</div>
                <div style={{ padding: "13px 20px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6", lineHeight: 1.5 }}>{row.vender}</div>
                <div style={{ padding: "13px 20px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6", lineHeight: 1.5 }}>{row.rentar}</div>
              </div>
            ))}
          </div>

          {/* El cálculo clave */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>El cálculo que te ayuda a decidir</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Existe una regla simple en inversión inmobiliaria: si la renta anual representa menos del 5% del valor de la propiedad, puede ser más conveniente vender y reinvertir ese capital en algo que genere mayor rendimiento.
          </p>
          <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 16, padding: "32px", marginBottom: 48 }}>
            <p style={{ fontSize: 13, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 16px" }}>Ejemplo con números reales</p>
            {[
              { concepto: "Valor de la propiedad", valor: "$3,000,000" },
              { concepto: "Renta mensual de mercado", valor: "$12,000/mes" },
              { concepto: "Renta anual bruta", valor: "$144,000" },
              { concepto: "Gastos anuales (admin, mantenimiento, vacancia)", valor: "~$28,800 (20%)" },
              { concepto: "Renta anual neta", valor: "$115,200" },
              { concepto: "Rendimiento anual neto", valor: "3.84% — Por debajo del 5%" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 5 ? "1px solid #f3f4f6" : "none" }}>
                <span style={{ fontSize: 14, color: "#374151" }}>{item.concepto}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: i === 5 ? "#C8102E" : "#1a1a2e" }}>{item.valor}</span>
              </div>
            ))}
            <p style={{ fontSize: 13, color: "#6b7280", margin: "16px 0 0", lineHeight: 1.7 }}>
              En este caso el rendimiento es bajo. Sin embargo, si la propiedad está en una zona con alta plusvalía como Lomas de Angelópolis o Cholula, el valor del activo puede crecer 8-12% anual — lo que cambia completamente el análisis.
            </p>
          </div>

          {/* Cuándo conviene cada opción */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>¿Cuándo conviene vender y cuándo rentar?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            {[
              {
                titulo: "Conviene VENDER si...",
                items: [
                  "Necesitas liquidez inmediata",
                  "La propiedad está en una zona con poca plusvalía",
                  "No quieres lidiar con inquilinos ni administración",
                  "El rendimiento por renta es menor al 5% anual",
                  "Tienes oportunidad de reinvertir en algo mejor",
                ],
                color: "#fff0f2", border: "#fecdd3", titleColor: "#991b1b"
              },
              {
                titulo: "Conviene RENTAR si...",
                items: [
                  "No necesitas el dinero de inmediato",
                  "La zona tiene alta demanda y buena plusvalía",
                  "Puedes delegar la administración",
                  "Quieres ingresos pasivos a largo plazo",
                  "No quieres perder el activo ahora",
                ],
                color: "#f0fdf4", border: "#bbf7d0", titleColor: "#166534"
              }
            ].map((col, i) => (
              <div key={i} style={{ background: col.color, border: `1px solid ${col.border}`, borderRadius: 14, padding: "20px 24px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: col.titleColor, margin: "0 0 14px" }}>{col.titulo}</h3>
                {col.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: col.titleColor, fontSize: 12, flexShrink: 0 }}>•</span>
                    <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>¿No sabes qué hacer con tu propiedad?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Te hacemos un análisis gratuito de tu propiedad — valor de mercado, renta estimada y nuestra recomendación honesta. Sin compromiso.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://wa.me/522222573237?text=Hola,%20no%20sé%20si%20vender%20o%20rentar%20mi%20propiedad%20en%20Puebla,%20quisiera%20asesoría" target="_blank" rel="noreferrer"
                  style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  💬 Quiero una evaluación gratuita
                </a>
                <a href="/propietarios" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  Ver servicios para propietarios →
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
