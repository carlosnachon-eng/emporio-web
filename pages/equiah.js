import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n);

const ENCINO = [
  { id: "D2", nivel: "2", m2: 161.64, extra: "—", bodega: 5.50, total: 195.14, precio: 5640000, status: "Disponible", entrega: "Jun 2026", nota: "Incluye muebles estudio y mueble negro sala-comedor" },
  { id: "D3", nivel: "3 y 4", m2: 169.06, extra: "77.89 m² Roof G", bodega: 5.41, total: 280.36, precio: 5950000, status: "Disponible", entrega: "Jul 2026", nota: "" },
  { id: "C1", nivel: "1 (PB)", m2: 161.64, extra: "42.34 m² jardín", bodega: 6.40, total: 238.4, precio: 5800000, status: "Disponible", entrega: "Ene 2027", nota: "" },
  { id: "C2", nivel: "2", m2: 161.64, extra: "—", bodega: 6.40, total: 196.0, precio: 5350000, status: "Disponible", entrega: "Mar 2027", nota: "" },
  { id: "C3", nivel: "3 y 4", m2: 162.21, extra: "109.52 m² Roof G", bodega: 5.80, total: 305.5, precio: 5800000, status: "Disponible", entrega: "May 2027", nota: "" },
];

const SAUCE = [
  { id: "E2", nivel: "2", m2: 243.87, extra: "28.01 m² cajones", bodega: "incluida", total: 271.9, precio: 8950000, status: "Disponible", entrega: "Sep 2026", nota: "Incluye muebles estudio y mueble negro pasillo" },
  { id: "G2", nivel: "2", m2: 244.6, extra: "28.01 m² cajones", bodega: "incluida", total: 272.6, precio: 8800000, status: "Disponible", entrega: "May 2027", nota: "" },
];

const AMENIDADES = [
  { icon: "🏊", name: "Alberca techada con carriles de nado" },
  { icon: "💪", name: "Gimnasio equipado" },
  { icon: "🧘", name: "Sala de yoga" },
  { icon: "🎾", name: "Cancha de tenis" },
  { icon: "⚽", name: "Cancha de fútbol / voleibol" },
  { icon: "☕", name: "Cafetería" },
  { icon: "🐴", name: "Hípico Equiah (con costo)" },
  { icon: "🛗", name: "Lobby y elevadores" },
  { icon: "🎉", name: "Salón Equiah" },
  { icon: "🌅", name: "Terraza panorámica" },
  { icon: "☀️", name: "4 paneles solares por depto" },
  { icon: "🔐", name: "Cerraduras y apagadores inteligentes" },
];

