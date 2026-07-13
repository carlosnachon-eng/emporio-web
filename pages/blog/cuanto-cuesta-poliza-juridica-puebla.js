import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PRECIOS = [
  { renta: "Hasta $7,000",        costo: "$2,800" },
  { renta: "$7,001 a $10,000",    costo: "$3,200" },
  { renta: "$10,001 a $15,000",   costo: "$3,800" },
  { renta: "$15,001 a $20,000",   costo: "$4,500" },
  { renta: "$20,001 a $25,000",   costo: "$5,200" },
  { renta: "$25,001 a $30,000",   costo: "$6,100" },
  { renta: "$30,001 a $40,000",   costo: "$9,500" },
  { renta: "$40,001 a $50,000",   costo: "$12,500" },
  { renta: "$50,001 en adelante", costo: "25% de una renta mensual" },
];

const ARTICULOS_RELACIONADOS = [
  { slug: "poliza-juridica-vs-aval-puebla", titulo: "Póliza jurídica vs aval: ¿cuál conviene más en Puebla?", emoji: "⚖️" },
  { slug: "quien-paga-poliza-juridica-arrendamiento", titulo: "¿Quién paga la póliza jurídica: el propietario o el inquilino?", emoji: "💰" },
  { slug: "como-rentar-departamento-puebla", titulo: "¿Cómo rentar un departamento en Puebla en 2025?", emoji: "🏠" },
];

