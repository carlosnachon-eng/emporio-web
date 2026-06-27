import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const APP_URL = "https://app.emporioinmobiliario.com.mx";
const REGISTER_URL = `${APP_URL}/partners/registro`;
const LOGIN_URL = `${APP_URL}/partners/login`;

const CSS = `
  * { box-sizing: border-box; }
  html, body { overflow-x: hidden; }
  .partner-hero {
    min-height: min(700px, calc(100vh - 180px));
    background-image:
      linear-gradient(90deg, rgba(12, 18, 30, 0.92) 0%, rgba(12, 18, 30, 0.78) 45%, rgba(12, 18, 30, 0.28) 100%),
      url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
  }
  .wrap { max-width: 1200px; margin: 0 auto; padding: 0 32px; width: 100%; }
  .section { padding: 84px 0; }
  .eyebrow { color: #C8102E; font-size: 11px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; margin: 0 0 10px; }
  .title { color: #1a1a2e; font-size: 38px; font-weight: 900; line-height: 1.12; margin: 0; }
  .lead { color: #6b7280; font-size: 15px; line-height: 1.8; margin: 14px 0 0; max-width: 680px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
  .grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; }
  .card { background: #fff; border: 1px solid #eef0f4; border-radius: 16px; padding: 26px; }
  .metric { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14); border-radius: 14px; padding: 18px; }
  .step { display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: start; padding: 20px 0; border-bottom: 1px solid #eef0f4; }
  .step:last-child { border-bottom: none; }
  .num { width: 54px; height: 54px; border-radius: 14px; display: grid; place-items: center; background: #fff0f3; color: #C8102E; font-size: 15px; font-weight: 900; }
  .cta-band {
    background-image:
      linear-gradient(90deg, rgba(26,26,46,0.94), rgba(26,26,46,0.82)),
      url("https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80");
    background-size: cover;
    background-position: center;
  }
  .btn-primary { display: inline-flex; align-items: center; justify-content: center; background: #C8102E; color: #fff; padding: 15px 26px; border-radius: 12px; font-size: 15px; font-weight: 900; text-decoration: none; }
  .btn-secondary { display: inline-flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); color: #fff; padding: 15px 26px; border-radius: 12px; font-size: 15px; font-weight: 800; text-decoration: none; border: 1px solid rgba(255,255,255,0.22); }
  @media (max-width: 900px) {
    .partner-hero { min-height: auto; padding: 46px 0 40px; background-position: 62% center; }
    .grid-3, .grid-2 { grid-template-columns: 1fr; }
    .wrap { padding: 0 22px; }
    .section { padding: 62px 0; }
    .hero-title { font-size: 38px !important; }
    .title { font-size: 30px; }
  }
  @media (max-width: 520px) {
    .hero-title { font-size: 32px !important; }
    .hero-actions { flex-direction: column; align-items: stretch !important; }
    .btn-primary, .btn-secondary { width: 100%; }
    .metric-row { display: none !important; }
  }
`;

const BENEFITS = [
  {
    title: "Gana comisión por cada póliza activa",
    desc: "Conservas la relación con tu cliente, Emporio opera el blindaje y tú recibes comisión cuando la póliza se cobra y queda activa.",
  },
  {
    title: "Tu cliente llena la solicitud",
    desc: "Le compartes una liga personalizada. Nosotros recibimos el expediente en el flujo normal de Blindaje Legal.",
  },
  {
    title: "Te damos respaldo para cerrar mejor",
    desc: "Aunque trabajes solo o sin oficina, puedes ofrecer investigación, contratos, pagarés, firma y seguimiento con un equipo jurídico detrás.",
  },
];

const SERVICES = [
  "Investigación del inquilino",
  "Dictamen jurídico del candidato",
  "Elaboración de contrato",
  "Pagarés y documentos finales",
  "Coordinación de firma",
  "Seguimiento del expediente",
  "Avisos de renovaciones",
  "Portal digital para seguimiento",
];

const DIFFERENCE = [
  {
    pain: "Te venden la póliza y luego desaparecen",
    answer: "En Emporio damos seguimiento real al expediente, desde la solicitud hasta firma, renovación o cualquier problema posterior.",
  },
  {
    pain: "Cuando surge un problema te dejan solo",
    answer: "Somos una empresa establecida en Puebla. Sabes dónde encontrarnos y tienes un equipo que responde cuando la operación necesita atención.",
  },
  {
    pain: "Nadie sabe dónde quedó tu expediente",
    answer: "Cada operación queda organizada en el portal. Puedes consultar estatus, observaciones, fechas y documentos finales cuando los necesites.",
  },
];

