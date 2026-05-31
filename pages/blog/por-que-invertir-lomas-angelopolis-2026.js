import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "torre-zaia-vs-rentar-puebla-2026", titulo: "Torre Zaia vs rentar en Puebla: ¿qué conviene más en 2026?", emoji: "🏠" },
  { slug: "guia-comprar-departamento-preventa-puebla-2026", titulo: "Guía completa: cómo comprar un departamento en preventa en Puebla 2026", emoji: "📋" },
  { slug: "como-evitar-fraudes-inmobiliarios-puebla", titulo: "Cómo evitar fraudes inmobiliarios al comprar una casa en Puebla", emoji: "🛡️" },
];

const RAZONES = [
  {
    numero: "01",
    titulo: "La zona con mayor crecimiento del área metropolitana",
    emoji: "📈",
    descripcion: "Lomas de Angelópolis III es donde está ocurriendo el mayor dinamismo inmobiliario de San Andrés Cholula hoy. Es la etapa con mayor disponibilidad de suelo nuevo, lo que atrae desarrolladores, comercios y servicios que aún no están completamente instalados. Quien entra hoy lo hace antes de que los precios reflejen toda esa consolidación.",
    puntos: [
      "Mayor oferta de suelo nuevo en la zona metropolitana",
      "Llegada constante de comercios y servicios nuevos",
      "Proyectos de infraestructura vial en desarrollo",
      "Demanda residencial activa y creciente",
    ],
  },
  {
    numero: "02",
    titulo: "Barrio Cascatta: el detonador de plusvalía",
    emoji: "🏙️",
    descripcion: "El nuevo Barrio Cascatta en Parque Alcumbre es posiblemente el factor más importante para entender por qué Lomas III está creciendo tan rápido. Cuando un nodo comercial de ese nivel se instala en una zona, los precios de los inmuebles cercanos históricamente suben entre 15% y 25% en los primeros tres años de operación. Estamos justo en ese período.",
    puntos: [
      "Nuevo polo comercial y de entretenimiento activo",
      "Diseño contemporáneo de escala íntima",
      "A 2 minutos de Torre Zaia",
      "Efecto probado de plusvalía en zonas similares",
    ],
  },
  {
    numero: "03",
    titulo: "Preventa: la ventana de entrada más conveniente",
    emoji: "🔑",
    descripcion: "Los departamentos en Torre Zaia tienen precios que parten desde $2,056,025 MXN con enganche desde el 10%. Eso es significativamente menor al precio que tendrán esas mismas unidades al momento de la entrega en diciembre de 2027. La preventa no solo ofrece precios más bajos — ofrece tiempo para preparar el financiamiento.",
    puntos: [
      "Precio de preventa desde $2,056,025 MXN",
      "Enganche desde el 10%",
      "Mensualidades durante construcción",
      "Crédito hipotecario a la entrega en dic 2027",
    ],
  },
  {
    numero: "04",
    titulo: "Conectividad que sigue mejorando",
    emoji: "🗺️",
    descripcion: "Lomas de Angelópolis III está sobre el eje de crecimiento natural de San Andrés Cholula hacia el sur. Para 2027 — cuando se entreguen proyectos como Torre Zaia — la infraestructura estará aún más consolidada, lo que se traduce directamente en mayor demanda y por tanto mayor valor del inmueble.",
    puntos: [
      "Acceso directo a Angelópolis en 15 minutos",
      "Conexión con la autopista México-Puebla",
      "Vialidades en constante mejora",
      "Cercanía al aeropuerto internacional",
    ],
  },
];

