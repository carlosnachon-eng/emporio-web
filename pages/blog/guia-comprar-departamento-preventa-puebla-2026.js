import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "por-que-invertir-lomas-angelopolis-2026", titulo: "¿Por qué invertir en Lomas de Angelópolis III en 2026?", emoji: "📈" },
  { slug: "torre-zaia-vs-rentar-puebla-2026", titulo: "Torre Zaia vs rentar en Puebla: ¿qué conviene más en 2026?", emoji: "🏠" },
  { slug: "como-evitar-fraudes-inmobiliarios-puebla", titulo: "Cómo evitar fraudes inmobiliarios al comprar una casa en Puebla", emoji: "🛡️" },
];

const PASOS = [
  {
    numero: "01",
    titulo: "Define tu presupuesto real",
    emoji: "💰",
    descripcion: "Antes de visitar cualquier proyecto, calcula cuánto puedes destinar con precisión. No solo el enganche — el flujo completo.",
    puntos: [
      "Enganche: generalmente entre 10% y 30% del precio total",
      "Mensualidades durante obra: pide el desglose exacto",
      "Saldo a la entrega: generalmente con crédito hipotecario",
      "Gastos adicionales: escrituración y gestoría, aprox. 5-7% del valor",
    ],
  },
  {
    numero: "02",
    titulo: "Investiga al desarrollador",
    emoji: "🔍",
    descripcion: "Este es el paso más importante y el que más se omite. Antes de firmar cualquier documento verifica que el proyecto tenga respaldo real.",
    puntos: [
      "Proyectos anteriores entregados por el desarrollador",
      "Permisos de construcción vigentes",
      "Inscripción en el Registro Público de la Propiedad",
      "Referencias de compradores en proyectos previos",
    ],
  },
  {
    numero: "03",
    titulo: "Entiende el contrato de promesa de compraventa",
    emoji: "📝",
    descripcion: "El contrato que firmas en preventa no es la escritura final — es una promesa. Revisa con especial atención estas cláusulas antes de firmar.",
    puntos: [
      "Precio fijo vs precio sujeto a ajuste",
      "Fecha de entrega y penalizaciones por retraso",
      "Condiciones de devolución si no puedes completar la compra",
      "Especificaciones del inmueble: materiales, acabados, dimensiones",
    ],
  },
  {
    numero: "04",
    titulo: "Prepara tu crédito hipotecario con tiempo",
    emoji: "🏦",
    descripcion: "No esperes a que el proyecto esté terminado. Los bancos tardan entre 4 y 8 semanas en aprobar un crédito hipotecario y requieren documentación que toma tiempo recopilar.",
    puntos: [
      "Inicia el proceso de pre-autorización antes de firmar",
      "Ten listo tu comprobante de ingresos y estados de cuenta",
      "Compara productos hipotecarios de distintos bancos",
      "Usa un simulador de crédito para conocer tu capacidad real",
    ],
  },
  {
    numero: "05",
    titulo: "Visita el proyecto y la zona",
    emoji: "📍",
    descripcion: "No compres a distancia si puedes evitarlo. Una visita al sitio te da información que ninguna presentación puede reemplazar.",
    puntos: [
      "Ver el avance real de la obra",
      "Conocer la zona y sus servicios actuales",
      "Entender la orientación y vistas del departamento",
      "Hacer preguntas directas al equipo comercial",
    ],
  },
  {
    numero: "06",
    titulo: "Cierra con claridad por escrito",
    emoji: "✅",
    descripcion: "Antes de firmar confirma por escrito todo lo que acordaste verbalmente. Nada debe quedar en supuestos.",
    puntos: [
      "Número de unidad y nivel exacto que adquieres",
      "Precio total con y sin IVA",
      "Calendario de pagos completo",
      "Fecha estimada de entrega",
    ],
  },
];

