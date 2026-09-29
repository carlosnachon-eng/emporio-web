import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { registrarEventoSitio } from "../../lib/siteAnalytics";
import styles from "./AdministrationExperience.module.css";

const ROUTE = "/administracion-de-propiedades-veracruz";
const ANALYTICS_CONTEXT = "administracion_propiedades_veracruz";
const CONVERSION_EVENT = "site_property_management_lead_veracruz";
const WHATSAPP_MESSAGE =
  "Hola, quiero información sobre administración de propiedades en Veracruz.";
const WHATSAPP_URL = `https://wa.me/522222573237?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const SERVICE_BENEFITS = [
  {
    icon: "megaphone",
    title: "Promoción y colocación",
    text: "Preparamos la propiedad, atendemos prospectos y coordinamos el proceso hasta formalizar el arrendamiento.",
  },
  {
    icon: "search",
    title: "Investigación del candidato",
    text: "Verificamos ingresos, referencias y antecedentes antes de presentar la operación al propietario.",
  },
  {
    icon: "document",
    title: "Elaboración contractual",
    text: "Integramos la información y preparamos la documentación aplicable al arrendamiento.",
  },
  {
    icon: "payment",
    title: "Cobranza mensual",
    text: "Damos seguimiento a la renta y documentamos los movimientos para el propietario.",
  },
  {
    icon: "report",
    title: "Seguimiento y reportes",
    text: "Mantenemos al propietario informado sobre ingresos, gastos e incidencias de su inmueble.",
  },
  {
    icon: "tools",
    title: "Mantenimiento e incidencias",
    text: "Coordinamos los trabajos necesarios y conservamos evidencia y comprobantes para el propietario.",
  },
  {
    icon: "refresh",
    title: "Renovaciones",
    text: "Acompañamos la continuidad del arrendamiento y la actualización de su documentación.",
  },
  {
    icon: "check",
    title: "Finiquito y entrega",
    text: "Damos seguimiento al cierre del arrendamiento y a la entrega documentada del inmueble.",
  },
];

const PROCESS = [
  { number: "01", title: "Diagnóstico", text: "Conocemos el inmueble, su situación y tus objetivos." },
  { number: "02", title: "Colocación", text: "Promovemos la propiedad y atendemos a los interesados." },
  { number: "03", title: "Investigación", text: "Revisamos la información del candidato." },
  { number: "04", title: "Contrato", text: "Formalizamos las condiciones del arrendamiento." },
  { number: "05", title: "Administración", text: "Atendemos cobranza, incidencias y mantenimiento." },
  { number: "06", title: "Seguimiento", text: "Documentamos movimientos y reportamos al propietario." },
];

const OWNER_TOOLS = [
  "Consultar pagos y liquidaciones",
  "Revisar contratos y documentos disponibles",
  "Consultar movimientos del inmueble",
  "Dar seguimiento a incidencias",
  "Revisar mantenimientos y comprobantes",
];

export const VERACRUZ_ADMINISTRATION_FAQS = [
  {
    question: "¿En qué zonas ofrecen administración de propiedades?",
    answer:
      "El servicio cubre Veracruz puerto, Boca del Río, Riviera Veracruzana y Alvarado.",
  },
  {
    question: "¿Qué tipos de inmueble administran?",
    answer:
      "Administramos casas, departamentos, locales y bodegas destinados al arrendamiento habitacional o comercial.",
  },
  {
    question: "¿Administran propiedades vacacionales o Airbnb?",
    answer:
      "No. El servicio está enfocado en arrendamientos habitacionales y comerciales, no en administración vacacional o de estancias cortas.",
  },
  {
    question: "¿Qué incluye la administración?",
    answer:
      "Incluye promoción y colocación, investigación del candidato, elaboración contractual, cobranza mensual, reportes al propietario, coordinación de mantenimiento, renovaciones, finiquito, entrega y atención de incidencias.",
  },
  {
    question: "¿Cuánto cuesta la administración mensual?",
    answer:
      "Los honorarios equivalen al 10% de la renta efectivamente cobrada.",
  },
  {
    question: "¿Cuál es el costo de colocar a un nuevo inquilino?",
    answer:
      "Para contratos de 12 meses, la colocación equivale a un mes de renta.",
  },
  {
    question: "¿Cómo investigan a un candidato?",
    answer:
      "Emporio revisa ingresos, referencias y antecedentes antes de formalizar el contrato y presentar la operación al propietario.",
  },
  {
    question: "¿Qué sucede cuando se requiere mantenimiento?",
    answer:
      "Emporio coordina el mantenimiento o la atención de la incidencia y documenta los gastos para el propietario.",
  },
  {
    question: "¿Recibiré información sobre mi propiedad?",
    answer:
      "Sí. La administración contempla seguimiento y reportes al propietario sobre la operación del inmueble.",
  },
  {
    question: "¿Puedo contratar el servicio si vivo en otra ciudad?",
    answer:
      "Sí. El servicio está dirigido tanto a propietarios locales como a quienes desean delegar la operación cotidiana de su inmueble.",
  },
];

function Icon({ name, size = 24 }) {
  const paths = {
    payment: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>,
    tools: <><path d="m14 7 3-3 3 3-3 3M4 20l9-9M5 4l15 15M4 3l4 1-3 3-1-4Z" /></>,
    megaphone: <><path d="m4 13 13-6v10L4 13Z" /><path d="M7 14v5h4l1-3M18 9c2 1 2 5 0 6" /></>,
    document: <><path d="M6 3h8l4 4v14H6Z" /><path d="M14 3v5h5M9 12h6M9 16h6" /></>,
    report: <><path d="M5 20V10M12 20V4M19 20v-7" /><path d="M3 20h18" /></>,
    refresh: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M6 8a7 7 0 0 1 12-1l2 5M18 16A7 7 0 0 1 6 17l-2-5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    menu: <><path d="M5 7h14M5 12h14M5 17h9" /></>,
    folder: <><path d="M3 6h7l2 2h9v11H3Z" /><path d="M3 10h18" /></>,
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || paths.check}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`${styles.sectionHeading} ${styles.center}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={light ? styles.lightTitle : ""}>{title}</h2>
      {text && <p className={light ? styles.lightText : ""}>{text}</p>}
    </div>
  );
}

