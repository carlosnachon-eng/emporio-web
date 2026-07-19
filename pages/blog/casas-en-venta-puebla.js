import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ARTICULOS_RELACIONADOS = [
  { slug: "cuanto-vale-mi-casa-puebla", titulo: "¿Cuánto vale mi casa en Puebla? Guía de valuación", emoji: "💰" },
  { slug: "colonias-para-vivir-puebla", titulo: "Las mejores colonias para vivir en Puebla", emoji: "📍" },
  { slug: "preventa-departamentos-puebla", titulo: "Departamentos en preventa en Puebla — qué considerar", emoji: "🏗️" },
];

const TIPOS = [
  { tipo: "Casa sola", rango: "$1.5M – $8M", desc: "Amplia variedad en Cholula, Lomas de Angelópolis y Cuautlancingo. Ideal para familias que buscan espacio y privacidad.", emoji: "🏠" },
  { tipo: "Casa en condominio", rango: "$1.2M – $5M", desc: "Seguridad privada, áreas comunes y mejor precio por m². Muy demandadas en Zerezotla y Lomas.", emoji: "🏘️" },
  { tipo: "Departamento", rango: "$900K – $4M", desc: "Opción más accesible. Alta demanda en Cholula por perfil universitario y corporativo.", emoji: "🏢" },
  { tipo: "Terreno", rango: "$500K – $5M", desc: "Para quien quiere construir a su medida. Mejor plusvalía en zonas de expansión como Lomas III.", emoji: "🌳" },
];

const PASOS = [
  { num: "01", title: "Define tu presupuesto total", desc: "No solo el precio de la propiedad — considera gastos de escrituración (2-5% del valor), impuestos, mudanza y remodelaciones iniciales." },
  { num: "02", title: "Elige entre crédito o contado", desc: "Con crédito hipotecario puedes comprar con un enganche del 10-20%. Con Infonavit o Fovissste tienes condiciones especiales si eres derechohabiente." },
  { num: "03", title: "Define la zona", desc: "Considera tiempo de traslado al trabajo, escuelas, hospitales y el estilo de vida que buscas. Cada zona de Puebla tiene un perfil muy diferente." },
  { num: "04", title: "Busca con una inmobiliaria", desc: "Accedes a propiedades que no están en portales, recibes asesoría en la negociación y tienes respaldo legal en todo el proceso." },
  { num: "05", title: "Visita y evalúa", desc: "Revisa el estado de las instalaciones, el contrato de compraventa y verifica que la escritura esté libre de gravámenes antes de comprometerte." },
  { num: "06", title: "Negocia y cierra", desc: "En Puebla casi todas las operaciones incluyen negociación. Una inmobiliaria con experiencia puede conseguirte mejores condiciones de cierre." },
];

