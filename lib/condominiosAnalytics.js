const EVENTOS_PERMITIDOS = new Set([
  "condominios_calculadora_inicio",
  "condominios_calculadora_final",
  "condominios_evaluacion_inicio",
  "condominios_evaluacion_final",
  "condominios_pdf_descarga",
  "condominios_pdf_compartir",
  "condominios_cta_diagnostico",
  "condominios_whatsapp",
  "condominios_formulario_iniciado",
  "condominios_formulario_enviado",
]);

export function registrarEventoCondominios(nombre, propiedades = {}) {
  if (typeof window === "undefined" || !EVENTOS_PERMITIDOS.has(nombre)) return;

  const detalle = Object.fromEntries(
    Object.entries(propiedades)
      .filter(([, valor]) => ["string", "number", "boolean"].includes(typeof valor))
      .slice(0, 10)
  );

  window.dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.dataLayer.push({ event: nombre, ...detalle });

  window.dispatchEvent(
    new CustomEvent("emporio:condominios", {
      detail: { event: nombre, ...detalle },
    })
  );
}
