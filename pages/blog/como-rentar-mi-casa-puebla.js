import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "administracion-inmuebles-puebla", titulo: "¿Vale la pena contratar administración de inmuebles en Puebla?", emoji: "⚙️" },
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
  { slug: "poliza-juridica-vs-aval-puebla", titulo: "Póliza jurídica vs aval: ¿cuál conviene más en Puebla?", emoji: "⚖️" },
];

export default function ArticuloComoRentarMiCasa() {
  return (
    <>
      <Head>
        <title>¿Cómo rentar mi casa en Puebla? Guía para propietarios — Emporio Inmobiliario</title>
        <meta name="description" content="Guía completa para propietarios que quieren rentar su casa en Puebla. Requisitos, precios de renta por zona, cómo encontrar buenos inquilinos y cómo proteger tu patrimonio." />
        <meta name="keywords" content="cómo rentar mi casa puebla, rentar propiedad puebla, poner casa en renta puebla, arrendar inmueble puebla, requisitos rentar casa puebla propietario" />
        <meta property="og:title" content="¿Cómo rentar mi casa en Puebla? Guía para propietarios" />
        <meta property="og:description" content="Todo lo que necesitas saber para rentar tu propiedad en Puebla de forma segura y al mejor precio." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/como-rentar-mi-casa-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/como-rentar-mi-casa-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Cómo rentar mi casa en Puebla? Guía para propietarios",
          "description": "Guía completa para propietarios que quieren rentar su casa en Puebla.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-08-07",
          "url": "https://www.emporioinmobiliario.com.mx/blog/como-rentar-mi-casa-puebla"
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
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <a href="/blog" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</a>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Cómo rentar mi casa</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Para propietarios</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Cómo rentar mi casa en Puebla?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Guía completa para propietarios. Desde fijar el precio correcto hasta encontrar al inquilino ideal y proteger tu patrimonio durante todo el arrendamiento.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 7 de agosto, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 6 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Rentar una propiedad en Puebla puede ser una excelente fuente de ingresos pasivos — o una fuente constante de problemas, dependiendo de cómo lo hagas. La diferencia está en el proceso: desde fijar el precio correcto hasta elegir bien al inquilino y tener el respaldo jurídico necesario. Esta guía te explica todo paso a paso.
          </p>

          {/* Paso a paso */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>
            Cómo rentar tu casa en Puebla — paso a paso
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
            {[
              { num: "01", titulo: "Define el precio de renta correcto", desc: "El error más común es fijar la renta por intuición o por lo que cobra el vecino. El precio correcto depende de la zona, los metros cuadrados, el estado de conservación y la oferta actual en tu colonia. Una renta muy alta significa vacancia prolongada; una muy baja significa perder dinero todos los meses. Compara propiedades similares en Inmuebles24 o consulta con una inmobiliaria que conozca tu zona." },
              { num: "02", titulo: "Prepara la propiedad para mostrarla", desc: "Una propiedad limpia, con todo funcionando y bien presentada se renta más rápido y a mejor precio. No necesitas remodelar — solo asegúrate de que las instalaciones estén en orden, no haya goteras, y que el espacio se vea despejado. Las fotos son lo primero que ve el candidato." },
              { num: "03", titulo: "Promuévela en los canales correctos", desc: "En Puebla, TikTok e Instagram se han convertido en los canales más efectivos para rentar propiedades rápido. Los portales como Inmuebles24 y Vivanuncios también ayudan. Si trabajas con una inmobiliaria, ellos se encargan de toda la promoción — incluyendo redes sociales, portales y su base de clientes activos." },
              { num: "04", titulo: "Investiga bien al candidato antes de firmar", desc: "Este paso es el más importante y el que más propietarios omiten. Verificar que el inquilino tiene ingresos suficientes, referencias limpias y antecedentes en orden es lo que determina si el arrendamiento va a funcionar o no. Una investigación formal incluye: comprobantes de ingresos de los últimos 3 meses, referencias personales, familiares y laborales, y validación de documentos." },
              { num: "05", titulo: "Firma un contrato bien elaborado", desc: "El contrato de arrendamiento es tu protección legal. Debe incluir el monto exacto de la renta, la fecha de pago, el depósito en garantía, las condiciones de renovación y las cláusulas de terminación. Un contrato genérico descargado de internet puede tener vacíos legales que te perjudiquen. Lo ideal es que lo elabore un especialista." },
              { num: "06", titulo: "Contrata una póliza jurídica", desc: "La póliza jurídica es el mecanismo que reemplaza al aval en Puebla. Te protege durante toda la vigencia del contrato — si el inquilino deja de pagar, se activa el proceso legal para recuperar tu propiedad sin que tengas que correr con los gastos ni el proceso tú solo." },
              { num: "07", titulo: "Define si administras tú o contratas a alguien", desc: "Administrar una propiedad implica: cobrar renta mensualmente, dar seguimiento a pagos, coordinar mantenimiento, atender al inquilino y gestionar renovaciones. Si tienes tiempo y disposición, puedes hacerlo tú. Si no, una administradora cobra el 10% de la renta mensual y se encarga de todo." },
            ].map((paso, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 24px", border: "1px solid #f3f4f6", borderRadius: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, flexShrink: 0 }}>{paso.num}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px" }}>{paso.titulo}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Precios por zona */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            ¿Cuánto puedo pedir de renta en Puebla?
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Los precios varían significativamente según la zona. Estos son los rangos de mercado para casas y departamentos en buen estado de conservación:
          </p>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#C8102E" }}>
              {["Zona", "Casa", "Departamento"].map((h, i) => (
                <div key={i} style={{ padding: "12px 20px", fontSize: 12, fontWeight: 800, color: "#fff", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>{h}</div>
              ))}
            </div>
            {[
              { zona: "Lomas de Angelópolis", casa: "$12,000 – $30,000", depto: "$8,000 – $20,000" },
              { zona: "San Andrés Cholula", casa: "$10,000 – $22,000", depto: "$7,000 – $16,000" },
              { zona: "Zerezotla / Atlixcáyotl", casa: "$14,000 – $35,000", depto: "$9,000 – $22,000" },
              { zona: "Cuautlancingo", casa: "$7,000 – $14,000", depto: "$5,500 – $10,000" },
              { zona: "Centro Histórico", casa: "$8,000 – $18,000", depto: "$6,000 – $14,000" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#1a1a2e", fontWeight: 600 }}>{row.zona}</div>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#C8102E", fontWeight: 700, borderLeft: "1px solid #f3f4f6" }}>{row.casa}</div>
                <div style={{ padding: "13px 20px", fontSize: 14, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{row.depto}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic", margin: "0 0 48px" }}>*Rangos de mercado para propiedades en buen estado. El precio exacto depende de las características específicas de cada inmueble.</p>

          {/* Errores comunes */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>
            Los errores más comunes al rentar en Puebla
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              { error: "No investigar al inquilino", detalle: "Es el error que más problemas genera. Sin una investigación formal, cualquiera puede presentarse con documentos y referencias sin verificar. Una mala selección puede costarte meses de renta perdida y un proceso legal de recuperación." },
              { error: "Confiar solo en el aval", detalle: "El aval cada vez es más difícil de conseguir y más difícil de hacer efectivo si hay problemas. La póliza jurídica ofrece una protección más sólida y un proceso de recuperación más claro." },
              { error: "Firmar un contrato genérico", detalle: "Un contrato sin cláusulas específicas te deja desprotegido ante situaciones que no se contemplaron. El contrato debe ser elaborado por un especialista y adaptado a tu propiedad." },
              { error: "Fijar la renta por encima del mercado", detalle: "Una propiedad vacía por 2-3 meses mientras esperas al inquilino 'ideal' puede costarte más que bajar la renta desde el inicio." },
              { error: "No tener respaldo jurídico", detalle: "Si el inquilino deja de pagar, sin respaldo jurídico el proceso de recuperación puede ser largo, costoso y estresante. La póliza jurídica activa ese proceso de forma automática." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "16px 20px", background: "#fff5f5", border: "1px solid #fecdd3", borderRadius: 12 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>❌</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#991b1b", margin: "0 0 4px" }}>{item.error}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.detalle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ¿Solo o con inmobiliaria? */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            ¿Rentar solo o con una inmobiliaria?
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Rentar sin inmobiliaria es posible, pero implica que tú asumes todo: la promoción, la investigación del inquilino, el contrato, la cobranza y cualquier problema que surja. El tiempo que inviertes en todo eso tiene un valor real.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            {[
              {
                titulo: "Sin inmobiliaria",
                items: ["Tú promueves la propiedad", "Tú investigas al candidato", "Tú consigues el contrato", "Tú cobras la renta", "Tú resuelves los problemas", "Sin costo de comisión mensual"],
                color: "#fafafa", border: "#e5e7eb", titleColor: "#374151"
              },
              {
                titulo: "Con Emporio Inmobiliario",
                items: ["Promovemos en TikTok, IG y portales", "Investigación formal del inquilino", "Contrato elaborado por especialistas", "Cobranza y reporte mensual", "Respaldo jurídico incluido", "10% de la renta mensual efectiva"],
                color: "#fff0f2", border: "#fecdd3", titleColor: "#C8102E"
              }
            ].map((col, i) => (
              <div key={i} style={{ background: col.color, border: `1px solid ${col.border}`, borderRadius: 14, padding: "20px 24px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: col.titleColor, margin: "0 0 16px" }}>{col.titulo}</h3>
                {col.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: i === 1 ? "#C8102E" : "#9ca3af", fontSize: 12, flexShrink: 0, marginTop: 2 }}>{i === 1 ? "✓" : "•"}</span>
                    <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>¿Quieres rentar tu propiedad en Puebla?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Más de 20 años rentando propiedades en Puebla. Nos encargamos de todo — desde encontrar al inquilino ideal hasta el respaldo jurídico durante todo el arrendamiento.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propietarios" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver servicios para propietarios →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20rentar%20mi%20propiedad%20en%20Puebla" target="_blank" rel="noreferrer"
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
              { q: "¿Cuánto tarda en rentarse una propiedad en Puebla?", a: "En zonas de alta demanda como Cholula o Lomas de Angelópolis, una propiedad bien valuada y promovida puede rentarse en 1-3 semanas. En zonas con menor demanda puede tomar 1-2 meses. La clave es el precio correcto y la difusión adecuada." },
              { q: "¿Cuánto cobra una inmobiliaria por rentar en Puebla?", a: "Lo más común es un mes de renta al inicio por concepto de promoción y contratación del inquilino, más el 10% de la renta mensual si contratas administración continua. Si solo buscas al inquilino sin administración, el costo es solo el mes inicial." },
              { q: "¿Necesito hacer algún trámite legal para rentar mi propiedad?", a: "No hay trámites obligatorios ante el gobierno para rentar una propiedad habitacional en Puebla. Sin embargo, sí debes declarar los ingresos por arrendamiento ante el SAT como persona física con actividad empresarial o arrendamiento." },
              { q: "¿Qué pasa si el inquilino no paga la renta?", a: "Si tienes póliza jurídica, se activa el proceso extrajudicial de cobranza primero y, si no hay resolución, el proceso judicial para recuperar la propiedad. Sin póliza, tendrías que iniciar un proceso legal por tu cuenta, lo que es más costoso y tardado." },
              { q: "¿Cuánto depósito en garantía puedo pedir?", a: "Lo más común en Puebla es 1 mes de renta como depósito en garantía. Algunas propiedades de mayor valor piden 2 meses. El depósito se devuelve al final del contrato si la propiedad está en buen estado." },
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
