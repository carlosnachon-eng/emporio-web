import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "valquirico-inversion-2026", titulo: "Val'Quirico como inversión: por qué vivir ahí tiene sentido en 2026", emoji: "🏰" },
  { slug: "vivir-puebla-tlaxcala-zona-residencial-2026", titulo: "Vivir entre Puebla y Tlaxcala: la nueva zona residencial que crece en 2026", emoji: "🗺️" },
  { slug: "por-que-invertir-lomas-angelopolis-2026", titulo: "¿Por qué invertir en Lomas de Angelópolis III en 2026?", emoji: "📈" },
];

const DIFERENCIADORES = [
  {
    numero: "01",
    titulo: "35,000 m² de áreas verdes con casi 4,000 árboles",
    emoji: "🌳",
    descripcion: "No es jardinería ornamental. El diseño de Equiah integra vegetación a escala de ecosistema: árboles maduros, corredores verdes y espacios que regulan la temperatura natural del entorno. Esto tiene un efecto directo en el confort térmico de los departamentos y en la calidad del aire dentro del desarrollo.",
    dato: "35,000 m² · ~4,000 árboles",
  },
  {
    numero: "02",
    titulo: "4 paneles solares por departamento — no compartidos",
    emoji: "☀️",
    descripcion: "Cada unidad en Equiah incluye 4 paneles solares propios. Eso significa generación de energía directamente aplicada a tu departamento, con reducción real en el recibo de luz. No es una instalación compartida del desarrollo — es tuya, en tu unidad.",
    dato: "4 paneles por depto · generación propia",
  },
  {
    numero: "03",
    titulo: "Cerraduras y apagadores inteligentes incluidos",
    emoji: "🔐",
    descripcion: "La domótica en Equiah no es un extra — viene incluida en todos los departamentos. El control inteligente de accesos y sistemas eléctricos reduce el consumo innecesario y mejora la seguridad sin depender de sistemas externos.",
    dato: "Domótica incluida en todas las unidades",
  },
  {
    numero: "04",
    titulo: "Hípico propio dentro del desarrollo",
    emoji: "🐴",
    descripcion: "Equiah cuenta con instalaciones ecuestres dentro del desarrollo — caballerizas, corral y área de entrenamiento. Es un elemento único en la zona que define el tipo de comunidad que se forma: personas con un estilo de vida activo, orientado a la naturaleza y al bienestar.",
    dato: "Caballerizas · corral · pista de salto",
  },
  {
    numero: "05",
    titulo: "Alberca techada con carriles de nado",
    emoji: "🏊",
    descripcion: "Las amenidades de Equiah están diseñadas para el uso cotidiano, no para el marketing. Una alberca techada con carriles de nado es para quien nada regularmente. Lo mismo aplica para la sala de yoga, el gimnasio equipado y las canchas deportivas.",
    dato: "Alberca techada · gimnasio · yoga · tenis",
  },
];