const STEPS = [
  ["01", "Solicitas acceso", "Registras tu inmobiliaria, equipo comercial o perfil de asesor. Emporio valida y activa la cuenta."],
  ["02", "Creas una operación", "Capturas renta, inmueble y datos mínimos. El sistema calcula la póliza estimada."],
  ["03", "Compartes las ligas", "El inquilino y propietario llenan sus formularios con tu marca visible."],
  ["04", "Emporio toma el expediente", "Nuestro equipo revisa, investiga, dictamina, negocia y prepara documentos."],
  ["05", "Das seguimiento y cobras", "Ves avances, fechas, documentos finales y comisión cuando la póliza queda activa."],
];

export default function BlindajeLegalPartners() {
  return (
    <>
      <Head>
        <title>Emporio Blindaje Legal Partner — Departamento Jurídico para Inmobiliarias y Asesores</title>
        <meta
          name="description"
          content="Conviértete en partner de Emporio Blindaje Legal. Tú consigues la operación; nosotros hacemos investigación, contratos, pagarés, firma y seguimiento jurídico."
        />
        <meta name="keywords" content="partner inmobiliario, asesor inmobiliario, póliza jurídica inmobiliarias, blindaje legal partners, comisiones póliza jurídica, asesores independientes" />
        <meta property="og:title" content="Emporio Blindaje Legal Partner" />
        <meta property="og:description" content="Tú consigues la operación. Nosotros hacemos todo el proceso jurídico." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/blindaje-legal-partners" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/blindaje-legal-partners" />
      </Head>

      <div style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif", background: "#fff" }}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Navbar />

        <main>
          <section className="partner-hero">
            <div className="wrap">
              <div style={{ maxWidth: 700 }}>
                <p style={{ color: "#fca5a5", fontSize: 11, fontWeight: 900, letterSpacing: "0.17em", textTransform: "uppercase", margin: "0 0 18px" }}>
                  Emporio Blindaje Legal Partner
                </p>
                <h1 className="hero-title" style={{ color: "#fff", fontSize: 58, lineHeight: 1.04, fontWeight: 900, margin: "0 0 22px" }}>
                  Tú consigues la operación. Nosotros hacemos todo el proceso jurídico.
                </h1>
                <p style={{ color: "rgba(255,255,255,0.74)", fontSize: 17, lineHeight: 1.75, margin: "0 0 30px", maxWidth: 650 }}>
                  Conviértete en partner de Emporio Blindaje Legal y ofrece investigación, contratos, pagarés, firma y seguimiento aunque trabajes solo, desde casa o sin oficina.
                </p>
                <div className="hero-actions" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  <a href={REGISTER_URL} className="btn-primary">Quiero ser Partner</a>
                  <a href={LOGIN_URL} className="btn-secondary">Ya soy partner</a>
                </div>
                <div className="metric-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, marginTop: 34, maxWidth: 640 }}>
                  <div className="metric">
                    <p style={{ color: "#fff", fontSize: 24, fontWeight: 900, margin: 0 }}>20%</p>
                    <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 12, margin: "5px 0 0" }}>Comisión base</p>
                  </div>
                  <div className="metric">
                    <p style={{ color: "#fff", fontSize: 24, fontWeight: 900, margin: 0 }}>Portal</p>
                    <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 12, margin: "5px 0 0" }}>Seguimiento digital</p>
                  </div>
                  <div className="metric">
                    <p style={{ color: "#fff", fontSize: 24, fontWeight: 900, margin: 0 }}>Sin</p>
                    <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 12, margin: "5px 0 0" }}>Oficina necesaria</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" style={{ background: "#fafafa" }}>
            <div className="wrap">
              <p className="eyebrow">Para inmobiliarias y asesores independientes</p>
              <h2 className="title">Dale respaldo profesional a tus rentas, aunque trabajes por tu cuenta.</h2>
              <p className="lead">
                Tú consigues la operación y mantienes la relación con tu cliente. Emporio revisa al inquilino, pide faltantes, prepara documentos y te ayuda a que la operación avance con más confianza, seguimiento y orden.
              </p>
              <div className="grid-3" style={{ marginTop: 34 }}>
                {BENEFITS.map((item) => (
                  <article key={item.title} className="card">
                    <h3 style={{ color: "#1a1a2e", fontSize: 18, fontWeight: 900, lineHeight: 1.25, margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="wrap">
              <div className="grid-2" style={{ alignItems: "start" }}>
                <div>
                  <p className="eyebrow">Lo que cambia contigo</p>
                  <h2 className="title">No vendes una póliza que desaparece después del pago.</h2>
                  <p className="lead">
                    Muchos asesores ya han vivido lo mismo: la póliza se cobra, después nadie da seguimiento, nadie sabe dónde está el expediente y cuando aparece un problema no hay quién responda.
                  </p>
                  <p className="lead">
                    Con Emporio Blindaje Legal Partner, tus operaciones quedan ordenadas y siempre tienes una ruta clara para consultar, dar seguimiento y pedir respuesta.
                  </p>
                </div>
                <div style={{ display: "grid", gap: 12 }}>
                  {DIFFERENCE.map((item) => (
                    <article key={item.pain} className="card" style={{ padding: 22 }}>
                      <p style={{ color: "#991b1b", fontSize: 13, fontWeight: 900, lineHeight: 1.45, margin: "0 0 8px" }}>{item.pain}</p>
                      <p style={{ color: "#374151", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="wrap">
              <div className="grid-2" style={{ alignItems: "center" }}>
                <div>
                  <p className="eyebrow">Qué hacemos por ti</p>
                  <h2 className="title">Emporio entra cuando la operación necesita respaldo.</h2>
                  <p className="lead">
                    Tú mantienes la relación comercial con tu cliente. Nosotros hacemos la revisión, pedimos faltantes, elaboramos documentos y damos continuidad hasta firma y renovación.
                  </p>
                </div>
                <div style={{ background: "#1a1a2e", borderRadius: 18, padding: 28 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {SERVICES.map((service) => (
                      <div key={service} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "13px 14px" }}>
                        <p style={{ color: "#fff", fontSize: 13, fontWeight: 800, lineHeight: 1.4, margin: 0 }}>{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" style={{ background: "#fafafa" }}>
            <div className="wrap">
              <div className="grid-2">
                <div>
                  <p className="eyebrow">Proceso claro</p>
                  <h2 className="title">Simple para ti. Serio para tu cliente.</h2>
                  <p className="lead">
                    Solo necesitas registrar la operación y compartir las ligas correctas. Tu cliente llena la solicitud y Emporio se encarga de revisar, pedir faltantes y preparar el expediente.
                  </p>
                </div>
                <div className="card" style={{ padding: "8px 26px" }}>
                  {STEPS.map(([num, title, desc]) => (
                    <div className="step" key={num}>
                      <div className="num">{num}</div>
                      <div>
                        <h3 style={{ color: "#1a1a2e", fontSize: 16, fontWeight: 900, margin: "4px 0 6px" }}>{title}</h3>
                        <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="wrap">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 26, alignItems: "stretch" }} className="grid-2">
                <div className="card" style={{ background: "#fff0f3", borderColor: "#fecdd3" }}>
                  <p className="eyebrow">Comisión para aliados</p>
                  <h2 style={{ color: "#C8102E", fontSize: 56, fontWeight: 900, lineHeight: 1, margin: "0 0 14px" }}>20%</h2>
                  <p style={{ color: "#7f1d1d", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                    Comisión base por cada póliza efectivamente cobrada y activa. No se generan comisiones por solicitudes incompletas, rechazadas o canceladas.
                  </p>
                </div>
                <div className="card">
                  <h3 style={{ color: "#1a1a2e", fontSize: 22, fontWeight: 900, margin: "0 0 18px" }}>Tu portal te permite ver:</h3>
                  <div style={{ display: "grid", gap: 12 }}>
                    {["Tus operaciones", "Estatus del expediente", "Observaciones y faltantes", "Fechas de firma, inicio y vigencia", "Documentos finales", "Comisión estimada, generada y pagada"].map((item) => (
                      <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span style={{ width: 22, height: 22, borderRadius: 999, background: "#f0fdf4", color: "#065f46", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 900 }}>✓</span>
                        <span style={{ color: "#374151", fontSize: 14, fontWeight: 700 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section cta-band">
            <div className="wrap" style={{ textAlign: "center" }}>
              <p style={{ color: "#fca5a5", fontSize: 11, fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 12px" }}>Empieza hoy</p>
              <h2 style={{ color: "#fff", fontSize: 42, fontWeight: 900, lineHeight: 1.12, maxWidth: 820, margin: "0 auto 18px" }}>
                Ofrece blindaje jurídico profesional aunque seas asesor independiente o tengas una operación pequeña.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 16, lineHeight: 1.75, maxWidth: 680, margin: "0 auto 30px" }}>
                Regístrate, espera aprobación de Emporio y empieza a enviar operaciones con ligas personalizadas para tus clientes.
              </p>
              <a href={REGISTER_URL} className="btn-primary">Quiero ser Partner</a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
