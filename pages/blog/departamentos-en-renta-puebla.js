import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "como-rentar-departamento-puebla", titulo: "¿Cómo rentar un departamento en Puebla en 2025?", emoji: "🏠" },
  { slug: "colonias-para-vivir-puebla", titulo: "Las mejores colonias para vivir en Puebla en 2025", emoji: "📍" },
  { slug: "quien-paga-poliza-juridica-arrendamiento", titulo: "¿Quién paga la póliza jurídica: el propietario o el inquilino?", emoji: "💰" },
];

const ZONAS = [
  { zona: "Lomas de Angelópolis", rango: "$8,000 – $20,000", perfil: "Ejecutivos y familias", tag: "Alta demanda", emoji: "🏙️", desc: "La zona residencial más consolidada del poniente de Puebla. Excelente oferta de departamentos nuevos con amenidades." },
  { zona: "San Andrés Cholula", rango: "$7,000 – $16,000", perfil: "Jóvenes y universitarios", tag: "Más buscada", emoji: "🎓", desc: "La zona con mayor demanda de renta en Puebla. Ambiente cosmopolita, gastronomía de primer nivel y alta rotación de inquilinos." },
  { zona: "Cuautlancingo", rango: "$5,500 – $10,000", perfil: "Trabajadores y familias", tag: "Precio accesible", emoji: "🏭", desc: "Ideal para trabajadores del corredor industrial. Precios más accesibles y buena infraestructura vial." },
  { zona: "Reserva Atlixcáyotl", rango: "$9,000 – $22,000", perfil: "Ejecutivos premium", tag: "Segmento alto", emoji: "✨", desc: "Zona tranquila y arbolada. Departamentos de alto nivel con seguridad privada y acceso a corporativos." },
  { zona: "Centro Histórico", rango: "$6,000 – $14,000", perfil: "Profesionales y creativos", tag: "Vida urbana", emoji: "🏛️", desc: "Para quienes valoran la vida urbana, la cultura y estar en el corazón de Puebla." },
];

