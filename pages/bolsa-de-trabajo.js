import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { registrarEventoSitio } from "../lib/siteAnalytics";

const CSS = `
  * { box-sizing: border-box; }
  .bt-input:focus { border-color: #C8102E !important; box-shadow: 0 0 0 3px rgba(200,16,46,.1); outline: none; }
  .bt-focus:focus-visible { outline: 3px solid rgba(200,16,46,.35); outline-offset: 3px; }
  .bt-spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,.48); border-top-color: #fff; border-radius: 50%; display: inline-block; animation: bt-spin .75s linear infinite; }
  @keyframes bt-spin { to { transform: rotate(360deg); } }
  @media (max-width: 980px) {
    .bt-hero-grid, .bt-form-grid { grid-template-columns: 1fr !important; }
    .bt-three, .bt-offer-grid { grid-template-columns: 1fr 1fr !important; }
    .bt-hero-title { font-size: 38px !important; }
    .bt-hero { padding: 56px 20px !important; }
    .bt-section { padding: 56px 20px !important; }
  }
  @media (max-width: 620px) {
    .bt-three, .bt-offer-grid, .bt-two { grid-template-columns: 1fr !important; }
    .bt-hero-title { font-size: 32px !important; }
    .bt-actions { flex-direction: column !important; }
    .bt-actions a { width: 100% !important; text-align: center !important; }
  }
`;

const beneficios = [
  ["🏛️", "Marca consolidada", "Más de 20 años de experiencia y presencia constante en el mercado inmobiliario poblano."],
  ["📈", "Leads constantes", "Recibirás oportunidades generadas por la empresa para enfocarte en vender y atender clientes."],
  ["🎓", "Capacitación", "Aprenderás nuestro proceso comercial, operativo y de seguimiento desde el primer día."],
  ["💻", "Tecnología", "Herramientas desarrolladas específicamente para administrar leads, inmuebles y seguimiento comercial."],
  ["⚖️", "Respaldo profesional", "Apoyo administrativo, jurídico y de marketing para trabajar con claridad y confianza."],
  ["🚀", "Crecimiento", "Buscamos formar asesores con carrera de largo plazo, no colaboradores temporales."],
];

const buscamos = [
  "Excelente actitud",
  "Facilidad de palabra",
  "Gusto por las ventas",
  "Buena presentación",
  "Organización",
  "Proactividad",
  "Manejo básico de computadora",
  "Disponibilidad de horario",
  "Automóvil propio, preferente no indispensable",
];

const ofrecemos = [
  "Excelente esquema de comisiones",
  "Capacitación continua",
  "Herramientas tecnológicas",
  "Marketing profesional",
  "Leads generados por la empresa",
  "Excelente ambiente laboral",
  "Flexibilidad de horarios",
  "Desarrollo profesional",
  "Respaldo jurídico y administrativo",
];

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  ciudad: "",
  edad: "",
  experienciaVentas: "",
  experienciaInmobiliaria: "",
  automovil: "",
  mensaje: "",
  cv: null,
  empresa: "",
};

const SITE_URL = "https://www.emporioinmobiliario.com.mx";
const PAGE_URL = `${SITE_URL}/bolsa-de-trabajo`;
const HERO_IMAGE = `${SITE_URL}/images/bolsa-trabajo-asesor-inmobiliario.webp`;
const MAX_CV_BYTES = 5 * 1024 * 1024;

const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Asesor inmobiliario",
  description: "Emporio Inmobiliario busca asesores inmobiliarios en Puebla con actitud comercial, gusto por las ventas y deseos reales de crecer profesionalmente. No es indispensable tener experiencia inmobiliaria previa.",
  hiringOrganization: {
    "@type": "Organization",
    name: "Emporio Inmobiliario",
    sameAs: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puebla",
      addressRegion: "Puebla",
      addressCountry: "MX",
    },
  },
  url: PAGE_URL,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Necesito experiencia inmobiliaria para postularme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es indispensable. Si tienes experiencia en ventas será una ventaja; si no, Emporio Inmobiliario te capacita en su proceso, herramientas y atención al cliente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito tener una cartera de clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesitas contar con una cartera de clientes. La empresa genera oportunidades constantemente para que puedas enfocarte en vender y construir relaciones con clientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué sucede después de enviar mi solicitud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El equipo revisa tu perfil. Si existe compatibilidad, se pondrá en contacto contigo para agendar una entrevista y explicarte el proceso de integración.",
      },
    },
  ],
};

