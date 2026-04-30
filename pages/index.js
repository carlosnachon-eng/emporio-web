import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n || 0);

const BENEFICIOS = [
  { icon: "🏆", title: "+20 años de experiencia", desc: "Líderes en el mercado inmobiliario poblano desde hace más de dos décadas." },
  { icon: "💸", title: "Sin costo hasta cerrar", desc: "No pagas nada hasta que se firma el contrato. Cero riesgo para ti." },
  { icon: "📱", title: "+20 portales especializados", desc: "Tu propiedad en TikTok, Instagram, Facebook y más de 20 portales." },
  { icon: "🔍", title: "Filtramos a los clientes", desc: "Verificamos a los interesados y acompañamos cada visita." },
  { icon: "⚖️", title: "Asesoría legal incluida", desc: "Contrato y revisión legal sin costo adicional." },
  { icon: "📊", title: "Reportes semanales", desc: "Te informamos del avance de tu propiedad cada semana." },
];

const PASOS = [
  { num: "01", title: "Nos compartes tu propiedad", desc: "Cuéntanos los detalles y agendamos una visita." },
  { num: "02", title: "Fotos y publicación", desc: "Tomamos fotos y publicamos en todos los portales." },
  { num: "03", title: "Filtramos interesados", desc: "Atendemos a los clientes y filtramos a los más serios." },
  { num: "04", title: "Firma de contrato", desc: "Firmamos contrato con asesoría legal incluida." },
  { num: "05", title: "Tú cobras", desc: "Recibes tu renta o venta y nosotros cobramos nuestra comisión." },
];

