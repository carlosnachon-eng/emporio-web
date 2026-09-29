import Head from "next/head";
import VeracruzAdministrationExperience, {
  VERACRUZ_ADMINISTRATION_FAQS,
} from "../components/administracion/VeracruzAdministrationExperience";

const SITE_URL = "https://www.emporioinmobiliario.com.mx";
const PAGE_URL = `${SITE_URL}/administracion-de-propiedades-veracruz`;
const SOCIAL_IMAGE = `${SITE_URL}/images/administracion-inmuebles-puebla-og.png`;
const TITLE = "Administración de Propiedades en Veracruz | Emporio";
const DESCRIPTION =
  "Administramos casas, departamentos, locales y bodegas en Veracruz, Boca del Río, Riviera Veracruzana y Alvarado: cobranza, reportes y mantenimiento.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "es-MX",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Administración de propiedades en Veracruz",
      serviceType: "Administración de propiedades para arrendamiento habitacional y comercial",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: "Veracruz" },
        { "@type": "City", name: "Boca del Río" },
        { "@type": "Place", name: "Riviera Veracruzana" },
        { "@type": "City", name: "Alvarado" },
      ],
      audience: {
        "@type": "Audience",
        audienceType: "Propietarios e inversionistas con inmuebles en renta",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Honorarios de administración y colocación",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Administración mensual",
            description: "10% de la renta efectivamente cobrada.",
          },
          {
            "@type": "Offer",
            name: "Colocación",
            description: "Un mes de renta para contratos de 12 meses.",
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Veracruz", item: `${SITE_URL}/inmobiliaria-veracruz` },
        { "@type": "ListItem", position: 3, name: "Administración de propiedades", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: VERACRUZ_ADMINISTRATION_FAQS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function AdministracionDePropiedadesVeracruz() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Emporio Inmobiliario" />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Administración profesional de propiedades en Veracruz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <VeracruzAdministrationExperience />
    </>
  );
}