export default function ArticuloPolizaPrecio() {
  return (
    <>
      <Head>
        <title>¿Cuánto cuesta una póliza jurídica en Puebla?</title>
        <meta name="description" content="Consulta el precio de una póliza jurídica de arrendamiento en Puebla según la renta, qué incluye, su vigencia y quién debe pagarla." />
        <meta name="keywords" content="póliza jurídica puebla precio, cuánto cuesta póliza jurídica, póliza jurídica arrendamiento costo, precio póliza jurídica puebla 2025" />
        <meta property="og:title" content="¿Cuánto cuesta una póliza jurídica en Puebla?" />
        <meta property="og:description" content="Precio según el monto de renta, cobertura, vigencia y quién debe pagarla." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/cuanto-cuesta-poliza-juridica-puebla" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/cuanto-cuesta-poliza-juridica-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Cuánto cuesta una póliza jurídica en Puebla?",
          "description": "Tabla de precios actualizada de la póliza jurídica de arrendamiento en Puebla.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-05-22",
          "url": "https://www.emporioinmobiliario.com.mx/blog/cuanto-cuesta-poliza-juridica-puebla"
        })}} />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar />

        {/* Hero del artículo */}
        <div style={{ background: "linear-gradient(120deg, #1a1a2e 0%, #0f1520 100%)", padding: "64px 32px 56px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <a href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Inicio</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <a href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Póliza jurídica precio</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Póliza Jurídica</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Cuánto cuesta una póliza jurídica en Puebla?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Tabla de precios actualizada 2025. Desde $2,800 + IVA según el monto de tu renta mensual.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 22 de mayo, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 4 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          {/* Intro */}
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 32px", fontWeight: 400 }}>
            Si estás por rentar un inmueble en Puebla, una de las primeras preguntas que surge es: <strong>¿cuánto cuesta la póliza jurídica?</strong> La respuesta depende del monto de la renta mensual, y en este artículo te mostramos la tabla de precios completa con lo que incluye cada plan.
          </p>

          {/* Qué es */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            ¿Qué es una póliza jurídica de arrendamiento?
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 16px" }}>
            La póliza jurídica es un servicio que protege al propietario de un inmueble durante todo el periodo de arrendamiento. Incluye la investigación del inquilino antes de firmar el contrato, la elaboración del contrato de arrendamiento, y el respaldo jurídico para recuperar la propiedad si el inquilino incumple con sus obligaciones.
          </p>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            En Puebla, la póliza jurídica se ha convertido en el mecanismo más usado por propietarios en lugar del aval tradicional, ya que ofrece mayor seguridad y un proceso más ágil cuando hay problemas.
          </p>

          {/* Tabla de precios */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 8px" }}>
            Tabla de precios — Póliza Jurídica Puebla 2025
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", margin: "0 0 24px", lineHeight: 1.7 }}>
            Los precios varían según el monto de la renta mensual del inmueble. La póliza tiene vigencia de 12 meses.
          </p>

          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#C8102E" }}>
              <div style={{ padding: "14px 24px", fontSize: 13, fontWeight: 800, color: "#fff" }}>Renta mensual</div>
              <div style={{ padding: "14px 24px", fontSize: 13, fontWeight: 800, color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.2)" }}>Costo de la póliza</div>
            </div>
            {PRECIOS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "15px 24px", fontSize: 14, color: "#374151", fontWeight: 500 }}>{row.renta}</div>
                <div style={{ padding: "15px 24px", fontSize: 14, color: "#C8102E", fontWeight: 800, borderLeft: "1px solid #f3f4f6" }}>{row.costo}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic", margin: "0 0 48px" }}>
            *Todos los precios son más IVA. Vigencia 12 meses. Cobertura: investigación, contrato, pagarés y recuperación del inmueble.
          </p>

          {/* Qué incluye */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>
            ¿Qué incluye la póliza jurídica?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
            {[
              { icon: "🔍", title: "Investigación del candidato", desc: "Verificamos ingresos lícitos y comprobables, referencias personales, familiares y laborales, antecedentes jurídicos en Buró México y validamos todos los documentos del expediente." },
              { icon: "📊", title: "Dictamen formal", desc: "Emitimos un dictamen oficial del candidato para que el propietario tome una decisión informada antes de firmar." },
              { icon: "📄", title: "Contrato de arrendamiento", desc: "Elaboramos el contrato de arrendamiento redactado por especialistas, jurídicamente sólido y personalizado para cada inmueble." },
              { icon: "🛡️", title: "Póliza jurídica formal", desc: "Documento oficial con los términos de la cobertura durante los 12 meses de vigencia." },
              { icon: "⚖️", title: "Recuperación del inmueble", desc: "Si el inquilino incumple, activamos el proceso extrajudicial y judicial con nuestro despacho jurídico aliado para recuperar la propiedad." },
              { icon: "🔐", title: "Protección ante extinción de dominio", desc: "Resguardo legal frente a riesgos de lavado de dinero u otros ilícitos que puedan comprometer la propiedad." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", border: "1px solid #f3f4f6", borderRadius: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quién paga */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            ¿Quién paga la póliza jurídica?
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 16px" }}>
            En la mayoría de los casos en Puebla, <strong>la póliza jurídica es pagada por el inquilino</strong>. Esto se debe a que actualmente funciona como el mecanismo que reemplaza al aval tradicional — en lugar de conseguir un aval, el inquilino paga la póliza jurídica como garantía del arrendamiento.
          </p>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 48px" }}>
            Para el propietario esto es ventajoso: no tiene que asumir el costo del servicio, y al mismo tiempo cuenta con toda la protección jurídica durante la vigencia del contrato. Para el inquilino representa una alternativa más accesible que conseguir un aval en Puebla.
          </p>

          {/* CTA inline */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Blindaje Legal</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>¿Necesitas una póliza jurídica en Puebla?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                En Emporio Inmobiliario ofrecemos el servicio completo: investigación del inquilino, contrato y póliza jurídica. Más de 20 años protegiendo el patrimonio inmobiliario en Puebla.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/blindaje-legal" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver Emporio Blindaje Legal →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20la%20póliza%20jurídica" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Consultar precio exacto
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 24px" }}>
            Preguntas frecuentes
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 56 }}>
            {[
              { q: "¿La póliza jurídica sustituye al aval?", a: "Sí. En Puebla la póliza jurídica se usa cada vez más como alternativa al aval tradicional. El inquilino paga la póliza en lugar de conseguir un aval, y el propietario obtiene una protección jurídica más completa." },
              { q: "¿Cuánto tiempo tarda el proceso de investigación?", a: "El proceso de investigación del candidato tarda entre 24 y 72 horas hábiles dependiendo de la documentación. Una vez aprobado, el contrato y la póliza se emiten en el mismo día." },
              { q: "¿Qué pasa si el inquilino deja de pagar?", a: "Se activa primero el proceso extrajudicial de cobranza. Si no hay resolución, se procede con el proceso judicial para recuperar el inmueble a través del despacho jurídico aliado." },
              { q: "¿La póliza cubre rentas vencidas?", a: "La póliza cubre la recuperación del inmueble y la gestión jurídica del proceso. El cobro de rentas atrasadas depende del resultado del proceso legal correspondiente." },
              { q: "¿Se puede renovar la póliza al año?", a: "Sí. La póliza tiene vigencia de 12 meses y se puede renovar al vencimiento. En caso de renovación del contrato con el mismo inquilino, se aplica el mismo costo." },
            ].map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid #f3f4f6", padding: "24px 0" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>❓ {faq.q}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Artículos relacionados */}
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>También te puede interesar</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ARTICULOS_RELACIONADOS.map(art => (
              <a key={art.slug} href={`/blog/${art.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", border: "1px solid #f3f4f6", borderRadius: 12, transition: "background 0.15s" }}
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
