import { useRouter } from "next/router";

const GROUPS = [
  { title: "Emporio", links: [["Nosotros","/nosotros"],["Contacto","/contacto"],["Bolsa de trabajo","/bolsa-de-trabajo"]] },
  { title: "Servicios", links: [["Comercialización","/propietarios"],["Administración de inmuebles","/administracion"],["Administración de condominios en Puebla","/administracion-de-condominios-puebla"],["Emporio Blindaje Legal","/blindaje-legal"]] },
  { title: "Plazas", links: [["Puebla","/propiedades?estado=Puebla"],["Veracruz","/inmobiliaria-veracruz"]] },
  { title: "Propietarios", links: [["Quiero vender","/propietarios#vender"],["Quiero rentar","/propietarios#rentar"],["Opinión de Valor","/propietarios#opinion-de-valor"]] },
  { title: "Recursos y portales", links: [["Blog","/blog"],["Partners","/blindaje-legal-partners"],["Portal inquilino","https://app.emporioinmobiliario.com.mx/inquilino"],["Portal propietario","https://app.emporioinmobiliario.com.mx/propietario"],["Aviso de privacidad","/aviso-privacidad"]] },
];
const CONTEXT = {
  propietarios: [["Opinión de Valor Puebla","/vender-propiedad-puebla"],["Opinión de Valor Veracruz","/vender-propiedad-veracruz"],["Administración de inmuebles","/administracion"]],
  veracruz: [["Ver propiedades en Veracruz","/inmobiliaria-veracruz#inventario-veracruz"],["Comercializa tu propiedad","/vender-propiedad-veracruz"],["Emporio Blindaje Legal","/blindaje-legal"]],
};
const CSS = `
.footer-context{padding:32px 24px;background:#f6f6f7;border-top:1px solid #e5e7eb}.footer-context>div{max-width:1200px;margin:auto;display:flex;align-items:center;gap:12px;flex-wrap:wrap}.footer-context strong{margin-right:8px}.footer-context a{padding:10px 13px;border:1px solid #ddd;border-radius:9px;background:#fff;color:#252938;text-decoration:none;font-size:13px;font-weight:700}.footer-context span{color:#c8102e}
.site-footer{padding:60px 24px 24px;background:#171722;color:#fff;font-family:Montserrat,sans-serif}.footer-grid{max-width:1200px;margin:auto;display:grid;grid-template-columns:1.5fr repeat(5,1fr);gap:34px}.brand p,.office,.legal{color:#9ca3af;font-size:13px;line-height:1.75}.brand img{width:106px;filter:brightness(0) invert(1);margin-bottom:18px}.site-footer h2{font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:#fda4af;margin:0 0 18px}.site-footer a{display:block;color:#cbd5e1;text-decoration:none;font-size:13px;line-height:1.45;margin:0 0 11px}.site-footer a:hover{color:#fff}.bottom{max-width:1200px;margin:40px auto 0;padding-top:20px;border-top:1px solid #30303d;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}.bottom p{margin:0}.office strong{display:block;color:#fff;margin-bottom:4px}
@media(max-width:1050px){.footer-grid{grid-template-columns:repeat(3,1fr)}.brand{grid-column:1/-1}}@media(max-width:650px){.footer-grid{grid-template-columns:1fr 1fr}.brand{grid-column:1/-1}.footer-context>div{align-items:stretch;flex-direction:column}.footer-context a{width:100%}}
`;
export default function Footer({ brandDescription="Una sola empresa inmobiliaria con experiencia, servicios y operación comercial en Puebla y Veracruz.", showContextualLinks=true }) {
  const { pathname } = useRouter();
  const links = pathname.includes("veracruz") ? CONTEXT.veracruz : /propietarios|vender/.test(pathname) ? CONTEXT.propietarios : null;
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:CSS}} />
      {showContextualLinks && links && <nav className="footer-context" aria-label="Siguiente paso"><div><strong>Siguiente paso</strong>{links.map(([label,href])=><a key={href} href={href}>{label} <span>→</span></a>)}</div></nav>}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="brand"><img src="/logo.png" alt="Emporio Inmobiliario" /><p>{brandDescription}</p><p className="office"><strong>Oficina Puebla</strong>5to Retorno de Osa Menor 2A<br/>Reserva Territorial Atlixcáyotl<br/>San Andrés Cholula, Puebla</p></div>
          {GROUPS.map((group)=><div key={group.title}><h2>{group.title}</h2>{group.links.map(([label,href])=><a key={href} href={href}>{label}</a>)}</div>)}
        </div>
        <div className="bottom"><p className="legal">© {new Date().getFullYear()} Emporio Inmobiliario</p><div><a href="tel:2222573237">222 257 3237</a><a href="mailto:ventas@emporioinmobiliario.mx">ventas@emporioinmobiliario.mx</a></div></div>
      </footer>
    </>
  );
}
