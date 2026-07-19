// pages/[zonaTipo].js
//
// Página SEO programática: intercepta URLs de primer nivel con el patrón
// {tipo-plural}-en-{venta|renta}-{zona}, por ejemplo:
//   /casas-en-venta-puebla
//   /departamentos-en-renta-cholula
//   /casas-en-venta-lomas-de-angelopolis
//
// Si el patrón no coincide, o no hay ninguna propiedad real que cumpla esos
// criterios, devuelve 404 — deliberado: una página sin propiedades reales
// es "thin content" para Google y puede perjudicar más que ayudar.
//
// Esta única ruta cubre todas las combinaciones de tipo×operación×zona sin
// tener que crear un archivo por cada una, y se actualiza sola conforme
// existan propiedades nuevas en Supabase.

import Head from "next/head";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const fmt = (n) => new Intl.NumberFormat("es-MX", {
  style: "currency", currency: "MXN", minimumFractionDigits: 0,
}).format(n || 0);

// Tipos reales del catálogo (lib/propiedades-admin.js) con su forma plural
// y singular para construir/leer el slug de forma natural en español.
const TIPOS_PLURAL = {
  casas: "Casa",
  departamentos: "Departamento",
  terrenos: "Terreno",
  "locales-comerciales": "Local comercial",
  oficinas: "Oficina",
  edificios: "Edificio",
  bodegas: "Bodega",
};

const PLURAL_POR_TIPO = Object.fromEntries(
  Object.entries(TIPOS_PLURAL).map(([plural, singular]) => {
    const pluralLegible = plural.replace(/-/g, " ");
    return [singular, `${pluralLegible.charAt(0).toUpperCase()}${pluralLegible.slice(1)}`];
  })
);

const TIPOS_EQUIVALENTES = {
  Casa: ["Casa", "Casa en condominio"],
};

const GUIAS_RELACIONADAS = {
  "casas-en-venta-puebla": {
    href: "/blog/casas-en-venta-puebla",
    texto: "Consulta también nuestra guía para comprar casa en Puebla",
  },
  "departamentos-en-renta-puebla": {
    href: "/blog/departamentos-en-renta-puebla",
    texto: "Consulta también nuestra guía para rentar departamento en Puebla",
  },
};

const CIUDADES_ZONA_METROPOLITANA_PUEBLA = new Set([
  "puebla",
  "san-andres-cholula",
  "san-pedro-cholula",
  "cholula",
  "cuautlancingo",
]);

