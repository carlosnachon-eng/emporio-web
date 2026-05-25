import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "que-revisar-antes-firmar-promesa-compraventa-puebla", titulo: "Qué revisar antes de firmar una promesa de compraventa en Puebla", emoji: "📝" },
  { slug: "documentos-para-vender-casa-puebla", titulo: "7 documentos necesarios para vender una casa en Puebla", emoji: "📄" },
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
];

const SENALES = [
  {
    numero: "01",
    titulo: "Precio demasiado bajo",
    emoji: "💸",
    descripcion:
      "Un precio muy por debajo del mercado puede parecer una oportunidad, pero también puede ser una señal de alerta. Antes de avanzar, revisa por qué se está vendiendo así.",
    revisar: [
      "Precio promedio de propiedades similares",
      "Estado físico real del inmueble",
      "Motivo de venta",
      "Situación documental",
    ],
    riesgo: "Alto",
  },
  {
    numero: "02",
    titulo: "Presión para entregar dinero",
    emoji: "⏰",
    descripcion:
      "Frases como “hay otro comprador”, “solo hoy respeto el precio” o “aparta primero y luego vemos documentos” deben tomarse con cuidado.",
    revisar: [
      "Que existan documentos antes de pagar",
      "Que el apartado tenga condiciones claras",
      "Que se identifique a quien recibe el dinero",
      "Que todo quede por escrito",
    ],
    riesgo: "Alto",
  },
  {
    numero: "03",
    titulo: "Documentos incompletos",
    emoji: "📄",
    descripcion:
      "Si el vendedor no puede mostrar escritura, identificación, predial o documentos básicos, es mejor detenerse antes de firmar o pagar.",
    revisar: [
      "Escritura",
      "Identificación oficial",
      "CURP",
      "Predial",
      "Agua",
      "Documentos de condominio, si aplica",
    ],
    riesgo: "Alto",
  },
  {
    numero: "04",
    titulo: "El propietario no coincide con la escritura",
    emoji: "👤",
    descripcion:
      "Antes de comprar, confirma que la persona que vende sea realmente quien aparece como propietario o que tenga facultades legales para vender.",
    revisar: [
      "Nombre en escritura",
      "Identificación oficial",
      "Copropietarios",
      "Poder notarial, si aplica",
      "Datos consistentes entre documentos",
    ],
    riesgo: "Alto",
  },
  {
    numero: "05",
    titulo: "Información contradictoria",
    emoji: "⚠️",
    descripcion:
      "Si una persona dice una cosa, otra dice algo diferente o los documentos no coinciden, conviene revisar con más cuidado antes de avanzar.",
    revisar: [
      "Superficie del inmueble",
      "Precio acordado",
      "Forma de pago",
      "Nombre de propietarios",
      "Adeudos pendientes",
      "Fecha de entrega",
    ],
    riesgo: "Medio-Alto",
  },
  {
    numero: "06",
    titulo: "Operación sin asesoría profesional",
    emoji: "🏛️",
    descripcion:
      "Comprar una propiedad implica documentos, pagos, promesas, notaría y tiempos legales. Hacerlo sin acompañamiento puede aumentar el riesgo.",
    revisar: [
      "Acompañamiento profesional",
      "Revisión documental previa",
      "Contrato claro",
      "Penalizaciones y fechas definidas",
    ],
    riesgo: "Medio",
  },
];

