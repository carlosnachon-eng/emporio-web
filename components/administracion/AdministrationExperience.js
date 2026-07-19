import { useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { registrarEventoSitio } from "../../lib/siteAnalytics";
import styles from "./AdministrationExperience.module.css";

const WHATSAPP_URL =
  "https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20administración%20de%20inmuebles";

const ADMIN_STATS = [
  { value: "20+", label: "años de experiencia inmobiliaria en Puebla" },
  { value: "5,000+", label: "propiedades promovidas por Emporio" },
  { value: "Jurídica", label: "área propia para acompañar cada operación" },
  { value: "Digital", label: "seguimiento mediante Inmoadmin" },
];

const PEACE_OF_MIND = [
  {
    icon: "clock",
    concern: "No tienes tiempo para administrar",
    response: "Coordinamos la operación diaria y damos seguimiento por ti.",
  },
  {
    icon: "location",
    concern: "Vives fuera de Puebla",
    response: "Somos tus ojos en el inmueble y documentamos cada movimiento.",
  },
  {
    icon: "payment",
    concern: "No quieres perseguir rentas",
    response: "Realizamos la cobranza y te entregamos una liquidación detallada.",
  },
  {
    icon: "search",
    concern: "Te preocupa elegir al inquilino",
    response: "Investigamos ingresos, referencias y antecedentes antes de la firma.",
  },
  {
    icon: "tools",
    concern: "El mantenimiento te quita tranquilidad",
    response: "Coordinamos, comprobamos y reportamos cada trabajo realizado.",
  },
];

const SERVICE_BENEFITS = [
  { icon: "megaphone", title: "Promoción estratégica", text: "Difusión en redes sociales y más de 20 portales especializados." },
  { icon: "search", title: "Selección del inquilino", text: "Verificación de ingresos, referencias y antecedentes jurídicos." },
  { icon: "document", title: "Contratos y pagarés", text: "Documentación preparada y formalizada para la operación." },
  { icon: "payment", title: "Cobranza puntual", text: "Seguimiento mensual, recibos y entrega de la renta neta." },
  { icon: "tools", title: "Mantenimiento documentado", text: "Coordinación de reparaciones con evidencia y comprobantes." },
  { icon: "report", title: "Reportes al propietario", text: "Detalle de ingresos, descuentos, gastos y movimientos." },
  { icon: "refresh", title: "Renovaciones y finiquitos", text: "Seguimiento al cierre o continuidad de cada arrendamiento." },
  { icon: "shield", title: "Acompañamiento jurídico", text: "Respaldo del área jurídica propia y opción de Blindaje Legal." },
];

const PROCESS = [
  { number: "01", title: "Captación", text: "Conocemos el inmueble y tus objetivos." },
  { number: "02", title: "Promoción", text: "Preparamos y difundimos la propiedad." },
  { number: "03", title: "Investigación", text: "Revisamos a cada candidato." },
  { number: "04", title: "Firma", text: "Formalizamos el arrendamiento." },
  { number: "05", title: "Administración", text: "Atendemos la operación cotidiana." },
  { number: "06", title: "Cobranza", text: "Damos seguimiento a cada renta." },
  { number: "07", title: "Reportes", text: "Te mantenemos informado." },
];

const OWNER_TOOLS = [
  "Consultar pagos y liquidaciones",
  "Descargar estados de cuenta",
  "Revisar contratos y documentos",
  "Consultar movimientos del inmueble",
  "Dar seguimiento a incidencias",
  "Revisar mantenimientos y evidencias",
];

const COMPARISON = [
  ["Publicación aislada del inmueble", "Estrategia comercial y seguimiento de prospectos"],
  ["Cobranza sin contexto", "Gestión integral del arrendamiento"],
  ["Información dispersa", "Reportes y movimientos centralizados"],
  ["Respuesta reactiva", "Seguimiento continuo al propietario e inquilino"],
  ["Sin plataforma propia", "Acceso digital mediante Inmoadmin"],
  ["Respaldo externo o limitado", "Área jurídica propia y Blindaje Legal"],
];

export const ADMINISTRATION_FAQS = [
  {
    question: "¿Qué incluye la administración de inmuebles en Puebla?",
    answer:
      "Incluye promoción, investigación y selección del inquilino, formalización del contrato, cobranza mensual, atención al inquilino, coordinación de mantenimiento, reportes, renovaciones y finiquitos.",
  },
  {
    question: "¿Cuánto cobra Emporio por administrar una propiedad?",
    answer:
      "Los honorarios de administración equivalen al 10% de la renta mensual efectivamente cobrada. Se descuentan antes de entregar la renta neta al propietario.",
  },
  {
    question: "¿Existe algún costo al conseguir un nuevo inquilino?",
    answer:
      "Sí. Al inicio de cada arrendamiento nuevo se cobra el equivalente a un mes de renta por promoción y contratación. En renovaciones con el mismo inquilino aplica el mismo monto.",
  },
  {
    question: "¿Cómo recibo la renta de mi propiedad?",
    answer:
      "Emporio realiza la cobranza y entrega la renta neta mediante transferencia bancaria, acompañada de un reporte con los ingresos, descuentos y gastos aplicados.",
  },
  {
    question: "¿Qué pasa si el inquilino se retrasa con la renta?",
    answer:
      "Se realiza el seguimiento de cobranza correspondiente. Si el incumplimiento continúa, se activa la gestión extrajudicial y, cuando aplica, el respaldo jurídico contratado.",
  },
  {
    question: "¿Qué sucede si el inquilino deja de pagar?",
    answer:
      "La administración documenta el incumplimiento y escala el caso conforme al contrato. Cuando el inmueble cuenta con Blindaje Legal, se aplica la cobertura jurídica correspondiente.",
  },
  {
    question: "¿Cómo investigan a un posible inquilino?",
    answer:
      "Se verifican ingresos, referencias y antecedentes jurídicos antes de presentarlo al propietario y formalizar cualquier contrato.",
  },
  {
    question: "¿Quién toma la decisión final sobre el inquilino?",
    answer:
      "El propietario conserva la decisión final. Emporio investiga, filtra y presenta la información necesaria para tomar una decisión con mayor claridad.",
  },
  {
    question: "¿Quién paga los mantenimientos de la propiedad?",
    answer:
      "La responsabilidad depende del tipo de reparación y de lo establecido en el contrato. Emporio coordina el trabajo, documenta el gasto y lo refleja en el reporte correspondiente.",
  },
  {
    question: "¿Cómo autorizo una reparación?",
    answer:
      "Las reparaciones que superan el límite operativo acordado se consultan y requieren autorización por escrito. Los trabajos se documentan con evidencia y comprobantes.",
  },
  {
    question: "¿Puedo contratar el servicio si vivo fuera de Puebla?",
    answer:
      "Sí. El servicio está pensado también para propietarios que viven en otra ciudad o país y necesitan seguimiento local, documentación y comunicación constante.",
  },
  {
    question: "¿Administran casas y departamentos?",
    answer:
      "Sí. Emporio administra casas y departamentos destinados al arrendamiento en Puebla y su zona metropolitana.",
  },
  {
    question: "¿Administran locales comerciales y bodegas?",
    answer:
      "Sí, previa revisión del inmueble y de las condiciones de la operación para definir el alcance adecuado del servicio.",
  },
  {
    question: "¿Cómo puedo saber qué está pasando con mi propiedad?",
    answer:
      "El propietario recibe reportes y puede consultar en Inmoadmin pagos, liquidaciones, contratos, movimientos, incidencias y mantenimientos.",
  },
  {
    question: "¿Qué documentos puedo consultar en Inmoadmin?",
    answer:
      "El portal centraliza los contratos y documentos vigentes disponibles para cada inmueble, además del historial relacionado con su administración.",
  },
  {
    question: "¿La administración incluye póliza jurídica?",
    answer:
      "La administración y Blindaje Legal son servicios complementarios. Pueden contratarse juntos para combinar la gestión cotidiana con protección jurídica durante el arrendamiento.",
  },
  {
    question: "¿Cuánto dura el contrato de administración?",
    answer:
      "El contrato tiene vigencia de un año con renovación automática, conforme a las condiciones establecidas al momento de la contratación.",
  },
  {
    question: "¿Puedo cancelar el servicio de administración?",
    answer:
      "Sí. Cualquiera de las partes puede darlo por terminado con 30 días de aviso previo, conforme a las condiciones del contrato.",
  },
  {
    question: "¿Quién se encarga de las obligaciones fiscales de la renta?",
    answer:
      "Las obligaciones fiscales derivadas del arrendamiento corresponden al propietario. Emporio puede emitir las constancias mensuales contempladas en el servicio cuando se soliciten.",
  },
  {
    question: "¿Cómo inicio la administración de mi inmueble?",
    answer:
      "El primer paso es solicitar una asesoría. Revisamos la propiedad, tus objetivos y las condiciones del arrendamiento antes de preparar el contrato de administración.",
  },
];

// Estructuras listas para incorporar evidencia real sin introducir contenido ficticio.
// Mientras no existan datos verificados, estas secciones no se renderizan.
const VERIFIED_SUCCESS_STORIES = [];
const VERIFIED_ADMIN_REVIEWS = [];

function Icon({ name, size = 24 }) {
  const paths = {
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    payment: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>,
    tools: <><path d="m14 7 3-3 3 3-3 3M4 20l9-9M5 4l15 15M4 3l4 1-3 3-1-4Z" /></>,
    megaphone: <><path d="m4 13 13-6v10L4 13Z" /><path d="M7 14v5h4l1-3M18 9c2 1 2 5 0 6" /></>,
    document: <><path d="M6 3h8l4 4v14H6Z" /><path d="M14 3v5h5M9 12h6M9 16h6" /></>,
    report: <><path d="M5 20V10M12 20V4M19 20v-7" /><path d="M3 20h18" /></>,
    refresh: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M6 8a7 7 0 0 1 12-1l2 5M18 16A7 7 0 0 1 6 17l-2-5" /></>,
    shield: <><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6Z" /><path d="m9 12 2 2 4-5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    menu: <><path d="M5 7h14M5 12h14M5 17h9" /></>,
    folder: <><path d="M3 6h7l2 2h9v11H3Z" /><path d="M3 10h18" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.check}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text, align = "center", light = false }) {
  return (
    <div className={`${styles.sectionHeading} ${styles[align]}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={light ? styles.lightTitle : ""}>{title}</h2>
      {text && <p className={light ? styles.lightText : ""}>{text}</p>}
    </div>
  );
}

function SuccessStories() {
  if (!VERIFIED_SUCCESS_STORIES.length) return null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading eyebrow="Resultados reales" title="Historias de propietarios que recuperaron tranquilidad." />
        <div className={styles.storyGrid}>
          {VERIFIED_SUCCESS_STORIES.map((story) => (
            <article key={story.id} className={styles.storyCard}>{story.title}</article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdministrationReviews() {
  if (!VERIFIED_ADMIN_REVIEWS.length) return null;
  return (
    <section className={styles.softSection}>
      <div className={styles.container}>
        <SectionHeading eyebrow="Experiencias verificadas" title="Lo que dicen nuestros propietarios." />
        <div className={styles.reviewGrid}>
          {VERIFIED_ADMIN_REVIEWS.map((review) => (
            <blockquote key={review.id} className={styles.reviewCard}>{review.text}</blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AdministrationExperience() {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    tipo: "",
    colonia: "",
    comentarios: "",
    acepta: false,
  });
  const [status, setStatus] = useState("idle");
  const formStarted = useRef(false);

  const updateForm = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const trackFormStart = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    registrarEventoSitio("site_form_start", {
      contexto: "administracion_inmuebles",
      tipo_formulario: "asesoria_administracion",
      ruta: "/administracion",
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          whatsapp: form.whatsapp,
          email: form.email,
          tipo: form.tipo,
          colonia: form.colonia,
          comentarios: form.comentarios,
          asunto: "Solicitud de asesoría — Administración de inmuebles",
          operacion: "Administración de inmueble",
        }),
      });

      if (!response.ok) throw new Error("No fue posible enviar la solicitud.");

      registrarEventoSitio("site_form_submit", {
        contexto: "administracion_inmuebles",
        tipo_formulario: "asesoria_administracion",
        ruta: "/administracion",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>Administración inmobiliaria en Puebla</p>
              <h1>Tu propiedad, <span>administrada</span> sin complicaciones.</h1>
              <p className={styles.heroLead}>
                Protegemos la operación de tu inmueble con seguimiento constante,
                procesos digitales y respaldo jurídico para que recuperes tiempo y
                tranquilidad.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#asesoria">
                  Solicitar asesoría <Icon name="arrow" size={18} />
                </a>
                <a className={styles.secondaryButton} href="#proceso">
                  Conocer cómo funciona
                </a>
              </div>
              <p className={styles.heroNote}>
                Para casas, departamentos, locales y bodegas en Puebla y su zona metropolitana.
              </p>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/images/administracion-inmuebles-puebla-og.png"
                alt="Inmueble administrado profesionalmente en Puebla"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.heroOverlay} />
              <div className={styles.heroProof}>
                <span className={styles.proofMark}><Icon name="shield" size={22} /></span>
                <div>
                  <strong>Tu patrimonio, bajo seguimiento</strong>
                  <span>Cobranza, documentación y atención en un solo servicio.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.stats} aria-label="Indicadores de confianza">
          <div className={`${styles.container} ${styles.statsGrid}`}>
            {ADMIN_STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Tranquilidad para propietarios"
              title="Tu propiedad no debería convertirse en otro trabajo."
              text="Nos encargamos de lo que consume tu tiempo y te mantenemos informado sobre lo que sí requiere tu decisión."
            />
            <div className={styles.concernGrid}>
              {PEACE_OF_MIND.map((item) => (
                <article key={item.concern} className={styles.concernCard}>
                  <span className={styles.iconBox}><Icon name={item.icon} /></span>
                  <div>
                    <h3>{item.concern}</h3>
                    <p>{item.response}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.softSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Administración integral"
              title="Un equipo pendiente de cada etapa del arrendamiento."
              text="Desde encontrar al inquilino adecuado hasta entregar tu liquidación mensual."
            />
            <div className={styles.benefitGrid}>
              {SERVICE_BENEFITS.map((item) => (
                <article key={item.title} className={styles.benefitCard}>
                  <span className={styles.iconBox}><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className={styles.darkSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Así administramos"
              title="Un proceso claro desde el primer día."
              text="Cada etapa tiene un responsable, un seguimiento y un resultado esperado."
              light
            />
            <ol className={styles.timeline}>
              {PROCESS.map((step) => (
                <li key={step.number}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.inmoadminSection}>
          <div className={`${styles.container} ${styles.inmoadminGrid}`}>
            <div className={styles.platformCopy}>
              <p className={styles.eyebrow}>Inmoadmin</p>
              <h2>La información de tu propiedad, siempre disponible.</h2>
              <p>
                No tienes que perseguir reportes ni reconstruir conversaciones.
                Inmoadmin concentra la información operativa de tu inmueble para
                que puedas consultarla con claridad.
              </p>
              <ul className={styles.featureList}>
                {OWNER_TOOLS.map((item) => (
                  <li key={item}><span><Icon name="check" size={17} /></span>{item}</li>
                ))}
              </ul>
              <a
                className={styles.textLink}
                href="https://app.emporioinmobiliario.com.mx/propietario"
                target="_blank"
                rel="noreferrer"
              >
                Acceder al portal del propietario <Icon name="arrow" size={18} />
              </a>
            </div>

            <div className={styles.deviceFrame} aria-label="Vista representativa de Inmoadmin">
              <div className={styles.browserBar}>
                <span /><span /><span />
                <div>app.emporioinmobiliario.com.mx</div>
              </div>
              <div className={styles.dashboard}>
                <aside>
                  <div className={styles.dashboardBrand}>INMOADMIN</div>
                  {["Resumen", "Pagos", "Documentos", "Incidencias", "Mantenimiento"].map((item, index) => (
                    <div key={item} className={index === 0 ? styles.activeMenu : ""}>
                      <Icon name={index === 2 ? "folder" : index === 4 ? "tools" : "menu"} size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </aside>
                <div className={styles.dashboardBody}>
                  <div className={styles.dashboardHeader}>
                    <div><small>PORTAL DEL PROPIETARIO</small><strong>Resumen de tu inmueble</strong></div>
                    <span className={styles.statusPill}>Información actualizada</span>
                  </div>
                  <div className={styles.dashboardCards}>
                    <div><small>Renta del periodo</small><strong>Seguimiento visible</strong><i className={styles.progress} /></div>
                    <div><small>Documentos</small><strong>Consulta centralizada</strong><i className={styles.progressShort} /></div>
                    <div><small>Incidencias</small><strong>Historial documentado</strong><i className={styles.progressMid} /></div>
                  </div>
                  <div className={styles.activityPanel}>
                    <div className={styles.panelTitle}><strong>Actividad reciente</strong><span>Ver historial</span></div>
                    {["Cobranza del periodo", "Reporte mensual", "Documento vigente"].map((item, index) => (
                      <div className={styles.activityRow} key={item}>
                        <span className={styles.activityIcon}><Icon name={index === 0 ? "payment" : index === 1 ? "report" : "document"} size={17} /></span>
                        <div><strong>{item}</strong><small>Disponible para consulta</small></div>
                        <span className={styles.rowStatus}>Registrado</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SuccessStories />
        <AdministrationReviews />

        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Una forma distinta de administrar"
              title="Más que cobrar una renta."
              text="El valor está en mantener la operación ordenada, documentada y acompañada."
            />
            <div className={styles.comparison}>
              <div className={styles.comparisonHeader}>
                <span>Administración básica</span>
                <strong>Administración con Emporio</strong>
              </div>
              {COMPARISON.map(([basic, emporio]) => (
                <div className={styles.comparisonRow} key={basic}>
                  <span>{basic}</span>
                  <strong><Icon name="check" size={18} />{emporio}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.feeSection}>
          <div className={`${styles.container} ${styles.feeGrid}`}>
            <div>
              <p className={styles.eyebrow}>Honorarios transparentes</p>
              <h2>Sabes desde el inicio cuánto cuesta administrar tu inmueble.</h2>
              <p>
                El costo se relaciona con la renta efectivamente cobrada. No se
                presenta como una promesa: se explica como parte de un servicio
                integral con responsabilidades claras.
              </p>
            </div>
            <div className={styles.feeCard}>
              <small>Administración mensual</small>
              <strong>10%</strong>
              <span>de la renta mensual efectivamente cobrada</span>
              <hr />
              <p>
                Al inicio de cada arrendamiento nuevo se cobra el equivalente a
                un mes de renta por promoción y contratación. En renovaciones
                con el mismo inquilino aplica el mismo monto.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.container} ${styles.conditionsGrid}`}>
            <div>
              <p className={styles.eyebrow}>Operación sin letra pequeña</p>
              <h2>Condiciones claras para proteger la relación.</h2>
              <p>La tranquilidad también depende de saber cómo se toman las decisiones.</p>
            </div>
            <div className={styles.conditions}>
              <article><Icon name="document" /><div><h3>Vigencia y terminación</h3><p>Contrato de un año con renovación automática y posibilidad de terminar con 30 días de aviso.</p></div></article>
              <article><Icon name="tools" /><div><h3>Mantenimiento documentado</h3><p>Los gastos se respaldan con evidencia y comprobantes; los trabajos mayores requieren autorización.</p></div></article>
              <article><Icon name="shield" /><div><h3>Operación y cumplimiento</h3><p>La documentación de las partes se integra conforme a las obligaciones aplicables a la administración.</p></div></article>
              <article><Icon name="report" /><div><h3>Responsabilidad fiscal</h3><p>Las obligaciones fiscales del arrendamiento corresponden al propietario; emitimos constancias si se solicitan.</p></div></article>
            </div>
          </div>
        </section>

        <section className={styles.legalSection}>
          <div className={`${styles.container} ${styles.legalCard}`}>
            <span className={styles.legalIcon}><Icon name="shield" size={34} /></span>
            <div>
              <p className={styles.eyebrow}>Protección complementaria</p>
              <h2>Administración y Blindaje Legal: gestión diaria con respaldo jurídico.</h2>
              <p>
                La administración atiende la operación del inmueble. Blindaje
                Legal fortalece la investigación, el contrato y la respuesta
                jurídica cuando existe un incumplimiento.
              </p>
            </div>
            <a className={styles.lightButton} href="/blindaje-legal">
              Conocer Blindaje Legal <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Decide con información"
              title="Guías para proteger mejor tu propiedad."
            />
            <div className={styles.relatedGrid}>
              <a href="/blog/administracion-inmuebles-puebla">
                <small>Administración</small>
                <strong>¿Vale la pena contratar administración de inmuebles en Puebla?</strong>
                <span>Leer guía <Icon name="arrow" size={16} /></span>
              </a>
              <a href="/blog/como-saber-si-inquilino-es-confiable">
                <small>Selección de inquilinos</small>
                <strong>Cómo saber si un inquilino es confiable antes de rentar</strong>
                <span>Leer guía <Icon name="arrow" size={16} /></span>
              </a>
              <a href="/blog/cuanto-cuesta-poliza-juridica-puebla">
                <small>Protección jurídica</small>
                <strong>Cuánto cuesta una póliza jurídica en Puebla</strong>
                <span>Leer guía <Icon name="arrow" size={16} /></span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Lo que un propietario necesita saber antes de decidir."
              text="Respuestas claras sobre honorarios, operación, mantenimiento y protección jurídica."
            />
            <div className={styles.faqList}>
              {ADMINISTRATION_FAQS.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="asesoria" className={styles.ctaSection}>
          <div className={`${styles.container} ${styles.ctaGrid}`}>
            <div className={styles.ctaCopy}>
              <p className={styles.eyebrow}>Hablemos de tu propiedad</p>
              <h2>Tu patrimonio puede darte renta sin quitarte tranquilidad.</h2>
              <p>
                Cuéntanos dónde está tu inmueble y qué necesitas resolver. Un
                especialista revisará tu caso antes de recomendarte el siguiente paso.
              </p>
              <div className={styles.contactOptions}>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Escribir por WhatsApp <Icon name="arrow" size={17} />
                </a>
                <a href="tel:+522222573237">
                  Llamar al 222 257 3237 <Icon name="arrow" size={17} />
                </a>
              </div>
            </div>

            <div className={styles.formCard}>
              {status === "success" ? (
                <div className={styles.successMessage} role="status">
                  <span><Icon name="check" size={28} /></span>
                  <h3>Recibimos tu solicitud.</h3>
                  <p>Un especialista de Emporio revisará la información y se pondrá en contacto contigo.</p>
                </div>
              ) : (
                <form onSubmit={submitForm} onFocus={trackFormStart}>
                  <div className={styles.formHeader}>
                    <small>Asesoría inicial</small>
                    <h3>Conozcamos tu inmueble.</h3>
                    <p>Sin compromiso. No recibirás una cotización automática.</p>
                  </div>
                  <div className={styles.formGrid}>
                    <label>
                      Nombre
                      <input name="nombre" value={form.nombre} onChange={updateForm} required autoComplete="name" />
                    </label>
                    <label>
                      WhatsApp
                      <input name="whatsapp" value={form.whatsapp} onChange={updateForm} required inputMode="tel" autoComplete="tel" />
                    </label>
                    <label>
                      Correo
                      <input name="email" value={form.email} onChange={updateForm} type="email" autoComplete="email" />
                    </label>
                    <label>
                      Tipo de inmueble
                      <select name="tipo" value={form.tipo} onChange={updateForm} required>
                        <option value="">Selecciona una opción</option>
                        <option>Casa</option>
                        <option>Departamento</option>
                        <option>Local</option>
                        <option>Bodega</option>
                        <option>Otro</option>
                      </select>
                    </label>
                    <label className={styles.fullField}>
                      Colonia o zona
                      <input name="colonia" value={form.colonia} onChange={updateForm} placeholder="Ej. La Paz, Cholula, Zavaleta" />
                    </label>
                    <label className={styles.fullField}>
                      ¿Qué necesitas resolver?
                      <textarea name="comentarios" value={form.comentarios} onChange={updateForm} rows="3" />
                    </label>
                  </div>
                  <label className={styles.consent}>
                    <input type="checkbox" name="acepta" checked={form.acepta} onChange={updateForm} required />
                    <span>Acepto ser contactado para recibir información sobre el servicio y he leído el <a href="/aviso-privacidad">aviso de privacidad</a>.</span>
                  </label>
                  {status === "error" && (
                    <p className={styles.errorMessage} role="alert">
                      No pudimos enviar la solicitud. Inténtalo nuevamente o escríbenos por WhatsApp.
                    </p>
                  )}
                  <button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Enviando…" : "Solicitar asesoría"}
                    {status !== "sending" && <Icon name="arrow" size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <a className={styles.floatingWhatsapp} href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.2 21.7h-.1c-1.7 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.1.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" /></svg>
      </a>
    </div>
  );
}
