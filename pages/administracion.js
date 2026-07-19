import Head from "next/head";
import AdministrationExperience, {
  ADMINISTRATION_FAQS,
} from "../components/administracion/AdministrationExperience";

const SITE_URL = "https://www.emporioinmobiliario.com.mx";
const PAGE_URL = `${SITE_URL}/administracion`;
const SOCIAL_IMAGE = `${SITE_URL}/images/administracion-inmuebles-puebla-og.png`;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Administración de inmuebles y rentas en Puebla",
  serviceType: "Administración integral de inmuebles en renta",
  url: PAGE_URL,
  image: SOCIAL_IMAGE,
  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Puebla y zona metropolitana",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Propietarios de casas, departamentos, locales y bodegas",
  },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: 10,
      priceCurrency: "MXN",
      unitText: "porcentaje de la renta mensual efectivamente cobrada",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ADMINISTRATION_FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Administracion() {
  return (
    <>
      <Head>
        <title>Administración de Inmuebles y Rentas en Puebla</title>
        <meta
          name="description"
          content="Administramos tu propiedad en Puebla: cobranza, mantenimiento, reportes y atención al inquilino por 10% de la renta. Solicita una evaluación."
        />
        <meta
          name="keywords"
          content="administración de inmuebles puebla, administradora de rentas puebla, gestión de propiedades puebla, administración departamentos puebla, cobro de renta puebla"
        />
        <meta
          property="og:title"
          content="Administración de Inmuebles en Puebla — Emporio Inmobiliario"
        />
        <meta
          property="og:description"
          content="Nos encargamos de todo: cobranza, mantenimiento, reportes y representación. Tú recibes tu renta, nosotros gestionamos lo demás."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Emporio Inmobiliario" />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Administración profesional de inmuebles en Puebla"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Administración de Inmuebles y Rentas en Puebla"
        />
        <meta
          name="twitter:description"
          content="Administración integral para propietarios que buscan tranquilidad, seguimiento y control de su patrimonio."
        />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <AdministrationExperience />
    </>
  );
}