export default function Equiah() {
  return (
    <>
      <Head>
        <title>Equiah Departamentos — Preventa en Hacienda Santa Águeda, Puebla-Tlaxcala</title>
        <meta name="description" content="Equiah: 21 departamentos de 2 y 3 recámaras en preventa. 35,000 m² con casi 4,000 árboles. Alberca techada, hípico, yoga y tecnología sustentable. Junto a Val'Quirico, a 18 km de Cholula." />
        <meta name="keywords" content="equiah departamentos, departamentos preventa puebla tlaxcala, equiah villa sustentable, departamentos val quirico, departamentos hacienda santa agueda, departamentos sustentables puebla" />
        <meta property="og:title" content="Equiah Departamentos — Preventa Puebla-Tlaxcala" />
        <meta property="og:description" content="21 departamentos sustentables de 2 y 3 recámaras. Junto a Val'Quirico, 18 km de Cholula. Hípico, alberca techada y tecnología sustentable." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/equiah" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/equiah" />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          * { box-sizing: border-box; }
          @media(max-width:768px){
            .hero-grid { grid-template-columns: 1fr !important; }
            .am-grid { grid-template-columns: 1fr 1fr !important; }
            .tip-grid { grid-template-columns: 1fr !important; }
            h1 { font-size: 34px !important; }
          }
        `}} />
        <Navbar />

        {/* HERO — tono verde/tierra de Equiah */}
        <div style={{ background: "linear-gradient(135deg, #2d3a2e 0%, #1a2318 100%)", position: "relative", overflow: "hidden", padding: "72px 32px 80px" }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(100,140,80,.25) 0%,transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(100,140,80,.12) 0%,transparent 70%)" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 48, alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(100,140,80,.25)", border: "1px solid rgba(100,140,80,.5)", padding: "6px 16px", borderRadius: 99, marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7cb87a", display: "inline-block" }} />
                  <span style={{ fontSize: 11, color: "#a8d4a6", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>Preventa activa · Hacienda Santa Águeda</span>
                </div>
                <h1 style={{ fontSize: 64, fontWeight: 900, color: "#fff", lineHeight: 1.0, margin: "0 0 8px", letterSpacing: "-.02em", fontStyle: "italic" }}>EQUIAH</h1>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", margin: "0 0 8px", letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600 }}>DEPARTAMENTOS</p>
                <p style={{ fontSize: 20, color: "#a8d4a6", margin: "0 0 24px", fontStyle: "italic", fontWeight: 300 }}>Respira calidad de vida.</p>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,.7)", lineHeight: 1.8, margin: "0 0 36px" }}>
                  35,000 m² de naturaleza y comunidad. Casi 4,000 árboles, tecnología sustentable y espacios diseñados para que vivas diferente. Junto a Val'Quirico, a 18 km de Cholula y 15 km del aeropuerto.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="https://wa.me/522222573237?text=Hola,%20me%20interesa%20información%20sobre%20Equiah%20Departamentos" target="_blank" rel="noreferrer"
                    style={{ background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                    💬 Quiero información
                  </a>
                  <a href="#disponibilidad" style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.85)", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,.2)" }}>
                    Ver disponibilidad →
                  </a>
                </div>
              </div>

              {/* Card */}
              <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: 32 }}>
                <p style={{ fontSize: 11, color: "#a8d4a6", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", margin: "0 0 20px" }}>✦ Datos clave</p>
                {[
                  { label: "Modelo Encino (2 rec)", val: "Desde $5,350,000" },
                  { label: "Modelo Sauce (3 rec)", val: "Desde $8,800,000" },
                  { label: "Superficie Encino", val: "161 – 169 m²" },
                  { label: "Superficie Sauce", val: "243 – 253 m²" },
                  { label: "Masterplan", val: "21 deptos · 7 torres" },
                  { label: "Ubicación", val: "Junto a Val'Quirico, Tlax." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{item.val}</span>
                  </div>
                ))}
                <div style={{ marginTop: 20, padding: "14px 16px", background: "rgba(200,16,46,.2)", border: "1px solid rgba(200,16,46,.35)", borderRadius: 10 }}>
                  <p style={{ fontSize: 12, color: "#fca5a5", fontWeight: 700, margin: "0 0 4px" }}>⚡ Solo 7 unidades disponibles</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,.55)", margin: 0 }}>5 Encino y 2 Sauce. El resto ya está vendido.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,.1)", borderRadius: 12, overflow: "hidden", marginTop: 48 }}>
              {[
                { val: "21", label: "Departamentos" },
                { val: "35,000", label: "m² totales" },
                { val: "~4,000", label: "Árboles" },
                { val: "18 km", label: "De Cholula" },
              ].map((s, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.05)", padding: "18px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#a8d4a6", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginTop: 4, textTransform: "uppercase", letterSpacing: ".5px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UBICACIÓN */}
        <div style={{ padding: "64px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
              <div>
                <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 12px" }}>Ubicación privilegiada</p>
                <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 16px" }}>Tan cerca de todo,<br />lejos del estrés.</h2>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.8, margin: "0 0 28px" }}>
                  Equiah está dentro de Equiah Villa Sustentable, un ecosistema diseñado para que vivas en armonía con la naturaleza sin sacrificar accesibilidad.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { icon: "🏇", lugar: "Val'Quirico", dist: "Al lado" },
                    { icon: "🏛️", lugar: "Cholula", dist: "18 km" },
                    { icon: "🛍️", lugar: "Angelópolis, Costco, Hospital Ángeles", dist: "26 km" },
                    { icon: "✈️", lugar: "Aeropuerto Internacional de Puebla", dist: "15 km" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "#fff", border: "1px solid #f3f4f6", borderRadius: 10 }}>
                      <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: 14, color: "#374151", fontWeight: 500, flex: 1 }}>{item.lugar}</span>
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#C8102E" }}>{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#1a1a2e", borderRadius: 20, padding: "40px 32px" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>¿Lujo o calidad de vida?<br /><span style={{ color: "#a8d4a6" }}>¿Por qué elegir uno?</span></h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.8, margin: "0 0 20px" }}>
                  Más de una tercera parte del desarrollo son áreas comunes. Casi 4,000 árboles, un ecosistema que te desconecta del estrés y tecnología sustentable integrada en cada departamento.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["4 paneles solares por departamento", "Calentador eléctrico", "Cerraduras y apagadores inteligentes", "Piso vinílico imitación madera", "Cocina integral con isla de granito"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ color: "#7cb87a", fontSize: 12 }}>✓</span>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,.7)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TIPOLOGÍAS */}
        <div style={{ padding: "64px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Dos estilos</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Encino & Sauce</h2>
            </div>
            <div className="tip-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {/* Encino */}
              <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 20, overflow: "hidden" }}>
                <div style={{ background: "#2d3a2e", padding: "28px 28px 24px" }}>
                  <p style={{ fontSize: 11, color: "#a8d4a6", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", margin: "0 0 8px" }}>Modelo</p>
                  <h3 style={{ fontSize: 28, fontWeight: 900, color: "#fff", margin: "0 0 4px", fontStyle: "italic" }}>Encino</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.55)", margin: 0 }}>2 Recámaras · 2.5 Baños · 1 Estudio</p>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                    {[
                      { label: "Superficie", val: "161 – 169 m²" },
                      { label: "Desde", val: "$5,350,000" },
                      { label: "Estacionamiento", val: "2 cajones" },
                      { label: "Bodega", val: "Incluida" },
                    ].map((item, i) => (
                      <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 8, padding: "10px 12px" }}>
                        <p style={{ fontSize: 10, color: "#9ca3af", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: ".05em" }}>{item.label}</p>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", margin: 0 }}>{item.val}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {["Sala / comedor", "Cocina con isla de granito", "2 terrazas", "Jardín privado (Nivel 1)", "Roof garden privado (Nivel 3)"].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 8 }}>
                        <span style={{ color: "#C8102E", fontSize: 12, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 13, color: "#374151" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sauce */}
              <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 20, overflow: "hidden" }}>
                <div style={{ background: "#1a1a2e", padding: "28px 28px 24px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(200,16,46,.2)" }} />
                  <p style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", margin: "0 0 8px" }}>Modelo · Solo 2 disponibles</p>
                  <h3 style={{ fontSize: 28, fontWeight: 900, color: "#fff", margin: "0 0 4px", fontStyle: "italic" }}>Sauce</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.55)", margin: 0 }}>3 Recámaras · 3.5 Baños · Family room</p>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                    {[
                      { label: "Superficie", val: "243 – 253 m²" },
                      { label: "Desde", val: "$8,800,000" },
                      { label: "Estacionamiento", val: "2 cajones" },
                      { label: "Disponibles", val: "Solo 2" },
                    ].map((item, i) => (
                      <div key={i} style={{ background: "#fff", border: "1px solid #f3f4f6", borderRadius: 8, padding: "10px 12px" }}>
                        <p style={{ fontSize: 10, color: "#9ca3af", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: ".05em" }}>{item.label}</p>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", margin: 0 }}>{item.val}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {["Family room", "Sala / comedor", "Cocina con isla de granito", "3 terrazas + terraza de servicio", "Jardín privado (Nivel 1)", "Roof garden privado (Nivel 3)"].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 8 }}>
                        <span style={{ color: "#C8102E", fontSize: 12, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 13, color: "#374151" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AMENIDADES */}
        <div style={{ padding: "64px 32px", background: "#2d3a2e" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, color: "#a8d4a6", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Amenidades</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: 0 }}>Un estilo de vida completo.</h2>
            </div>
            <div className="am-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
              {AMENIDADES.map((a, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{a.icon}</div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.75)", margin: 0, lineHeight: 1.4 }}>{a.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DISPONIBILIDAD */}
        <div id="disponibilidad" style={{ padding: "64px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Lista de precios Abril 2026</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 8px" }}>Disponibilidad Equiah</h2>
              <p style={{ fontSize: 14, color: "#6b7280" }}>Solo 7 unidades disponibles en total. El resto del desarrollo ya está vendido.</p>
            </div>

            {/* Encino */}
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a2e", margin: "0 0 16px" }}>Modelo Encino — 2 Recámaras</h3>
            <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 32, boxShadow: "0 4px 20px rgba(0,0,0,.06)", overflowX: "auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "80px 80px 80px 1fr 80px 120px 120px", background: "#2d3a2e", minWidth: 600 }}>
                {["Depto", "Nivel", "m² Const", "Extra", "Bodega", "Precio", "Entrega"].map((h, i) => (
                  <div key={i} style={{ padding: "12px 14px", fontSize: 11, fontWeight: 800, color: "#fff", borderLeft: i > 0 ? "1px solid rgba(255,255,255,.15)" : "none" }}>{h}</div>
                ))}
              </div>
              {ENCINO.map((dep, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 80px 80px 1fr 80px 120px 120px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6", minWidth: 600 }}>
                  <div style={{ padding: "13px 14px", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{dep.id}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#6b7280", borderLeft: "1px solid #f3f4f6" }}>{dep.nivel}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.m2}</div>
                  <div style={{ padding: "13px 14px", fontSize: 12, color: "#6b7280", borderLeft: "1px solid #f3f4f6" }}>{dep.extra}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.bodega}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, fontWeight: 800, color: "#C8102E", borderLeft: "1px solid #f3f4f6" }}>{fmt(dep.precio)}</div>
                  <div style={{ padding: "13px 14px", fontSize: 12, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.entrega}</div>
                </div>
              ))}
            </div>

            {/* Sauce */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a2e", margin: 0 }}>Modelo Sauce — 3 Recámaras</h3>
              <span style={{ fontSize: 12, fontWeight: 700, background: "#fff0f2", color: "#C8102E", padding: "4px 12px", borderRadius: 99 }}>¡Solo 2 disponibles!</span>
            </div>
            <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", marginBottom: 12, boxShadow: "0 4px 20px rgba(0,0,0,.06)", overflowX: "auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "80px 80px 80px 1fr 100px 120px 120px", background: "#1a1a2e", minWidth: 600 }}>
                {["Depto", "Nivel", "m² Const", "Extra", "Bodega", "Precio", "Entrega"].map((h, i) => (
                  <div key={i} style={{ padding: "12px 14px", fontSize: 11, fontWeight: 800, color: "#fff", borderLeft: i > 0 ? "1px solid rgba(255,255,255,.15)" : "none" }}>{h}</div>
                ))}
              </div>
              {SAUCE.map((dep, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 80px 80px 1fr 100px 120px 120px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6", minWidth: 600 }}>
                  <div style={{ padding: "13px 14px", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{dep.id}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#6b7280", borderLeft: "1px solid #f3f4f6" }}>{dep.nivel}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.m2}</div>
                  <div style={{ padding: "13px 14px", fontSize: 12, color: "#6b7280", borderLeft: "1px solid #f3f4f6" }}>{dep.extra}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.bodega}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, fontWeight: 800, color: "#C8102E", borderLeft: "1px solid #f3f4f6" }}>{fmt(dep.precio)}</div>
                  <div style={{ padding: "13px 14px", fontSize: 12, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.entrega}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#9ca3af", fontStyle: "italic", marginBottom: 32 }}>*Precios en MXN + IVA. Sujetos a cambio sin previo aviso. Las condiciones pueden adaptarse al esquema de pago.</p>

            <div style={{ textAlign: "center" }}>
              <a href="https://wa.me/522222573237?text=Hola,%20me%20interesa%20información%20sobre%20Equiah%20Departamentos" target="_blank" rel="noreferrer"
                style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                💬 Apartar mi departamento en Equiah
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: "64px 32px", background: "#2d3a2e", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>7 unidades. Sin segunda oportunidad.</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.7)", margin: "0 0 32px", lineHeight: 1.7 }}>Equiah ya está prácticamente vendido. Si te interesa vivir en uno de los proyectos sustentables más únicos cerca de Puebla, habla con nosotros hoy.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/522222573237?text=Hola,%20me%20interesa%20información%20sobre%20Equiah%20Departamentos" target="_blank" rel="noreferrer"
                style={{ background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                💬 Hablar por WhatsApp
              </a>
              <a href="tel:+522222573237" style={{ background: "rgba(255,255,255,.12)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,.25)" }}>
                📞 222 257 3237
              </a>
            </div>
          </div>
        </div>

        <Footer />
        <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer"
          style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,.2)", textDecoration: "none", zIndex: 100 }}>
          💬
        </a>
      </div>
    </>
  );
}
