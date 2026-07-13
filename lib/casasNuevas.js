export const SITE_URL = "https://www.emporioinmobiliario.com.mx";

export const CASAS_NUEVAS = [
  {
    slug: "granjas",
    nombre: "Casas Nuevas en Granjas",
    zona: "Granjas, Puebla",
    unidades: 3,
    precioDesde: 2800000,
    entrega: "Próxima entrega",
    mapsUrl: "https://maps.app.goo.gl/JRuKoH8njgt6v4KF7?g_st=iw",
    imagen: "/images/casas-nuevas/granjas/render-fachada-calle.jpg",
    distribucionImagen: "/images/casas-nuevas/granjas/distribucion-modelo.png",
    imagenes: [
      "/images/casas-nuevas/granjas/render-fachada-calle.jpg",
      "/images/casas-nuevas/granjas/render-acceso.jpg",
      "/images/casas-nuevas/granjas/render-porton.jpg",
      "/images/casas-nuevas/granjas/roof-amplio.jpg",
      "/images/casas-nuevas/granjas/roof-asador.jpg",
      "/images/casas-nuevas/granjas/sala-cocina-avance.jpg",
      "/images/casas-nuevas/granjas/bano-avance.jpg",
    ],
    seoTitle: "Casas nuevas en Granjas Puebla | Emporio Inmobiliario",
    seoDescription: "Conoce casas nuevas en venta en Granjas, Puebla, con roof garden, cocina integral, cochera para 2 autos y próximas a entrega.",
    descripcion:
      "Colección de casas nuevas en Granjas, Puebla, con diseño contemporáneo, distribución vertical y acabados coordinados. Son una alternativa práctica para quien busca estrenar casa sin entrar a una preventa larga.",
    resumen:
      "Casas de 3 niveles con roof garden, cocina integral con granito, cisterna y cochera para 2 autos.",
    caracteristicas: [
      "80 m2 de terreno por casa",
      "127.36 m2 de construcción por casa",
      "3 recámaras con baño",
      "Cochera para 2 autos",
      "Cocina integral con cubierta de granito",
      "Roof garden con asador",
      "Cisterna de 10,000 litros",
    ],
    beneficios: [
      "Producto nuevo con acabados similares entre unidades",
      "Entrega cercana, sin esperar años de construcción",
      "Fichas individuales para comparar cada casa",
      "Acompañamiento Emporio durante visita, negociación y cierre",
    ],
  },
  {
    slug: "bugambilias",
    nombre: "Casas Nuevas en Bugambilias",
    zona: "Bugambilias, Puebla",
    unidades: 2,
    precioDesde: 3950000,
    entrega: "Próxima entrega",
    mapsUrl: "https://maps.app.goo.gl/WVrZR2c4gVsdEi7Z6?g_st=iw",
    imagen: "/images/casas-nuevas/bugambilias/fachada.jpg",
    distribucionImagen: "/images/casas-nuevas/bugambilias/distribucion-modelo.png",
    imagenes: [
      "/images/casas-nuevas/bugambilias/fachada.jpg",
      "/images/casas-nuevas/bugambilias/roof-asador.jpg",
      "/images/casas-nuevas/bugambilias/pasillo-bano.jpg",
      "/images/casas-nuevas/bugambilias/bano.jpg",
    ],
    seoTitle: "Casas nuevas en Bugambilias Puebla | Emporio Inmobiliario",
    seoDescription: "Conoce casas nuevas en venta en Bugambilias, Puebla, agrupadas por Emporio Inmobiliario con fichas individuales por unidad.",
    descripcion:
      "Colección de casas nuevas en Bugambilias, Puebla, actualmente en etapa final de acabados. Son dos unidades con superficies de terreno distintas, agrupadas para comparar disponibilidad, precio y distribución antes de entrar a la ficha individual.",
    resumen:
      "Dos casas nuevas próximas a entrega, desde $3,950,000, con roof garden, acabados en proceso final y más de 180 m2 de construcción.",
    caracteristicas: [
      "Casas nuevas en venta",
      "Precios de $3,950,000 y $4,150,000",
      "Dos terrenos de diferente tamaño",
      "Desde aprox. 113 m2 de terreno",
      "Desde aprox. 184 m2 de construcción",
      "Vestidores y carpintería en acabado madera",
      "Baños con cancelería",
      "Roof garden con área de asador",
      "Cisterna de 8,000 litros",
      "Ficha individual por propiedad",
    ],
    beneficios: [
      "Comparación rápida entre unidades disponibles",
      "Inventario agrupado sin depender del nombre del constructor",
      "Asesoría comercial y documental antes de apartar",
      "Ruta directa a cada ficha individual",
    ],
  },
];

export function fmt(n) {
  if (!n) return "Precio por confirmar";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
  }).format(n);
}

export function getColeccion(slug) {
  return CASAS_NUEVAS.find((coleccion) => coleccion.slug === slug) || null;
}

export function generarSlugPropiedad(propiedad) {
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

export function perteneceAColeccion(propiedad, slug) {
  return (
    propiedad.grupo_propiedad_tipo === "casas_nuevas" &&
    propiedad.grupo_propiedad_slug === slug
  );
}

export function ordenarPropiedadesColeccion(propiedades) {
  return [...propiedades].sort((a, b) => {
    const ordenA = Number.isFinite(a.grupo_propiedad_orden) ? a.grupo_propiedad_orden : 999;
    const ordenB = Number.isFinite(b.grupo_propiedad_orden) ? b.grupo_propiedad_orden : 999;
    if (ordenA !== ordenB) return ordenA - ordenB;
    return (a.precio || 0) - (b.precio || 0);
  });
}
