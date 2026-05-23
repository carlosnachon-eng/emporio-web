import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS = [
  {
    slug: "cuanto-cuesta-poliza-juridica-puebla",
    titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?",
    descripcion: "Tabla de precios actualizada de la póliza jurídica de arrendamiento en Puebla. Desde $2,800 + IVA según el monto de tu renta mensual. Vigencia 12 meses.",
    categoria: "Póliza Jurídica",
    fecha: "22 de mayo, 2025",
    lectura: "4 min",
    emoji: "🛡️",
    color: "#1a1a2e",
  },
  {
    slug: "poliza-juridica-vs-aval-puebla",
    titulo: "Póliza jurídica vs aval: ¿cuál conviene más en Puebla?",
    descripcion: "Cada vez más propietarios en Puebla prefieren la póliza jurídica al aval tradicional. Te explicamos por qué y cuál es mejor para tu caso.",
    categoria: "Póliza Jurídica",
    fecha: "29 de mayo, 2025",
    lectura: "5 min",
    emoji: "⚖️",
    color: "#C8102E",
  },
  {
    slug: "quien-paga-poliza-juridica-arrendamiento",
    titulo: "¿Quién paga la póliza jurídica: el propietario o el inquilino?",
    descripcion: "La respuesta corta es: generalmente el inquilino. Te explicamos por qué funciona así y qué incluye ese costo.",
    categoria: "Póliza Jurídica",
    fecha: "5 de junio, 2025",
    lectura: "3 min",
    emoji: "💰",
    color: "#1a1a2e",
  },
  {
    slug: "como-rentar-departamento-puebla",
    titulo: "¿Cómo rentar un departamento en Puebla en 2025?",
    descripcion: "Guía completa para inquilinos: requisitos, zonas más buscadas, precios promedio y cómo evitar fraudes al rentar en Puebla.",
    categoria: "Guías",
    fecha: "12 de junio, 2025",
    lectura: "6 min",
    emoji: "🏠",
    color: "#C8102E",
  },
  {
    slug: "colonias-para-vivir-puebla",
    titulo: "Las mejores colonias para vivir en Puebla en 2025",
    descripcion: "Desde Lomas de Angelópolis hasta Cholula. Comparamos las zonas más buscadas para rentar o comprar en Puebla según tu estilo de vida y presupuesto.",
    categoria: "Mercado Inmobiliario",
    fecha: "19 de junio, 2025",
    lectura: "7 min",
    emoji: "📍",
    color: "#1a1a2e",
  },
  {
    slug: "administracion-inmuebles-puebla",
    titulo: "¿Vale la pena contratar administración de inmuebles en Puebla?",
    descripcion: "Si tienes una o más propiedades en renta en Puebla, la administración profesional puede ahorrarte tiempo, dinero y conflictos.",
    categoria: "Administración",
    fecha: "26 de junio, 2025",
    lectura: "5 min",
    emoji: "⚙️",
    color: "#C8102E",
  },
  {
    slug: "cuanto-vale-mi-casa-puebla",
    titulo: "¿Cuánto vale mi casa en Puebla? Precios por zona 2025",
    descripcion: "Conoce el valor de tu propiedad en Puebla. Precios de casas, departamentos y terrenos por zona en 2025. Factores que determinan el precio.",
    categoria: "Mercado Inmobiliario",
    fecha: "3 de julio, 2025",
    lectura: "5 min",
    emoji: "💰",
    color: "#1a1a2e",
  },
  {
    slug: "como-vender-casa-puebla-rapido",
    titulo: "¿Cómo vender una casa en Puebla rápido?",
    descripcion: "Guía completa para vender tu propiedad en Puebla al mejor precio y en el menor tiempo posible. Lo que funciona y los errores que cuestan caro.",
    categoria: "Guías",
    fecha: "10 de julio, 2025",
    lectura: "6 min",
    emoji: "🏡",
    color: "#C8102E",
  },
  {
    slug: "preventa-departamentos-puebla",
    titulo: "Departamentos en preventa en Puebla — qué considerar antes de comprar",
    descripcion: "Ventajas, riesgos y qué revisar al comprar en preventa en Puebla. Las zonas con mejor plusvalía y Torre Zaia en Lomas de Angelópolis III.",
    categoria: "Inversión",
    fecha: "17 de julio, 2025",
    lectura: "6 min",
    emoji: "🏗️",
    color: "#1a1a2e",
  },
  {
    slug: "casas-en-venta-puebla",
    titulo: "Casas en venta en Puebla — Guía completa 2025",
    descripcion: "Precios por zona, tipos de propiedad, opciones de crédito y todo lo que necesitas saber para comprar casa en Puebla en 2025.",
    categoria: "Guías",
    fecha: "24 de julio, 2025",
    lectura: "6 min",
    emoji: "🏡",
    color: "#C8102E",
  },
  {
    slug: "departamentos-en-renta-puebla",
    titulo: "Departamentos en renta en Puebla — Zonas, precios y requisitos 2025",
    descripcion: "Guía completa con precios de renta por colonia, requisitos para rentar y cómo encontrar el departamento ideal en Puebla en 2025.",
    categoria: "Guías",
    fecha: "31 de julio, 2025",
    lectura: "5 min",
    emoji: "🏠",
    color: "#1a1a2e",
  },,
  {
    slug: "como-rentar-mi-casa-puebla",
    titulo: "¿Cómo rentar mi casa en Puebla? Guía para propietarios",
    descripcion: "Desde fijar el precio correcto hasta encontrar al inquilino ideal y proteger tu patrimonio. Todo lo que necesitas saber como propietario.",
    categoria: "Para propietarios",
    fecha: "7 de agosto, 2025",
    lectura: "6 min",
    emoji: "🏠",
    color: "#1a1a2e",
  },
  {
    slug: "cuanto-cobra-inmobiliaria-puebla",
    titulo: "¿Cuánto cobra una inmobiliaria en Puebla? Comisiones 2025",
    descripcion: "Comisiones reales del mercado para renta, venta y administración en Puebla. Lo que incluye cada servicio y cómo evaluar si vale la pena.",
    categoria: "Para propietarios",
    fecha: "14 de agosto, 2025",
    lectura: "4 min",
    emoji: "💰",
    color: "#C8102E",
  },
  {
    slug: "como-saber-si-inquilino-es-confiable",
    titulo: "¿Cómo saber si un inquilino es confiable?",
    descripcion: "Señales de alerta, documentos que debes pedir y cómo hacer una investigación formal antes de entregar las llaves de tu propiedad.",
    categoria: "Para propietarios",
    fecha: "21 de agosto, 2025",
    lectura: "5 min",
    emoji: "🔍",
    color: "#1a1a2e",
  },
  {
    slug: "requisitos-rentar-propiedad-puebla-propietario",
    titulo: "Requisitos para rentar una propiedad en Puebla — Guía para propietarios",
    descripcion: "Documentos, contrato, depósito, póliza jurídica y obligaciones fiscales. Todo lo que necesitas tener listo para rentar correctamente.",
    categoria: "Para propietarios",
    fecha: "4 de septiembre, 2025",
    lectura: "5 min",
    emoji: "📋",
    color: "#C8102E",
  },
  {
    slug: "vender-o-rentar-mi-casa-puebla",
    titulo: "¿Conviene más vender o rentar mi casa en Puebla?",
    descripcion: "Comparamos ambas opciones con números reales para que tomes la mejor decisión según tu situación financiera y la zona de tu propiedad.",
    categoria: "Para propietarios",
    fecha: "11 de septiembre, 2025",
    lectura: "5 min",
    emoji: "⚖️",
    color: "#1a1a2e",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog Inmobiliario Puebla — Emporio Inmobiliario</title>
        <meta name="description" content="Guías, consejos y noticias sobre el mercado inmobiliario en Puebla. Aprende sobre póliza jurídica, renta, venta, preventa y administración de propiedades en Puebla." />
        <meta name="keywords" content="blog inmobiliario puebla, consejos renta puebla, póliza jurídica puebla, mercado inmobiliario puebla, guía rentar puebla, vender casa puebla" />
        <meta property="og:title" content="Blog Inmobiliario Puebla — Emporio Inmobiliario" />
        <meta property="og:description" content="Guías y consejos sobre el mercado inmobiliario en Puebla." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog" />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar />

        {/* Hero */}
        <div style={{ background: "linear-gradient(120deg, #1a1a2e 0%, #0f1520 100%)", padding: "64px 32px 56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Recursos</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>Blog Inmobiliario</h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
              Guías, consejos y todo lo que necesitas saber sobre el mercado inmobiliario en Puebla.
            </p>
          </div>
        </div>

        {/* Grid de artículos */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {ARTICULOS.map((art) => (
              <a key={art.slug} href={`/blog/${art.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ background: art.color, padding: "32px 28px 24px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", bottom: -20, right: -10, fontSize: 80, opacity: 0.15 }}>{art.emoji}</div>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 12 }}>{art.categoria}</span>
                    <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.3 }}>{art.titulo}</h2>
                  </div>
                  <div style={{ padding: "20px 28px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: "0 0 20px" }}>{art.descripcion}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: "#9ca3af" }}>{art.fecha} · {art.lectura} lectura</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#C8102E" }}>Leer →</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#fafafa", borderTop: "1px solid #f3f4f6", padding: "56px 32px", textAlign: "center" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#1a1a2e", margin: "0 0 12px" }}>¿Tienes dudas sobre tu propiedad?</h2>
            <p style={{ fontSize: 15, color: "#6b7280", margin: "0 0 28px", lineHeight: 1.7 }}>Nuestros asesores te responden sin compromiso por WhatsApp.</p>
            <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer"
              style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
              💬 Hablar con un asesor
            </a>
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