export default function ArticuloDeptosRenta() {
  return (
    <>
      <Head>
        <title>Departamentos en Renta en Puebla 2025 — Zonas, precios y requisitos — Emporio Inmobiliario</title>
        <meta name="description" content="Encuentra departamentos en renta en Puebla. Precios por zona, requisitos para rentar y las mejores colonias en 2025. Lomas de Angelópolis, Cholula, Cuautlancingo y más." />
        <meta name="keywords" content="departamentos en renta puebla, departamentos renta cholula, renta lomas angelópolis, departamentos cuautlancingo renta, renta puebla 2025, apartamentos en renta puebla" />
        <meta property="og:title" content="Departamentos en Renta en Puebla 2025 — Zonas, precios y requisitos" />
        <meta property="og:description" content="Precios de renta por zona en Puebla y requisitos para rentar. Guía actualizada 2025." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/departamentos-en-renta-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/departamentos-en-renta-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Departamentos en Renta en Puebla 2025 — Zonas, precios y requisitos",
          "description": "Precios de renta por zona en Puebla y requisitos para rentar. Guía 2025.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-07-31",
          "url": "https://www.emporioinmobiliario.com.mx/blog/departamentos-en-renta-puebla"
        })}} />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <Navbar />

        <div style={{ background: "linear-gradient(120deg, #1a1a2e 0%, #0f1520 100%)", padding: "64px 32px 56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <a href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Inicio</a>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <a href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</a>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Departamentos en renta Puebla</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Guía para inquilinos</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Departamentos en renta en Puebla — Zonas, precios y requisitos 2025
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Guía completa con precios de renta por colonia, requisitos para rentar y cómo encontrar el departamento ideal en Puebla en 2025.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 31 de julio, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 5 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            El mercado de renta en Puebla es uno de los más dinámicos del país. La combinación de universidades, parques industriales, corporativos y un estilo de vida atractivo genera una demanda constante de departamentos en renta en zonas muy específicas. Si estás buscando departamento en Puebla, esta guía te ayuda a saber qué esperar en cada zona y cómo hacer el proceso más fácil.
          </p>

          {/* Zonas */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Precios de renta por zona en Puebla 2025</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
            {ZONAS.map((z, i) => (
              <div key={i} style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ background: i % 2 === 0 ? "#1a1a2e" : "#C8102E", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 22 }}>{z.emoji}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>{z.zona}</h3>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 20, fontWeight: 900, color: i % 2 === 0 ? "#f59e0b" : "#fff" }}>{z.rango}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, background: "rgba(255,255,255,0.15)", color: "#fff", padding: "4px 10px", borderRadius: 99 }}>{z.tag}</span>
                  </div>
                </div>
                <div style={{ padding: "16px 24px", background: "#fafafa", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <p style={{ fontSize: 14, color: "#6b7280", margin: 0, lineHeight: 1.6, flex: 1 }}>{z.desc}</p>
                  <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 600, whiteSpace: "nowrap" }}>Perfil: {z.perfil}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Requisitos */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Requisitos para rentar departamento en Puebla</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Los requisitos varían según el propietario, pero estos son los más comunes en el mercado formal de Puebla:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            {[
              { icon: "🪪", req: "INE vigente" },
              { icon: "💰", req: "3 meses de comprobantes de ingresos" },
              { icon: "🔒", req: "1 mes de depósito en garantía" },
              { icon: "💵", req: "1er mes de renta al firmar" },
              { icon: "📄", req: "Contrato mínimo de 1 año" },
              { icon: "🛡️", req: "Póliza jurídica (en lugar de aval)" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 10 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item.req}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "16px 20px", marginBottom: 48 }}>
            <p style={{ fontSize: 14, color: "#1e40af", fontWeight: 600, margin: "0 0 4px" }}>💡 Sobre la póliza jurídica</p>
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>
              En Puebla la póliza jurídica se usa cada vez más en lugar del aval. La paga el inquilino una vez al año y funciona como garantía del arrendamiento. <a href="/blog/quien-paga-poliza-juridica-arrendamiento" style={{ color: "#C8102E", fontWeight: 600 }}>Ver más sobre quién paga la póliza →</a>
            </p>
          </div>

          {/* Cuánto necesitas */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>¿Cuánto necesitas ahorrado para rentar?</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Al rentar un departamento en Puebla, el primer mes generalmente implica tres pagos simultáneos:
          </p>
          <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 16, padding: "28px 32px", marginBottom: 48 }}>
            {[
              { concepto: "Primer mes de renta", ejemplo: "$10,000" },
              { concepto: "Depósito en garantía (1 mes)", ejemplo: "$10,000" },
              { concepto: "Póliza jurídica (si aplica)", ejemplo: "$3,200 – $5,200" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < 2 ? "1px solid #f3f4f6" : "none" }}>
                <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item.concepto}</span>
                <span style={{ fontSize: 14, color: "#C8102E", fontWeight: 800 }}>{item.ejemplo}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0 0", marginTop: 4, borderTop: "2px solid #1a1a2e" }}>
              <span style={{ fontSize: 15, color: "#1a1a2e", fontWeight: 800 }}>Total aproximado inicial</span>
              <span style={{ fontSize: 18, color: "#1a1a2e", fontWeight: 900 }}>$23,200 – $25,200</span>
            </div>
            <p style={{ fontSize: 12, color: "#9ca3af", margin: "8px 0 0", fontStyle: "italic" }}>*Ejemplo para departamento con renta de $10,000/mes en Puebla.</p>
          </div>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>¿Buscas departamento en renta en Puebla?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Tenemos más de 30 propiedades en renta activas en Puebla, Cholula, Lomas de Angelópolis y Cuautlancingo. Te ayudamos a encontrar la que mejor se adapta a ti.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propiedades?operacion=rental" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver departamentos en renta →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20busco%20departamento%20en%20renta%20en%20Puebla" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Hablar con un asesor
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 24px" }}>Preguntas frecuentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 56 }}>
            {[
              { q: "¿Cuál es la zona más barata para rentar en Puebla?", a: "Cuautlancingo ofrece las rentas más accesibles de las zonas metropolitanas de Puebla, con departamentos desde $5,500/mes. También hay opciones en colonias del norte de la ciudad como San Baltazar Campeche o Santa Cruz Buenavista." },
              { q: "¿En qué zona hay más departamentos disponibles en Puebla?", a: "San Andrés Cholula y Lomas de Angelópolis concentran la mayor oferta de departamentos en renta en Puebla. La rotación en Cholula es alta por la presencia universitaria, lo que significa más opciones disponibles con frecuencia." },
              { q: "¿Puedo rentar si trabajo informal o tengo ingresos variables?", a: "Depende del propietario. Algunos aceptan estados de cuenta bancarios como comprobante. Es importante ser transparente desde el inicio y mostrar que tienes capacidad de pago sostenida, aunque no sea mediante nómina formal." },
              { q: "¿Cuánto tiempo tarda encontrar y rentar un departamento en Puebla?", a: "En zonas de alta demanda como Cholula, los buenos departamentos se rentan en días. Es recomendable tener tu documentación lista y actuar rápido cuando encuentres una opción que te convenga." },
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
