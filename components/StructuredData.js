import { useRouter } from "next/router";

const SITE_URL = "https://www.emporioinmobiliario.com.mx";

const LABELS = {
  blog: "Blog inmobiliario",
  propiedades: "Propiedades",
  "casas-nuevas": "Casas nuevas",
  administracion: "Administración de inmuebles",
  "administracion-de-condominios-puebla": "Administración de condominios en Puebla",
  propietarios: "Propietarios",
  arrendatarios: "Arrendatarios",
  contacto: "Contacto",
  nosotros: "Nosotros",
  "blindaje-legal": "Blindaje Legal",
  "blindaje-legal-partners": "Blindaje Legal Partners",
  "carlos-alejandro-nachon-saldivar": "Carlos Alejandro Nachón Saldívar",
};

function nombreSegmento(segmento) {
  return LABELS[segmento] || segmento.replace(/-/g, " ").replace(/^./, (letra) => letra.toUpperCase());
}

export default function StructuredData() {
  const { asPath } = useRouter();

  const pathname = asPath.split("?")[0].split("#")[0];
  if (pathname.startsWith("/api/") || pathname.startsWith("/verificar")) return null;

  const segmentos = pathname.split("/").filter(Boolean);
  const breadcrumbs = [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
    ...segmentos.map((segmento, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: nombreSegmento(segmento),
      item: `${SITE_URL}/${segmentos.slice(0, index + 1).join("/")}`,
    })),
  ];

  const graph = [
    {
      "@type": ["Organization", "LocalBusiness", "RealEstateAgent"],
      "@id": `${SITE_URL}/#organization`,
      name: "Emporio Inmobiliario",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      telephone: "+52 222 257 3237",
      email: "ventas@emporioinmobiliario.mx",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5to Retorno de Osa Menor 2A, Reserva Territorial Atlixcayotl",
        addressLocality: "San Andrés Cholula",
        addressRegion: "Puebla",
        addressCountry: "MX",
      },
      areaServed: ["Puebla", "San Andrés Cholula", "San Pedro Cholula"],
      sameAs: [
        "https://www.facebook.com/share/1CNyXV7qBP/",
        "https://www.instagram.com/emporio.inmobiliariopue",
        "https://www.tiktok.com/@emporioinmobiliario",
        "https://youtube.com/@emporioinmobiliario1690",
      ],
    },
  ];

  if (breadcrumbs.length > 1) {
    graph.push({ "@type": "BreadcrumbList", itemListElement: breadcrumbs });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
