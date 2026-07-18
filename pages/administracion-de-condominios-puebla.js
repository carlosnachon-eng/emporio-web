import Head from "next/head";
import CondominiosExperience from "../components/condominios/CondominiosExperience";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SITE_URL = "https://www.emporioinmobiliario.com.mx";
const URL = `${SITE_URL}/administracion-de-condominios-puebla`;
const TITLE = "Administración de condominios en Puebla | Emporio";
const DESCRIPTION = "Evalúa los controles de tu condominio y obtén un reporte ejecutivo. Administración condominal clara, verificable y cercana en Puebla.";
const SOCIAL_IMAGE = `${SITE_URL}/images/administracion-condominios-puebla-og.png`;

export default function AdministracionCondominiosPuebla() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${URL}#service`,
        name: "Administración de condominios en Puebla",
        serviceType: "Administración condominal",
        url: URL,
        description: DESCRIPTION,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Puebla" },
          { "@type": "City", name: "San Andrés Cholula" },
          { "@type": "City", name: "San Pedro Cholula" },
          { "@type": "City", name: "Cuautlancingo" },
        ],
        audience: {
          "@type": "Audience",
          audienceType: "Comités de administración, propietarios y desarrolladores de condominios",
        },
      },
      {
        "@type": "WebApplication",
        "@id": `${URL}#tools`,
        name: "Calculadora y Evaluación de Salud Condominal",
        url: URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "MXN" },
        provider: { "@id": `${SITE_URL}/#organization` },
        description: "Herramientas orientativas para estimar complejidad, rango de honorarios y controles de un condominio.",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Emporio Inmobiliario" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Administración de condominios en Puebla con Emporio Inmobiliario" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <Navbar />
      <CondominiosExperience />
      <Footer />
    </>
  );
}
