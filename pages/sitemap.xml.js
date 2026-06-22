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

const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const SITE_URL = "https://www.emporioinmobiliario.com.mx";

// Páginas estáticas y corporativas — copiadas tal cual del sitemap.xml
// anterior, para no perder ninguna URL ya indexada por Google.
const PAGINAS_ESTATICAS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/propiedades", changefreq: "daily", priority: "0.95" },
  { loc: "/torre-zaia", changefreq: "weekly", priority: "0.95" },
  { loc: "/equiah", changefreq: "weekly", priority: "0.95" },
  { loc: "/propietarios", changefreq: "monthly", priority: "0.9" },
  { loc: "/arrendatarios", changefreq: "monthly", priority: "0.9" },
  { loc: "/blindaje-legal", changefreq: "monthly", priority: "0.9" },
  { loc: "/administracion", changefreq: "monthly", priority: "0.9" },
  { loc: "/nosotros", changefreq: "monthly", priority: "0.7" },
  { loc: "/contacto", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog", changefreq: "weekly", priority: "0.85" },
];

// Artículos del blog — copiados tal cual del sitemap.xml anterior. Si el
// blog ya tiene sus propios datos en Supabase en el futuro, esto se puede
// reemplazar por una consulta, igual que se hizo con propiedades.
const ARTICULOS_BLOG = [
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
    .select("public_id, updated_at, created_at")
    .in("status", ["published", "reserved"])
    .not("public_id", "is", null);

  if (error) {
    console.error("[sitemap.xml] error al consultar propiedades:", error.message);
  }

  const urlsEstaticas = PAGINAS_ESTATICAS.map((p) => urlTag({ ...p, loc: `${SITE_URL}${p.loc}` }));

  const urlsBlog = ARTICULOS_BLOG.map((slug) =>
    urlTag({ loc: `${SITE_URL}/blog/${slug}`, changefreq: "monthly", priority: "0.8" })
  );

  const urlsPropiedades = (propiedades || []).map((p) =>
    urlTag({
      loc: `${SITE_URL}/propiedades/${p.public_id}`,
      changefreq: "weekly",
      priority: "0.9",
      lastmod: (p.updated_at || p.created_at || "").split("T")[0] || undefined,
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsEstaticas.join("\n")}
${urlsBlog.join("\n")}
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
