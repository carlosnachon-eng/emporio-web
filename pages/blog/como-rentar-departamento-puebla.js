import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "cuanto-cuesta-poliza-juridica-puebla", titulo: "¿Cuánto cuesta una póliza jurídica en Puebla?", emoji: "🛡️" },
  { slug: "poliza-juridica-vs-aval-puebla", titulo: "Póliza jurídica vs aval: ¿cuál conviene más en Puebla?", emoji: "⚖️" },
  { slug: "colonias-para-vivir-puebla", titulo: "Las mejores colonias para vivir en Puebla en 2025", emoji: "📍" },
];

const ZONAS = [
  { zona: "Lomas de Angelópolis", rango: "$8,000 – $25,000", perfil: "Familias, ejecutivos, preventa", emoji: "🏙️" },
  { zona: "San Andrés Cholula", rango: "$7,000 – $18,000", perfil: "Jóvenes, universitarios, parejas", emoji: "🎓" },
  { zona: "Cuautlancingo", rango: "$5,500 – $12,000", perfil: "Trabajadores industriales, familias", emoji: "🏭" },
  { zona: "Centro Histórico", rango: "$6,000 – $15,000", perfil: "Profesionales, turismo, cultura", emoji: "🏛️" },
  { zona: "Zerezotla / Atlixcáyotl", rango: "$9,000 – $22,000", perfil: "Ejecutivos, familias premium", emoji: "✨" },
];

