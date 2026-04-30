import { useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "https://app.emporioinmobiliario.com.mx/propiedades" },
  { label: "Propietarios", href: "/propietarios" },
  { label: "Arrendatarios", href: "/arrendatarios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, left: 0, right: 0, zIndex: 50,
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        padding: "0 32px",
        fontFamily: "'Montserrat', sans-serif",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          
          {/* Logo */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="Emporio Inmobiliario" style={{ height: 48, width: "auto", objectFit: "contain" }} />
          </a>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} style={{
                color: "#374151", fontSize: 13, fontWeight: 600,
                textDecoration: "none", padding: "8px 14px", borderRadius: 8,
                letterSpacing: "0.02em", transition: "all 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#C8102E"; e.currentTarget.style.background = "#fff5f5"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#374151"; e.currentTarget.style.background = "transparent"; }}
              >
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{
              marginLeft: 8, background: "#C8102E", color: "#fff",
              padding: "10px 22px", borderRadius: 8, fontSize: 13,
              fontWeight: 700, textDecoration: "none", letterSpacing: "0.02em",
              transition: "background 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#a50d27"}
              onMouseLeave={e => e.currentTarget.style.background = "#C8102E"}
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(true)} style={{ display: "none", background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#1a1a2e" }}>☰</button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ position: "fixed", inset: 0, background: "#fff", zIndex: 100, padding: 32, fontFamily: "'Montserrat', sans-serif" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
            <img src="/logo.png" alt="Emporio" style={{ height: 44 }} />
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", fontSize: 28, cursor: "pointer", color: "#1a1a2e" }}>✕</button>
          </div>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} style={{ display: "block", color: "#1a1a2e", fontSize: 20, fontWeight: 700, textDecoration: "none", padding: "16px 0", borderBottom: "1px solid #f3f4f6" }}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ display: "block", marginTop: 32, background: "#C8102E", color: "#fff", padding: "14px 24px", borderRadius: 10, fontWeight: 700, textAlign: "center", textDecoration: "none" }}>
            💬 WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
