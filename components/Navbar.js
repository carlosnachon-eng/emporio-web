import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, PLAZAS } from "../lib/siteArchitecture";

const CSS = `
.emp-nav{position:sticky;top:0;z-index:80;background:rgba(255,255,255,.97);border-bottom:1px solid #ececec;box-shadow:0 2px 16px rgba(17,24,39,.05);font-family:Montserrat,sans-serif}
.emp-nav-inner{height:72px;max-width:1280px;margin:auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.emp-logo img{height:46px;width:auto;object-fit:contain}
.emp-desktop{display:flex;align-items:center;gap:2px}.emp-nav-item{position:relative}
.emp-nav-link,.emp-nav-button{display:flex;align-items:center;gap:5px;padding:10px 11px;border:0;border-radius:8px;background:transparent;color:#252938;text-decoration:none;font:700 13px Montserrat,sans-serif;cursor:pointer;white-space:nowrap}
.emp-nav-link:hover,.emp-nav-button:hover{background:#fff3f5;color:#c8102e}
.emp-menu{position:absolute;top:100%;left:0;min-width:250px;padding:8px;background:#fff;border:1px solid #ececec;border-radius:12px;box-shadow:0 16px 40px rgba(15,23,42,.14)}
.emp-menu a{display:block;padding:11px 13px;border-radius:8px;color:#374151;text-decoration:none;font-size:13px;font-weight:650}
.emp-menu a:hover{background:#f8fafc;color:#c8102e}
.emp-context{display:flex;gap:7px;margin-left:6px;padding-left:12px;border-left:1px solid #e5e7eb}
.emp-context a{padding:8px 10px;border:1px solid #e5e7eb;border-radius:99px;color:#4b5563;text-decoration:none;font-size:11px;font-weight:800}
.emp-context a:hover{border-color:#c8102e;color:#c8102e}
.emp-burger{display:none;border:0;background:none;font-size:27px}.emp-mobile{display:none}
@media(max-width:1100px){.emp-desktop{display:none}.emp-burger{display:block}.emp-mobile{display:block;position:fixed;inset:0;z-index:100;background:#fff;overflow:auto;padding:0 22px 40px;font-family:Montserrat,sans-serif}.emp-mobile-head{height:72px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eee}.emp-mobile-head img{height:45px}.emp-mobile-close{border:0;background:none;font-size:28px}.emp-mobile-plazas{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:24px 0}.emp-mobile-plazas a{padding:14px;text-align:center;border-radius:10px;background:#f7f7f8;color:#252938;text-decoration:none;font-weight:800}.emp-mobile-group{padding:18px 0;border-bottom:1px solid #eee}.emp-mobile-group>a{color:#171722;text-decoration:none;font-size:19px;font-weight:900}.emp-mobile-sub{display:flex;flex-wrap:wrap;gap:12px;margin-top:13px}.emp-mobile-sub a{color:#626978;text-decoration:none;font-size:14px}.emp-mobile-cta{display:block;margin-top:25px;padding:15px;border-radius:10px;background:#c8102e;color:#fff;text-align:center;text-decoration:none;font-weight:900}}
`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <nav aria-label="Navegación principal" className="emp-nav">
        <div className="emp-nav-inner">
          <Link className="emp-logo" href="/"><img src="/images/emporio-logo-footer.webp" alt="Emporio Inmobiliario" width="87" height="46" /></Link>
          <div className="emp-desktop">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="emp-nav-item" onMouseEnter={() => setOpenMenu(link.label)} onMouseLeave={() => setOpenMenu(null)}>
                {link.items.length ? (
                  <button className="emp-nav-button" aria-expanded={openMenu === link.label} onClick={() => setOpenMenu(openMenu === link.label ? null : link.label)}>
                    {link.label} <span aria-hidden="true">⌄</span>
                  </button>
                ) : <Link className="emp-nav-link" href={link.href}>{link.label}</Link>}
                {link.items.length > 0 && openMenu === link.label && (
                  <div className="emp-menu">{link.items.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
                )}
              </div>
            ))}
            <div className="emp-context" aria-label="Plazas">
              {Object.values(PLAZAS).map((plaza) => <Link key={plaza.id} href={plaza.href}>{plaza.label}</Link>)}
            </div>
          </div>
          <button className="emp-burger" aria-label="Abrir menú" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)}>☰</button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="emp-mobile">
          <div className="emp-mobile-head">
            <img src="/images/emporio-logo-footer.webp" alt="Emporio Inmobiliario" />
            <button className="emp-mobile-close" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}>×</button>
          </div>
          <div className="emp-mobile-plazas">{Object.values(PLAZAS).map((plaza) => <Link key={plaza.id} href={plaza.href} onClick={() => setMobileOpen(false)}>{plaza.label}</Link>)}</div>
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="emp-mobile-group">
              <Link href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</Link>
              {link.items.length > 0 && <div className="emp-mobile-sub">{link.items.map(([label, href]) => <Link key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</Link>)}</div>}
            </div>
          ))}
          <a className="emp-mobile-cta" href="https://wa.me/522222573237">Hablar con Emporio</a>
        </div>
      )}
    </>
  );
}
