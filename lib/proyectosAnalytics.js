export const PROYECTOS_PUBLICADOS = {
  "/torre-zaia": { slug: "torre-zaia", nombre: "Torre Zaia" },
  "/equiah": { slug: "equiah", nombre: "Equiah" },
  "/bau22": { slug: "bau22", nombre: "Bau22" },
  "/rincon-de-los-suenos": {
    slug: "rincon-de-los-suenos",
    nombre: "Rincón de los Sueños",
  },
  "/blindaje-legal-partners": {
    slug: "blindaje-legal-partners",
    nombre: "Blindaje Legal Partners",
  },
};

const VISITANTE_KEY = "emporio_proyectos_visitante_id";
const SESION_KEY = "emporio_proyectos_sesion_id";
let visitanteFallback;
let sesionFallback;

function crearUuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = Math.floor(Math.random() * 16);
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function obtenerId(storage, key, tipo) {
  try {
    let id = storage.getItem(key);
    if (!id) {
      id = crearUuid();
      storage.setItem(key, id);
    }
    return id;
  } catch {
    if (tipo === "visitante") {
      visitanteFallback ||= crearUuid();
      return visitanteFallback;
    }
    sesionFallback ||= crearUuid();
    return sesionFallback;
  }
}

export function obtenerProyecto(pathname) {
  const ruta = String(pathname || "").split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return PROYECTOS_PUBLICADOS[ruta] || null;
}

export function tipoDispositivo() {
  if (typeof window === "undefined") return "desconocido";
  if (window.innerWidth < 640) return "movil";
  if (window.innerWidth < 1024) return "tablet";
  return "escritorio";
}

export async function registrarProyectoEvento(proyecto, evento, metadata = {}) {
  if (typeof window === "undefined" || !proyecto) return false;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) return false;

  const visitanteId = obtenerId(window.localStorage, VISITANTE_KEY, "visitante");
  const sesionId = obtenerId(window.sessionStorage, SESION_KEY, "sesion");

  const payload = {
    p_evento_id: crearUuid(),
    p_proyecto: proyecto.slug,
    p_proyecto_nombre: proyecto.nombre,
    p_evento: evento,
    p_visitante_id: visitanteId,
    p_sesion_id: sesionId,
    p_pagina: window.location.pathname,
    p_origen: document.referrer || null,
    p_metadata: {
      dispositivo: tipoDispositivo(),
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      idioma: navigator.language || null,
      ...metadata,
    },
  };

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/rpc/registrar_proyecto_evento`,
      {
        method: "POST",
        keepalive: true,
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    return response.ok;
  } catch {
    // La analítica nunca debe interrumpir la navegación ni los contactos.
    return false;
  }
}
