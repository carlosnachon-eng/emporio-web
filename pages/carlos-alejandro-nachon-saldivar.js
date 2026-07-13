import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SITE_URL = "https://www.emporioinmobiliario.com.mx";
const PAGE_URL = `${SITE_URL}/carlos-alejandro-nachon-saldivar`;

const CSS = `
  * { box-sizing: border-box; }
  .carlos-hero { padding: 76px 28px 72px; }
  .carlos-content { padding: 76px 28px 88px; }
  .carlos-section { padding-top: 44px; margin-top: 44px; border-top: 1px solid #ececf0; }
  .carlos-section:first-child { padding-top: 0; margin-top: 0; border-top: 0; }
  @media (max-width: 820px) {
    .carlos-hero { padding: 54px 22px 56px; }
    .carlos-content { padding: 56px 22px 68px; }
  }
  @media (max-width: 480px) {
    .carlos-hero { padding: 44px 18px 48px; }
    .carlos-content { padding: 46px 18px 58px; }
    .carlos-section { padding-top: 36px; margin-top: 36px; }
  }
`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${PAGE_URL}#profilepage`,
      url: PAGE_URL,
      name: "Carlos Alejandro Nachón Saldívar",
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${PAGE_URL}#person` },
      inLanguage: "es-MX",
    },
    {
      "@type": "Person",
      "@id": `${PAGE_URL}#person`,
      name: "Carlos Alejandro Nachón Saldívar",
      jobTitle: "Fundador y Director General de Emporio Inmobiliario",
      url: PAGE_URL,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      affiliation: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": ["Organization", "LocalBusiness", "RealEstateAgent"],
      "@id": `${SITE_URL}/#organization`,
      name: "Emporio Inmobiliario",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      founder: { "@id": `${PAGE_URL}#person` },
    },
  ],
};

