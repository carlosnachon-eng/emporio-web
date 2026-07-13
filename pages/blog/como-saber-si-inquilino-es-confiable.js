import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
  { slug: "poliza-juridica-vs-aval-puebla", titulo: "Póliza jurídica vs aval: ¿cuál conviene más?", emoji: "⚖️" },
  { slug: "como-rentar-mi-casa-puebla", titulo: "¿Cómo rentar mi casa en Puebla?", emoji: "🏠" },
];

export default function ArticuloInquilinoConfiable() {
  return (
    <>
      <Head>
        <title>¿Cómo saber si un inquilino es confiable? Guía para propietarios — Emporio Inmobiliario</title>
        <meta name="description" content="Aprende a identificar a un buen inquilino antes de firmar el contrato. Señales de alerta, documentos que debes pedir y cómo hacer una investigación formal en Puebla." />
        <meta name="keywords" content="cómo saber si inquilino es confiable, investigar inquilino puebla, verificar inquilino arrendamiento, señales mal inquilino puebla, requisitos inquilino puebla" />
        <meta property="og:title" content="¿Cómo saber si un inquilino es confiable? Guía para propietarios" />
        <meta property="og:description" content="Señales de alerta, documentos clave y cómo hacer una investigación formal antes de rentar tu propiedad." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/como-saber-si-inquilino-es-confiable" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/como-saber-si-inquilino-es-confiable" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Cómo saber si un inquilino es confiable?",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-08-21",
          "url": "https://www.emporioinmobiliario.com.mx/blog/como-saber-si-inquilino-es-confiable"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Cómo verificar a tu inquilino</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para propietarios</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Cómo saber si un inquilino es confiable?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Antes de entregar las llaves de tu propiedad, hay señales claras que te dicen si el candidato es confiable — o no. Te explicamos qué documentos pedir, cómo verificarlos y qué señales de alerta no ignorar.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 21 de agosto, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 5 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Elegir mal a un inquilino es el error más costoso que puede cometer un propietario. Un mes de renta perdida, un proceso legal de recuperación, daños a la propiedad — todo eso se puede evitar con una investigación adecuada antes de firmar el contrato. Aquí te decimos exactamente qué revisar.
          </p>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Documentos que debes pedir siempre</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
            {[
              { doc: "INE vigente", desc: "Verifica que no esté vencida y que el nombre coincida exactamente con todos los demás documentos. Una discrepancia mínima es señal de alerta." },
              { doc: "Comprobantes de ingresos de los últimos 3 meses", desc: "Recibos de nómina, estados de cuenta bancarios o declaraciones fiscales. La regla general: el ingreso mensual debe ser al menos 3 veces el monto de la renta." },
              { doc: "Referencias personales y laborales", desc: "Al menos 2 referencias personales y 1 laboral con nombre, teléfono y relación con el candidato. Llámalas — no solo las recibas." },
              { doc: "Comprobante de domicilio anterior", desc: "Te dice dónde vivía antes. Puedes contactar al propietario anterior para verificar su comportamiento como inquilino." },
              { doc: "CURP y RFC", desc: "Para validar identidad y hacer una búsqueda de antecedentes básica si lo consideras necesario." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", border: "1px solid #f3f4f6", borderRadius: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>📄</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px" }}>{item.doc}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Señales de alerta que no debes ignorar</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              { alerta: "Presiona para firmar rápido", desc: "Un buen candidato no tiene prisa para que saltes el proceso de investigación. Si insiste en que no es necesario o en firmar ese mismo día, desconfía." },
              { alerta: "No puede comprobar sus ingresos", desc: "Si trabaja de manera informal, los estados de cuenta bancarios deben mostrar depósitos regulares y suficientes. Si no puede demostrar ingresos de ninguna manera, es un riesgo real." },
              { alerta: "Las referencias no contestan o son inconsistentes", desc: "Si las referencias que da no contestan, dan información diferente a lo que dijo el candidato o son números equivocados, algo está mal." },
              { alerta: "Su ingreso es menor a 3 veces la renta", desc: "Si gana $10,000 y quiere rentar algo en $5,000, la renta representa el 50% de su ingreso. Eso es insostenible a mediano plazo." },
              { alerta: "Trae documentos en copias borrosas o alteradas", desc: "Los documentos originales o copias claras son lo mínimo. Si presenta copias de mala calidad que dificultan la verificación, pide los originales." },
              { alerta: "No tiene historial de arrendamiento anterior", desc: "No es automáticamente malo, pero requiere más cuidado. Sin referencias de propietarios anteriores, el riesgo es mayor." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "16px 20px", background: "#fffbeb", border: "1px solid #fef08a", borderRadius: 12 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#92400e", margin: "0 0 4px" }}>{item.alerta}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>La investigación formal — qué incluye</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Una investigación informal — revisar los documentos tú mismo y llamar a las referencias — es mejor que nada, pero tiene limitaciones. Una investigación formal incluye verificaciones que un propietario individual no puede hacer por su cuenta:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              "Verificación de ingresos lícitos y comprobables — no solo la cifra, sino la fuente",
              "Referencias personales, familiares y laborales verificadas con llamada directa",
              "Antecedentes jurídicos en Buró México — historial de demandas o conflictos legales",
              "Validación de INE y documentos de identidad contra bases oficiales",
              "Verificación de arrendamientos anteriores con propietarios previos",
              "Dictamen formal con nivel de riesgo: verde, amarillo o rojo",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "12px 16px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10 }}>
                <span style={{ color: "#166534", fontSize: 12, flexShrink: 0, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 14, color: "#374151" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Blindaje Legal</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Nosotros investigamos a tu candidato por ti</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Con Emporio Blindaje Legal hacemos la investigación completa del candidato, emitimos el dictamen formal y te respaldamos jurídicamente durante todo el arrendamiento.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/blindaje-legal" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver Emporio Blindaje Legal →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20investigar%20a%20un%20candidato%20para%20rentar%20mi%20propiedad" target="_blank" rel="noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  💬 Consultar sin compromiso
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
