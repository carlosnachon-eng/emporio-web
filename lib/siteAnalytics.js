const EVENTOS_PERMITIDOS = new Set([
  "site_whatsapp_click",
  "site_phone_click",
  "site_email_click",
  "site_lead_cta_click",
  "site_rental_application_click",
  "site_property_click",
  "site_property_view",
  "site_form_start",
  "site_form_submit",
]);

const PARAMETROS_PERMITIDOS = new Set([
  "contexto",
  "destino",
  "tipo_formulario",
  "ubicacion",
  "ruta",
]);

function limpiarRuta(valor) {
  if (typeof valor !== "string") return "";
  return valor.split(/[?#]/)[0].slice(0, 160);
}

export function registrarEventoSitio(nombre, propiedades = {}) {
  if (typeof window === "undefined" || !EVENTOS_PERMITIDOS.has(nombre)) return;

  const detalle = Object.fromEntries(
    Object.entries(propiedades)
      .filter(([clave, valor]) => (
        PARAMETROS_PERMITIDOS.has(clave)
        && ["string", "number", "boolean"].includes(typeof valor)
      ))
      .map(([clave, valor]) => [
        clave,
        clave === "ruta" ? limpiarRuta(valor) : String(valor).slice(0, 100),
      ])
      .slice(0, 8)
  );

  window.dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("event", nombre, detalle);

  window.dispatchEvent(
    new CustomEvent("emporio:analytics", {
      detail: { event: nombre, ...detalle },
    })
  );
}
