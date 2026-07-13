import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CSS = `
* { box-sizing: border-box; }
@media (max-width: 768px) {
  .g2  { grid-template-columns: 1fr !important; }
  .g2s { grid-template-columns: 1fr 1fr !important; }
  .g3  { grid-template-columns: 1fr 1fr !important; }
  .g4  { grid-template-columns: 1fr 1fr !important; }
  .hero-pad { padding: 48px 20px 60px !important; }
  .sec-pad  { padding: 52px 20px !important; }
  .h1 { font-size: 32px !important; }
  .h2 { font-size: 24px !important; }
  .historia-gap { gap: 40px !important; }
}
@media (max-width: 480px) {
  .g2s, .g3, .g4 { grid-template-columns: 1fr !important; }
  .h1 { font-size: 28px !important; }
}
`;

const INDICADORES = [
  ["5,000+", "Propiedades promovidas", "🏠"],
  ["3,000+", "Operaciones cerradas", "🤝"],
  ["20+", "Años de experiencia", "⭐"],
  ["90K+", "Seguidores en TikTok", "📱"],
];

const DIFERENCIAS = [
  { icon: "🧭", title: "Experiencia aplicada", desc: "Más de 20 años en el mercado inmobiliario de Puebla nos permiten anticipar riesgos y orientar cada decisión con contexto real." },
  { icon: "👤", title: "Atención con contexto", desc: "Primero entendemos si necesitas vender, rentar, comprar, administrar o proteger una operación. La estrategia parte de tu objetivo." },
  { icon: "📋", title: "Procesos claros", desc: "Definimos responsables, documentación y siguientes pasos para que sepas qué está ocurriendo y qué sigue en cada etapa." },
  { icon: "🔎", title: "Transparencia", desc: "Explicamos condiciones, costos y riesgos antes de avanzar, para que tomes decisiones con información suficiente." },
  { icon: "💻", title: "Tecnología útil", desc: "Desarrollamos portales y herramientas propias para dar seguimiento, ordenar información y mantener mayor control del proceso." },
  { icon: "🤝", title: "Acompañamiento", desc: "Nuestro objetivo no es únicamente cerrar una operación, sino que llegues al final con la tranquilidad de haber tomado una buena decisión." },
];

const ECOSISTEMA = [
  { icon: "🏠", title: "Emporio Inmobiliario", desc: "Promoción y acompañamiento para vender, rentar o comprar propiedades en Puebla." },
  { icon: "🛡️", title: "Blindaje Legal", desc: "Investigación del candidato, dictamen, contrato y respaldo jurídico para arrendamientos." },
  { icon: "✅", title: "Veridada", desc: "Revisión documental de inmuebles antes de una compra y emisión de un sello de verificación consultable." },
  { icon: "⚙️", title: "Inmoadmin", desc: "Seguimiento de propiedades administradas, cobranza, liquidaciones, mantenimiento y portales para propietarios e inquilinos." },
];

