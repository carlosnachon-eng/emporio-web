// pages/sitemap.xml.js
//
// Sitemap dinámico: combina las páginas estáticas/corporativas y el blog
// (que antes vivían en public/sitemap.xml, ahora copiadas aquí para no
// perder nada de lo ya indexado) con las propiedades activas/publicadas
// traídas en vivo desde Supabase.
//
// Solo se incluyen propiedades con status 'published' o 'reserved' — el
// mismo filtro que ya usa el resto del sitio para decidir qué propiedad es
// visible al público (ver pages/propiedades/[id].js y pages/propiedades/index.js).
//
// Next.js permite que un archivo en pages/ devuelva XML directamente si en
// getServerSideProps escribimos la respuesta a mano con res.write()/res.end()
// y regresamos props vacíos — es el patrón estándar para sitemaps dinámicos
// en el Pages Router.

import { createClient } from "@supabase/supabase-js";
import { CASAS_NUEVAS } from "../lib/casasNuevas";

const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const SITE_URL = "https://www.emporioinmobiliario.com.mx";
const CIUDADES_ZONA_METROPOLITANA_PUEBLA = new Set([
  "puebla",
  "san-andres-cholula",
  "san-pedro-cholula",
  "cholula",
  "cuautlancingo",
  "nativitas",
]);

// Páginas estáticas y corporativas — copiadas tal cual del sitemap.xml
// anterior, para no perder ninguna URL ya indexada por Google.
const PAGINAS_ESTATICAS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/propiedades", changefreq: "daily", priority: "0.95" },
  { loc: "/casas-nuevas", changefreq: "weekly", priority: "0.95" },
  { loc: "/torre-zaia", changefreq: "weekly", priority: "0.95" },
  { loc: "/equiah", changefreq: "weekly", priority: "0.95" },
  { loc: "/bau22", changefreq: "weekly", priority: "0.9" },
  { loc: "/rincon-de-los-suenos", changefreq: "weekly", priority: "0.9" },
  { loc: "/propietarios", changefreq: "monthly", priority: "0.9" },
  { loc: "/arrendatarios", changefreq: "monthly", priority: "0.9" },
  { loc: "/blindaje-legal", changefreq: "monthly", priority: "0.9" },
  { loc: "/blindaje-legal-partners", changefreq: "monthly", priority: "0.9" },
  { loc: "/administracion", changefreq: "monthly", priority: "0.9" },
  { loc: "/administracion-de-condominios-puebla", changefreq: "monthly", priority: "0.9" },
  { loc: "/nosotros", changefreq: "monthly", priority: "0.7" },
  { loc: "/carlos-alejandro-nachon-saldivar", changefreq: "monthly", priority: "0.7" },
  { loc: "/contacto", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog", changefreq: "weekly", priority: "0.85" },
];

// Artículos del blog — copiados tal cual del sitemap.xml anterior. Si el
// blog ya tiene sus propios datos en Supabase en el futuro, esto se puede
// reemplazar por una consulta, igual que se hizo con propiedades.
const ARTICULOS_BLOG = [
  "como-saber-si-condominio-bien-administrado",
  "que-hace-administrador-condominios-fraccionamientos",
  "cuanto-cuesta-administracion-condominios-puebla",
  "como-reducir-morosidad-condominio",
  "por-que-invertir-lomas-angelopolis-2026",
  "torre-zaia-vs-rentar-puebla-2026",
  "guia-comprar-departamento-preventa-puebla-2026",
  "valquirico-inversion-2026",
  "que-es-villa-sustentable-equiah",
  "vivir-puebla-tlaxcala-zona-residencial-2026",
  "como-evitar-fraudes-inmobiliarios-puebla",
  "que-revisar-antes-firmar-promesa-compraventa-puebla",
  "documentos-para-vender-casa-puebla",
  "cuanto-cuesta-poliza-juridica-puebla",
  "poliza-juridica-vs-aval-puebla",
  "quien-paga-poliza-juridica-arrendamiento",
  "como-rentar-departamento-puebla",
  "colonias-para-vivir-puebla",
  "administracion-inmuebles-puebla",
  "cuanto-vale-mi-casa-puebla",
  "como-vender-casa-puebla-rapido",
  "preventa-departamentos-puebla",
  "casas-en-venta-puebla",
  "departamentos-en-renta-puebla",
  "como-rentar-mi-casa-puebla",
  "cuanto-cobra-inmobiliaria-puebla",
  "como-saber-si-inquilino-es-confiable",
  "requisitos-rentar-propiedad-puebla-propietario",
  "vender-o-rentar-mi-casa-puebla",
];

