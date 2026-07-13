import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "por-que-invertir-lomas-angelopolis-2026", titulo: "¿Por qué invertir en Lomas de Angelópolis III en 2026?", emoji: "📈" },
  { slug: "guia-comprar-departamento-preventa-puebla-2026", titulo: "Guía completa: cómo comprar un departamento en preventa en Puebla 2026", emoji: "📋" },
  { slug: "como-evitar-fraudes-inmobiliarios-puebla", titulo: "Cómo evitar fraudes inmobiliarios al comprar una casa en Puebla", emoji: "🛡️" },
];

const COMPARATIVA = [
  { concepto: "Pago mensual", renta: "$12,000–$18,000 MXN en renta", compra: "Mensualidades durante obra comparables o menores" },
  { concepto: "Acumulado en 3 años", renta: "$432,000–$648,000 MXN sin recuperar", compra: "Pagos que forman parte de tu activo" },
  { concepto: "Plusvalía", renta: "0% — no te corresponde nada", compra: "100% tuya como propietario" },
  { concepto: "Flexibilidad", renta: "Alta — puedes moverte fácilmente", compra: "Menor — requiere compromiso a largo plazo" },
  { concepto: "Patrimonio", renta: "No se construye", compra: "Se construye desde el primer pago" },
  { concepto: "Amenidades", renta: "Según el inmueble — generalmente limitadas", compra: "25+ amenidades premium en Parque Alcumbre" },
];

export default function ArticuloTorreZaiaVsRentar() {
  return (
    <>
      <Head>
        <title>Torre Zaia vs rentar en Puebla: ¿qué conviene más en 2026? — Emporio Inmobiliario</title>
        <meta name="description" content="Comparativa real entre comprar en Torre Zaia o seguir rentando en Puebla en 2026. Análisis de costos, plusvalía y patrimonio para tomar la mejor decisión." />
        <meta name="keywords" content="comprar o rentar Puebla 2026, Torre Zaia preventa, departamentos preventa puebla, conviene comprar departamento Puebla, renta vs compra Puebla" />
        <meta property="og:title" content="Torre Zaia vs rentar en Puebla: ¿qué conviene más en 2026?" />
        <meta property="og:description" content="Análisis honesto entre comprar en preventa y seguir rentando en Puebla. Con números reales." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/torre-zaia-vs-rentar-puebla-2026" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/torre-zaia-vs-rentar-puebla-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Torre Zaia vs rentar en Puebla: ¿qué conviene más en 2026?",
          "description": "Comparativa real entre comprar en Torre Zaia o seguir rentando en Puebla en 2026.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2026-06-01",
          "url": "https://www.emporioinmobiliario.com.mx/blog/torre-zaia-vs-rentar-puebla-2026"
        })}} />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <Navbar />

        {/* HERO */}
        <div style={{ background: "linear-gradient(120deg, #1a1a2e 0%, #0f1520 100%)", padding: "64px 32px 56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <a href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Inicio</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <a href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Comprar vs rentar</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Análisis de inversión</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Torre Zaia vs rentar en Puebla: ¿qué conviene más en 2026?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Una comparativa honesta con números reales para ayudarte a decidir entre comprar en preventa o seguir rentando en el área metropolitana de Puebla.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 1 de junio, 2026</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 7 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 28px" }}>
            Es una de las preguntas más frecuentes que recibimos: ¿me conviene seguir rentando o es mejor comprar un departamento en preventa? No hay una respuesta única, pero sí hay variables concretas que ayudan a decidir. Aquí las analizamos con números reales.
          </p>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 18px" }}>El costo de rentar en Lomas de Angelópolis hoy</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Un departamento de 2 recámaras en Lomas de Angelópolis o San Andrés Cholula ronda entre <strong>$12,000 y $18,000 MXN mensuales</strong> en 2026. Eso significa que en 3 años habrás pagado entre $432,000 y $648,000 MXN en renta — dinero que no regresa, no genera activo y no construye patrimonio.
          </p>

          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 18, padding: "24px 26px", marginBottom: 40 }}>
            <p style={{ fontSize: 13, color: "#991b1b", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>El dato que cambia la perspectiva</p>
            <p style={{ fontSize: 16, color: "#7f1d1d", lineHeight: 1.7, margin: 0 }}>
              En 3 años de renta puedes pagar entre $432,000 y $648,000 MXN. Ese mismo dinero, aplicado como enganche y mensualidades en Torre Zaia, forma parte de un activo tuyo con plusvalía propia.
            </p>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 18px" }}>Tabla comparativa: comprar vs rentar</h2>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 48, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#1a1a2e", minWidth: 500 }}>
              {["Concepto", "Seguir rentando", "Comprar en Torre Zaia"].map((h, i) => (
                <div key={i} style={{ padding: "14px 18px", fontSize: 12, fontWeight: 800, color: "#fff", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>{h}</div>
              ))}
            </div>
            {COMPARATIVA.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6", minWidth: 500 }}>
                <div style={{ padding: "13px 18px", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{row.concepto}</div>
                <div style={{ padding: "13px 18px", fontSize: 13, color: "#6b7280", borderLeft: "1px solid #f3f4f6" }}>{row.renta}</div>
                <div style={{ padding: "13px 18px", fontSize: 13, color: "#065f46", fontWeight: 600, borderLeft: "1px solid #f3f4f6" }}>{row.compra}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 18px" }}>¿Cuándo sí conviene seguir rentando?</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Ser honesto también implica decir cuándo no tiene sentido comprar. Rentar puede ser la decisión correcta si tienes alta posibilidad de cambio de ciudad en los próximos 2-3 años, si no tienes aún el enganche ni la estabilidad de ingresos para calificar a un crédito hipotecario, o si estás en una etapa de vida donde la flexibilidad vale más que la estabilidad patrimonial.
          </p>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            Pero si ninguna de esas condiciones aplica, seguir rentando en 2026 tiene un costo de oportunidad real y creciente.
          </p>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 18px" }}>¿Cómo entrar a Torre Zaia hoy?</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            Torre Zaia tiene departamentos desde <strong>$2,056,025 MXN</strong> con enganche desde el 10% — aproximadamente $205,600 MXN al apartar. Las mensualidades durante obra son en muchos casos comparables o menores a lo que pagas de renta hoy, con la diferencia de que ese dinero va hacia un activo tuyo. El saldo restante se cubre con crédito hipotecario a la entrega en diciembre de 2027.
          </p>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Torre Zaia · Lomas de Angelópolis III</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>¿Quieres ver los números para tu caso específico?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Un asesor de Emporio Inmobiliario puede mostrarte el desglose de pagos exacto y compararlo con lo que pagas de renta hoy. Sin compromiso.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/torre-zaia" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver disponibilidad en Torre Zaia →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20comparar%20comprar%20vs%20rentar%20en%20Torre%20Zaia" target="_blank" rel="noreferrer"
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