const PASOS = [
  ["01", "Conocemos tus objetivos", "Escuchamos qué quieres lograr y qué necesitas proteger durante el proceso."],
  ["02", "Analizamos tu caso", "Revisamos la propiedad, el contexto y la información disponible antes de recomendar un camino."],
  ["03", "Diseñamos la estrategia", "Definimos acciones, documentación, canales y próximos pasos de acuerdo con tu objetivo."],
  ["04", "Ejecutamos el plan", "Coordinamos la promoción, el seguimiento y las gestiones que correspondan a la operación."],
  ["05", "Formalizamos con seguridad", "Ordenamos la documentación y acompañamos la formalización de los acuerdos."],
  ["06", "Te acompañamos hasta el cierre", "Permanecemos presentes para resolver dudas y llevar el proceso a una conclusión clara."],
];

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Nosotros — Emporio Inmobiliario Puebla | +20 Años de Experiencia</title>
        <meta name="description" content="Conoce a Emporio Inmobiliario, la inmobiliaria con más de 20 años en el mercado poblano. Grupo Inmobiliario Nachón Torres S.A. de C.V., San Andrés Cholula, Puebla." />
        <meta name="keywords" content="emporio inmobiliario puebla, quiénes somos inmobiliaria puebla, grupo inmobiliario nachon torres, inmobiliaria cholula puebla" />
        <meta property="og:title" content="Nosotros — Emporio Inmobiliario Puebla" />
        <meta property="og:description" content="Más de 20 años protegiendo el patrimonio inmobiliario de familias y empresas en Puebla." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/nosotros" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/nosotros" />
      </Head>
      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Navbar />

        <div style={{ background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)" }} />
          <div className="hero-pad" style={{ maxWidth: 850, margin: "0 auto", padding: "72px 32px 88px", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff0f2", border: "1px solid #fecdd3", padding: "6px 16px", borderRadius: 99, marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
              <span style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Emporio Inmobiliario</span>
            </div>
            <h1 className="h1" style={{ fontSize: 50, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1, margin: "0 0 20px" }}>
              Tu patrimonio merece más que una operación. Merece un equipo que te acompañe de principio a fin.
            </h1>
            <p style={{ fontSize: 17, color: "#6b7280", lineHeight: 1.75, margin: "0 auto", maxWidth: 740 }}>
              Desde hace más de 20 años ayudamos a propietarios, compradores e inversionistas de Puebla a tomar decisiones inmobiliarias con claridad, seguridad y confianza.
            </p>
          </div>
        </div>

        <section className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="g2 historia-gap" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 72, alignItems: "center" }}>
              <div>
                <p style={eyebrow}>Nuestra historia</p>
                <h2 className="h2" style={sectionTitle}>Cada solución nació de una necesidad real</h2>
                <p style={bodyText}>
                  Emporio comenzó como una empresa familiar dedicada a acompañar operaciones inmobiliarias en Puebla. La experiencia diaria con propietarios, compradores e inquilinos nos permitió entender dónde se concentraban la incertidumbre, la falta de seguimiento y los riesgos de cada proceso.
                </p>
                <p style={{ ...bodyText, marginBottom: 0 }}>
                  En lugar de aceptar esos problemas como parte normal de una operación, fuimos desarrollando procesos y soluciones propias: Inmoadmin surgió para dar mayor control a los propietarios; Blindaje Legal, para fortalecer la seguridad de los arrendamientos; y Veridada, para revisar documentación antes de invertir. Así, Emporio evolucionó de una inmobiliaria tradicional a un ecosistema que acompaña distintas etapas de una decisión patrimonial.
                </p>
              </div>
              <div className="g2s" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {INDICADORES.map(([val, label, icon]) => (
                  <div key={label} style={{ background: "#fafafa", borderRadius: 16, padding: "24px 20px", textAlign: "center", border: "1px solid #f3f4f6" }}>
                    <div style={{ fontSize: 26, marginBottom: 6 }}>{icon}</div>
                    <div style={{ fontSize: 28, fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{val}</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 42 }}>
              <p style={eyebrow}>Beneficios para ti</p>
              <h2 className="h2" style={{ ...sectionTitle, marginBottom: 14 }}>¿Por qué Emporio es diferente?</h2>
              <p style={{ ...bodyText, maxWidth: 650, margin: "0 auto" }}>Combinamos experiencia, método y herramientas para que avances con mayor control y tranquilidad.</p>
            </div>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
              {DIFERENCIAS.map((item) => (
                <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", border: "1px solid #f3f4f6" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 16, color: "#1a1a2e", fontWeight: 800, margin: "0 0 9px" }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec-pad" style={{ padding: "72px 32px", background: "#1a1a2e" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 42 }}>
              <p style={eyebrow}>Soluciones conectadas</p>
              <h2 className="h2" style={{ ...sectionTitle, color: "#fff", marginBottom: 14 }}>Nuestro ecosistema</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 650, margin: "0 auto" }}>Emporio va más allá de promover propiedades: hemos creado soluciones para acompañar la operación, reducir riesgos y facilitar su seguimiento.</p>
            </div>
            <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {ECOSISTEMA.map((item) => (
                <div key={item.title} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.09)", borderRadius: 16, padding: "28px 22px" }}>
                  <div style={{ fontSize: 30, marginBottom: 14 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 16, color: "#fff", fontWeight: 800, margin: "0 0 9px" }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.52)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec-pad" style={{ padding: "72px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 46 }}>
              <p style={eyebrow}>Las personas detrás</p>
              <h2 className="h2" style={{ ...sectionTitle, marginBottom: 14 }}>Nuestro equipo</h2>
              <p style={{ ...bodyText, maxWidth: 620, margin: "0 auto" }}>La estrategia, la comunicación y la experiencia del cliente se construyen con una visión compartida.</p>
            </div>
            <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                { nombre: "Carlos Nachón", rol: "Director General", inicial: "CN", bio: "Desde hace más de dos décadas ha participado en el desarrollo de procesos, herramientas y soluciones enfocadas en hacer las operaciones inmobiliarias más claras, seguras y eficientes. Hoy lidera la estrategia de crecimiento, innovación y evolución tecnológica de Emporio, con atención especial a los procesos y a la experiencia del cliente." },
                { nombre: "Ivonne Torres", rol: "Socia e imagen institucional", inicial: "IT", bio: "Participa en la comunicación institucional y en la experiencia de marca de Emporio. Su labor acerca la información inmobiliaria a propietarios y compradores mediante contenidos claros, cercanos y accesibles." },
              ].map((persona) => (
                <div key={persona.nombre} style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", border: "1px solid #f3f4f6", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, flexShrink: 0 }}>{persona.inicial}</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>
                        {persona.nombre === "Carlos Nachón" ? (
                          <a href="/carlos-alejandro-nachon-saldivar" style={{ color: "inherit", textDecoration: "none" }}>
                            {persona.nombre}
                          </a>
                        ) : persona.nombre}
                      </h3>
                      <p style={{ margin: "4px 0 0", fontSize: 13, color: "#C8102E", fontWeight: 600 }}>{persona.rol}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, margin: 0 }}>{persona.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec-pad" style={{ padding: "72px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 42 }}>
              <p style={eyebrow}>Orden y acompañamiento</p>
              <h2 className="h2" style={{ ...sectionTitle, marginBottom: 14 }}>Nuestra forma de trabajar</h2>
              <p style={{ ...bodyText, maxWidth: 650, margin: "0 auto" }}>Un proceso sencillo para que conozcas el siguiente paso desde el primer contacto hasta el cierre.</p>
            </div>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {PASOS.map(([numero, title, desc]) => (
                <div key={numero} style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: 16, padding: "26px 22px" }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "#C8102E", color: "#fff", fontSize: 12, fontWeight: 900, marginBottom: 16 }}>{numero}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec-pad" style={{ padding: "72px 32px", background: "#C8102E", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 className="h2" style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: "0 0 14px", lineHeight: 1.2 }}>Tu propiedad merece una estrategia clara y acompañamiento hasta el último paso.</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.85)", lineHeight: 1.7, margin: "0 0 32px" }}>Cuéntanos si quieres vender, rentar, comprar o administrar. Revisaremos tu caso para ayudarte a definir el camino adecuado.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a href="/contacto" style={{ background: "#fff", color: "#C8102E", padding: "15px 30px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>Quiero hablar con un especialista →</a>
              <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,.1)", color: "#fff", border: "1px solid rgba(255,255,255,.3)", padding: "15px 30px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>Escribir por WhatsApp</a>
            </div>
          </div>
        </section>

        <Footer />
        <a href="https://wa.me/522222573237" aria-label="Contactar a Emporio por WhatsApp" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>💬</a>
      </div>
    </>
  );
}

const eyebrow = { fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 14px" };
const sectionTitle = { fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 20px", lineHeight: 1.2 };
const bodyText = { fontSize: 15, color: "#6b7280", lineHeight: 1.8, margin: "0 0 16px" };