export default function ArticuloCasasVenta() {
  return (
    <>
      <Head>
        <title>Casas en Venta en Puebla — Guía completa para compradores — Emporio Inmobiliario</title>
        <meta name="description" content="Guía para comprar casa en Puebla. Compara zonas, tipos de propiedad, opciones de crédito hipotecario y aspectos que debes revisar antes de decidir." />
        <meta name="keywords" content="casas en venta puebla, comprar casa puebla, venta inmuebles puebla, casas lomas angelópolis, casas cholula venta, precio casas puebla" />
        <meta property="og:title" content="Casas en Venta en Puebla — Guía completa para compradores" />
        <meta property="og:description" content="Zonas, tipos de propiedad y proceso para comprar casa en Puebla." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blog/casas-en-venta-puebla" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blog/casas-en-venta-puebla" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Casas en Venta en Puebla — Guía completa para compradores",
          "description": "Guía completa para comprar casa en Puebla.",
          "author": { "@type": "Organization", "name": "Emporio Inmobiliario" },
          "publisher": { "@type": "Organization", "name": "Emporio Inmobiliario", "url": "https://www.emporioinmobiliario.com.mx" },
          "datePublished": "2025-07-24",
          "url": "https://www.emporioinmobiliario.com.mx/blog/casas-en-venta-puebla"
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
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Casas en venta Puebla</span>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", padding: "5px 14px", borderRadius: 99, marginBottom: 20 }}>
              <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Guía para compradores</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15 }}>
              Casas en venta en Puebla — Guía completa
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.7 }}>
              Zonas, tipos de propiedad, opciones de crédito hipotecario y lo que necesitas revisar antes de comprar casa en Puebla.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>📅 24 de julio, 2025</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>⏱ 6 min de lectura</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>✍️ Emporio Inmobiliario</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 32px" }}>

          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, margin: "0 0 40px" }}>
            Puebla es uno de los mercados inmobiliarios más activos de México. Su crecimiento sostenido, la diversidad de zonas residenciales y la variedad de precios la convierten en una ciudad con opciones para prácticamente todos los perfiles de comprador — desde departamentos compactos en Cholula hasta casas de lujo en Lomas de Angelópolis.
          </p>

          {/* Tipos de propiedad */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Tipos de propiedades en venta en Puebla</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
            {TIPOS.map((t, i) => (
              <div key={i} style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 14, padding: "24px 20px" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{t.emoji}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: "0 0 6px" }}>{t.tipo}</h3>
                <p style={{ fontSize: 20, fontWeight: 900, color: "#C8102E", margin: "0 0 8px" }}>{t.rango}</p>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Paso a paso */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px" }}>Cómo comprar una casa en Puebla paso a paso</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
            {PASOS.map((paso, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 24px", border: "1px solid #f3f4f6", borderRadius: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, flexShrink: 0 }}>{paso.num}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 6px" }}>{paso.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Créditos */}
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Opciones de crédito para comprar en Puebla</h2>
          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.9, margin: "0 0 20px" }}>
            La mayoría de las compras de vivienda en Puebla se realizan con algún tipo de financiamiento. Las opciones más comunes son:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
            {[
              { icon: "🏦", title: "Crédito hipotecario bancario", desc: "Enganche del 10-20%. Tasas de interés anuales entre 9% y 12%. Plazos de 10 a 20 años. Requiere buen historial crediticio e ingresos comprobables." },
              { icon: "🏗️", title: "Infonavit", desc: "Para trabajadores del sector privado con aportaciones al IMSS. Puedes usar tu saldo de subcuenta de vivienda y complementar con crédito bancario (cofinanciamiento)." },
              { icon: "🏛️", title: "Fovissste", desc: "Para trabajadores del sector público. Condiciones similares a Infonavit con tasas fijas y plazos de hasta 30 años." },
              { icon: "💰", title: "Crédito del desarrollador", desc: "En preventas algunos desarrolladores ofrecen financiamiento directo durante el período de construcción, sin necesidad de crédito bancario desde el inicio." },
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

          {/* CTA */}
          <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 36px", marginBottom: 56, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 10px" }}>Emporio Inmobiliario</p>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>¿Buscas casa en venta en Puebla?</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.7 }}>
                Tenemos más de 45 propiedades en venta activas en Puebla y zona metropolitana. Con más de 20 años en el mercado, te ayudamos a encontrar la opción ideal y a cerrar al mejor precio.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/casas-en-venta-puebla" style={{ background: "#C8102E", color: "#fff", padding: "13px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  Ver casas en venta →
                </a>
                <a href="https://wa.me/522222573237?text=Hola,%20busco%20casa%20en%20venta%20en%20Puebla" target="_blank" rel="noreferrer"
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
              { q: "¿Cuánto necesito de enganche para comprar casa en Puebla?", a: "Con crédito hipotecario bancario generalmente necesitas entre el 10% y el 20% del valor de la propiedad como enganche. Para una casa de $2M, el enganche sería entre $200,000 y $400,000, más los gastos de escrituración." },
              { q: "¿Cuánto cuestan los gastos de escrituración en Puebla?", a: "Los gastos de escrituración en Puebla generalmente representan entre el 4% y el 6% del valor de la propiedad. Incluyen impuestos de traslado de dominio, honorarios notariales y derechos de registro." },
              { q: "¿Cuánto tiempo tarda el proceso de compra?", a: "Desde que encuentras la propiedad hasta que recibes las escrituras, el proceso puede tomar entre 30 y 90 días dependiendo del tipo de financiamiento. Con crédito hipotecario puede extenderse a 60-90 días por los tiempos de autorización." },
              { q: "¿Es mejor comprar o rentar en Puebla?", a: "Depende de tu situación. Si planeas quedarte más de 5 años en la misma ciudad y tienes estabilidad financiera, comprar generalmente es mejor inversión a largo plazo. Si tu situación puede cambiar pronto, rentar te da más flexibilidad." },
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
