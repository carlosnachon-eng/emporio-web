import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ivonne-torres-chedraui.module.css";

const SITE_URL = "https://www.emporioinmobiliario.com.mx";
const PAGE_URL = `${SITE_URL}/ivonne-torres-chedraui`;
const PROFILE_IMAGE_URL = `${SITE_URL}/images/ivonne-torres-chedraui-retrato.jpg`;
const SOCIAL_IMAGE_URL = `${SITE_URL}/images/ivonne-torres-chedraui-og.png`;

const MILESTONES = [
  ["Puebla", "Origen y formación personal"],
  ["Universidad Iberoamericana", "Estudios en Psicología"],
  ["Veracruz", "Inicio en Century 21 hace más de una década"],
  ["Regreso a Puebla", "Creación de una inmobiliaria junto con su hermano"],
  ["Emporio Inmobiliario", "Integración como socia hace cerca de diez años"],
  ["Experiencia directa", "Ventas, citas y captación de propiedades"],
  ["Actualidad", "Imagen institucional, relaciones públicas y comunicación digital"],
];

const CURRENT_ROLE = [
  "Imagen institucional y representación pública de Emporio",
  "Relaciones públicas y comunicación de la marca",
  "Presentación de propiedades y recorridos en video",
  "Participación en contenidos de TikTok y campañas publicitarias",
  "Comunicación cercana del valor de cada inmueble",
  "Participación como socia de Emporio Inmobiliario",
];

const FAQS = [
  {
    question: "¿Quién es Ivonne Torres Chedraui?",
    answer:
      "Ivonne Torres Chedraui es socia, Imagen y Relaciones Públicas de Emporio Inmobiliario. Cuenta con más de una década de experiencia en el sector inmobiliario y actualmente participa en la presentación de propiedades, contenidos digitales y comunicación institucional de la empresa.",
  },
  {
    question: "¿Cuál es la función de Ivonne Torres Chedraui en Emporio Inmobiliario?",
    answer:
      "Su función principal es representar la imagen pública de Emporio Inmobiliario, participar en videos, recorridos de propiedades, publicidad y actividades de comunicación y relaciones públicas.",
  },
  {
    question: "¿Ivonne Torres Chedraui tiene experiencia en ventas inmobiliarias?",
    answer:
      "Sí. Antes de asumir su función actual, participó directamente en ventas, atención de citas y captación de propiedades.",
  },
  {
    question: "¿Dónde comenzó su trayectoria inmobiliaria?",
    answer:
      "Comenzó su trayectoria en Century 21 en Veracruz y posteriormente continuó en Puebla.",
  },
  {
    question: "¿Qué estudió Ivonne Torres Chedraui?",
    answer: "Estudió Psicología en la Universidad Iberoamericana.",
  },
];