function readCampaign() {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get("utm_campaign") || "";
}

export default function VeracruzAdministrationExperience() {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    tipo: "",
    zona: "",
    modalidad: "",
    comentarios: "",
    acepta: false,
  });
  const [status, setStatus] = useState("idle");
  const formStarted = useRef(false);
  const submissionActive = useRef(false);

  const analyticsPayload = (extra = {}) => ({
    contexto: ANALYTICS_CONTEXT,
    tipo_formulario: "asesoria_administracion",
    ruta: ROUTE,
    plaza: "VERACRUZ",
    servicio: "PROPERTY_MANAGEMENT",
    source: "website",
    campaign: readCampaign(),
    ...extra,
  });

  const updateForm = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };

  const trackFormStart = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    registrarEventoSitio("site_form_start", analyticsPayload());
  };

  const trackWhatsapp = () => {
    registrarEventoSitio("site_whatsapp_click", analyticsPayload({
      destino: "whatsapp_general",
      ubicacion: "administracion_veracruz",
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (submissionActive.current) return;
    submissionActive.current = true;
    setStatus("sending");
    let completed = false;

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          whatsapp: form.whatsapp,
          email: form.email,
          tipo: form.tipo,
          colonia: form.zona,
          operacion: form.modalidad,
          comentarios: form.comentarios,
          asunto: "Solicitud de administración de propiedades — Veracruz",
          plaza: "VERACRUZ",
          service: "PROPERTY_MANAGEMENT",
          source: "website",
          campaign: readCampaign(),
          landing_path: ROUTE,
        }),
      });

      if (!response.ok) throw new Error("send_error");
      const analytics = analyticsPayload();
      registrarEventoSitio("site_form_submit", analytics);
      registrarEventoSitio(CONVERSION_EVENT, analytics);
      completed = true;
      setStatus("success");
    } catch {
      registrarEventoSitio("site_form_error", analyticsPayload({ estado: "envio_no_completado" }));
      setStatus("error");
    } finally {
      if (!completed) submissionActive.current = false;
    }
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>Administración habitacional y comercial · Veracruz</p>
              <h1>Administración de propiedades en Veracruz <span>para operar tu renta con orden</span></h1>
              <p className={styles.heroLead}>
                Emporio se encarga de la colocación, investigación del candidato,
                contrato, cobranza, incidencias, mantenimiento y reportes de tu inmueble.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#asesoria">Solicitar evaluación <Icon name="arrow" size={18} /></a>
                <a className={styles.secondaryButton} href="#proceso">Conocer el proceso</a>
              </div>
              <p className={styles.heroNote}>
                Cobertura en Veracruz puerto, Boca del Río, Riviera Veracruzana y Alvarado.
              </p>
            </div>
            <div className={styles.heroVisual}>
              <Image
                src="/images/administracion-inmuebles-puebla-og.png"
                alt="Administración profesional de una propiedad en renta"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.heroOverlay} />
              <div className={styles.heroProof}>
                <span className={styles.proofMark}><Icon name="report" size={22} /></span>
                <div><strong>Operación documentada</strong><span>Cobranza, incidencias y reportes en un solo servicio.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Administración integral"
              title="Delega la operación cotidiana sin perder visibilidad."
              text="Atendemos cada etapa del arrendamiento y conservamos la información necesaria para que tomes decisiones con claridad."
            />
            <div className={styles.benefitGrid}>
              {SERVICE_BENEFITS.map((item) => (
                <article key={item.title} className={styles.benefitCard}>
                  <span className={styles.iconBox}><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3><p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.softSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Propiedades y modalidades"
              title="Administración para renta habitacional y comercial."
              text="Trabajamos con casas, departamentos, locales y bodegas. El servicio no incluye administración vacacional ni operaciones tipo Airbnb."
            />
          </div>
        </section>

        <section id="proceso" className={styles.darkSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Así administramos"
              title="Un proceso claro desde el diagnóstico hasta el seguimiento."
              text="La operación se organiza en etapas para mantener comunicación y documentación durante el arrendamiento."
              light
            />
            <ol className={styles.timeline}>
              {PROCESS.map((step) => (
                <li key={step.number}><span className={styles.stepNumber}>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.inmoadminSection}>
          <div className={`${styles.container} ${styles.inmoadminGrid}`}>
            <div className={styles.platformCopy}>
              <p className={styles.eyebrow}>Información organizada</p>
              <h2>Seguimiento para el propietario.</h2>
              <p>La administración concentra la información operativa de tu inmueble para facilitar el seguimiento de pagos, documentos, incidencias y mantenimientos.</p>
              <ul className={styles.featureList}>
                {OWNER_TOOLS.map((item) => <li key={item}><span><Icon name="check" size={17} /></span>{item}</li>)}
              </ul>
            </div>
            <div className={styles.deviceFrame} aria-label="Vista representativa del seguimiento al propietario">
              <div className={styles.browserBar}><span /><span /><span /><div>app.emporioinmobiliario.com.mx</div></div>
              <div className={styles.dashboard}>
                <aside>
                  <div className={styles.dashboardBrand}>INMOADMIN</div>
                  {["Resumen", "Pagos", "Documentos", "Incidencias", "Mantenimiento"].map((item, index) => (
                    <div key={item} className={index === 0 ? styles.activeMenu : ""}><Icon name={index === 2 ? "folder" : index === 4 ? "tools" : "menu"} size={16} /><span>{item}</span></div>
                  ))}
                </aside>
                <div className={styles.dashboardBody}>
                  <div className={styles.dashboardHeader}><div><small>PORTAL DEL PROPIETARIO</small><strong>Resumen de tu inmueble</strong></div><span className={styles.statusPill}>Información organizada</span></div>
                  <div className={styles.dashboardCards}>
                    <div><small>Renta</small><strong>Seguimiento visible</strong><i className={styles.progress} /></div>
                    <div><small>Documentos</small><strong>Consulta centralizada</strong><i className={styles.progressShort} /></div>
                    <div><small>Incidencias</small><strong>Historial documentado</strong><i className={styles.progressMid} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.feeSection}>
          <div className={`${styles.container} ${styles.feeGrid}`}>
            <div>
              <p className={styles.eyebrow}>Honorarios claros</p>
              <h2>Costos ligados a la operación real del arrendamiento.</h2>
              <p>La administración mensual se calcula sobre la renta efectivamente cobrada. La colocación cubre el trabajo de promoción y contratación de un nuevo arrendamiento.</p>
            </div>
            <div className={styles.feeCard}>
              <small>Administración mensual</small><strong>10%</strong><span>de la renta efectivamente cobrada</span><hr />
              <p>Para contratos de 12 meses, la colocación equivale a un mes de renta.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.container} ${styles.conditionsGrid}`}>
            <div>
              <p className={styles.eyebrow}>Cobertura confirmada</p>
              <h2>Atención en el corredor Veracruz–Alvarado.</h2>
              <p>Administramos propiedades en Veracruz puerto, Boca del Río, Riviera Veracruzana y Alvarado.</p>
            </div>
            <div className={styles.conditions}>
              <article><Icon name="check" /><div><h3>Propietarios locales</h3><p>Para quienes desean delegar cobranza, incidencias y seguimiento cotidiano.</p></div></article>
              <article><Icon name="report" /><div><h3>Inversionistas</h3><p>Para quienes necesitan una operación documentada y reportes sobre su inmueble.</p></div></article>
              <article><Icon name="document" /><div><h3>Propietarios en otra ciudad</h3><p>Para quienes requieren seguimiento operativo sin estar presentes todos los días.</p></div></article>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <SectionHeading eyebrow="Preguntas frecuentes" title="Lo esencial antes de delegar tu propiedad." text="Respuestas sobre cobertura, alcance, honorarios y operación del servicio." />
            <div className={styles.faqList}>
              {VERACRUZ_ADMINISTRATION_FAQS.map((faq) => (
                <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section id="asesoria" className={styles.ctaSection}>
          <div className={`${styles.container} ${styles.ctaGrid}`}>
            <div className={styles.ctaCopy}>
              <p className={styles.eyebrow}>Evaluemos tu propiedad</p>
              <h2>Cuéntanos qué inmueble quieres administrar.</h2>
              <p>Revisaremos su ubicación, modalidad y situación actual para conversar contigo sobre el siguiente paso.</p>
              <div className={styles.contactOptions}>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={trackWhatsapp}>Escribir al WhatsApp general <Icon name="arrow" size={17} /></a>
              </div>
            </div>
            <div className={styles.formCard}>
              {status === "success" ? (
                <div className={styles.successMessage} role="status"><span><Icon name="check" size={28} /></span><h3>Recibimos tu solicitud.</h3><p>El equipo comercial de Emporio revisará la información y se pondrá en contacto contigo.</p></div>
              ) : (
                <form onSubmit={submitForm} onFocus={trackFormStart} data-plaza="VERACRUZ" data-service="PROPERTY_MANAGEMENT">
                  <div className={styles.formHeader}><small>Administración Veracruz</small><h3>Conozcamos tu inmueble.</h3><p>Comparte los datos esenciales para iniciar.</p></div>
                  <div className={styles.formGrid}>
                    <label>Nombre<input name="nombre" value={form.nombre} onChange={updateForm} required autoComplete="name" /></label>
                    <label>WhatsApp<input name="whatsapp" value={form.whatsapp} onChange={updateForm} required inputMode="tel" autoComplete="tel" /></label>
                    <label>Correo<input name="email" value={form.email} onChange={updateForm} type="email" autoComplete="email" /></label>
                    <label>Tipo de inmueble<select name="tipo" value={form.tipo} onChange={updateForm} required><option value="">Selecciona una opción</option><option>Casa</option><option>Departamento</option><option>Local</option><option>Bodega</option></select></label>
                    <label>Modalidad<select name="modalidad" value={form.modalidad} onChange={updateForm} required><option value="">Selecciona una opción</option><option>Arrendamiento habitacional</option><option>Arrendamiento comercial</option></select></label>
                    <label>Ciudad o zona<input name="zona" value={form.zona} onChange={updateForm} required placeholder="Veracruz, Boca del Río, Riviera Veracruzana o Alvarado" /></label>
                    <label className={styles.fullField}>¿Qué necesitas resolver?<textarea name="comentarios" value={form.comentarios} onChange={updateForm} rows="3" /></label>
                  </div>
                  <label className={styles.consent}><input type="checkbox" name="acepta" checked={form.acepta} onChange={updateForm} required /><span>Acepto ser contactado para recibir información sobre el servicio y he leído el <a href="/aviso-privacidad">aviso de privacidad</a>.</span></label>
                  {status === "error" && <p className={styles.errorMessage} role="alert">No pudimos enviar la solicitud. Inténtalo nuevamente o escríbenos por WhatsApp.</p>}
                  <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Solicitar evaluación"}{status !== "sending" && <Icon name="arrow" size={18} />}</button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <SectionHeading eyebrow="Emporio en Veracruz" title="Conoce la operación de la plaza." />
            <div className={styles.relatedGrid}>
              <Link href="/inmobiliaria-veracruz"><small>Veracruz</small><strong>Conocer Emporio Inmobiliario en Veracruz</strong><span>Ver plaza <Icon name="arrow" size={16} /></span></Link>
              <Link href="/propiedades"><small>Inventario</small><strong>Explorar propiedades disponibles</strong><span>Ver propiedades <Icon name="arrow" size={16} /></span></Link>
              <Link href="/vender-propiedad-veracruz"><small>Propietarios</small><strong>Vender una propiedad en Veracruz</strong><span>Ver servicio <Icon name="arrow" size={16} /></span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer brandDescription="Servicios inmobiliarios y administración de propiedades en Puebla y Veracruz." hideLegalLinks />
      <a className={styles.floatingWhatsapp} href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Consultar administración de propiedades por WhatsApp" onClick={trackWhatsapp}>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.2 21.7h-.1c-1.7 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.1.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" /></svg>
      </a>
    </div>
  );
}
