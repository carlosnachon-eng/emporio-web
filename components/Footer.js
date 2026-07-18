import { useRouter } from "next/router";

const RUTAS_SEO = {
  poliza: [
    ["Quién paga la póliza jurídica", "/blog/quien-paga-poliza-juridica-arrendamiento"],
    ["Cuánto cuesta una póliza jurídica", "/blog/cuanto-cuesta-poliza-juridica-puebla"],
    ["Póliza jurídica vs. aval", "/blog/poliza-juridica-vs-aval-puebla"],
    ["Cómo rentar una propiedad", "/blog/como-rentar-mi-casa-puebla"],
    ["Administración de inmuebles", "/administracion"],
    ["Propiedades disponibles en renta", "/propiedades?operacion=rental"],
  ],
  propietarios: [
    ["Cómo vender una casa en Puebla", "/blog/como-vender-casa-puebla-rapido"],
    ["Cuánto vale mi casa", "/blog/cuanto-vale-mi-casa-puebla"],
    ["Documentos para vender", "/blog/documentos-para-vender-casa-puebla"],
    ["Comisión de una inmobiliaria", "/blog/cuanto-cobra-inmobiliaria-puebla"],
    ["Administración de rentas", "/administracion"],
    ["Quiero vender o rentar mi inmueble", "/propietarios"],
  ],
};

