import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "como-evitar-fraudes-inmobiliarios-puebla", titulo: "Cómo evitar fraudes inmobiliarios al comprar una casa en Puebla", emoji: "🚨" },
  { slug: "documentos-para-vender-casa-puebla", titulo: "7 documentos necesarios para vender una casa en Puebla", emoji: "📄" },
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
];

const PUNTOS_REVISION = [
  {
    numero: "01",
    titulo: "Verifica que quien vende sea realmente el propietario",
    emoji: "👤",
    descripcion:
      "Antes de firmar una promesa de compraventa o entregar un apartado, es indispensable confirmar que la persona que vende tenga facultades legales para hacerlo.",
    revisar: [
      "Identificación oficial vigente",
      "Nombre del propietario en la escritura",
      "Coincidencia entre documentos personales y datos del inmueble",
      "Si existen copropietarios, todos deben estar enterados y participar en la operación",
    ],
  },
  {
    numero: "02",
    titulo: "Revisa la escritura de la propiedad",
    emoji: "📜",
    descripcion:
      "No basta con que exista una escritura. Es importante revisar que corresponda al inmueble correcto y que los datos coincidan con la operación que se pretende firmar.",
    revisar: [
      "Nombre completo del propietario",
      "Datos del inmueble",
      "Medidas, colindancias y ubicación",
      "Antecedentes de adquisición",
      "Copropietarios o régimen de propiedad en condominio",
    ],
  },
  {
    numero: "03",
    titulo: "Confirma si hay gravámenes o adeudos importantes",
    emoji: "🏛️",
    descripcion:
      "Una propiedad puede parecer lista para venderse, pero tener hipotecas, adeudos o restricciones que retrasen la operación. Por eso conviene revisar este punto antes de avanzar.",
    revisar: [
      "Libertad de gravamen o consulta registral",
      "Predial actualizado",
      "Servicio de agua",
      "Cuotas de mantenimiento, si aplica",
      "Cancelaciones de hipoteca pendientes",
    ],
  },
  {
    numero: "04",
    titulo: "Deja claras las condiciones económicas",
    emoji: "💰",
    descripcion:
      "La promesa de compraventa debe explicar con claridad cuánto se aparta, cuánto se pagará después y en qué fechas. Las ambigüedades pueden causar conflictos.",
    revisar: [
      "Monto de apartado",
      "Monto de enganche",
      "Precio total de venta",
      "Forma de pago",
      "Fechas límite para cada pago",
      "Consecuencias si alguna parte incumple",
    ],
  },
  {
    numero: "05",
    titulo: "Revisa las penalizaciones y obligaciones de cada parte",
    emoji: "⚖️",
    descripcion:
      "La promesa no solo debe decir cuánto se pagará. También debe establecer qué pasa si el comprador se arrepiente, si el vendedor incumple o si la operación no puede seguir por causas documentales.",
    revisar: [
      "Penalización para comprador",
      "Penalización para vendedor",
      "Plazo para firmar escritura",
      "Documentos que debe entregar el propietario",
      "Condiciones para devolución o retención de cantidades",
    ],
  },
  {
    numero: "06",
    titulo: "Confirma que el comprador conoce el estado real del inmueble",
    emoji: "🏠",
    descripcion:
      "Antes de firmar, el comprador debe tener claridad sobre el estado físico, legal y documental de la propiedad. Esto reduce dudas y evita reclamos posteriores.",
    revisar: [
      "Estado de conservación",
      "Servicios funcionando",
      "Muebles o equipamiento incluidos",
      "Fecha probable de entrega",
      "Observaciones relevantes de la operación",
    ],
  },
];

