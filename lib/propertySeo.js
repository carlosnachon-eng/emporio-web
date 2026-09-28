const SITE_URL = "https://www.emporioinmobiliario.com.mx";

function normalizarTexto(valor) {
  return String(valor || "").trim().replace(/\s+/g, " ");
}

function slugificar(valor) {
  return normalizarTexto(valor)
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function deduplicarPartes(partes) {
  const vistos = new Set();
  return partes.filter((parte) => {
    const clave = slugificar(parte);
    if (!clave || vistos.has(clave)) return false;
    vistos.add(clave);
    return true;
  });
}

function ubicacionPropiedad(propiedad = {}) {
  const colonia = normalizarTexto(propiedad.colonia);
  const ciudad = normalizarTexto(propiedad.ciudad);
  const estado = normalizarTexto(propiedad.estado);
  const partes = deduplicarPartes([colonia, ciudad, estado]);
  return {
    colonia,
    ciudad,
    estado,
    texto: partes.join(", "),
    mapsQuery: [...partes, "México"].join(", "),
  };
}

function generarSlugPropiedad(propiedad = {}) {
  const ubicacion = ubicacionPropiedad(propiedad);
  const operacion = propiedad.operacion === "sale" ? "venta" : "renta";
  const zonaPrincipal = ubicacion.colonia || ubicacion.ciudad;
  const slugBase = deduplicarPartes([
    propiedad.tipo || "propiedad",
    operacion,
    zonaPrincipal,
    ubicacion.estado || ubicacion.ciudad,
  ]).map(slugificar).filter(Boolean).join("-");
  return `${slugBase}-${propiedad.public_id}`;
}

function construirSeoPropiedad(propiedad = {}, formatter = (valor) => valor) {
  const ubicacion = ubicacionPropiedad(propiedad);
  const operacion = propiedad.operacion === "sale" ? "en venta" : "en renta";
  const base = normalizarTexto(propiedad.titulo)
    || `${normalizarTexto(propiedad.tipo) || "Propiedad"} ${operacion}${ubicacion.texto ? ` en ${ubicacion.texto}` : ""}`;
  const description = [
    base,
    propiedad.precio > 0 ? `${operacion} por ${formatter(propiedad.precio)}` : operacion,
    propiedad.recamaras > 0 ? `${propiedad.recamaras} recámaras` : "",
    propiedad.banos > 0 ? `${propiedad.banos} baños` : "",
    propiedad.m2_construccion > 0 ? `${propiedad.m2_construccion} m²` : "",
    ubicacion.texto ? `en ${ubicacion.texto}` : "",
    "Atención de Emporio Inmobiliario.",
  ].filter(Boolean).join(", ");
  return {
    title: `${base} — Emporio Inmobiliario`,
    description,
    canonical: `${SITE_URL}/propiedades/${generarSlugPropiedad(propiedad)}`,
    image: propiedad.fotos?.[0]?.url || `${SITE_URL}/logo.png`,
    ubicacion,
  };
}

function construirSchemaPropiedad(propiedad = {}, seo = construirSeoPropiedad(propiedad)) {
  const imagenes = Array.isArray(propiedad.fotos) ? propiedad.fotos.map((foto) => foto.url).filter(Boolean) : [];
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": seo.canonical,
    url: seo.canonical,
    name: normalizarTexto(propiedad.titulo) || seo.title,
    description: seo.description,
    ...(imagenes.length ? { image: imagenes } : {}),
    ...(propiedad.created_at ? { datePosted: propiedad.created_at.split("T")[0] } : {}),
    broker: { "@type": "RealEstateAgent", name: "Emporio Inmobiliario", url: SITE_URL },
  };

  if (seo.ubicacion.texto) {
    schema.address = {
      "@type": "PostalAddress",
      ...(seo.ubicacion.colonia ? { streetAddress: seo.ubicacion.colonia } : {}),
      ...(seo.ubicacion.ciudad ? { addressLocality: seo.ubicacion.ciudad } : {}),
      ...(seo.ubicacion.estado ? { addressRegion: seo.ubicacion.estado } : {}),
      addressCountry: "MX",
    };
  }
  if (propiedad.lat != null && propiedad.lng != null) {
    schema.geo = { "@type": "GeoCoordinates", latitude: propiedad.lat, longitude: propiedad.lng };
  }
  if (propiedad.precio > 0) {
    schema.offers = {
      "@type": "Offer",
      price: propiedad.precio,
      priceCurrency: propiedad.moneda || "MXN",
      availability: propiedad.status === "reserved" ? "https://schema.org/PreOrder" : "https://schema.org/InStock",
      url: seo.canonical,
      businessFunction: propiedad.operacion === "sale"
        ? "http://purl.org/goodrelations/v1#Sell"
        : "http://purl.org/goodrelations/v1#LeaseOut",
    };
  }
  if (propiedad.recamaras > 0) schema.numberOfRooms = propiedad.recamaras;
  if (propiedad.banos > 0) schema.numberOfBathroomsTotal = propiedad.banos;
  if (propiedad.m2_construccion > 0) {
    schema.floorSize = { "@type": "QuantitativeValue", value: propiedad.m2_construccion, unitCode: "MTK" };
  }
  return schema;
}

function construirBreadcrumbsPropiedad(propiedad, url) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Propiedades", item: `${SITE_URL}/propiedades` },
      { "@type": "ListItem", position: 3, name: normalizarTexto(propiedad.titulo) || "Detalle de propiedad", item: url },
    ],
  };
}

export {
  SITE_URL,
  normalizarTexto,
  slugificar,
  ubicacionPropiedad,
  generarSlugPropiedad,
  construirSeoPropiedad,
  construirSchemaPropiedad,
  construirBreadcrumbsPropiedad,
};