export default function ArticuloFraudesInmobiliarios() {
  return (
    <>
      <Head>
        <title>Cómo evitar fraudes inmobiliarios al comprar una casa en Puebla — Emporio Inmobiliario</title>
        <meta
          name="description"
          content="Aprende cómo evitar fraudes inmobiliarios al comprar una casa en Puebla. Señales de alerta, documentos y recomendaciones para proteger tu inversión."
        />
        <meta
          name="keywords"
          content="fraudes inmobiliarios Puebla, evitar fraude inmobiliario, comprar casa Puebla seguro, documentos comprar casa Puebla, señales fraude inmobiliario"
        />
        <meta property="og:title" content="Cómo evitar fraudes inmobiliarios al comprar una casa en Puebla" />
        <meta
          property="og:description"
          content="Guía práctica para identificar señales de alerta, revisar documentos y comprar una propiedad con mayor tranquilidad."
        />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/como-evitar-fraudes-inmobiliarios-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/como-evitar-fraudes-inmobiliarios-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Cómo evitar fraudes inmobiliarios al comprar una casa en Puebla",
          "description": "Guía para identificar señales de alerta, revisar documentos y comprar una propiedad con mayor tranquilidad.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2026-05-25",
          "url": "https://www.emporioinmobiliario.com.mx/blog/como-evitar-fraudes-inmobiliarios-puebla"
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
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <a href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Fraudes inmobiliarios</span>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Compra segura</span>
            </div>

            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Cómo evitar fraudes inmobiliarios al comprar una casa en Puebla
            </h1>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Comprar una propiedad es una de las decisiones financieras más importantes. Conoce las señales de alerta y los documentos que debes revisar antes de entregar dinero o firmar.
            </p>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 25 de mayo, 2026</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 7 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 28px" }}>
            Comprar una casa o departamento genera emoción, pero también puede traer riesgos si no se revisan correctamente los documentos, la identidad del propietario y las condiciones de la operación.
          </p>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            Muchos problemas inmobiliarios no se detectan al inicio. Aparecen cuando el comprador ya entregó dinero, cuando se prepara la promesa de compraventa o incluso cuando la operación está cerca de llegar a notaría. Por eso, revisar antes es una de las mejores formas de proteger tu inversión.
          </p>

          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 18, padding: "24px 26px", marginBottom: 48 }}>
            <p style={{ fontSize: 13, color: "#991b1b", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Señal importante</p>
            <p style={{ fontSize: 16, color: "#7f1d1d", lineHeight: 1.7, margin: 0 }}>
              Si te presionan para entregar dinero antes de mostrar documentos o resolver dudas, detente. Una operación inmobiliaria seria debe permitirte revisar con claridad antes de comprometer recursos.
            </p>
          </div>

          {SENALES.map((senal, i) => (
            <div key={i} style={{ marginBottom: 42, border: "1px solid #f3f4f6", borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ background: i % 2 === 0 ? "#1a1a2e" : "#C8102E", padding: "26px 30px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: -24, right: 8, fontSize: 82, opacity: 0.14 }}>{senal.emoji}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 800, letterSpacing: "0.14em" }}>{senal.numero}</span>
                    <span style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", padding: "5px 12px", borderRadius: 99, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Riesgo {senal.riesgo}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff", margin: "8px 0 0", lineHeight: 1.25 }}>{senal.titulo}</h2>
                </div>
              </div>

              <div style={{ padding: "24px 30px", background: "#fff" }}>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, margin: "0 0 18px" }}>{senal.descripcion}</p>
                <p style={{ fontSize: 12, color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Qué revisar</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {senal.revisar.map((item, j) => (
                    <p key={j} style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.5 }}>
                      <span style={{ color: "#C8102E", fontWeight: 900 }}>✓</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "8px 0 20px" }}>
            Resumen rápido: señales de alerta
          </h2>

          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 48, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#1a1a2e" }}>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff" }}>Señal</div>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Qué puede significar</div>
            </div>
            {[
              { senal: "Precio demasiado bajo", riesgo: "Puede existir urgencia, problema documental o condición no revelada" },
              { senal: "Presión para pagar", riesgo: "Intento de cerrar antes de que revises documentos" },
              { senal: "Documentos incompletos", riesgo: "La propiedad puede no estar lista para venderse" },
              { senal: "Datos que no coinciden", riesgo: "Puede haber errores, copropietarios o falta de facultades" },
              { senal: "Promesa poco clara", riesgo: "Puede generar conflictos por pagos, fechas o penalizaciones" },
              { senal: "Sin acompañamiento", riesgo: "Aumenta la posibilidad de errores o decisiones apresuradas" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#C8102E", fontWeight: 800 }}>{row.senal}</div>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{row.riesgo}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 18px" }}>
            Entonces, ¿cómo comprar una propiedad con mayor tranquilidad?
          </h2>

          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            La mejor forma de reducir riesgos es revisar antes de entregar dinero. Esto incluye confirmar quién es el propietario, analizar la escritura, solicitar documentos básicos y dejar claras las condiciones de la operación.
          </p>

          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            En Emporio Inmobiliario acompañamos a compradores y propietarios para que las operaciones avancen con mayor orden, claridad y confianza.
          </p>

          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Compra con mayor confianza</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Si estás buscando casa o departamento en Puebla, te ayudamos a encontrar opciones y avanzar en el proceso con mayor claridad.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propiedades" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver propiedades disponibles →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20comprar%20una%20propiedad%20en%20Puebla%20y%20me%20gustaría%20recibir%20asesoría" target="_blank" rel="noreferrer"
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