export default function ArticuloPromesaCompraventa() {
  return (
    <>
      <Head>
        <title>Qué revisar antes de firmar una promesa de compraventa en Puebla — Emporio Inmobiliario</title>
        <meta
          name="description"
          content="Antes de firmar una promesa de compraventa en Puebla, revisa escritura, propietario, gravámenes, adeudos, pagos y penalizaciones para evitar problemas en tu operación inmobiliaria."
        />
        <meta
          name="keywords"
          content="promesa de compraventa Puebla, qué revisar antes de comprar casa, documentos para comprar casa Puebla, contrato promesa compraventa, comprar casa seguro Puebla"
        />
        <meta property="og:title" content="Qué revisar antes de firmar una promesa de compraventa en Puebla" />
        <meta
          property="og:description"
          content="Guía práctica para compradores: documentos, propietario, gravámenes, adeudos y condiciones que debes revisar antes de firmar."
        />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/que-revisar-antes-firmar-promesa-compraventa-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/que-revisar-antes-firmar-promesa-compraventa-puebla" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Qué revisar antes de firmar una promesa de compraventa en Puebla",
              description:
                "Guía para revisar documentos, propietario, gravámenes, pagos y condiciones antes de firmar una promesa de compraventa.",
              author: { "@type": "Organization", name: "Emporio Inmobiliario" },
              publisher: {
                "@type": "Organization",
                name: "Emporio Inmobiliario",
                url: "https://www.emporioinmobiliario.com.mx",
              },
              datePublished: "2026-05-25",
              url: "https://www.emporioinmobiliario.com.mx/blog/que-revisar-antes-firmar-promesa-compraventa-puebla",
            }),
          }}
        />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Promesa de compraventa</span>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Compra segura</span>
            </div>

            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Qué revisar antes de firmar una promesa de compraventa en Puebla
            </h1>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Antes de entregar dinero o comprometerte a comprar una propiedad, revisa estos puntos clave para evitar sorpresas con documentos, propietarios, adeudos o condiciones poco claras.
            </p>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 25 de mayo, 2026</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 6 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 28px" }}>
            Firmar una promesa de compraventa es uno de los momentos más importantes al comprar una casa o departamento. En esta etapa normalmente ya existe interés real, negociación avanzada y, en muchos casos, entrega de apartado o enganche.
          </p>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            El problema es que muchas personas llegan a este punto sin haber revisado bien los documentos. Esto puede provocar retrasos, dudas del comprador, conflictos entre las partes o incluso que la operación se caiga. Por eso, antes de firmar, conviene revisar estos puntos.
          </p>

          {/* Alerta */}
          <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 18, padding: "24px 26px", marginBottom: 48 }}>
            <p style={{ fontSize: 13, color: "#c2410c", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>Antes de firmar</p>
            <p style={{ fontSize: 16, color: "#7c2d12", lineHeight: 1.7, margin: 0 }}>
              No te quedes solo con la confianza verbal. Pide documentos, revisa datos y asegúrate de que las condiciones de la operación estén claras por escrito.
            </p>
          </div>

          {/* Puntos */}
          {PUNTOS_REVISION.map((punto, i) => (
            <div key={i} style={{ marginBottom: 42, border: "1px solid #f3f4f6", borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ background: i % 2 === 0 ? "#1a1a2e" : "#C8102E", padding: "26px 30px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: -24, right: 8, fontSize: 82, opacity: 0.14 }}>{punto.emoji}</div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 800, letterSpacing: "0.14em" }}>{punto.numero}</span>
                  <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff", margin: "8px 0 0", lineHeight: 1.25 }}>{punto.titulo}</h2>
                </div>
              </div>

              <div style={{ padding: "24px 30px", background: "#fff" }}>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, margin: "0 0 18px" }}>{punto.descripcion}</p>
                <p style={{ fontSize: 12, color: "#9ca3af", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>Qué revisar</p>
                <div style={{ display: "grid", gap: 8 }}>
                  {punto.revisar.map((item, j) => (
                    <p key={j} style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.5 }}>
                      <span style={{ color: "#C8102E", fontWeight: 900 }}>✓</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Resumen */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "8px 0 20px" }}>
            Resumen rápido antes de firmar
          </h2>

          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 48, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#1a1a2e" }}>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff" }}>Punto</div>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Por qué importa</div>
            </div>
            {[
              { punto: "Propietario", razon: "Confirma que la persona puede vender legalmente" },
              { punto: "Escritura", razon: "Permite revisar datos, antecedentes y copropietarios" },
              { punto: "Gravámenes", razon: "Evita sorpresas con hipotecas o limitaciones" },
              { punto: "Adeudos", razon: "Ayuda a definir quién paga qué antes de escriturar" },
              { punto: "Penalizaciones", razon: "Protege a ambas partes ante incumplimientos" },
              { punto: "Fechas", razon: "Da claridad sobre entregas, pagos y firma de escritura" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#C8102E", fontWeight: 800 }}>{row.punto}</div>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{row.razon}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 18px" }}>
            Entonces, ¿conviene firmar una promesa de compraventa?
          </h2>

          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Sí, una promesa de compraventa bien elaborada puede dar certeza al comprador y al vendedor. El punto no es evitar firmarla, sino firmarla con información clara, documentos revisados y condiciones bien establecidas.
          </p>

          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            En Emporio Inmobiliario acompañamos a nuestros clientes durante el proceso para que cada operación avance con orden, claridad y mayor tranquilidad para ambas partes.
          </p>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Compra con más claridad y menos incertidumbre</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Si estás por comprar una propiedad en Puebla, te acompañamos para revisar la operación, resolver dudas y avanzar con mayor seguridad.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propiedades" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver propiedades disponibles →
                </a>
                <a
                  href="https://wa.me/522222573237?text=Hola,%20estoy%20por%20comprar%20una%20propiedad%20y%20quiero%20asesoría%20antes%20de%20firmar"
                  target="_blank"
                  rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  💬 Pedir asesoría
                </a>
              </div>
            </div>
          </div>

          {/* Relacionados */}
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>También te puede interesar</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ARTICULOS_RELACIONADOS.map((art) => (
              <a key={art.slug} href={`/blog/${art.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", border: "1px solid #f3f4f6", borderRadius: 12 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafa")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                >
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{art.emoji}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a2e" }}>{art.titulo}</span>
                  <span style={{ marginLeft: "auto", fontSize: 13, color: "#C8102E", fontWeight: 700, flexShrink: 0 }}>Leer →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <Footer />
        <a
          href="https://wa.me/522222573237"
          target="_blank"
          rel="noreferrer"
          style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}
        >
          💬
        </a>
      </div>
    </>
  );
}