export default function ArticuloVillaSustentableEquiah() {
  return (
    <>
      <Head>
        <title>Qué es una villa sustentable y por qué Equiah es diferente — Emporio Inmobiliario</title>
        <meta name="description" content="Equiah Villa Sustentable tiene 4 paneles solares por departamento, 35,000 m² de áreas verdes y hípico propio. Descubre qué hace realmente diferente a este desarrollo en Tlaxcala." />
        <meta name="keywords" content="equiah villa sustentable, departamentos sustentables Puebla Tlaxcala, villa sustentable Val Quirico, paneles solares departamento, Equiah preventa 2026" />
        <meta property="og:title" content="Qué es una villa sustentable y por qué Equiah es diferente" />
        <meta property="og:description" content="Paneles solares propios, 35,000 m² de áreas verdes, hípico y domótica incluida. Así es Equiah Villa Sustentable." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/que-es-villa-sustentable-equiah" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/que-es-villa-sustentable-equiah" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Qué es una villa sustentable y por qué Equiah es diferente",
          "description": "Análisis de los diferenciadores reales de Equiah Villa Sustentable: paneles solares, áreas verdes, hípico y domótica.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2026-06-01",
          "url": "https://www.emporioinmobiliario.com.mx/blog/que-es-villa-sustentable-equiah"
        })}} />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar />

        {/* HERO */}
        <div style={{ background: "linear-gradient(120deg, #2d3a2e 0%, #1a2a1e 100%)", padding: "64px 32px 56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,160,80,0.2) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <a href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Inicio</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <a href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Equiah sustentable</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(100,160,80,0.25)", border: "1px solid rgba(100,160,80,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#a8d4a6", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Sustentabilidad · Equiah</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Qué es una villa sustentable y por qué Equiah es diferente
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              El término "sustentable" se usa tanto en bienes raíces que ha perdido peso. Equiah va más lejos — y vale la pena explicar por qué eso importa tanto para quien va a vivir ahí como para quien lo ve como inversión.
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
            Un desarrollo inmobiliario sustentable es aquel que integra tecnología, diseño y operación para reducir su impacto ambiental y los costos de vida de sus residentes, sin sacrificar calidad ni confort. Cuando un desarrollo cumple esas condiciones, el resultado no es solo ambiental — es financiero.
          </p>

          <div style={{ background: "#f0fdf4", border: "1px solid #6ee7b7", borderRadius: 18, padding: "24px 26px", marginBottom: 48 }}>
            <p style={{ fontSize: 13, color: "#065f46", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Por qué importa como inversión</p>
            <p style={{ fontSize: 15, color: "#064e3b", lineHeight: 1.7, margin: 0 }}>
              Los inmuebles sustentables tienen costos operativos menores, mayor atractivo en el mercado de renta y mejor retención de valor a largo plazo. El comprador de vivienda hoy valora la sustentabilidad de forma diferente a generaciones anteriores.
            </p>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 24px" }}>Lo que hace diferente a Equiah</h2>

          {DIFERENCIADORES.map((item, i) => (
            <div key={i} style={{ marginBottom: 36, border: "1px solid #f3f4f6", borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ background: i % 2 === 0 ? "#2d3a2e" : "#1a1a2e", padding: "26px 30px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: -24, right: 8, fontSize: 82, opacity: 0.14 }}>{item.emoji}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 800, letterSpacing: "0.14em" }}>{item.numero}</span>
                  <h2 style={{ fontSize: 21, fontWeight: 900, color: "#fff", margin: "8px 0 4px", lineHeight: 1.25 }}>{item.titulo}</h2>
                  <span style={{ fontSize: 12, color: "#a8d4a6", fontWeight: 600 }}>{item.dato}</span>
                </div>
              </div>
              <div style={{ padding: "22px 30px", background: "#fff" }}>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, margin: 0 }}>{item.descripcion}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "8px 0 18px" }}>Equiah en números</h2>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 48, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            {[
              { label: "Modelo Encino", valor: "2 rec · 2.5 baños · 1 estudio · 161–169 m² · Desde $5,350,000" },
              { label: "Modelo Sauce", valor: "3 rec · 3.5 baños · family room · 243–253 m² · Desde $8,800,000" },
              { label: "Disponibles", valor: "7 unidades de 21 totales" },
              { label: "Ubicación", valor: "Junto a Val'Quirico · Nativitas, Tlaxcala" },
              { label: "Entregas", valor: "Desde junio 2026 hasta mayo 2027" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "130px 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: i > 0 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ padding: "13px 18px", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{row.label}</div>
                <div style={{ padding: "13px 18px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{row.valor}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: "#2d3a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(100,160,80,0.2)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#a8d4a6", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Equiah · 7 unidades disponibles</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Conoce los departamentos disponibles</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Encino desde $5,350,000 · Sauce desde $8,800,000. Tours virtuales disponibles.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/equiah" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver disponibilidad en Equiah →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Equiah%20Villa%20Sustentable" target="_blank" rel="noreferrer"
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