// Preparada para incorporar fotografías reales sin modificar la estructura editorial.
// No se muestran espacios vacíos ni imágenes genéricas mientras no existan archivos aprobados.
const GALLERY_IMAGES = [];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${PAGE_URL}#profilepage`,
      url: PAGE_URL,
      name: "Ivonne Torres Chedraui",
      description:
        "Perfil profesional de Ivonne Torres Chedraui, Imagen y Relaciones Públicas de Emporio Inmobiliario.",
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${PAGE_URL}#person` },
      primaryImageOfPage: { "@id": `${PAGE_URL}#primaryimage` },
      inLanguage: "es-MX",
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#primaryimage`,
      url: PROFILE_IMAGE_URL,
      contentUrl: PROFILE_IMAGE_URL,
      width: 1023,
      height: 1537,
      caption: "Ivonne Torres Chedraui, Imagen y Relaciones Públicas de Emporio Inmobiliario",
    },
    {
      "@type": "Person",
      "@id": `${PAGE_URL}#person`,
      name: "Ivonne Torres Chedraui",
      jobTitle: "Imagen y Relaciones Públicas de Emporio Inmobiliario",
      url: PAGE_URL,
      image: { "@id": `${PAGE_URL}#primaryimage` },
      birthPlace: {
        "@type": "Place",
        name: "Puebla, México",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Iberoamericana",
      },
      knowsAbout: [
        "Comunicación inmobiliaria",
        "Presentación de propiedades",
        "Relaciones públicas",
        "Captación de propiedades",
        "Atención a clientes",
        "Contenido inmobiliario",
      ],
      worksFor: { "@id": `${SITE_URL}/#organization` },
      affiliation: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: FAQS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default function IvonneTorresChedraui() {
  return (
    <>
      <Head>
        <title>Ivonne Torres Chedraui | Imagen y Relaciones Públicas de Emporio Inmobiliario</title>
        <meta
          name="description"
          content="Conoce a Ivonne Torres Chedraui, Imagen y Relaciones Públicas de Emporio Inmobiliario. Descubre su trayectoria en el sector, su experiencia en ventas y captación de propiedades y su papel como imagen de la empresa."
        />
        <meta name="author" content="Emporio Inmobiliario" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Ivonne Torres Chedraui | Imagen y Relaciones Públicas de Emporio Inmobiliario"
        />
        <meta
          property="og:description"
          content="Conoce la trayectoria de Ivonne Torres Chedraui y su papel como imagen cercana, auténtica y profesional de Emporio Inmobiliario."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:secure_url" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Ivonne Torres Chedraui, Imagen y Relaciones Públicas de Emporio Inmobiliario"
        />
        <meta property="profile:first_name" content="Ivonne" />
        <meta property="profile:last_name" content="Torres Chedraui" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ivonne Torres Chedraui | Emporio Inmobiliario" />
        <meta
          name="twitter:description"
          content="Trayectoria, experiencia y papel actual de Ivonne Torres Chedraui en Emporio Inmobiliario."
        />
        <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
        <meta
          name="twitter:image:alt"
          content="Ivonne Torres Chedraui, Imagen y Relaciones Públicas de Emporio Inmobiliario"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className={styles.page}>
        <Navbar />

        <main>
          <header className={styles.hero}>
            <div className={styles.heroInner}>
              <div>
                <p className={styles.eyebrow}>Las personas detrás de Emporio</p>
                <h1>Ivonne Torres Chedraui</h1>
                <p className={styles.role}>Imagen y Relaciones Públicas de Emporio Inmobiliario</p>
                <p className={styles.heroCopy}>
                  Con más de una década de experiencia en el sector inmobiliario, Ivonne representa
                  la cercanía, autenticidad y confianza con las que Emporio presenta cada propiedad
                  y se relaciona con sus clientes.
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="/nosotros">
                    Conocer Emporio Inmobiliario
                  </a>
                  <a className={styles.secondaryButton} href="/propiedades">
                    Ver propiedades
                  </a>
                </div>
              </div>

              <div className={styles.portrait}>
                <img
                  className={styles.portraitImage}
                  src="/images/ivonne-torres-chedraui-retrato.jpg"
                  srcSet="/images/ivonne-torres-chedraui-retrato-768.jpg 511w, /images/ivonne-torres-chedraui-retrato.jpg 1023w"
                  sizes="(max-width: 900px) calc(100vw - 40px), 42vw"
                  alt="Ivonne Torres Chedraui, Imagen y Relaciones Públicas de Emporio Inmobiliario"
                  width="1023"
                  height="1537"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <span className={styles.portraitLogo} aria-label="Emporio Inmobiliario">
                  <img src="/logo.png" alt="" width="83" height="44" />
                </span>
                <span className={styles.portraitCaption}>
                  Cercanía, comunicación y experiencia inmobiliaria
                </span>
              </div>
            </div>
          </header>

          <section className={styles.section}>
            <div className={`${styles.container} ${styles.introGrid}`}>
              <div>
                <p className={styles.sectionLabel}>Trayectoria propia</p>
                <h2 className={styles.sectionTitle}>Experiencia antes de la cámara</h2>
              </div>
              <div>
                <p className={styles.lead}>
                  Ivonne Torres Chedraui es Imagen y Relaciones Públicas de Emporio Inmobiliario,
                  empresa de la que también es socia desde hace cerca de diez años.
                </p>
                <p className={styles.body}>
                  Nació en Puebla y estudió Psicología en la Universidad Iberoamericana. Antes de
                  ingresar al sector inmobiliario tuvo distintos trabajos. Su trayectoria en bienes
                  raíces comenzó hace aproximadamente trece años en Veracruz, dentro de Century 21.
                  Llegó al sector por necesidad y por la invitación de un vecino que era propietario
                  de una franquicia. Más tarde regresó a Puebla, donde participó en la creación de
                  una inmobiliaria junto con su hermano.
                </p>
                <p className={styles.body}>
                  Durante esa etapa conoció a Carlos Alejandro Nachón Saldívar y posteriormente se
                  integró como socia a Emporio. Antes de asumir su función actual, trabajó
                  directamente en ventas, atención de citas y captación de propiedades.
                </p>
                <p className={styles.body}>
                  Esa experiencia le permite entender lo que buscan propietarios y clientes, y
                  comunicar las cualidades de un inmueble más allá de sus espacios físicos.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.sectionTint}>
            <div className={styles.container}>
              <p className={styles.sectionLabel}>Trayectoria</p>
              <h2 className={styles.sectionTitle}>Un recorrido construido con personas y propiedades</h2>
              <div className={styles.timeline} aria-label="Trayectoria profesional de Ivonne Torres Chedraui">
                {MILESTONES.map(([place, title]) => (
                  <div className={styles.milestone} key={`${place}-${title}`}>
                    <p className={styles.milestonePlace}>{place}</p>
                    <p className={styles.milestoneTitle}>{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.narrow}>
              <blockquote className={styles.quote}>
                Antes de colocarse frente a una cámara, Ivonne estuvo frente a propietarios,
                compradores e inquilinos.
              </blockquote>
              <p className={styles.body}>
                Conoció de primera mano las dudas, expectativas y emociones que acompañan una
                operación inmobiliaria. Hoy, esa experiencia se refleja en cada recorrido, video y
                presentación de propiedades.
              </p>
            </div>
          </section>

          <section className={styles.sectionDark}>
            <div className={`${styles.container} ${styles.editorialGrid}`}>
              <div>
                <p className={`${styles.sectionLabel} ${styles.darkEyebrow}`}>Su papel actual</p>
                <h2 className={styles.sectionTitle}>La parte visible, cercana y humana de la marca</h2>
              </div>
              <div>
                <p className={`${styles.lead} ${styles.darkBody}`}>
                  Actualmente, Ivonne concentra su participación en la representación pública de
                  Emporio Inmobiliario.
                </p>
                <p className={`${styles.body} ${styles.darkBody}`}>
                  Su labor consiste en comunicar de forma cercana el valor de cada propiedad,
                  fortalecer la identidad de la empresa y ayudar a que la audiencia conozca los
                  inmuebles de una manera más clara, dinámica y humana.
                </p>
                <div className={styles.roleList}>
                  {CURRENT_ROLE.map((item) => (
                    <div className={styles.roleItem} key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionRose}>
            <div className={`${styles.container} ${styles.editorialGrid}`}>
              <div>
                <p className={styles.sectionLabel}>Una voz reconocible</p>
                <h2 className={styles.sectionTitle}>Comunicar cómo se vive una propiedad</h2>
              </div>
              <div>
                <p className={styles.lead}>
                  Su manera de hablar, su energía y su naturalidad frente a la cámara se han
                  convertido en parte de la identidad de Emporio Inmobiliario.
                </p>
                <p className={styles.body}>
                  Su voz particular, facilidad de improvisación y habilidad para relacionarse le
                  permiten presentar una casa de forma clara, atractiva y auténtica. Ivonne no solo
                  describe espacios: busca transmitir qué hace especial a una propiedad y para
                  quién puede representar una buena oportunidad.
                </p>
                <p className={styles.body}>
                  Parte de ese trabajo puede conocerse en los{" "}
                  <a
                    className={styles.textLink}
                    href="https://www.tiktok.com/@emporioinmobiliario"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contenidos oficiales de Emporio en TikTok
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={`${styles.container} ${styles.editorialGrid}`}>
              <div>
                <p className={styles.sectionLabel}>Formación y comunicación</p>
                <h2 className={styles.sectionTitle}>Escuchar también forma parte del trabajo</h2>
              </div>
              <div>
                <p className={styles.lead}>
                  Su formación en Psicología en la Universidad Iberoamericana complementa su
                  experiencia inmobiliaria y su facilidad para relacionarse con las personas.
                </p>
                <p className={styles.body}>
                  Esta combinación ha sido especialmente valiosa en una actividad donde la
                  confianza, la comunicación y la capacidad de escuchar resultan fundamentales.
                </p>
                <p className={styles.body}>
                  Su presencia en redes sociales es la parte más visible de su trabajo actual, pero
                  detrás de cada video existe una trayectoria construida mediante citas, recorridos,
                  captación de propiedades, conversaciones con propietarios y atención directa a
                  clientes.
                </p>
                <p className={styles.body}>
                  Esa perspectiva está presente tanto al mostrar una{" "}
                  <a className={styles.textLink} href="/casas-en-venta-puebla">
                    propiedad en venta
                  </a>{" "}
                  como al presentar opciones de{" "}
                  <a className={styles.textLink} href="/casas-en-renta-puebla">
                    renta en Puebla
                  </a>{" "}
                  o explicar el acompañamiento que ofrece el servicio de{" "}
                  <a className={styles.textLink} href="/administracion">
                    administración de inmuebles
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className={styles.sectionTint}>
            <div className={`${styles.container} ${styles.personalStrip}`}>
              <div className={styles.personalIntro}>
                <p className={styles.sectionLabel}>Lado personal</p>
                <h2 className={styles.sectionTitle}>Disciplina, viajes y buen café</h2>
                <p className={styles.body}>
                  Fuera del ámbito inmobiliario, Ivonne encuentra en el gimnasio una de sus
                  principales pasiones. También disfruta viajar, conocer nuevos lugares y descubrir
                  espacios alrededor de una buena taza de café.
                </p>
              </div>
              <div className={styles.personalWord}>Disciplina</div>
              <div className={styles.personalWord}>Curiosidad</div>
              <div className={styles.personalWord}>Energía</div>
            </div>
          </section>

          {GALLERY_IMAGES.length > 0 && (
            <section className={styles.section} aria-label="Galería de Ivonne Torres Chedraui">
              <div className={styles.container}>
                {GALLERY_IMAGES.map((image) => (
                  <img key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} />
                ))}
              </div>
            </section>
          )}

          <section className={styles.section}>
            <div className={styles.container}>
              <div className={styles.shared}>
                <div className={styles.sharedGrid}>
                  <div className={styles.sharedMark} aria-hidden="true">
                    EI
                  </div>
                  <div>
                    <p className={styles.sectionLabel}>Visión compartida</p>
                    <h2 className={styles.sectionTitle}>Una visión compartida de Emporio Inmobiliario</h2>
                    <p className={styles.body}>
                      Como socia de Emporio Inmobiliario, Ivonne forma parte del proyecto liderado
                      por Carlos Alejandro Nachón Saldívar, fundador de la empresa. Mientras Carlos
                      concentra su labor en la estrategia, los procesos y el crecimiento de la
                      organización, Ivonne representa la parte visible, cercana y humana de la
                      marca.
                    </p>
                    <a className={styles.timelineLink} href="/carlos-alejandro-nachon-saldivar">
                      Conocer la trayectoria de Carlos Alejandro Nachón Saldívar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionRose}>
            <div className={styles.narrow}>
              <p className={styles.sectionLabel}>Preguntas frecuentes</p>
              <h2 className={styles.sectionTitle}>Sobre Ivonne y su trayectoria</h2>
              <div className={styles.faqList}>
                {FAQS.map(({ question, answer }) => (
                  <details className={styles.faqItem} key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.finalCta}>
            <div className={styles.finalInner}>
              <h2>Conoce las propiedades que Ivonne presenta para Emporio Inmobiliario</h2>
              <p>
                Explora casas, departamentos, terrenos y espacios comerciales disponibles en
                Puebla y su zona metropolitana.
              </p>
              <div className={styles.finalActions}>
                <a className={styles.lightButton} href="/propiedades">
                  Ver propiedades
                </a>
                <a className={styles.ghostButton} href="/contacto">
                  Contactar a Emporio
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