export default function Home({ propiedadesDestacadas = [] }) {
  const [busqueda, setBusqueda] = useState("rental");

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(120deg, #fff 0%, #fff5f5 100%)", padding: "80px 32px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -50, left: "40%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,16,46,0.04) 0%, transparent 70%)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff0f2", border: "1px solid #fecdd3", padding: "6px 16px", borderRadius: 99, marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
              <span style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Puebla · +20 años de experiencia</span>
            </div>

            <h1 style={{ fontSize: 58, fontWeight: 900, color: "#1a1a2e", lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
              Tu propiedad,<br />
              <span style={{ color: "#C8102E" }}>nuestra</span> prioridad.
            </h1>
            <p style={{ fontSize: 18, color: "#6b7280", lineHeight: 1.7, margin: "0 0 40px", maxWidth: 500 }}>
              Vende, renta o encuentra tu próxima propiedad en Puebla. Sin estrés, sin sorpresas, con más de 20 años de experiencia a tu lado.
            </p>

            {/* Buscador */}
            <div style={{ background: "#fff", border: "2px solid #f3f4f6", borderRadius: 16, padding: 20, maxWidth: 480, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                {[{ v: "rental", l: "🏠 Renta" }, { v: "sale", l: "🏡 Venta" }].map(op => (
                  <button key={op.v} onClick={() => setBusqueda(op.v)} style={{
                    flex: 1, padding: "10px 0", borderRadius: 8, border: "2px solid",
                    borderColor: busqueda === op.v ? "#C8102E" : "#f3f4f6",
                    cursor: "pointer", fontWeight: 700, fontSize: 14,
                    fontFamily: "'Montserrat', sans-serif",
                    background: busqueda === op.v ? "#fff0f2" : "#fff",
                    color: busqueda === op.v ? "#C8102E" : "#6b7280",
                    transition: "all 0.2s",
                  }}>{op.l}</button>
                ))}
              </div>
              <a href={`https://app.emporioinmobiliario.com.mx/propiedades?operacion=${busqueda}`} style={{
                display: "block", width: "100%", background: "#C8102E", color: "#fff",
                padding: "14px 0", borderRadius: 10, fontWeight: 800, fontSize: 15,
                textAlign: "center", textDecoration: "none", boxSizing: "border-box",
              }}>
                🔍 Ver propiedades disponibles
              </a>
            </div>
          </div>

          {/* Stats lado derecho */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { val: "+5,000", label: "Propiedades promovidas", icon: "🏠" },
              { val: "+3,000", label: "Operaciones cerradas", icon: "🤝" },
              { val: "+20", label: "Años de experiencia", icon: "⭐" },
              { val: "90K+", label: "Seguidores en TikTok", icon: "📱" },
            ].map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 20, padding: "28px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#C8102E", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DOS CAMINOS ───────────────────────────────────────── */}
      <div style={{ padding: "80px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>¿Qué necesitas hoy?</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a2e", margin: 0, letterSpacing: "-0.02em" }}>Estamos para los dos lados</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <a href="/propietarios" style={{ textDecoration: "none" }}>
              <div style={{ background: "#1a1a2e", borderRadius: 24, padding: "52px 44px", position: "relative", overflow: "hidden", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(26,26,46,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(200,16,46,0.15)" }} />
                <div style={{ fontSize: 48, marginBottom: 20 }}>🏠</div>
                <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", margin: "0 0 14px" }}>Tengo una propiedad</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 28px" }}>
                  Renta o vende sin complicaciones. Nosotros nos encargamos de todo y tú no pagas nada hasta cerrar.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C8102E", color: "#fff", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                  Quiero promover mi propiedad →
                </span>
              </div>
            </a>

            <a href="https://app.emporioinmobiliario.com.mx/propiedades" style={{ textDecoration: "none" }}>
              <div style={{ background: "#C8102E", borderRadius: 24, padding: "52px 44px", position: "relative", overflow: "hidden", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(200,16,46,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                <div style={{ fontSize: 48, marginBottom: 20 }}>🔑</div>
                <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", margin: "0 0 14px" }}>Busco una propiedad</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 28px" }}>
                  Tenemos más de 50 opciones activas en Puebla. Encuentra tu casa o departamento ideal hoy.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#C8102E", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14 }}>
                  Ver propiedades disponibles →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── PROPIEDADES DESTACADAS ────────────────────────────── */}
      {propiedadesDestacadas.length > 0 && (
        <div style={{ padding: "80px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
              <div>
                <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 8px" }}>Catálogo activo</p>
                <h2 style={{ fontSize: 38, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Propiedades destacadas</h2>
              </div>
              <a href="https://app.emporioinmobiliario.com.mx/propiedades" style={{ color: "#C8102E", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Ver todas →</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {propiedadesDestacadas.slice(0, 3).map(p => {
                const op = p.operations?.[0];
                const precio = op?.amount || 0;
                const img = p.title_image_thumb || p.title_image_full;
                const esVenta = op?.type === "sale";
                return (
                  <a key={p.public_id} href={`https://app.emporioinmobiliario.com.mx/propiedad/${p.public_id}`} style={{ textDecoration: "none" }}>
                    <div style={{ borderRadius: 20, overflow: "hidden", background: "#fff", border: "1px solid #f3f4f6", transition: "transform 0.2s, box-shadow 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <div style={{ height: 220, background: "#f3f4f6", position: "relative", overflow: "hidden" }}>
                        {img && <img src={img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                        <div style={{ position: "absolute", top: 12, left: 12 }}>
                          <span style={{ background: esVenta ? "#1a1a2e" : "#C8102E", color: "#fff", padding: "4px 12px", borderRadius: 99, fontSize: 11, fontWeight: 800 }}>
                            {esVenta ? "EN VENTA" : "EN RENTA"}
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: "20px 20px 24px" }}>
                        <h4 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700, color: "#1a1a2e", lineHeight: 1.3 }}>{p.title}</h4>
                        <p style={{ margin: "0 0 14px", fontSize: 12, color: "#9ca3af" }}>📍 {typeof p.location === "string" ? p.location : ""}</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: 20, fontWeight: 900, color: "#C8102E" }}>{fmt(precio)}</span>
                          <div style={{ display: "flex", gap: 10 }}>
                            {p.bedrooms > 0 && <span style={{ fontSize: 12, color: "#6b7280" }}>🛏 {p.bedrooms}</span>}
                            {p.bathrooms > 0 && <span style={{ fontSize: 12, color: "#6b7280" }}>🚿 {p.bathrooms}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── BENEFICIOS ────────────────────────────────────────── */}
      <div style={{ padding: "80px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Por qué elegirnos</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Beneficios Emporio</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {BENEFICIOS.map((b, i) => (
              <div key={i} style={{ background: "#fafafa", borderRadius: 20, padding: "32px 28px", border: "1px solid #f3f4f6", transition: "box-shadow 0.2s, transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(200,16,46,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{b.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a1a2e", margin: "0 0 10px" }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
      <div style={{ padding: "80px 32px", background: "#1a1a2e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>El proceso</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: "#fff", margin: 0 }}>¿Cómo funciona?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {PASOS.map((paso, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "28px 20px", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, margin: "0 auto 16px" }}>{paso.num}</div>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>{paso.title}</h4>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESEÑAS ───────────────────────────────────────────── */}
      <div style={{ padding: "80px 32px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 12, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 12px" }}>Lo que dicen</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Clientes satisfechos</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { nombre: "Adriana Miron", texto: "La inmobiliaria siempre está atenta, Carlos es muy amable igual que María José. Escucharon mis necesidades y me apoyaron con lo que les pedía." },
              { nombre: "Eduardo Alarcon", texto: "El día de hoy estoy estrenando mi propiedad y Emporio Inmobiliario me guió, asesoró y acompañó en todo el proceso. ¡Muy recomendables!" },
              { nombre: "Jeann Zel", texto: "Muy confiables, visitaron mi propiedad y la compartieron enseguida. En menos de 1 mes logramos tener un trato. Estuvieron al pendiente siempre." },
            ].map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: "#f59e0b", fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.8, margin: "0 0 20px", fontStyle: "italic" }}>"{r.texto}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>{r.nombre[0]}</div>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{r.nombre}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>⭐ Reseña verificada Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <div style={{ padding: "80px 32px", background: "#C8102E", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.1 }}>¿Listo para dar el siguiente paso?</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 40px" }}>Ya sea que quieras vender, rentar o encontrar tu próxima casa, estamos aquí para ayudarte sin complicaciones.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ background: "#fff", color: "#C8102E", padding: "16px 36px", borderRadius: 12, fontWeight: 800, fontSize: 16, textDecoration: "none" }}>
              💬 Escríbenos por WhatsApp
            </a>
            <a href="https://app.emporioinmobiliario.com.mx/propiedades" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "16px 36px", borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Ver propiedades →
            </a>
          </div>
        </div>
      </div>

      <Footer />

      <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>
        💬
      </a>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://api.easybroker.com/v1/properties?page=1&limit=20&search[statuses][]=published", {
      headers: { "X-Authorization": process.env.EASYBROKER_API_KEY, "accept": "application/json" },
    });
    const data = await res.json();
    const todas = data.content || [];
    // Mezclar aleatoriamente y tomar 3
    const aleatorias = todas.sort(() => Math.random() - 0.5).slice(0, 3);
    return { props: { propiedadesDestacadas: aleatorias } };
  } catch (e) {
    return { props: { propiedadesDestacadas: [] } };
  }
}
