export default function Footer() {
  const CSS = `
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
    @media (max-width: 768px) {
      .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
      .footer-brand { grid-column: 1 / -1 !important; }
    }
    @media (max-width: 480px) {
      .footer-grid { grid-template-columns: 1fr !important; }
    }
  `;
  return (
    <footer style={{ background: "#1a1a2e", color: "#fff", fontFamily: "'Montserrat', sans-serif", paddingTop: 56 }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 48px" }}>

        {/* Brand */}
        <div className="footer-brand">
          <img src="/logo.png" alt="Emporio Inmobiliario" style={{ height: 52, marginBottom: 20, filter: "brightness(0) invert(1)" }} />
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
            { label: "Propiedades", href: "https://app.emporioinmobiliario.com.mx/propiedades" },
            { label: "Propietarios", href: "/propietarios" },
            { label: "Arrendatarios", href: "/arrendatarios" },
            { label: "Nosotros", href: "/nosotros" },
            { label: "Contacto", href: "/contacto" },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
            >{l.label}</a>
          ))}
        </div>

        {/* Servicios */}
        <div>
          <h4 style={{ fontSize: 11, fontWeight: 700, color: "#C8102E", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Servicios</h4>
          {[
            { label: "Solicitud de arrendamiento", href: "https://app.emporioinmobiliario.com.mx/solicitud" },
            { label: "Simulador de crédito", href: "https://socasesores.com/simulador-credito-hipotecario/?q=NUCAE" },
            { label: "Portal inquilino", href: "https://app.emporioinmobiliario.com.mx/inquilino" },
            { label: "Portal propietario", href: "https://app.emporioinmobiliario.com.mx/propietario" },
            { label: "Aviso de privacidad", href: "/aviso-privacidad" },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}
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

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2025 Emporio Inmobiliario · Grupo Inmobiliario Nachón Torres S.A. de C.V.</p>
        <a href="/aviso-privacidad" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Aviso de privacidad</a>
      </div>
    </footer>
  );
}