function Field({ id, label, required, children }) {
  return (
    <label htmlFor={id} style={{ display: "block" }}>
      <span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "#374151", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {label}{required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}

function inputStyle() {
  return {
    width: "100%",
    minHeight: 46,
    padding: "12px 14px",
    border: "1.5px solid #e5e7eb",
    borderRadius: 10,
    fontSize: 14,
    color: "#1f2937",
    background: "#fff",
    fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
  };
}

export default function BolsaDeTrabajo() {
  const [form, setForm] = useState(initialForm);
  const [estado, setEstado] = useState("idle");
  const [error, setError] = useState("");
  const [formStarted, setFormStarted] = useState(false);

  useEffect(() => {
    registrarEventoSitio("site_page_view", {
      contexto: "bolsa_de_trabajo",
      ruta: "/bolsa-de-trabajo",
    });
  }, []);

  const markFormStart = () => {
    if (formStarted) return;
    setFormStarted(true);
    registrarEventoSitio("site_form_start", {
      contexto: "bolsa_de_trabajo",
      tipo_formulario: "postulacion_asesor_inmobiliario",
      ruta: "/bolsa-de-trabajo",
    });
  };

  const update = (key, value) => {
    markFormStart();
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (estado === "sending") return;
    if (!form.cv) {
      setError("El CV en PDF es obligatorio.");
      registrarEventoSitio("site_form_error", { contexto: "bolsa_de_trabajo", tipo_formulario: "postulacion_asesor_inmobiliario", ruta: "/bolsa-de-trabajo", estado: "cv_requerido" });
      return;
    }
    if (form.cv.type !== "application/pdf" || !form.cv.name.toLowerCase().endsWith(".pdf")) {
      setError("El CV debe ser un archivo PDF.");
      registrarEventoSitio("site_form_error", { contexto: "bolsa_de_trabajo", tipo_formulario: "postulacion_asesor_inmobiliario", ruta: "/bolsa-de-trabajo", estado: "cv_tipo" });
      return;
    }
    if (form.cv.size > MAX_CV_BYTES) {
      setError("El CV no debe exceder 5 MB.");
      registrarEventoSitio("site_form_error", { contexto: "bolsa_de_trabajo", tipo_formulario: "postulacion_asesor_inmobiliario", ruta: "/bolsa-de-trabajo", estado: "cv_tamano" });
      return;
    }
    setEstado("sending");
    setError("");

    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "cv") {
        if (value) payload.append("cv", value);
      } else {
        payload.append(key, value);
      }
    });
    payload.append("timestamp", new Date().toISOString());
    payload.append("originUrl", typeof window !== "undefined" ? window.location.href : "/bolsa-de-trabajo");

    try {
      const response = await fetch("/api/postulacion", { method: "POST", body: payload });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "No se pudo enviar la solicitud");

      setEstado("sent");
      setForm(initialForm);
      registrarEventoSitio("site_form_submit", {
        contexto: "bolsa_de_trabajo",
        tipo_formulario: "postulacion_asesor_inmobiliario",
        ruta: "/bolsa-de-trabajo",
      });
    } catch (err) {
      setError(err.message);
      registrarEventoSitio("site_form_error", {
        contexto: "bolsa_de_trabajo",
        tipo_formulario: "postulacion_asesor_inmobiliario",
        ruta: "/bolsa-de-trabajo",
        estado: "error_envio",
      });
      setEstado("idle");
    }
  };

  return (
    <div style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif", background: "#fff", color: "#1a1a2e" }}>
      <Head>
        <title>Bolsa de Trabajo | Vacantes para Asesores Inmobiliarios en Puebla | Emporio Inmobiliario</title>
        <meta name="description" content="Únete a Emporio Inmobiliario. Buscamos asesores inmobiliarios con actitud comercial que quieran desarrollar una carrera profesional en una de las inmobiliarias con mayor crecimiento en Puebla." />
        <meta name="keywords" content="bolsa de trabajo inmobiliaria Puebla, vacantes asesor inmobiliario Puebla, empleo asesor inmobiliario, trabajo agente inmobiliario Puebla, trabajar en inmobiliaria Puebla, vacantes ventas inmobiliarias, asesor inmobiliario sin experiencia, empleo ventas Puebla" />
        <meta property="og:title" content="Bolsa de Trabajo | Vacantes para Asesores Inmobiliarios en Puebla" />
        <meta property="og:description" content="Únete a Emporio Inmobiliario y desarrolla una carrera profesional como asesor inmobiliario en Puebla." />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:image:alt" content="Asesor inmobiliario mostrando una propiedad a clientes" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bolsa de Trabajo | Vacantes para Asesores Inmobiliarios en Puebla" />
        <meta name="twitter:description" content="Únete a Emporio Inmobiliario y desarrolla una carrera profesional como asesor inmobiliario en Puebla." />
        <meta name="twitter:image" content={HERO_IMAGE} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Navbar />

      <main>
      <section className="bt-hero" style={{ padding: "72px 32px 80px", background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", overflow: "hidden" }}>
        <div className="bt-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 42, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #fecdd3", padding: "7px 14px", borderRadius: 99, marginBottom: 22 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C8102E" }} />
              <span style={{ color: "#C8102E", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>Vacantes en Puebla</span>
            </div>
            <h1 className="bt-hero-title" style={{ fontSize: 56, lineHeight: 1.05, fontWeight: 900, margin: "0 0 22px", color: "#1a1a2e" }}>Trabaja con nosotros</h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b5563", margin: "0 0 14px" }}>
              En Emporio Inmobiliario buscamos personas con actitud comercial, gusto por las ventas y deseos reales de crecer profesionalmente.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b5563", margin: "0 0 30px" }}>
              No necesitas contar con una cartera de clientes. Nosotros generamos oportunidades constantemente para que puedas enfocarte en hacer lo que mejor sabes: vender y construir relaciones con clientes.
            </p>
            <div className="bt-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="bt-focus" href="#postularme" style={{ background: "#C8102E", color: "#fff", padding: "14px 22px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>Quiero postularme →</a>
              <a className="bt-focus" href="#vacante" style={{ background: "#fff", color: "#1a1a2e", padding: "14px 22px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none", border: "1px solid #e5e7eb" }}>Conocer la vacante</a>
              <a className="bt-focus" href="/nosotros" style={{ background: "#1a1a2e", color: "#fff", padding: "14px 22px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>Conoce Emporio Inmobiliario</a>
            </div>
          </div>
          <div style={{ borderRadius: 18, overflow: "hidden", minHeight: 360, boxShadow: "0 18px 54px rgba(26,26,46,.16)", border: "1px solid rgba(255,255,255,.7)" }}>
            <img
              src="/images/bolsa-trabajo-asesor-inmobiliario-1200.webp"
              srcSet="/images/bolsa-trabajo-asesor-inmobiliario-720.webp 720w, /images/bolsa-trabajo-asesor-inmobiliario-1200.webp 1200w, /images/bolsa-trabajo-asesor-inmobiliario.webp 1672w"
              sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 980px) calc(100vw - 40px), 560px"
              alt="Asesor inmobiliario de Emporio mostrando una propiedad a clientes"
              width="1200"
              height="675"
              fetchpriority="high"
              decoding="async"
              style={{ width: "100%", height: "100%", minHeight: 360, objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      <section id="vacante" className="bt-section" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Carrera inmobiliaria</p>
          <h2 style={{ fontSize: 34, fontWeight: 900, color: "#1a1a2e", margin: "0 0 34px" }}>¿Por qué trabajar en Emporio Inmobiliario?</h2>
          <div className="bt-three" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {beneficios.map(([icon, title, desc]) => (
              <article key={title} style={{ background: "#fff", border: "1px solid #f0f1f4", borderRadius: 8, padding: 24, boxShadow: "0 2px 14px rgba(0,0,0,.04)" }}>
                <div style={{ width: 42, height: 42, borderRadius: 8, background: "#fff0f2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 900, margin: "0 0 8px", color: "#1a1a2e" }}>{title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6b7280", margin: 0 }}>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bt-section" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div className="bt-two" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }}>
          <div style={{ background: "#1a1a2e", color: "#fff", borderRadius: 8, padding: 34 }}>
            <p style={{ fontSize: 11, color: "#fecdd3", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 10px" }}>Perfil</p>
            <h2 style={{ fontSize: 30, fontWeight: 900, margin: "0 0 18px" }}>¿Es Emporio para ti?</h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,.82)", margin: "0 0 12px" }}>
              No buscamos personas que únicamente quieran "probar suerte".
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,.82)", margin: "0 0 12px" }}>
              Buscamos personas comprometidas, con hambre de crecimiento, capacidad de seguimiento y disposición para construir una carrera comercial seria.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,.82)", margin: 0 }}>
              Si te identificas con una cultura de resultados, aprendizaje y servicio al cliente, queremos conocerte.
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #eceef2", borderRadius: 8, padding: 34 }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", margin: "0 0 10px" }}>Requisitos</p>
            <h2 style={{ fontSize: 30, fontWeight: 900, margin: "0 0 20px", color: "#1a1a2e" }}>¿Qué buscamos?</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {buscamos.map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", color: "#374151", fontSize: 14, fontWeight: 600 }}>
                  <span style={{ width: 24, height: 24, borderRadius: "50%", background: "#fff0f2", color: "#C8102E", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bt-section" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Te capacitamos</p>
          <h2 style={{ fontSize: 34, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>No es indispensable tener experiencia inmobiliaria</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4b5563", margin: "0 auto", maxWidth: 760 }}>
            Si ya tienes experiencia en ventas, será una gran ventaja. Si no has trabajado en bienes raíces, te capacitamos en nuestro proceso, herramientas y forma de atender a cada cliente. Valoramos más tu actitud, disciplina y disposición para aprender.
          </p>
        </div>
      </section>

      <section className="bt-section" style={{ padding: "72px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Propuesta</p>
          <h2 style={{ fontSize: 34, fontWeight: 900, color: "#1a1a2e", margin: "0 0 34px" }}>Lo que ofrecemos</h2>
          <div className="bt-offer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {ofrecemos.map((item) => (
              <div key={item} style={{ background: "#fff", border: "1px solid #eceef2", borderRadius: 8, padding: "17px 18px", display: "flex", gap: 10, alignItems: "center", minHeight: 68 }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: "#fff0f2", color: "#C8102E", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 900, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bt-section" style={{ padding: "72px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", borderLeft: "4px solid #C8102E", padding: "8px 0 8px 28px" }}>
          <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px" }}>Cultura Emporio</p>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Así es trabajar en Emporio</h2>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#4b5563", margin: 0, fontStyle: "italic" }}>
            "Aquí irá el testimonio de un asesor del equipo: una historia real sobre crecimiento, acompañamiento y resultados dentro de Emporio Inmobiliario."
          </p>
        </div>
      </section>

      <section id="postularme" className="bt-section" style={{ padding: "72px 32px", background: "linear-gradient(120deg, #1a1a2e 0%, #2a2034 100%)" }}>
        <div className="bt-form-grid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 34, alignItems: "start" }}>
          <div style={{ color: "#fff", position: "sticky", top: 92 }}>
            <p style={{ fontSize: 11, color: "#fecdd3", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 10px" }}>Postulación</p>
            <h2 style={{ fontSize: 38, fontWeight: 900, margin: "0 0 16px", lineHeight: 1.1 }}>Da el siguiente paso en tu carrera</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,.78)", margin: "0 0 24px" }}>
              Si estás buscando un lugar donde realmente puedas crecer, queremos conocerte.
            </p>
            <a className="bt-focus" href="#formulario-postulacion" style={{ display: "inline-flex", background: "#C8102E", color: "#fff", padding: "13px 20px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>Postularme ahora →</a>
          </div>

          <form id="formulario-postulacion" onSubmit={handleSubmit} onFocus={markFormStart} style={{ background: "#fff", borderRadius: 8, padding: 30, border: "1px solid rgba(255,255,255,.24)", boxShadow: "0 16px 48px rgba(0,0,0,.2)" }}>
            {estado === "sent" ? (
              <div role="status" aria-live="polite" style={{ textAlign: "center", padding: "44px 16px" }}>
                <div style={{ width: 58, height: 58, borderRadius: "50%", background: "#f0fdf4", color: "#15803d", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#1a1a2e", margin: "0 0 8px" }}>Solicitud enviada</h3>
                <p style={{ color: "#6b7280", lineHeight: 1.7, margin: 0 }}>Gracias por postularte. El equipo de Emporio revisará tu información.</p>
              </div>
            ) : (
              <>
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: 18, marginBottom: 20 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 900, color: "#1a1a2e", margin: "0 0 12px" }}>¿Qué sucede después de enviar tu solicitud?</h3>
                  <ol style={{ margin: 0, paddingLeft: 20, color: "#4b5563", fontSize: 13, lineHeight: 1.8 }}>
                    <li>Revisamos tu perfil.</li>
                    <li>Si existe compatibilidad, nos pondremos en contacto.</li>
                    <li>Agendaremos una entrevista.</li>
                    <li>Conocerás nuestro proceso de integración.</li>
                  </ol>
                </div>
                <input type="text" name="empresa" tabIndex="-1" autoComplete="off" value={form.empresa} onChange={(e) => update("empresa", e.target.value)} aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }} />
                <div className="bt-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field id="bt-nombre" label="Nombre completo" required><input id="bt-nombre" className="bt-input" required value={form.nombre} onChange={(e) => update("nombre", e.target.value)} autoComplete="name" style={inputStyle()} /></Field>
                  <Field id="bt-email" label="Correo electrónico" required><input id="bt-email" className="bt-input" required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" style={inputStyle()} /></Field>
                  <Field id="bt-telefono" label="Teléfono" required><input id="bt-telefono" className="bt-input" required type="tel" value={form.telefono} onChange={(e) => update("telefono", e.target.value)} autoComplete="tel" style={inputStyle()} /></Field>
                  <Field id="bt-ciudad" label="Ciudad" required><input id="bt-ciudad" className="bt-input" required value={form.ciudad} onChange={(e) => update("ciudad", e.target.value)} autoComplete="address-level2" style={inputStyle()} /></Field>
                  <Field id="bt-edad" label="Edad" required><input id="bt-edad" className="bt-input" required type="number" min="18" max="85" value={form.edad} onChange={(e) => update("edad", e.target.value)} style={inputStyle()} /></Field>
                  <Field id="bt-experiencia-ventas" label="Experiencia en ventas" required>
                    <select id="bt-experiencia-ventas" className="bt-input" required value={form.experienciaVentas} onChange={(e) => update("experienciaVentas", e.target.value)} style={inputStyle()}>
                      <option value="">Selecciona una opción</option>
                      <option>Ninguna</option>
                      <option>Menos de 1 año</option>
                      <option>1 a 3 años</option>
                      <option>Más de 3 años</option>
                    </select>
                  </Field>
                  <Field id="bt-experiencia-inmobiliaria" label="Experiencia inmobiliaria" required>
                    <select id="bt-experiencia-inmobiliaria" className="bt-input" required value={form.experienciaInmobiliaria} onChange={(e) => update("experienciaInmobiliaria", e.target.value)} style={inputStyle()}>
                      <option value="">Selecciona una opción</option>
                      <option>Sí</option>
                      <option>No</option>
                    </select>
                  </Field>
                  <Field id="bt-automovil" label="¿Cuentas con automóvil?" required>
                    <select id="bt-automovil" className="bt-input" required value={form.automovil} onChange={(e) => update("automovil", e.target.value)} style={inputStyle()}>
                      <option value="">Selecciona una opción</option>
                      <option>Sí</option>
                      <option>No</option>
                    </select>
                  </Field>
                </div>
                <div style={{ marginTop: 16 }}>
                  <Field id="bt-mensaje" label="Mensaje">
                    <textarea id="bt-mensaje" className="bt-input" value={form.mensaje} onChange={(e) => update("mensaje", e.target.value)} rows={5} style={{ ...inputStyle(), minHeight: 118, resize: "vertical" }} />
                  </Field>
                </div>
                <div style={{ marginTop: 16 }}>
                  <Field id="bt-cv" label="Currículum Vitae PDF" required>
                    <input id="bt-cv" className="bt-input" required type="file" accept="application/pdf,.pdf" onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      update("cv", file);
                      if (file) {
                        registrarEventoSitio("site_file_upload", {
                          contexto: "bolsa_de_trabajo",
                          tipo_formulario: "postulacion_asesor_inmobiliario",
                          ruta: "/bolsa-de-trabajo",
                          campo: "cv",
                        });
                      }
                    }} aria-describedby="bt-cv-ayuda" style={{ ...inputStyle(), paddingTop: 10 }} />
                  </Field>
                  <p id="bt-cv-ayuda" style={{ fontSize: 12, color: "#6b7280", margin: "6px 0 0" }}>Solo PDF. Tamaño máximo: 5 MB.</p>
                </div>
                {error && <p role="alert" style={{ color: "#b91c1c", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: 12, fontSize: 13, margin: "16px 0 0" }}>{error}</p>}
                <button className="bt-focus" type="submit" disabled={estado === "sending"} aria-busy={estado === "sending"} style={{ width: "100%", marginTop: 22, background: "#C8102E", color: "#fff", border: "none", borderRadius: 10, padding: "15px 18px", fontSize: 15, fontWeight: 900, cursor: estado === "sending" ? "not-allowed" : "pointer", opacity: estado === "sending" ? .72 : 1, fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  {estado === "sending" && <span className="bt-spinner" aria-hidden="true" />}
                  {estado === "sending" ? "Enviando solicitud..." : "Enviar solicitud →"}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