export default function ArticuloComoRentar() {
  return (
    <>
      <Head>
        <title>¿Cómo rentar un departamento en Puebla en 2025? Guía completa — Emporio Inmobiliario</title>
        <meta name="description" content="Guía paso a paso para rentar en Puebla: requisitos, zonas más buscadas, precios promedio por colonia y cómo evitar fraudes. Actualizada 2025." />
        <meta name="keywords" content="cómo rentar departamento puebla, requisitos para rentar en puebla, departamentos en renta puebla, rentar casa puebla 2025, guía renta puebla" />
        <meta property="og:title" content="¿Cómo rentar un departamento en Puebla en 2025? Guía completa" />
        <meta property="og:description" content="Requisitos, zonas, precios y consejos para rentar en Puebla. Guía actualizada 2025." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/como-rentar-departamento-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/como-rentar-departamento-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "¿Cómo rentar un departamento en Puebla en 2025? Guía completa",
          "description": "Guía paso a paso para rentar en Puebla: requisitos, zonas, precios y consejos.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-06-12",
          "url": "https://www.emporioinmobiliario.com.mx/blog/como-rentar-departamento-puebla"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Cómo rentar en Puebla</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Guía para inquilinos</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              ¿Cómo rentar un departamento en Puebla en 2025?
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Guía completa con requisitos, zonas más buscadas, precios por colonia y consejos para evitar fraudes. Todo lo que necesitas saber antes de firmar un contrato en Puebla.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 12 de junio, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 6 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Puebla es una de las ciudades con mayor demanda de renta en México. Su crecimiento urbano, la presencia de universidades y la expansión industrial han impulsado un mercado inmobiliario muy activo — especialmente en zonas como Lomas de Angelópolis, Cholula y Cuautlancingo. Si estás buscando rentar en Puebla, esta guía te explica todo el proceso paso a paso.
          </p>

          {/* Paso a paso */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>
            El proceso para rentar en Puebla paso a paso
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
            {[
              { num: "01", title: "Define tu presupuesto y zona", desc: "Antes de buscar, ten claro cuánto puedes destinar a renta. La regla general es que la renta no debería superar el 30% de tus ingresos netos. Con eso en mente, puedes filtrar las zonas que se ajustan a tu presupuesto." },
              { num: "02", title: "Busca en portales y con inmobiliarias", desc: "Puedes buscar en portales como Inmuebles24, Vivanuncios o directamente con inmobiliarias locales. Trabajar con una inmobiliaria te da acceso a propiedades que no están publicadas en portales y a asesoría durante todo el proceso." },
              { num: "03", title: "Agenda visitas", desc: "Nunca rentes sin ver la propiedad en persona. Durante la visita revisa el estado de las instalaciones, agua, luz, gas, paredes y pisos. Pregunta sobre vecinos, ruido y servicios del edificio." },
              { num: "04", title: "Prepara tu documentación", desc: "Una vez que encuentres la propiedad ideal, necesitarás tener lista tu documentación para el proceso de investigación. Los documentos básicos son INE vigente y comprobantes de ingresos de los últimos 3 meses." },
              { num: "05", title: "Pasa el proceso de investigación", desc: "El propietario o la inmobiliaria verificará tus ingresos, referencias y antecedentes. Si la propiedad tiene póliza jurídica, este proceso es formal y estructurado. Esto protege tanto al propietario como al inquilino." },
              { num: "06", title: "Firma el contrato", desc: "Lee el contrato completo antes de firmar. Verifica la vigencia, el monto exacto de la renta, las condiciones de renovación, el depósito en garantía y las cláusulas de terminación anticipada." },
              { num: "07", title: "Paga y recibe las llaves", desc: "Al firmar generalmente se paga el primer mes de renta más el depósito en garantía. Si hay póliza jurídica, también se paga en este momento. Asegúrate de recibir un recibo por cada pago." },
            ].map((paso, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 24px", border: "1px solid #f3f4f6", borderRadius: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, flexShrink: 0 }}>{paso.num}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px" }}>{paso.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Requisitos */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            Requisitos para rentar en Puebla
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Los requisitos pueden variar según el propietario o inmobiliaria, pero en general los más comunes en Puebla son:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 48 }}>
            {[
              { icon: "🪪", req: "INE vigente" },
              { icon: "💰", req: "3 últimos comprobantes de ingresos" },
              { icon: "📄", req: "Contrato por mínimo 1 año" },
              { icon: "🔒", req: "1 mes de depósito en garantía" },
              { icon: "💵", req: "1 mes de renta al firmar" },
              { icon: "🛡️", req: "Póliza jurídica (en lugar de aval)" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 10 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item.req}</span>
              </div>
            ))}
          </div>

          {/* Precios por zona */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            Precios de renta por zona en Puebla 2025
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Los precios varían significativamente según la zona. Estos son los rangos aproximados para departamentos de 2 recámaras en las zonas más buscadas:
          </p>
          <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 48, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#1a1a2e" }}>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff" }}>Zona</div>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Rango mensual</div>
              <div style={{ padding: "14px 20px", fontSize: 13, fontWeight: 800, color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Perfil</div>
            </div>
            {ZONAS.map((z, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6" }}>
                <div style={{ padding: "14px 20px", fontSize: 14, color: "#1a1a2e", fontWeight: 600 }}>{z.emoji} {z.zona}</div>
                <div style={{ padding: "14px 20px", fontSize: 14, color: "#C8102E", fontWeight: 800, borderLeft: "1px solid #f3f4f6" }}>{z.rango}</div>
                <div style={{ padding: "14px 20px", fontSize: 13, color: "#6b7280", borderLeft: "1px solid #f3f4f6" }}>{z.perfil}</div>
              </div>
            ))}
          </div>

          {/* Consejos para evitar fraudes */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>
            Cómo evitar fraudes al rentar en Puebla
          </h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            Los fraudes inmobiliarios existen. Estas señales de alerta te ayudan a identificarlos antes de que sea tarde:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              { icon: "🚨", alerta: "Te piden depósito sin contrato ni visita", tip: "Nunca entregues dinero sin haber visto la propiedad en persona y sin contrato firmado." },
              { icon: "🚨", alerta: "El precio está muy por debajo del mercado", tip: "Si la renta es significativamente más baja que propiedades similares en la misma zona, desconfía." },
              { icon: "🚨", alerta: "El 'propietario' no puede mostrarte la propiedad", tip: "Siempre insiste en ver la propiedad con quien dice ser el propietario o un representante verificable." },
              { icon: "🚨", alerta: "No hay contrato formal o es muy informal", tip: "El contrato de arrendamiento es tu protección legal. Exige uno elaborado correctamente o trabaja con una inmobiliaria." },
              { icon: "🚨", alerta: "Te presionan para decidir en el momento", tip: "Un propietario serio te da tiempo para revisar el contrato. Las prisas injustificadas son señal de alerta." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", border: "1px solid #fef3c7", borderRadius: 12, background: "#fffbeb" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#92400e", margin: "0 0 4px" }}>{item.alerta}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>
                ¿Buscas departamento en Puebla?
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Tenemos más de 30 propiedades en renta activas en Puebla, Cholula, Lomas de Angelópolis y Cuautlancingo. Con más de 20 años en el mercado, te ayudamos a encontrar la propiedad ideal y a tramitar todo el proceso de forma segura.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/propiedades?operacion=rental" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver propiedades en renta →
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
              { q: "¿Cuánto necesito ahorrado para rentar en Puebla?", a: "Generalmente necesitas tener disponible el equivalente a 2-3 meses de renta: primer mes, depósito en garantía y la póliza jurídica si aplica. Por ejemplo, para una renta de $10,000, necesitarías aproximadamente $23,800 al inicio (dos meses de renta más la póliza)." },
              { q: "¿Puedo rentar sin comprobante de ingresos formal?", a: "Depende del propietario. Algunos aceptan estados de cuenta bancarios como comprobante de ingresos. Otros requieren recibos de nómina o constancia fiscal. Es importante ser transparente sobre tu situación desde el inicio." },
              { q: "¿Cuánto tiempo tarda el proceso de renta en Puebla?", a: "Con una inmobiliaria, el proceso desde que encuentras la propiedad hasta que recibes las llaves puede tomar entre 3 y 7 días hábiles, dependiendo del tiempo de investigación y la disponibilidad para firmar contrato." },
              { q: "¿Qué pasa si quiero salirme antes de que termine el contrato?", a: "Los contratos generalmente tienen cláusulas de terminación anticipada. Lo más común es que el inquilino avise con 30-60 días de anticipación y en algunos casos pierda el depósito en garantía o pague una penalización. Lee bien tu contrato antes de firmar." },
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
