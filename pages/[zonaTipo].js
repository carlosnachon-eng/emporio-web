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
  const tituloSEO = `${tipo}s en ${operacionTexto} en ${zonaTexto} — Emporio Inmobiliario`;
  const descSEO = `Encuentra ${tipo.toLowerCase()}s en ${operacionTexto} en ${zonaTexto}. ${propiedades.length} ${propiedades.length === 1 ? "opción disponible" : "opciones disponibles"} con Emporio Inmobiliario, más de 20 años de experiencia en Puebla.`;
  const canonicalUrl = `https://www.emporioinmobiliario.com.mx/${slugActual}`;

  return (
    <>
      <Head>
        <title>{tituloSEO}</title>
        <meta name="description" content={descSEO} />
        <meta property="og:title" content={tituloSEO} />
        <meta property="og:description" content={descSEO} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div style={{ minHeight: "100vh", background: "#fafafa", fontFamily: "'Montserrat', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>
            {tipo}s en {operacionTexto} en {zonaTexto}
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>
            {propiedades.length} {propiedades.length === 1 ? "propiedad encontrada" : "propiedades encontradas"} · Emporio Inmobiliario
          </p>

          {propiedades.length === 0 ? (
            <p style={{ color: "#9ca3af", fontSize: 14 }}>
              Por ahora no tenemos {tipo.toLowerCase()}s en {operacionTexto} en {zonaTexto}, pero puedes
              {" "}<Link href="/propiedades" style={{ color: "#C8102E", fontWeight: 700 }}>ver todo el catálogo</Link>.
            </p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
              {propiedades.map((p) => (
                <Link key={p.public_id} href={`/propiedades/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                    <div style={{ height: 170, background: "#f3f4f6" }}>
                      {p.fotos?.[0]?.url && (
                        <img src={p.fotos[0].url} alt={`${p.titulo} — Emporio Inmobiliario`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      )}
                    </div>
                    <div style={{ padding: 14 }}>
                      <p style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{p.titulo}</p>
                      <p style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#C8102E" }}>{fmt(p.precio)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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

  // Traemos todas las propiedades activas de ese tipo/operación, y
  // filtramos por zona comparando el slug de ciudad/colonia — así no
  // dependemos de que el texto en Supabase tenga exactamente el mismo
  // formato que la URL (acentos, mayúsculas, etc.).
  const { data, error } = await supabasePublic
    .from("propiedades")
    .select("public_id, titulo, precio, operacion, tipo, ciudad, colonia, fotos, status")
    .eq("tipo", tipo)
    .in("status", ["published", "reserved"]);

  if (error) {
    console.error("[zonaTipo] error consultando propiedades:", error.message);
  }

  const coincideOperacion = (p) => (operacion === "sale" ? p.operacion === "sale" : p.operacion !== "sale");
  const coincideZona = (p) => slugificar(p.colonia || "") === zonaSlug || slugificar(p.ciudad || "") === zonaSlug;

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
  const zonaTexto = propiedadesFiltradas[0].colonia || propiedadesFiltradas[0].ciudad || zonaSlug;
  const operacionTexto = operacion === "sale" ? "venta" : "renta";

  const propiedades = propiedadesFiltradas.map((p) => ({
    public_id: p.public_id,
    titulo: p.titulo,
    precio: p.precio,
    fotos: p.fotos,
    slug: generarSlug(p),
  }));

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