export default function ArticuloGuiaPreventa() {
  return (
    <>
      <Head>
        <title>Guía completa: cómo comprar un departamento en preventa en Puebla 2026 — Emporio Inmobiliario</title>
        <meta name="description" content="Guía paso a paso para comprar un departamento en preventa en Puebla en 2026. Qué revisar, cómo preparar el crédito y cómo evitar errores comunes." />
        <meta name="keywords" content="comprar departamento preventa Puebla 2026, guía preventa inmobiliaria, cómo comprar preventa México, departamentos nuevos Puebla, Torre Zaia preventa" />
        <meta property="og:title" content="Guía completa: cómo comprar un departamento en preventa en Puebla 2026" />
        <meta property="og:description" content="6 pasos para comprar en preventa en Puebla con seguridad. Desde el presupuesto hasta el cierre." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/guia-comprar-departamento-preventa-puebla-2026" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/guia-comprar-departamento-preventa-puebla-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Guía completa: cómo comprar un departamento en preventa en Puebla 2026",
          "description": "6 pasos para comprar en preventa en Puebla con seguridad en 2026.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2026-06-01",
          "url": "https://www.emporioinmobiliario.com.mx/blog/guia-comprar-departamento-preventa-puebla-2026"
        })}} />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Guía preventa 2026</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Guía de compra</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Guía completa: cómo comprar un departamento en preventa en Puebla 2026
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Comprar en preventa tiene ventajas claras, pero requiere saber qué revisar antes de firmar. Esta guía te lleva paso a paso para que tomes la decisión con información completa.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 1 de junio, 2026</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 8 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 28px" }}>
            La preventa es la etapa en la que un desarrollo inmobiliario ofrece sus unidades antes de que la construcción esté terminada. El comprador aparta la unidad a un precio preferencial y paga en etapas durante el período de obra, liquidando el saldo restante al momento de la entrega.
          </p>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            En Puebla, los proyectos en preventa activos en 2026 tienen entregas proyectadas entre 2026 y 2028. Aquí están los 6 pasos para hacer el proceso correctamente.
          </p>

          {PASOS.map((paso, i) => (
            <div key={i} style={{ marginBottom: 42, border: "1px solid #f3f4f6", borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ background: i % 2 === 0 ? "#1a1a2e" : "#C8102E", padding: "26px 30px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: -24, right: 8, fontSize: 82, opacity: 0.14 }}>{paso.emoji}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 800, letterSpacing: "0.14em" }}>Paso {paso.numero}</span>
                  <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff", margin: "8px 0 0", lineHeight: 1.25 }}>{paso.titulo}</h2>
                </div>
              </div>
              <div style={{ padding: "24px 30px", background: "#fff" }}>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, margin: "0 0 18px" }}>{paso.descripcion}</p>
                <p style={{ fontSize: 12, color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Qué revisar</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {paso.puntos.map((punto, j) => (
                    <p key={j} style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.5 }}>
                      <span style={{ color: "#C8102E", fontWeight: 900 }}>✓</span> {punto}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: "#fef9ec", border: "1px solid #fcd34d", borderRadius: 18, padding: "24px 26px", marginBottom: 48 }}>
            <p style={{ fontSize: 13, color: "#92400e", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>¿Por qué Puebla en 2026?</p>
            <p style={{ fontSize: 15, color: "#78350f", lineHeight: 1.7, margin: 0 }}>
              Puebla combina crecimiento urbano sostenido en San Andrés Cholula, demanda habitacional activa, presencia universitaria y empresarial, y proyectos de infraestructura que siguen elevando la conectividad regional. Zonas como Lomas de Angelópolis III tienen el respaldo de años de consolidación en etapas anteriores.
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Te acompañamos en cada paso</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Si estás considerando un departamento en preventa en Puebla, nuestro equipo puede orientarte desde la elección del proyecto hasta el cierre. Más de 20 años de experiencia en el mercado local.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propiedades" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver propiedades en preventa →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20comprar%20un%20departamento%20en%20preventa%20en%20Puebla" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Pedir asesoría
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