function quitarAcentos(s) {
  return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function slugificar(s) {
  return quitarAcentos(s).toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

// Idéntica a la función en pages/propiedades/[id].js y pages/sitemap.xml.js
// — debe coincidir exactamente en los tres archivos, o los links generados
// aquí llevarían a un redirect 301 innecesario en vez de ir directo.
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

// Intenta interpretar un slug de primer nivel como página de zona/tipo.
// Devuelve null si no coincide con el patrón esperado (en ese caso, Next.js
// nunca llega a renderizar esta página para esa URL — ver getServerSideProps).
function parsearSlug(slug) {
  const match = String(slug).match(/^([a-z-]+)-en-(venta|renta)-([a-z0-9-]+)$/);
  if (!match) return null;
  const [, tipoPlural, operacionTexto, zonaSlug] = match;
  const tipo = TIPOS_PLURAL[tipoPlural];
  if (!tipo) return null;
  return { tipo, operacion: operacionTexto === "venta" ? "sale" : "rental", zonaSlug };
}

export default function ZonaTipo({ propiedades, tipo, operacionTexto, zonaTexto, slugActual }) {
  const tipoPlural = PLURAL_POR_TIPO[tipo] || `${tipo}s`;
  const tipoPluralMinusculas = tipoPlural.toLowerCase();
  const tituloSEO = `${tipoPlural} en ${operacionTexto} en ${zonaTexto} — Emporio Inmobiliario`;
  const alcanceTexto = slugActual.endsWith("-puebla") ? "Puebla y zona metropolitana" : zonaTexto;
  const descSEO = `Explora ${propiedades.length} ${propiedades.length === 1 ? "opción disponible" : "opciones disponibles"} de ${tipoPluralMinusculas} en ${operacionTexto} en ${alcanceTexto}, con información y atención de Emporio Inmobiliario.`;
  const canonicalUrl = `https://www.emporioinmobiliario.com.mx/${slugActual}`;
  const imagenSocial = "https://www.emporioinmobiliario.com.mx/logo.png";
  const guiaRelacionada = GUIAS_RELACIONADAS[slugActual];
  const precios = propiedades.map((p) => Number(p.precio)).filter((precio) => precio > 0);
  const precioMinimo = precios.length ? Math.min(...precios) : null;
  const precioMaximo = precios.length ? Math.max(...precios) : null;
  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emporioinmobiliario.com.mx/" },
      { "@type": "ListItem", position: 2, name: "Propiedades", item: "https://www.emporioinmobiliario.com.mx/propiedades" },
      { "@type": "ListItem", position: 3, name: `${tipoPlural} en ${operacionTexto} en ${zonaTexto}`, item: canonicalUrl },
    ],
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${tipoPlural} en ${operacionTexto} en ${zonaTexto}`,
    numberOfItems: propiedades.length,
    itemListElement: propiedades.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: p.titulo,
      url: `https://www.emporioinmobiliario.com.mx/propiedades/${p.slug}`,
    })),
  };

  return (
    <>
      <Head>
        <title>{tituloSEO}</title>
        <meta name="description" content={descSEO} />
        <meta property="og:title" content={tituloSEO} />
        <meta property="og:description" content={descSEO} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imagenSocial} />
        <meta property="og:site_name" content="Emporio Inmobiliario" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tituloSEO} />
        <meta name="twitter:description" content={descSEO} />
        <meta name="twitter:image" content={imagenSocial} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      </Head>
      <div style={{ minHeight: "100vh", background: "#fafafa", fontFamily: "'Montserrat', sans-serif" }}>
        <Navbar />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>
            {tipoPlural} en {operacionTexto} en {zonaTexto}
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>
            {propiedades.length} {propiedades.length === 1 ? "propiedad encontrada" : "propiedades encontradas"} · Emporio Inmobiliario
          </p>

          <section aria-label="Información de disponibilidad" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "18px 20px", marginBottom: 26 }}>
            <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Revisa inmuebles activos y compara ubicación, precio y características antes de agendar una visita.
              {precioMinimo && precioMaximo ? ` El inventario publicado actualmente se encuentra entre ${fmt(precioMinimo)} y ${fmt(precioMaximo)}.` : ""}
            </p>
          </section>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {propiedades.map((p) => (
              <Link key={p.public_id} href={`/propiedades/${p.slug}`} style={{ textDecoration: "none" }}>
                <article style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", height: "100%" }}>
                  <div style={{ height: 170, background: "#f3f4f6" }}>
                    {p.fotos?.[0]?.url && (
                      <img
                        src={p.fotos[0].url}
                        alt={`${p.titulo}, ${tipo.toLowerCase()} en ${operacionTexto} en ${zonaTexto}`}
                        loading="lazy"
                        decoding="async"
                        width="520"
                        height="340"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div style={{ padding: 14 }}>
                    <h2 style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{p.titulo}</h2>
                    <p style={{ margin: "0 0 7px", fontSize: 12, color: "#6b7280" }}>
                      📍 {[p.colonia, p.ciudad].filter(Boolean).join(", ")}
                    </p>
                    <p style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#C8102E" }}>{fmt(p.precio)}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <section style={{ marginTop: 34, padding: "24px 22px", background: "#111827", borderRadius: 16, color: "#fff" }}>
            <h2 style={{ fontSize: 20, margin: "0 0 10px" }}>¿Quieres comparar opciones con un especialista?</h2>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#d1d5db", margin: "0 0 18px" }}>
              Cuéntanos qué buscas y te ayudamos a identificar las propiedades que mejor se ajustan a tus necesidades.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/contacto" style={{ background: "#C8102E", color: "#fff", padding: "11px 18px", borderRadius: 9, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                Hablar con un especialista
              </Link>
              {guiaRelacionada && (
                <Link href={guiaRelacionada.href} style={{ color: "#fff", padding: "10px 2px", fontWeight: 700, fontSize: 14 }}>
                  {guiaRelacionada.texto}
                </Link>
              )}
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const slug = params.zonaTipo;
  const parsed = parsearSlug(slug);

  if (!parsed) {
    res.statusCode = 404;
    return { notFound: true };
  }

  const { tipo, operacion, zonaSlug } = parsed;
  const tiposConsulta = TIPOS_EQUIVALENTES[tipo] || [tipo];

  // Traemos todas las propiedades activas de ese tipo/operación, y
  // filtramos por zona comparando el slug de ciudad/colonia — así no
  // dependemos de que el texto en Supabase tenga exactamente el mismo
  // formato que la URL (acentos, mayúsculas, etc.).
  const { data, error } = await supabasePublic
    .from("propiedades")
    .select("public_id, titulo, precio, operacion, tipo, ciudad, colonia, fotos, status")
    .in("tipo", tiposConsulta)
    .in("status", ["published", "reserved"]);

  if (error) {
    console.error("[zonaTipo] error consultando propiedades:", error.message);
    // Una falla temporal de Supabase no debe convertirse en un 404 que
    // pueda hacer que Google retire una landing válida de su índice.
    throw new Error("No fue posible consultar el inventario activo.");
  }

  const coincideOperacion = (p) => (operacion === "sale" ? p.operacion === "sale" : p.operacion !== "sale");
  const coincideZona = (p) => {
    if (zonaSlug === "puebla") {
      return CIUDADES_ZONA_METROPOLITANA_PUEBLA.has(slugificar(p.ciudad || ""));
    }
    return slugificar(p.colonia || "") === zonaSlug || slugificar(p.ciudad || "") === zonaSlug;
  };

  const propiedadesFiltradas = (data || []).filter((p) => coincideOperacion(p) && coincideZona(p));

  // Si no hay ninguna propiedad real que cumpla, no indexamos una página
  // vacía — mejor 404 que "thin content" sin valor para Google.
  if (propiedadesFiltradas.length === 0) {
    res.statusCode = 404;
    return { notFound: true };
  }

  // Texto legible de la zona: tomamos el valor real (con acentos/mayúsculas
  // correctas) de la primera propiedad que coincidió, en vez de
  // reconstruirlo a mano desde el slug.
  const zonaTexto = zonaSlug === "puebla"
    ? "Puebla"
    : propiedadesFiltradas[0].colonia || propiedadesFiltradas[0].ciudad || zonaSlug;
  const operacionTexto = operacion === "sale" ? "venta" : "renta";

  const propiedades = propiedadesFiltradas.map((p) => ({
    public_id: p.public_id,
    titulo: p.titulo,
    precio: p.precio,
    fotos: p.fotos,
    ciudad: p.ciudad,
    colonia: p.colonia,
    slug: generarSlug(p),
  }));

  res.setHeader("Cache-Control", "public, s-maxage=900, stale-while-revalidate=3600");

  return {
    props: {
      propiedades,
      tipo,
      operacionTexto,
      zonaTexto,
      slugActual: slug,
    },
  };
}
