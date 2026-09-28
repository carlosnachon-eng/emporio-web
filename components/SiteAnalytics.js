import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { registrarEventoSitio } from "../lib/siteAnalytics";

const RUTAS_EXCLUIDAS = ["/verificar", "/verificar-carta"];

function rutaLimpia(asPath) {
  return String(asPath || "").split(/[?#]/)[0].replace(/\/+$/, "") || "/";
}

function contextoRuta(ruta) {
  if (/^\/propiedades\/[^/]+$/.test(ruta)) return "detalle_propiedad";
  if (ruta === "/propiedades") return "catalogo_propiedades";
  if (ruta === "/propietarios") return "captacion_propietarios";
  if (ruta === "/inmobiliaria-veracruz") return "inmobiliaria_veracruz";
  if (ruta === "/vender-propiedad-veracruz") return "captacion_propietarios_veracruz";
  if (ruta === "/vender-propiedad-puebla") return "captacion_propietarios_puebla";
  if (ruta === "/poliza-juridica-veracruz") return "blindaje_legal_veracruz";
  if (ruta === "/contacto") return "contacto";
  if (ruta === "/administracion") return "administracion_inmuebles";
  if (ruta.startsWith("/blindaje-legal")) return "blindaje_legal";
  if (ruta.startsWith("/blog/")) return "blog";
  if (ruta === "/blog") return "blog_portada";
  if (ruta.startsWith("/casas-nuevas")) return "casas_nuevas";
  if (["/torre-zaia","/equiah","/bau22","/rincon-de-los-suenos"].includes(ruta)) return "desarrollo";
  return "sitio_general";
}

function tipoFormulario(ruta) {
  if (ruta === "/contacto") return "contacto_general";
  if (ruta === "/propietarios" || ruta === "/inmobiliaria-veracruz") return "captacion_propietario";
  if (ruta === "/vender-propiedad-veracruz" || ruta === "/vender-propiedad-puebla") return "opinion_valor_propietario";
  if (ruta === "/poliza-juridica-veracruz") return "solicitud_blindaje_legal";
  if (/^\/propiedades\/[^/]+$/.test(ruta)) return "interes_propiedad";
  return null;
}

function clasificarEnlace(anchor, rutaActual) {
  const href = anchor.getAttribute("href") || "";
  if (href.includes("wa.me/")) return { evento:"site_whatsapp_click", destino:"whatsapp" };
  if (href.startsWith("tel:")) return { evento:"site_phone_click", destino:"telefono" };
  if (href.startsWith("mailto:")) return { evento:"site_email_click", destino:"correo" };
  if (href.includes("app.emporioinmobiliario.com.mx/solicitud") || href.includes("/solicitud-inquilino")) {
    return { evento:"site_rental_application_click", destino:"solicitud_arrendamiento" };
  }
  let destino;
  try { destino = new URL(href, window.location.origin); } catch { return null; }
  if (destino.origin === window.location.origin && /^\/propiedades\/[^/]+$/.test(destino.pathname) && destino.pathname !== rutaActual) {
    return { evento:"site_property_click", destino:"detalle_propiedad" };
  }
  if (destino.origin === window.location.origin && (destino.pathname === "/contacto" || destino.pathname === "/propietarios" || destino.hash === "#formulario")) {
    return { evento:"site_lead_cta_click", destino:destino.pathname || rutaActual };
  }
  return null;
}

export default function SiteAnalytics() {
  const router = useRouter();
  const formulariosIniciados = useRef(new Set());
  useEffect(() => {
    if (!router.isReady) return undefined;
    const ruta = rutaLimpia(router.asPath);
    if (ruta === "/administracion-de-condominios-puebla" || RUTAS_EXCLUIDAS.some((prefijo) => ruta.startsWith(prefijo))) return undefined;
    const contexto = contextoRuta(ruta);
    const formulario = tipoFormulario(ruta);
    const plaza = ruta === "/vender-propiedad-veracruz" ? "VERACRUZ" : ruta === "/vender-propiedad-puebla" ? "PUEBLA" : "";
    const campaign = new URLSearchParams(window.location.search).get("utm_campaign") || "";

    if (plaza) registrarEventoSitio("site_page_view", { contexto, ruta, plaza, servicio:"SELL_PROPERTY", source:"website", campaign });
    if (/^\/propiedades\/[^/]+$/.test(ruta)) registrarEventoSitio("site_property_view", { contexto, ruta });

    const click = (event) => {
      const anchor = event.target.closest?.("a");
      if (!anchor) return;
      const clasificacion = clasificarEnlace(anchor, ruta);
      if (!clasificacion) return;
      registrarEventoSitio(clasificacion.evento, {
        contexto,
        destino: clasificacion.destino,
        ubicacion: anchor.closest("nav") ? "navegacion" : anchor.closest("footer") ? "footer" : anchor.dataset.proyectoCta ? anchor.dataset.proyectoCta.slice(0,100) : anchor.getAttribute("aria-label") ? "elemento_etiquetado" : "contenido",
        ruta,
      });
    };
    const focus = (event) => {
      if (!formulario || !event.target.matches?.("input, textarea, select")) return;
      const clave = `${ruta}:${formulario}`;
      if (formulariosIniciados.current.has(clave)) return;
      formulariosIniciados.current.add(clave);
      registrarEventoSitio("site_form_start", {
        contexto, tipo_formulario: formulario, ruta,
        ...(plaza ? { plaza, servicio:"SELL_PROPERTY", source:"website", campaign } : {}),
      });
    };
    document.addEventListener("click", click, true);
    document.addEventListener("focusin", focus, true);
    return () => {
      document.removeEventListener("click", click, true);
      document.removeEventListener("focusin", focus, true);
    };
  }, [router.asPath, router.isReady]);
  return null;
}
