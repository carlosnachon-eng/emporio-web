import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
  { slug: "poliza-juridica-vs-aval-puebla", titulo: "Póliza jurídica vs aval: ¿cuál conviene más en Puebla?", emoji: "⚖️" },
  { slug: "como-rentar-departamento-puebla", titulo: "¿Cómo rentar un departamento en Puebla en 2025?", emoji: "🏠" },
];

export default function ArticuloQuienPaga() {
  return (
    <>
      <Head>
        <title>¿Quién paga la póliza jurídica de arrendamiento?</title>
        <meta name="description" content="Generalmente la paga el inquilino, pero puede negociarse. Conoce quién paga la póliza jurídica, cuánto cuesta y qué protege en Puebla." />
        <meta name="keywords" content="quién paga la póliza jurídica, póliza jurídica quién la paga, póliza jurídica arrendamiento quién paga, inquilino paga póliza jurídica puebla" />
        <meta property="og:title" content="¿Quién paga la póliza jurídica: el propietario o el inquilino?" />
        <meta property="og:description" content="En Puebla la póliza jurídica generalmente la paga el inquilino. Te explicamos por qué y qué incluye." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/quien-paga-poliza-juridica-arrendamiento" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="¿Quién paga la póliza jurídica de arrendamiento?" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/quien-paga-poliza-juridica-arrendamiento" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Quién paga la póliza jurídica: el propietario o el inquilino?",
          "description": "En Puebla la póliza jurídica generalmente la paga el inquilino como alternativa al aval.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-06-05",
          "url": "https://www.emporioinmobiliario.com.mx/blog/quien-paga-poliza-juridica-arrendamiento"
        })}} />
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>¿Quién paga la póliza?</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Póliza Jurídica</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Quién paga la póliza jurídica: el propietario o el inquilino?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Es una de las preguntas más frecuentes al tramitar un arrendamiento en Puebla. La respuesta corta: generalmente el inquilino. Aquí te explicamos por qué y en qué casos cambia.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 5 de junio, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 3 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          {/* Respuesta directa */}
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 16, padding: "28px 32px", marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#166534", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>Respuesta rápida</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#166534", margin: 0, lineHeight: 1.6 }}>
              En la mayoría de los arrendamientos en Puebla, <strong>la póliza jurídica la paga el inquilino</strong> — no el propietario. Funciona como la alternativa moderna al aval tradicional.
            </p>
          </div>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Cuando un propietario decide rentar su inmueble con póliza jurídica en lugar de aval, es el inquilino quien asume ese costo como parte de los requisitos para poder rentar. Esto tiene una lógica clara que vale la pena entender desde ambos lados.
          </p>

          {/* Perspectiva del inquilino */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            Desde la perspectiva del inquilino
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 16px" }}>
            Para el inquilino, la póliza jurídica reemplaza la necesidad de conseguir un aval. En lugar de pedirle a un familiar o conocido que firme como aval — lo que cada vez es más difícil — el inquilino paga una vez al año un monto equivalente a la póliza según el valor de su renta.
          </p>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 32px" }}>
            Para muchos inquilinos esto es en realidad una ventaja: no tienen que depender de terceros, el proceso es más rápido, y el costo es conocido desde el inicio.
          </p>

          {/* Cuánto paga el inquilino */}
          <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 16, padding: "28px 32px", marginBottom: 40 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a2e", margin: "0 0 16px" }}>¿Cuánto paga exactamente el inquilino?</h3>
            <p style={{ fontSize: 15, color: "#6b7280", margin: "0 0 16px", lineHeight: 1.7 }}>
              El costo depende del monto de la renta mensual. Algunos ejemplos:
            </p>
            {[
              { renta: "Renta de $8,000/mes", costo: "$3,200 + IVA al año" },
              { renta: "Renta de $12,000/mes", costo: "$3,800 + IVA al año" },
              { renta: "Renta de $18,000/mes", costo: "$4,500 + IVA al año" },
              { renta: "Renta de $25,000/mes", costo: "$5,200 + IVA al año" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: i % 2 === 0 ? "#fff" : "transparent", borderRadius: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item.renta}</span>
                <span style={{ fontSize: 14, color: "#C8102E", fontWeight: 800 }}>{item.costo}</span>
              </div>
            ))}
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "12px 0 0", fontStyle: "italic" }}>
              *Pago único anual. Ver tabla completa en <a href="/blindaje-legal" style={{ color: "#C8102E", fontWeight: 600 }}>Emporio Blindaje Legal</a>.
            </p>
          </div>

          {/* Perspectiva del propietario */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            Desde la perspectiva del propietario
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 16px" }}>
            Para el propietario, la póliza jurídica le da protección completa sin tener que pagar por ella directamente. El costo corre a cuenta del inquilino, y el propietario obtiene la investigación del candidato, el contrato elaborado por especialistas y el respaldo jurídico en caso de incumplimiento.
          </p>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Es una estructura que beneficia a ambas partes: el inquilino puede rentar sin aval, y el propietario tiene un proceso formal de selección y protección jurídica durante todo el arrendamiento.
          </p>

          {/* ¿Hay casos donde paga el propietario? */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            ¿Hay casos donde paga el propietario?
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Sí, aunque es menos común. Algunos propietarios deciden absorber el costo de la póliza como parte de su estrategia para atraer a mejores inquilinos, especialmente en inmuebles de alto valor o cuando la demanda es baja. En ese caso, lo ofrecen como un diferenciador: "renta sin aval y sin costo de póliza para ti". Pero en el mercado de Puebla, lo más común es que lo pague el inquilino.
          </p>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Blindaje Legal</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>
                ¿Necesitas tramitar tu póliza jurídica?
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                En Emporio Inmobiliario el proceso es 100% digital. El candidato sube su expediente, nosotros investigamos y emitimos el dictamen, el contrato y la póliza. Todo en un solo servicio.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/blindaje-legal" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver Emporio Blindaje Legal →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20la%20póliza%20jurídica" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Consultar sin compromiso
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 24px" }}>Preguntas frecuentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 56 }}>
            {[
              { q: "¿La póliza jurídica se paga cada año?", a: "Sí. La póliza tiene vigencia de 12 meses. Si el contrato se renueva con el mismo inquilino, se tramita una nueva póliza por el mismo monto." },
              { q: "¿Se puede incluir el costo de la póliza en la renta mensual?", a: "No directamente. La póliza es un pago único al inicio del arrendamiento, no un cargo mensual. Algunas partes negocian que el propietario lo absorba y lo amortice en el precio de renta, pero es una negociación particular." },
              { q: "¿Qué pasa si el inquilino no quiere pagar la póliza?", a: "El propietario puede negarse a rentar bajo esas condiciones. La póliza jurídica es un requisito que el propietario establece, igual que el depósito o cualquier otro término del contrato." },
              { q: "¿La póliza jurídica es obligatoria en Puebla?", a: "No es obligatoria por ley, pero sí es cada vez más común como práctica estándar en el mercado inmobiliario de Puebla, especialmente en inmuebles formalmente administrados." },
            ].map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid #f3f4f6", padding: "24px 0" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>❓ {faq.q}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Relacionados */}
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
