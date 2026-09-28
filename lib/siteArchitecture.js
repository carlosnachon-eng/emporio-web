const SITE_URL = "https://www.emporioinmobiliario.com.mx";

const PLAZAS = {
  PUEBLA: { id: "PUEBLA", label: "Puebla", href: "/propiedades?estado=Puebla" },
  VERACRUZ: { id: "VERACRUZ", label: "Veracruz", href: "/inmobiliaria-veracruz" },
};

const SERVICES = [
  { id: "PROPERTY_SEARCH", label: "Compra y renta de propiedades", puebla: true, veracruz: true },
  { id: "SELL_PROPERTY", label: "Comercialización para venta", puebla: true, veracruz: true },
  { id: "RENT_PROPERTY", label: "Comercialización para renta", puebla: true, veracruz: true },
  { id: "VALUE_OPINION", label: "Opinión de Valor", puebla: true, veracruz: true },
  { id: "PROPERTY_MANAGEMENT", label: "Administración de inmuebles", puebla: true, veracruz: true },
  { id: "LEGAL_PROTECTION", label: "Emporio Blindaje Legal", puebla: true, veracruz: true },
  { id: "CONDO_MANAGEMENT", label: "Administración de condominios", puebla: true, veracruz: false },
];

const NAV_LINKS = [
  { label: "Propiedades", href: "/propiedades", items: [
    ["Comprar", "/propiedades?operacion=sale"],
    ["Rentar", "/propiedades?operacion=rental"],
    ["Desarrollos", "/desarrollos"],
  ]},
  { label: "Propietarios", href: "/propietarios", items: [
    ["Quiero vender", "/propietarios#vender"],
    ["Quiero rentar", "/propietarios#rentar"],
    ["Opinión de Valor", "/propietarios#opinion-de-valor"],
  ]},
  { label: "Servicios", href: "/administracion", items: [
    ["Comercialización", "/propietarios"],
    ["Administración de inmuebles", "/administracion"],
    ["Administración de condominios", "/administracion-de-condominios-puebla"],
    ["Emporio Blindaje Legal", "/blindaje-legal"],
  ]},
  { label: "Partners", href: "/blindaje-legal-partners", items: [] },
  { label: "Nosotros", href: "/nosotros", items: [] },
  { label: "Contacto", href: "/contacto", items: [] },
];

function blindajeVeracruzPreviewEnabled() {
  return process.env.VERCEL_ENV === "preview"
    || process.env.NEXT_PUBLIC_ENABLE_BLINDAJE_VERACRUZ_PREVIEW === "true";
}

export { SITE_URL, PLAZAS, SERVICES, NAV_LINKS, blindajeVeracruzPreviewEnabled };
