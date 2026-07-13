import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "cuanto-vale-mi-casa-puebla", titulo: "¿Cuánto vale mi casa en Puebla? Guía de valuación", emoji: "💰" },
  { slug: "colonias-para-vivir-puebla", titulo: "Las mejores colonias para vivir en Puebla", emoji: "📍" },
  { slug: "como-vender-casa-puebla-rapido", titulo: "¿Cómo vender una casa en Puebla rápido?", emoji: "🏡" },
];

export default function ArticuloPreventa() {
  return (
    <>
      <Head>
        <title>Departamentos en preventa en Puebla — qué considerar antes de comprar — Emporio Inmobiliario</title>
        <meta name="description" content="Guía para comprar departamentos en preventa en Puebla. Conoce ventajas, riesgos, qué revisar y zonas con oferta de preventa, incluyendo Torre Zaia." />
        <meta name="keywords" content="departamentos en preventa puebla, preventa lomas angelópolis, torre zaia puebla, departamentos nuevos puebla, inversión inmobiliaria puebla preventa" />
        <meta property="og:title" content="Departamentos en preventa en Puebla — qué considerar antes de comprar" />
        <meta property="og:description" content="Ventajas, riesgos y qué revisar al comprar en preventa en Puebla." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/preventa-departamentos-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/preventa-departamentos-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Departamentos en preventa en Puebla — qué considerar antes de comprar",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-07-17",
          "url": "https://www.emporioinmobiliario.com.mx/blog/preventa-departamentos-puebla"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Preventa Puebla</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Inversión inmobiliaria</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Departamentos en preventa en Puebla — qué considerar antes de comprar
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              La preventa puede ser la mejor inversión inmobiliaria que hagas — o una fuente de problemas. La diferencia está en saber qué revisar antes de firmar.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 17 de julio, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 6 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Comprar un departamento en preventa en Puebla es una de las estrategias de inversión inmobiliaria más populares en la zona metropolitana. Los precios en preventa suelen estar entre 15% y 30% por debajo del valor de mercado al momento de la entrega — lo que representa una plusvalía inmediata significativa. Pero como toda inversión, tiene riesgos que conviene conocer antes de comprometerte.
          </p>

          {/* Ventajas */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Ventajas de comprar en preventa</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              { icon: "💰", title: "Precio más bajo que el mercado", desc: "Al comprar en preventa accedes a precios de lanzamiento antes de que el proyecto gane plusvalía. En Puebla, la diferencia entre el precio de preventa y el precio de entrega puede ser del 15% al 30%." },
              { icon: "📈", title: "Plusvalía desde el inicio", desc: "Si el proyecto está bien ubicado, el valor de tu departamento puede incrementar durante los meses de construcción incluso antes de recibir las llaves." },
              { icon: "💳", title: "Esquemas de pago flexibles", desc: "Las preventas generalmente ofrecen planes de pago durante la construcción que permiten diferir el pago total. Esto facilita el acceso a créditos hipotecarios o la acumulación del enganche." },
              { icon: "🏗️", title: "Departamento nuevo sin uso previo", desc: "Estrenas el inmueble tal y como lo imaginaste. Sin desgaste, sin historial de arrendamientos anteriores y generalmente con garantías del desarrollador." },
              { icon: "🎨", title: "Posibilidad de personalización", desc: "En algunas preventas puedes elegir acabados, distribución o modificaciones menores antes de que inicie la construcción." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "16px 20px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#166534", margin: "0 0 4px" }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Riesgos */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Riesgos que debes considerar</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              { icon: "⚠️", title: "Retrasos en la entrega", desc: "Los retrasos en construcción son comunes. Antes de firmar, verifica el historial del desarrollador y asegúrate de que el contrato incluya penalizaciones por entrega tardía." },
              { icon: "⚠️", title: "El proyecto puede no ser exactamente lo prometido", desc: "Los renders y maquetas son idealizados. Visita obras previas del mismo desarrollador para verificar que lo entregado corresponde a lo prometido." },
              { icon: "⚠️", title: "Riesgo del desarrollador", desc: "Si el desarrollador tiene problemas financieros, el proyecto puede detenerse. Investiga la trayectoria y solidez financiera de la empresa antes de comprometerte." },
              { icon: "⚠️", title: "No puedes usar o rentar el inmueble hasta la entrega", desc: "A diferencia de comprar una propiedad terminada, en preventa pagas durante meses o años sin poder habitar ni generar ingresos por la propiedad." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "16px 20px", background: "#fffbeb", border: "1px solid #fef08a", borderRadius: 12 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#92400e", margin: "0 0 4px" }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Qué revisar */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Qué revisar antes de firmar</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
            {[
              { check: "Permiso de construcción vigente del municipio" },
              { check: "Trayectoria del desarrollador — proyectos previos entregados" },
              { check: "Contrato con fecha de entrega y penalizaciones por retraso" },
              { check: "Forma de pago durante la construcción y condiciones de crédito" },
              { check: "Ficha técnica del proyecto: m², distribución, acabados, amenidades" },
              { check: "Régimen de propiedad en condominio y cuotas de mantenimiento" },
              { check: "Asesoría legal independiente antes de firmar" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 10 }}>
                <span style={{ color: "#166534", fontSize: 16, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{item.check}</span>
              </div>
            ))}
          </div>

          {/* Zonas con mejor preventa */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Zonas con mejor potencial de preventa en Puebla</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            No todas las zonas ofrecen el mismo potencial de plusvalía. Las que han mostrado mejor desempeño para inversión en preventa en la zona metropolitana de Puebla son:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
            {[
              { zona: "Lomas de Angelópolis III", desc: "Zona de expansión activa con alta demanda. Proyectos como Torre Zaia representan la nueva frontera residencial de Angelópolis.", tag: "Alta plusvalía" },
              { zona: "San Andrés Cholula", desc: "Demanda universitaria y corporativa sostenida. Excelente mercado de renta para inversionistas que no van a habitar.", tag: "Alta demanda" },
              { zona: "Zerezotla / Atlixcáyotl", desc: "Zona consolidada premium con proyectos de alto nivel. Plusvalía estable y perfil de comprador ejecutivo.", tag: "Segmento premium" },
              { zona: "Corredor Forjadores", desc: "Zona emergente con proyectos accesibles y buena conectividad hacia el corredor industrial.", tag: "Precio accesible" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 14, padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: 0 }}>{item.zona}</h3>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#C8102E", background: "#fff0f2", padding: "3px 8px", borderRadius: 99, whiteSpace: "nowrap", marginLeft: 8 }}>{item.tag}</span>
                </div>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Torre Zaia highlight */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.2)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.25)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 16 }}>
                <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Preventa activa · Emporio Inmobiliario</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>
                Torre Zaia — Lomas de Angelópolis III
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", margin: "0 0 24px", lineHeight: 1.75 }}>
                Torre residencial de 40 departamentos en preventa en la zona de mayor crecimiento de Puebla. Ubicada en Lomas de Angelópolis III con entrega proyectada para diciembre de 2027. Precios de preventa con condiciones especiales de lanzamiento.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
                {["40 departamentos", "Lomas de Angelópolis III", "Entrega dic. 2027", "Preventa activa"].map((tag, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", padding: "5px 14px", borderRadius: 99 }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Torre%20Zaia%20en%20Lomas%20de%20Angelópolis" target="_blank" rel="noreferrer"
                  style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  💬 Quiero información de Torre Zaia
                </a>
                <a href="/propiedades" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
                  Ver todas las propiedades →
                </a>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 24px" }}>Preguntas frecuentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 56 }}>
            {[
              { q: "¿Puedo usar crédito Infonavit o Fovissste para comprar en preventa?", a: "Depende del proyecto. Algunos desarrolladores están registrados ante estos institutos y aceptan créditos. Sin embargo, muchas preventas requieren crédito bancario o pago directo. Consulta con el desarrollador antes de comprometerte." },
              { q: "¿Cuánto tiempo dura normalmente una preventa en Puebla?", a: "Los períodos de preventa generalmente van de 6 a 18 meses antes del inicio de construcción, y la entrega puede ser 18-36 meses después. En total, desde la compra en preventa hasta recibir las llaves pueden pasar entre 2 y 4 años." },
              { q: "¿Qué pasa si el proyecto se cancela?", a: "Un contrato bien redactado debe incluir condiciones de devolución del dinero en caso de cancelación del proyecto. Es fundamental revisar estas cláusulas con un abogado antes de firmar cualquier documento." },
              { q: "¿Es mejor comprar en preventa para vivir o para invertir?", a: "Para ambos casos puede ser una buena opción, pero la lógica es diferente. Para vivir, la preventa te permite acceder a un inmueble nuevo a menor precio. Para invertir, buscas plusvalía y rendimiento por renta futura — lo que depende mucho de la zona y el proyecto específico." },
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