function RutaContextual({ pathname }) {
  if (pathname === "/administracion-de-condominios-puebla") return null;
  const esPoliza = /poliza|blindaje|rentar-departamento|inquilino/.test(pathname);
  const esPropietario = /vender|vale-mi-casa|documentos-para-vender|cuanto-cobra|administracion|propietarios|rentar-mi-casa|requisitos-rentar-propiedad/.test(pathname);
  const enlaces = esPoliza ? RUTAS_SEO.poliza : esPropietario ? RUTAS_SEO.propietarios : null;
  if (!enlaces) return null;

  return (
    <nav aria-label="Guías relacionadas" style={{ background: "#f8f8fa", borderTop: "1px solid #eee", padding: "32px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ margin: "0 0 14px", color: "#1a1a2e", fontSize: 16, fontWeight: 800 }}>
          Siguiente paso recomendado
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {enlaces.filter(([, href]) => href.split("?")[0] !== pathname).map(([label, href]) => (
            <a key={href} href={href} style={{ color: "#1a1a2e", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 9, padding: "10px 14px", fontSize: 13, fontWeight: 650, textDecoration: "none" }}>
              {label} <span aria-hidden="true" style={{ color: "#C8102E" }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function Footer() {
  const { pathname } = useRouter();
  const currentYear = new Date().getFullYear();
  const CSS = `
    .footer-grid { display: grid; grid-template-columns: 1.7fr 1fr 1fr 1.25fr 1.2fr; gap: 40px; }
    .footer-link { transition: color 0.15s ease; }
    @media (max-width: 1050px) {
      .footer-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 32px !important; }
      .footer-brand { grid-column: 1 / -1 !important; }
    }
    @media (max-width: 768px) {
      .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
      .footer-brand { grid-column: 1 / -1 !important; }
    }
    @media (max-width: 480px) {
      .footer-grid { grid-template-columns: 1fr !important; }
    }
  `;
  return (
    <>
    <RutaContextual pathname={pathname} />
    <footer style={{ background: "#1a1a2e", color: "#fff", fontFamily: "'Montserrat', sans-serif", paddingTop: 56 }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 48px" }}>

        {/* Brand */}
        <div className="footer-brand">
          <img src="/logo.png" alt="Emporio Inmobiliario" width="98" height="52" loading="lazy" decoding="async" style={{ height: 52, width: "auto", marginBottom: 20, filter: "brightness(0) invert(1)" }} />
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: 280, margin: "0 0 24px" }}>
            Más de 20 años ayudando a familias y empresas a vender, rentar o encontrar su propiedad ideal en Puebla.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { label: "FB", href: "https://www.facebook.com/share/1CNyXV7qBP/?mibextid=wwXIfr" },
              { label: "IG", href: "https://www.instagram.com/emporio.inmobiliariopue?igsh=bDRndWNwdjhzcTdq&utm_source=qr" },
              { label: "TT", href: "https://www.tiktok.com/@emporioinmobiliario?_r=1&_t=ZS-95xVsr3JVuH" },
              { label: "YT", href: "https://youtube.com/@emporioinmobiliario1690?si=hoeUNniKIW7ZWuiR" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, textDecoration: "none",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#C8102E"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
              >{s.label}</a>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: "#C8102E", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Navegación</h4>
          {[
            { label: "Inicio", href: "/" },
            { label: "Propiedades", href: "/propiedades" },
            { label: "Casas Nuevas", href: "/casas-nuevas" },
            { label: "Propiedades en venta", href: "/propiedades?operacion=sale" },
            { label: "Propiedades en renta", href: "/propiedades?operacion=rental" },
            { label: "Propietarios", href: "/propietarios" },
            { label: "Arrendatarios", href: "/arrendatarios" },
            { label: "Blog", href: "/blog" },
            { label: "Nosotros", href: "/nosotros" },
            { label: "Contacto", href: "/contacto" },
          ].map(l => (
            <a className="footer-link" key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
            >{l.label}</a>
          ))}
        </div>

        {/* Proyectos */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: "#C8102E", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Proyectos</h4>
          {[
            { label: "Casas Nuevas en Granjas", href: "/casas-nuevas/granjas" },
            { label: "Casas Nuevas en Bugambilias", href: "/casas-nuevas/bugambilias" },
            { label: "Torre Zaia", href: "/torre-zaia" },
            { label: "Equiah", href: "/equiah" },
            { label: "Bau22", href: "/bau22" },
            { label: "Rincón de los Sueños", href: "/rincon-de-los-suenos" },
          ].map(l => (
            <a className="footer-link" key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
            >{l.label}</a>
          ))}
        </div>

        {/* Servicios */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: "#C8102E", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Servicios y portales</h4>
          {[
            { label: "Emporio Blindaje Legal", href: "/blindaje-legal" },
            { label: "Blindaje Legal Partners", href: "/blindaje-legal-partners" },
            { label: "Administración de Inmuebles", href: "/administracion" },
            { label: "Administración de Condominios", href: "/administracion-de-condominios-puebla" },
            { label: "Solicitud de arrendamiento", href: "https://app.emporioinmobiliario.com.mx/solicitud" },
            { label: "Simulador de crédito", href: "https://socasesores.com/simulador-credito-hipotecario/?q=NUCAE" },
            { label: "Portal inquilino", href: "https://app.emporioinmobiliario.com.mx/inquilino" },
            { label: "Portal propietario", href: "https://app.emporioinmobiliario.com.mx/propietario" },
            { label: "Aviso de privacidad", href: "/aviso-privacidad" },
          ].map(l => (
            <a className="footer-link" key={l.label} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
            >{l.label}</a>
          ))}
        </div>

        {/* Contacto */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: "#C8102E", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Contacto</h4>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0 0 12px" }}>
            5to Retorno de Osa Menor 2A<br />Reserva Territorial Atlixcayotl<br />San Andrés Cholula, Pue.
          </p>
          <a href="tel:2222573237" style={{ display: "block", color: "#fff", fontSize: 18, fontWeight: 700, textDecoration: "none", marginBottom: 6 }}>222 257 3237</a>
          <a href="mailto:ventas@emporioinmobiliario.mx" style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: 13, textDecoration: "none", marginBottom: 20 }}>ventas@emporioinmobiliario.mx</a>
          <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#25d366", color: "#fff",
            padding: "10px 20px", borderRadius: 8, fontSize: 13,
            fontWeight: 700, textDecoration: "none",
          }}>💬 WhatsApp</a>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto", flexWrap: "wrap", gap: 8 }}>
        <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© {currentYear} Emporio Inmobiliario · Grupo Inmobiliario Nachón Torres S.A. de C.V.</p>
        <a href="/aviso-privacidad" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Aviso de privacidad</a>
      </div>
    </footer>
    </>
  );
}
