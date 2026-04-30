import { useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "https://app.emporioinmobiliario.com.mx/propiedades" },
  { label: "Propietarios", href: "/propietarios" },
  { label: "Arrendatarios", href: "/arrendatarios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const CSS = `
  .nav-desktop { display: flex !important; }
  .nav-burger { display: none !important; }
  @media (max-width: 768px) {
    .nav-desktop { display: none !important; }
    .nav-burger { display: flex !important; }
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav style={{
        position: "sticky", top: 0, left: 0, right: 0, zIndex: 50,
        background: "#fff", borderBottom: "1px solid #f0f0f0",
        padding: "0 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        fontFamily: "'Montserrat', sans-serif",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Logo */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img src="/logo.png" alt="Emporio Inmobiliario" style={{ height: 44, width: "auto", objectFit: "contain" }} />
          </a>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ alignItems: "center", gap: 2 }}>
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{
                color: "#374151", fontSize: 13, fontWeight: 600,
                textDecoration: "none", padding: "8px 12px", borderRadius: 8,
                letterSpacing: "0.02em", transition: "all 0.15s", whiteSpace: "nowrap",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#C8102E"; e.currentTarget.style.background = "#fff5f5"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#374151"; e.currentTarget.style.background = "transparent"; }}
              >{link.label}</a>
            ))}
            <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{
              marginLeft: 8, background: "#C8102E", color: "#fff",
              padding: "9px 18px", borderRadius: 8, fontSize: 13,
              fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap",
            }}>💬 WhatsApp</a>
          </div>

          {/* Burger button móvil */}
          <button className="nav-burger" onClick={() => setOpen(true)} style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 5, padding: 8,
          }}>
            <span style={{ width: 24, height: 2, background: "#1a1a2e", borderRadius: 2, display: "block" }} />
            <span style={{ width: 24, height: 2, background: "#1a1a2e", borderRadius: 2, display: "block" }} />
            <span style={{ width: 24, height: 2, background: "#1a1a2e", borderRadius: 2, display: "block" }} />
          </button>
        </div>
      </nav>

      {/* Menú móvil overlay */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, background: "#fff", zIndex: 100,
          padding: "0 24px", fontFamily: "'Montserrat', sans-serif",
          overflowY: "auto",
        }}>
          {/* Header del menú */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 68, borderBottom: "1px solid #f3f4f6", marginBottom: 24 }}>
            <img src="/logo.png" alt="Emporio" style={{ height: 44 }} />
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", fontSize: 28, cursor: "pointer", color: "#1a1a2e", lineHeight: 1 }}>✕</button>
          </div>

          {/* Links */}
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              display: "block", color: "#1a1a2e", fontSize: 20, fontWeight: 700,
              textDecoration: "none", padding: "18px 0",
              borderBottom: "1px solid #f3f4f6",
            }}>{link.label}</a>
          ))}

          {/* WhatsApp */}
          <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{
            display: "block", marginTop: 32, background: "#C8102E", color: "#fff",
            padding: "16px 24px", borderRadius: 12, fontWeight: 800, fontSize: 16,
            textAlign: "center", textDecoration: "none",
          }}>💬 Escríbenos por WhatsApp</a>
        </div>
      )}
    </>
  );
}