export default function CarlosAlejandroNachonSaldivar() {
  return (
    <>
      <Head>
        <title>Carlos Alejandro Nachón Saldívar | Fundador de Emporio Inmobiliario</title>
        <meta name="description" content="Carlos Alejandro Nachón Saldívar, Fundador y Director General de Emporio Inmobiliario. Emporio nació con una idea muy sencilla: las personas merecen una mejor experiencia cuando toman decisiones sobre su patrimonio." />
        <meta name="author" content="Carlos Alejandro Nachón Saldívar" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Carlos Alejandro Nachón Saldívar | Fundador de Emporio Inmobiliario" />
        <meta property="og:description" content="Emporio nació con una idea muy sencilla: las personas merecen una mejor experiencia cuando toman decisiones sobre su patrimonio." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="profile:first_name" content="Carlos Alejandro" />
        <meta property="profile:last_name" content="Nachón Saldívar" />

        <meta name="twitter:title" content="Carlos Alejandro Nachón Saldívar | Emporio Inmobiliario" />
        <meta name="twitter:description" content="Emporio nació con una idea muy sencilla: las personas merecen una mejor experiencia cuando toman decisiones sobre su patrimonio." />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif", background: "#fff", color: "#1a1a2e" }}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <Navbar />

        <main>
          <header className="carlos-hero" style={{ background: "linear-gradient(125deg, #171729 0%, #23233b 72%, #3a1722 100%)", position: "relative", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", width: 440, height: 440, borderRadius: "50%", right: -150, top: -210, background: "radial-gradient(circle, rgba(200,16,46,.34) 0%, rgba(200,16,46,0) 70%)" }} />
            <div style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>
              <h1 style={{ margin: 0, maxWidth: 850, color: "#fff", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-.035em", fontWeight: 900 }}>
                Carlos Alejandro Nachón Saldívar
              </h1>
              <p style={{ margin: "22px 0 0", color: "#f4a2b0", fontSize: 13, lineHeight: 1.6, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
                Fundador y Director General de Emporio Inmobiliario
              </p>
            </div>
          </header>

          <div className="carlos-content">
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <article>
                <section className="carlos-section">
                  <p style={leadText}>Emporio nació con una idea muy sencilla: las personas merecen una mejor experiencia cuando toman decisiones sobre su patrimonio.</p>
                  <p style={bodyText}>Esa idea no apareció de un día para otro.</p>
                  <p style={bodyText}>Fue el resultado de muchos años de aprendizaje, errores, aciertos y una convicción que ha permanecido intacta desde el inicio: construir una empresa que genere confianza y que haga las cosas de una manera diferente.</p>
                  <p style={bodyText}>Mi historia dentro del sector inmobiliario comenzó en 2005.</p>
                  <p style={bodyText}>Tenía 18 años y, como muchos jóvenes, mi principal preocupación era salir adelante y ayudar a resolver una situación económica complicada.</p>
                  <p style={bodyText}>No llegué al mercado inmobiliario porque fuera el plan de mi vida.</p>
                  <p style={bodyText}>Llegué porque encontré una oportunidad.</p>
                  <p style={bodyText}>Lo que nunca imaginé fue que esa oportunidad terminaría convirtiéndose en el proyecto profesional más importante de mi vida.</p>
                  <p style={bodyText}>Con el paso del tiempo descubrí que las propiedades nunca fueron lo más importante.</p>
                  <p style={bodyText}>Detrás de cada operación existen familias, patrimonio, sueños y decisiones que pueden cambiar el rumbo de una persona.</p>
                  <p style={bodyText}>Desde entonces entendí que nuestro verdadero trabajo nunca ha sido vender inmuebles.</p>
                  <p style={closingText}>Nuestro verdadero trabajo consiste en generar confianza.</p>
                </section>

                <section className="carlos-section">
                  <h2 style={sectionTitle}>Construir una empresa</h2>
                  <p style={bodyText}>Durante muchos años hice prácticamente todo.</p>
                  <p style={shortText}>Vendía.</p>
                  <p style={shortText}>Captaba clientes.</p>
                  <p style={shortText}>Negociaba.</p>
                  <p style={shortText}>Resolvía problemas.</p>
                  <p style={bodyText}>Dirigía equipos.</p>
                  <p style={bodyText}>Como ocurre en muchas empresas que comienzan, todo terminaba dependiendo del fundador.</p>
                  <p style={bodyText}>Con el tiempo entendí que esa no era la empresa que quería construir.</p>
                  <p style={bodyText}>Una empresa verdaderamente sólida no puede depender de una sola persona.</p>
                  <p style={bodyText}>Ese aprendizaje cambió por completo la forma en la que entendemos Emporio.</p>
                  <p style={shortText}>Hoy buscamos construir procesos antes que improvisaciones.</p>
                  <p style={shortText}>Equipos antes que héroes.</p>
                  <p style={bodyText}>Sistemas antes que esfuerzos individuales.</p>
                  <p style={closingText}>Porque creemos que las mejores empresas son aquellas que pueden seguir creciendo incluso cuando su fundador ya no participa en cada decisión.</p>
                </section>

                <section className="carlos-section">
                  <h2 style={sectionTitle}>Evolucionar constantemente</h2>
                  <p style={bodyText}>A lo largo de estos años hemos vivido momentos muy buenos y otros especialmente difíciles.</p>
                  <p style={bodyText}>Cada etapa dejó una enseñanza.</p>
                  <p style={shortText}>Aprendimos que ninguna empresa debe depender de un solo cliente.</p>
                  <p style={bodyText}>Que ninguna organización debe depender únicamente del esfuerzo de una persona.</p>
                  <p style={bodyText}>Y que el crecimiento solo es sostenible cuando existen bases sólidas.</p>
                  <p style={bodyText}>Por esa razón, Emporio ha evolucionado mucho más allá de la comercialización de inmuebles.</p>
                  <p style={closingText}>Hoy trabajamos todos los días para construir una organización cada vez más profesional, más eficiente y más útil para nuestros clientes.</p>
                </section>

                <section className="carlos-section">
                  <h2 style={sectionTitle}>Innovar para resolver problemas</h2>
                  <p style={bodyText}>Las herramientas que hemos desarrollado dentro de Emporio no nacieron para diferenciarse del mercado.</p>
                  <p style={bodyText}>Nacieron porque existían problemas que necesitaban mejores soluciones.</p>
                  <p style={bodyText}>Así surgieron iniciativas como Blindaje Legal, Inmoadmin y Veridada.</p>
                  <p style={bodyText}>Cada una responde a necesidades reales que encontramos durante años de trabajo con propietarios, compradores, inversionistas e inquilinos.</p>
                  <p style={bodyText}>Creemos que la innovación solo tiene sentido cuando mejora la experiencia de las personas.</p>
                  <p style={closingText}>Si una herramienta no genera valor para nuestros clientes o nuestro equipo, simplemente no tiene razón de existir.</p>
                </section>

                <section className="carlos-section">
                  <h2 style={sectionTitle}>Una forma distinta de dirigir</h2>
                  <p style={bodyText}>Con el paso del tiempo también cambió mi papel dentro de la empresa.</p>
                  <p style={bodyText}>Hoy dedico mucho menos tiempo a resolver problemas operativos y mucho más tiempo a construir una organización capaz de resolverlos por sí sola.</p>
                  <p style={shortText}>Creo profundamente en delegar.</p>
                  <p style={shortText}>Creo en desarrollar personas.</p>
                  <p style={shortText}>Creo en los procesos.</p>
                  <p style={bodyText}>Creo en la mejora continua.</p>
                  <p style={bodyText}>Y creo que el trabajo de un director consiste en hacer que la empresa dependa cada vez menos de él.</p>
                  <p style={bodyText}>Porque una organización fuerte no se mide por la cantidad de decisiones que toma su fundador.</p>
                  <p style={closingText}>Se mide por la calidad de las decisiones que su equipo es capaz de tomar todos los días.</p>
                </section>

                <section className="carlos-section">
                  <h2 style={sectionTitle}>La visión que guía a Emporio</h2>
                  <p style={bodyText}>Nuestro objetivo nunca ha sido convertirnos simplemente en una inmobiliaria más.</p>
                  <p style={bodyText}>Queremos construir una empresa que acompañe a las personas durante algunas de las decisiones patrimoniales más importantes de su vida.</p>
                  <p style={shortText}>Cada proceso que mejoramos.</p>
                  <p style={shortText}>Cada herramienta que desarrollamos.</p>
                  <p style={bodyText}>Cada cambio que implementamos.</p>
                  <p style={bodyText}>Tiene un solo propósito:</p>
                  <p style={closingText}>Generar mayor confianza.</p>
                </section>

                <section className="carlos-section">
                  <h2 style={sectionTitle}>Mirando hacia adelante</h2>
                  <p style={bodyText}>Todavía queda mucho por construir.</p>
                  <p style={bodyText}>Y eso es precisamente lo que más disfruto.</p>
                  <p style={bodyText}>No me mueve la idea de crear la empresa más grande.</p>
                  <p style={shortText}>Me motiva construir una empresa que permanezca.</p>
                  <p style={shortText}>Que forme personas.</p>
                  <p style={bodyText}>Que cuide el patrimonio de sus clientes.</p>
                  <p style={bodyText}>Y que continúe creciendo muchos años después.</p>
                  <p style={bodyText}>Si algún día Emporio puede seguir evolucionando sin depender de mí, sentiré que el verdadero trabajo quedó hecho.</p>
                  <p style={bodyText}>Porque las empresas pueden vender miles de propiedades.</p>
                  <p style={bodyText}>Pero solo unas cuantas logran convertirse en parte del patrimonio, la tranquilidad y la confianza de las personas.</p>
                  <p style={closingText}>Ese seguirá siendo el propósito que guíe cada decisión que tomemos en Emporio.</p>
                </section>
              </article>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

const bodyText = { margin: "0 0 22px", color: "#4b5563", fontSize: 16, lineHeight: 1.9 };
const shortText = { ...bodyText, marginBottom: 10 };
const leadText = { margin: "0 0 28px", color: "#1a1a2e", fontSize: 22, lineHeight: 1.65, fontWeight: 650 };
const closingText = { margin: "0", color: "#1a1a2e", fontSize: 17, lineHeight: 1.85, fontWeight: 750 };
const sectionTitle = { margin: "0 0 26px", color: "#1a1a2e", fontSize: "clamp(1.65rem, 4vw, 2.15rem)", lineHeight: 1.2, letterSpacing: "-.02em", fontWeight: 900 };