export default function ArticuloInvertirLomasAngelopolis() {
  return (
    <>
      <Head>
        <title>¿Por qué invertir en Lomas de Angelópolis III en 2026? — Emporio Inmobiliario</title>
        <meta name="description" content="Descubre por qué Lomas de Angelópolis III es la zona con mayor plusvalía en Puebla en 2026. Barrio Cascatta, preventa Torre Zaia y oportunidades de inversión inmobiliaria." />
        <meta name="keywords" content="invertir lomas de angelópolis 2026, plusvalía lomas angelópolis, departamentos preventa lomas angelópolis III, Torre Zaia inversión, San Andrés Cholula inversión inmobiliaria" />
        <meta property="og:title" content="¿Por qué invertir en Lomas de Angelópolis III en 2026?" />
        <meta property="og:description" content="Lomas de Angelópolis III tiene la mayor plusvalía en Puebla. Descubre por qué y cómo entrar hoy con Torre Zaia." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/por-que-invertir-lomas-angelopolis-2026" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/por-que-invertir-lomas-angelopolis-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Por qué invertir en Lomas de Angelópolis III en 2026?",
          "description": "Razones concretas para invertir en Lomas de Angelópolis III en 2026: plusvalía, Barrio Cascatta, Torre Zaia y conectividad.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2026-06-01",
          "url": "https://www.emporioinmobiliario.com.mx/blog/por-que-invertir-lomas-angelopolis-2026"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Invertir en Lomas III</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Inversión inmobiliaria</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Por qué invertir en Lomas de Angelópolis III en 2026?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Si estás evaluando dónde poner tu dinero en bienes raíces este año, Lomas de Angelópolis III tiene argumentos sólidos que vale la pena conocer. No es opinión — son datos y tendencias concretas.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 1 de junio, 2026</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 6 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 28px" }}>
            Lomas de Angelópolis lleva más de una década consolidándose como la expansión residencial más importante de San Andrés Cholula. Pero la tercera etapa es donde está ocurriendo el mayor dinamismo hoy — y quien entra ahora captura la plusvalía que todavía está por delante.
          </p>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            Aquí están las cuatro razones concretas por las que 2026 es un buen año para invertir en esta zona.
          </p>

          {RAZONES.map((razon, i) => (
            <div key={i} style={{ marginBottom: 42, border: "1px solid #f3f4f6", borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ background: i % 2 === 0 ? "#1a1a2e" : "#C8102E", padding: "26px 30px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: -24, right: 8, fontSize: 82, opacity: 0.14 }}>{razon.emoji}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 800, letterSpacing: "0.14em" }}>{razon.numero}</span>
                  <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff", margin: "8px 0 0", lineHeight: 1.25 }}>{razon.titulo}</h2>
                </div>
              </div>
              <div style={{ padding: "24px 30px", background: "#fff" }}>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, margin: "0 0 18px" }}>{razon.descripcion}</p>
                <p style={{ fontSize: 12, color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Puntos clave</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {razon.puntos.map((punto, j) => (
                    <p key={j} style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.5 }}>
                      <span style={{ color: "#C8102E", fontWeight: 900 }}>✓</span> {punto}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: "#fef9ec", border: "1px solid #fcd34d", borderRadius: 18, padding: "24px 26px", marginBottom: 48 }}>
            <p style={{ fontSize: 13, color: "#92400e", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>¿Para qué perfil de comprador?</p>
            <p style={{ fontSize: 15, color: "#78350f", lineHeight: 1.7, margin: 0 }}>
              Lomas III encaja bien para el <strong>inversionista patrimonial</strong> que busca plusvalía probada, el <strong>comprador de primera vivienda</strong> que quiere estrenar en zona consolidada, y quien busca <strong>diversificar</strong> con un segundo activo de horizonte claro.
            </p>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 18px" }}>Lo que hay que considerar antes de decidir</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Invertir en preventa implica confiar en un desarrollador y en sus plazos. Por eso es importante revisar el historial del proyecto, los permisos de construcción, el contrato de promesa de compraventa y las condiciones de devolución en caso de incumplimiento.
          </p>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            También hay que tener claro el esquema de pago completo — enganche, mensualidades durante obra y financiamiento a la entrega — para asegurarse de que el flujo es manejable.
          </p>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Torre Zaia · Lomas de Angelópolis III</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Desde $2,056,025 · Enganche desde 10%</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                40 departamentos en preventa en Parque Alcumbre. 6 tipologías. Entrega diciembre 2027. Consulta disponibilidad sin compromiso.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/torre-zaia" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver departamentos disponibles →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Torre%20Zaia" target="_blank" rel="noreferrer"
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