function escaparXml(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Misma función que en pages/propiedades/[id].js — debe generar exactamente
// el mismo slug en ambos lados, o el sitemap apuntaría a una URL que el
// propio [id].js redirigiría (301) a otra distinta.
function generarSlug(propiedad) {
  const partes = [];
  partes.push(propiedad.tipo || "propiedad");
  partes.push(propiedad.operacion === "sale" ? "venta" : "renta");
  if (propiedad.colonia) partes.push(propiedad.colonia);
  else if (propiedad.ciudad && propiedad.ciudad.toLowerCase() !== "puebla") partes.push(propiedad.ciudad);
  partes.push("puebla");

  const slugBase = partes
    .join(" ")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return `${slugBase}-${propiedad.public_id}`;
}

function quitarAcentos(texto) {
  return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function slugificar(texto) {
  return quitarAcentos(texto)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function urlTag({ loc, changefreq, priority, lastmod }) {
  return `  <url>
    <loc>${escaparXml(loc)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function getServerSideProps({ res }) {
  // Solo propiedades activas/publicadas — mismo filtro que el resto del
  // sitio (pages/propiedades/[id].js, pages/propiedades/index.js).
  const { data: propiedades, error } = await supabasePublic
    .from("propiedades")
    .select("public_id, updated_at, created_at, tipo, operacion, colonia, ciudad")
    .in("status", ["published", "reserved"])
    .not("public_id", "is", null);

  if (error) {
    console.error("[sitemap.xml] error al consultar propiedades:", error.message);
  }

  const urlsEstaticas = PAGINAS_ESTATICAS.map((p) => urlTag({ ...p, loc: `${SITE_URL}${p.loc}` }));

  const urlsBlog = ARTICULOS_BLOG.map((slug) =>
    urlTag({ loc: `${SITE_URL}/blog/${slug}`, changefreq: "monthly", priority: "0.8" })
  );

  const urlsCasasNuevas = CASAS_NUEVAS.map((coleccion) =>
    urlTag({ loc: `${SITE_URL}/casas-nuevas/${coleccion.slug}`, changefreq: "weekly", priority: "0.9" })
  );

  const urlsPropiedades = (propiedades || []).map((p) =>
    urlTag({
      loc: `${SITE_URL}/propiedades/${generarSlug(p)}`,
      changefreq: "weekly",
      priority: "0.9",
      lastmod: (p.updated_at || p.created_at || "").split("T")[0] || undefined,
    })
  );

  // Landings transaccionales por tipo y operación. Solo entran al sitemap
  // mientras exista inventario real, para evitar URLs vacías o páginas
  // programáticas débiles.
  const landingsPrioritarias = [
    {
      loc: "/casas-en-venta-puebla",
      coincide: (p) => ["Casa", "Casa en condominio"].includes(p.tipo) && p.operacion === "sale" && CIUDADES_ZONA_METROPOLITANA_PUEBLA.has(slugificar(p.ciudad || "")),
    },
    {
      loc: "/casas-en-renta-puebla",
      coincide: (p) => ["Casa", "Casa en condominio"].includes(p.tipo) && p.operacion !== "sale" && CIUDADES_ZONA_METROPOLITANA_PUEBLA.has(slugificar(p.ciudad || "")),
    },
    {
      loc: "/departamentos-en-venta-puebla",
      coincide: (p) => p.tipo === "Departamento" && p.operacion === "sale" && CIUDADES_ZONA_METROPOLITANA_PUEBLA.has(slugificar(p.ciudad || "")),
    },
    {
      loc: "/departamentos-en-renta-puebla",
      coincide: (p) => p.tipo === "Departamento" && p.operacion !== "sale" && CIUDADES_ZONA_METROPOLITANA_PUEBLA.has(slugificar(p.ciudad || "")),
    },
  ];
  const urlsLandings = landingsPrioritarias
    .filter((landing) => (propiedades || []).some(landing.coincide))
    .map((landing) =>
      urlTag({ loc: `${SITE_URL}${landing.loc}`, changefreq: "daily", priority: "0.95" })
    );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsEstaticas.join("\n")}
${urlsLandings.join("\n")}
${urlsBlog.join("\n")}
${urlsCasasNuevas.join("\n")}
${urlsPropiedades.join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  // Cachea 1 hora en el borde de Vercel; revalida en segundo plano — evita
  // pegarle a Supabase en cada rastreo de Google sin volverse un sitemap
  // desactualizado por mucho tiempo.
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();

  return { props: {} };
}

// Este componente nunca se renderiza (getServerSideProps ya terminó la
// respuesta con res.end() antes de llegar aquí), pero Next.js requiere un
// export default válido en toda página.
export default function Sitemap() {
  return null;
}
