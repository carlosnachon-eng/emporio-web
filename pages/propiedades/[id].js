import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { createClient } from "@supabase/supabase-js";

const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const fmt = (n) => new Intl.NumberFormat("es-MX", {
  style: "currency", currency: "MXN", minimumFractionDigits: 0
}).format(n || 0);

const STATUS_BADGE = {
  published: { label: "Disponible", bg: "#dcfce7", color: "#166534", dot: "#22c55e" },
  reserved:  { label: "Reservado",  bg: "#fef9c3", color: "#854d0e", dot: "#eab308" },
  leased:    { label: "Rentado",    bg: "#fee2e2", color: "#991b1b", dot: "#ef4444" },
  sold:      { label: "Vendido",    bg: "#fee2e2", color: "#991b1b", dot: "#ef4444" },
  draft:     { label: "Borrador",   bg: "#f3f4f6", color: "#6b7280", dot: "#9ca3af" },
};

function StatusBadge({ status }) {
  const s = STATUS_BADGE[status] || STATUS_BADGE.published;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: s.bg, color: s.color, padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 700 }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.dot }} />
      {s.label}
    </span>
  );
}

function Lightbox({ fotos, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button onClick={onClose} style={{ position: "absolute", top: 20, right: 24, background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", fontSize: 22, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>✕</button>
      <div style={{ position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,0.12)", color: "#fff", padding: "4px 16px", borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
        {index + 1} / {fotos.length}
      </div>
      {fotos.length > 1 && (
        <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{ position: "absolute", left: 20, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 26, width: 52, height: 52, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
      )}
      <img src={fotos[index]?.url || ""} alt="" onClick={e => e.stopPropagation()} style={{ maxWidth: "85vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 8, boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }} />
      {fotos.length > 1 && (
        <button onClick={e => { e.stopPropagation(); onNext(); }} style={{ position: "absolute", right: 20, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 26, width: 52, height: 52, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
      )}
      {fotos.length > 1 && (
        <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, maxWidth: "90vw", overflowX: "auto", padding: "4px 8px" }}>
          {fotos.map((f, i) => (
            <div key={i} onClick={e => e.stopPropagation()} style={{ width: 52, height: 38, borderRadius: 6, overflow: "hidden", flexShrink: 0, cursor: "pointer", border: i === index ? "2px solid #C8102E" : "2px solid rgba(255,255,255,0.2)", opacity: i === index ? 1 : 0.55 }}>
              <img src={f.url || ""} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Galeria({ fotos, titulo }) {
  const [actual, setActual] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const prev = useCallback(() => setActual(i => (i - 1 + fotos.length) % fotos.length), [fotos.length]);
  const next = useCallback(() => setActual(i => (i + 1) % fotos.length), [fotos.length]);
  const imagenPrincipal = fotos[actual]?.url || "";

  return (
    <>
      {lightbox && <Lightbox fotos={fotos} index={actual} onClose={() => setLightbox(false)} onPrev={prev} onNext={next} />}
      <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 10, background: "#f3f4f6", height: 260, position: "relative", cursor: fotos.length > 0 ? "zoom-in" : "default", width: "100%" }}>
        {imagenPrincipal ? (
          <img src={imagenPrincipal} alt={titulo || ""} onClick={() => fotos.length > 0 && setLightbox(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 60 }}>🏠</div>
        )}
        {fotos.length > 1 && (
          <>
            <button onClick={e => { e.stopPropagation(); prev(); }} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.9)", border: "none", color: "#1a1a2e", fontSize: 22, width: 40, height: 40, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>‹</button>
            <button onClick={e => { e.stopPropagation(); next(); }} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.9)", border: "none", color: "#1a1a2e", fontSize: 22, width: 40, height: 40, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>›</button>
          </>
        )}
        {fotos.length > 1 && (
          <div style={{ position: "absolute", bottom: 12, right: 14, background: "rgba(0,0,0,0.5)", color: "#fff", padding: "3px 10px", borderRadius: 99, fontSize: 12, fontWeight: 600 }}>
            {actual + 1} / {fotos.length}
          </div>
        )}
        {fotos.length > 0 && (
          <button onClick={() => setLightbox(true)} style={{ position: "absolute", bottom: 12, left: 14, background: "rgba(255,255,255,0.9)", border: "none", color: "#1a1a2e", padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            Ampliar
          </button>
        )}
      </div>
      {fotos.length > 1 && (
        <div style={{ display: "flex", gap: 8, overflowX: "auto", marginBottom: 20, paddingBottom: 4 }}>
          {fotos.map((foto, i) => (
            <div key={i} onClick={() => setActual(i)} style={{ width: 84, height: 62, borderRadius: 10, overflow: "hidden", flexShrink: 0, cursor: "pointer", border: actual === i ? "2px solid #C8102E" : "2px solid transparent", opacity: actual === i ? 1 : 0.6 }}>
              <img src={foto.url || ""} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

const PROTECCION_JURIDICA_LABEL = {
  blindaje_legal: "Incluye Blindaje Legal Emporio",
  aval: "Requiere aval",
  otra_poliza: "Requiere póliza jurídica",
};

export default function PropiedadDetalle({ propiedad }) {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [contacto, setContacto] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!propiedad) return (
    <>
      <Navbar />
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Montserrat', sans-serif", background: "#fafafa" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 48 }}>🔍</p>
          <h2 style={{ color: "#1a1a2e" }}>Propiedad no encontrada</h2>
          <a href="/propiedades" style={{ color: "#C8102E", fontWeight: 700 }}>← Ver todas las propiedades</a>
        </div>
      </div>
      <Footer />
    </>
  );

  const precio = propiedad.precio || 0;
  const fotos = Array.isArray(propiedad.fotos) ? propiedad.fotos : [];
  const amenidades = Array.isArray(propiedad.amenidades) ? propiedad.amenidades : [];
  const creditos = Array.isArray(propiedad.creditos_aceptados) ? propiedad.creditos_aceptados : [];
  const status = propiedad.status || "published";
  const esVenta = propiedad.operacion === "sale";
  const lat = propiedad.lat;
  const lng = propiedad.lng;
  const direccion = [propiedad.colonia, propiedad.ciudad, propiedad.estado].filter(Boolean).join(", ");

  // Datos operativos que sí aportan valor al público (nunca incluimos comisión ni ubicación de llave)
  const datosOperativos = [
    propiedad.servicio_gas && { label: "Gas", value: propiedad.servicio_gas },
    propiedad.servicio_agua && { label: "Agua", value: propiedad.servicio_agua },
    propiedad.servicio_luz && { label: "Luz", value: propiedad.servicio_luz },
    propiedad.internet_disponible && { label: "Internet", value: propiedad.internet_disponible },
    propiedad.cisterna_capacidad && { label: "Cisterna", value: propiedad.cisterna_capacidad },
    propiedad.mantenimiento_aplica && { label: "Mantenimiento", value: propiedad.mantenimiento_monto ? fmt(propiedad.mantenimiento_monto) : "Aplica" },
    propiedad.amueblado && { label: "Estado", value: propiedad.amueblado },
    propiedad.orientacion && { label: "Orientación", value: propiedad.orientacion },
    propiedad.antiguedad_anios != null && { label: "Antigüedad", value: `${propiedad.antiguedad_anios} años` },
  ].filter(Boolean);

  // SEO dinámico por propiedad
  const tipoOp = esVenta ? "en venta" : "en renta";
  const precioFmt = fmt(precio);
  const seoTitle = propiedad.titulo
    ? `${propiedad.titulo} ${tipoOp} en Puebla — Emporio Inmobiliario`
    : `Propiedad ${tipoOp} en Puebla — Emporio Inmobiliario`;
  const seoDesc = [
    propiedad.titulo,
    tipoOp,
    precio > 0 ? `por ${precioFmt}` : "",
    propiedad.recamaras > 0 ? `${propiedad.recamaras} recámaras` : "",
    propiedad.banos > 0 ? `${propiedad.banos} baños` : "",
    propiedad.m2_construccion > 0 ? `${propiedad.m2_construccion} m²` : "",
    direccion ? `en ${direccion}` : "en Puebla",
    "— Emporio Inmobiliario.",
  ].filter(Boolean).join(", ");
  const seoImage = fotos[0]?.url || "https://www.emporioinmobiliario.com.mx/logo.png";
  const seoUrl = `https://www.emporioinmobiliario.com.mx/propiedades/${propiedad.public_id}`;

  const handleContacto = async () => {
    setEnviando(true);
    try {
      await fetch("/api/contacto-propiedad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contacto, propiedad_id: propiedad.public_id, propiedad_titulo: propiedad.titulo }),
      });
      setEnviado(true);
    } catch (e) { console.error(e); }
    setEnviando(false);
  };

  const FormularioContacto = () => (
    <div style={{ background: "#fff", borderRadius: 20, padding: "24px", border: "1px solid #f0f0f0", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: isMobile ? 16 : 0 }}>
      <h3 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 800, color: "#1a1a2e" }}>¿Te interesa esta propiedad?</h3>
      <p style={{ margin: "0 0 20px", fontSize: 13, color: "#6b7280" }}>Déjanos tus datos y te contactamos</p>
      {enviado ? (
        <div style={{ background: "#f0fdf4", borderRadius: 12, padding: 24, textAlign: "center" }}>
          <p style={{ fontSize: 40, margin: "0 0 8px" }}>✅</p>
          <p style={{ margin: 0, fontWeight: 700, color: "#065f46" }}>¡Recibimos tu mensaje!</p>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#6b7280" }}>Te contactaremos muy pronto</p>
        </div>
      ) : (
        <>
          {[
            { label: "Nombre completo", key: "nombre", type: "text", placeholder: "Tu nombre" },
            { label: "Teléfono", key: "telefono", type: "tel", placeholder: "2221234567" },
            { label: "Email", key: "email", type: "email", placeholder: "tu@email.com" },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 4 }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} value={contacto[f.key]} onChange={e => setContacto(c => ({ ...c, [f.key]: e.target.value }))}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, boxSizing: "border-box", fontFamily: "'Montserrat', sans-serif" }} />
            </div>
          ))}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Mensaje</label>
            <textarea placeholder={`Hola, me interesa la propiedad ${propiedad.public_id || ""}...`} value={contacto.mensaje} onChange={e => setContacto(c => ({ ...c, mensaje: e.target.value }))}
              style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, boxSizing: "border-box", minHeight: 80, resize: "vertical", fontFamily: "'Montserrat', sans-serif" }} />
          </div>
          <button onClick={handleContacto} disabled={enviando || !contacto.nombre || !contacto.telefono}
            style={{ width: "100%", background: "#C8102E", color: "#fff", border: "none", borderRadius: 10, padding: "13px", fontWeight: 800, fontSize: 15, cursor: enviando ? "not-allowed" : "pointer", opacity: enviando ? 0.7 : 1, marginBottom: 12, fontFamily: "'Montserrat', sans-serif" }}>
            {enviando ? "Enviando..." : "📩 Enviar mensaje"}
          </button>
          <a href={`https://wa.me/522222573237?text=Hola, me interesa la propiedad ${propiedad.public_id || ""} - ${propiedad.titulo || ""}`} target="_blank" rel="noreferrer"
            style={{ display: "block", width: "100%", background: "#25d366", color: "#fff", border: "none", borderRadius: 10, padding: "13px", fontWeight: 800, fontSize: 15, cursor: "pointer", textAlign: "center", textDecoration: "none", boxSizing: "border-box" }}>
            💬 WhatsApp
          </a>
        </>
      )}
      <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f3f4f6", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>ID: {propiedad.public_id || ""}</p>
      </div>
    </div>
  );

  const MapaUbicacion = () => {
    if (lat && lng && propiedad.mostrar_ubicacion_exacta) {
      return (
        <div style={{ marginTop: 24 }}>
          <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>📍 Ubicación</h3>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #f0f0f0" }}>
            <iframe width="100%" height="220" frameBorder="0" scrolling="no" style={{ display: "block", width: "100%" }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.005},${lat-0.005},${lng+0.005},${lat+0.005}&layer=mapnik&marker=${lat},${lng}`}
            />
          </div>
          <a href={`https://www.google.com/maps?q=${lat},${lng}`} target="_blank" rel="noreferrer"
            style={{ fontSize: 12, color: "#6b7280", display: "block", marginTop: 6, textAlign: "right" }}>
            Ver en Google Maps →
          </a>
        </div>
      );
    }
    if (direccion) {
      return (
        <div style={{ marginTop: 24 }}>
          <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>📍 Zona</h3>
          <div style={{ background: "#f8f8fa", borderRadius: 12, padding: "14px 16px", border: "1px solid #f0f0f0" }}>
            <p style={{ margin: 0, fontSize: 14, color: "#374151" }}>📍 {direccion}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion + ", Puebla, México")}`}
              target="_blank" rel="noreferrer"
              style={{ fontSize: 12, color: "#C8102E", fontWeight: 600, display: "inline-block", marginTop: 8 }}>
              Ver en Google Maps →
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  const videoEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes("tiktok.com")) return null; // TikTok no permite embed simple sin su SDK; mostramos link en su lugar
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const id = url.includes("youtu.be") ? url.split("/").pop() : new URL(url).searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    return null;
  };

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:image" content={seoImage} />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seoUrl} />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fafafa", minHeight: "100vh" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Navbar />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "16px" : "32px" }}>
          {isMobile ? (
            <div>
              <Galeria fotos={fotos} titulo={propiedad.titulo} />
              <div style={{ background: "#fff", borderRadius: 20, padding: "20px", marginBottom: 16, border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <h1 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.3 }}>{propiedad.titulo || ""}</h1>
                  <StatusBadge status={status} />
                </div>
                <p style={{ margin: "0 0 12px", fontSize: 13, color: "#6b7280" }}>📍 {direccion}</p>
                <p style={{ margin: "0 0 4px", fontSize: 26, fontWeight: 900, color: "#C8102E" }}>{fmt(precio)}</p>
                <p style={{ margin: "0 0 16px", fontSize: 11, color: "#9ca3af" }}>{propiedad.moneda || "MXN"} {esVenta ? "total" : "/ mes"}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "14px 0", borderTop: "1px solid #f3f4f6" }}>
                  {propiedad.tipo && <span style={{ background: "#f3f4f6", color: "#374151", padding: "5px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600 }}>{propiedad.tipo}</span>}
                  {propiedad.recamaras > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "5px 12px", borderRadius: 99, fontSize: 12 }}>🛏 {propiedad.recamaras} rec</span>}
                  {propiedad.banos > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "5px 12px", borderRadius: 99, fontSize: 12 }}>🚿 {propiedad.banos} baños</span>}
                  {propiedad.estacionamientos > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "5px 12px", borderRadius: 99, fontSize: 12 }}>🚗 {propiedad.estacionamientos} est</span>}
                  {propiedad.m2_construccion > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "5px 12px", borderRadius: 99, fontSize: 12 }}>📐 {propiedad.m2_construccion} m²</span>}
                  {propiedad.m2_terreno > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "5px 12px", borderRadius: 99, fontSize: 12 }}>🌳 {propiedad.m2_terreno} m² terreno</span>}
                </div>
                {!esVenta && propiedad.mascotas_permitidas != null && (
                  <p style={{ margin: "10px 0 0", fontSize: 13, color: "#374151" }}>{propiedad.mascotas_permitidas ? "🐾 Se aceptan mascotas" : "🚫 No se aceptan mascotas"}</p>
                )}
                {!esVenta && propiedad.proteccion_juridica && (
                  <p style={{ margin: "6px 0 0", fontSize: 13, color: "#374151" }}>🛡️ {PROTECCION_JURIDICA_LABEL[propiedad.proteccion_juridica] || ""}</p>
                )}
                {esVenta && creditos.length > 0 && (
                  <p style={{ margin: "10px 0 0", fontSize: 13, color: "#374151" }}>💳 Acepta: {creditos.join(", ")}</p>
                )}
                {propiedad.descripcion && (
                  <div style={{ marginTop: 16 }}>
                    <h3 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>Descripción</h3>
                    <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.8, whiteSpace: "pre-line", wordBreak: "break-word" }}>{propiedad.descripcion}</p>
                  </div>
                )}
              </div>
              <FormularioContacto />
              <MapaUbicacion />
              {datosOperativos.length > 0 && (
                <div style={{ background: "#fff", borderRadius: 20, padding: "20px", marginTop: 16, border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>Datos de la propiedad</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {datosOperativos.map((d, i) => (
                      <div key={i}><p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>{d.label}</p><p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#374151" }}>{d.value}</p></div>
                    ))}
                  </div>
                </div>
              )}
              {amenidades.length > 0 && (
                <div style={{ background: "#fff", borderRadius: 20, padding: "20px", marginTop: 16, border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>Amenidades</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {amenidades.map((a, i) => <span key={i} style={{ background: "#f0fdf4", color: "#065f46", padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600 }}>✓ {a}</span>)}
                  </div>
                </div>
              )}
              {videoEmbedUrl(propiedad.video_url) && (
                <div style={{ marginTop: 16, borderRadius: 16, overflow: "hidden" }}>
                  <iframe width="100%" height="220" src={videoEmbedUrl(propiedad.video_url)} frameBorder="0" allowFullScreen style={{ display: "block" }} />
                </div>
              )}
              {propiedad.video_url && propiedad.video_url.includes("tiktok.com") && (
                <a href={propiedad.video_url} target="_blank" rel="noreferrer" style={{ display: "block", marginTop: 16, background: "#000", color: "#fff", textAlign: "center", padding: "14px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
                  🎬 Ver video en TikTok
                </a>
              )}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 340px", gap: 24, alignItems: "start" }}>
              <div>
                <Galeria fotos={fotos} titulo={propiedad.titulo} />
                <div style={{ background: "#fff", borderRadius: 20, padding: "24px 28px", marginBottom: 16, border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ flex: 1, marginRight: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.3 }}>{propiedad.titulo || ""}</h1>
                        <StatusBadge status={status} />
                      </div>
                      <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>📍 {direccion}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ margin: 0, fontSize: 28, fontWeight: 900, color: "#C8102E" }}>{fmt(precio)}</p>
                      <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>{propiedad.moneda || "MXN"} {esVenta ? "total" : "/ mes"}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "14px 0", borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6", marginBottom: 20 }}>
                    {propiedad.tipo && <span style={{ background: "#f3f4f6", color: "#374151", padding: "6px 14px", borderRadius: 99, fontSize: 13, fontWeight: 600 }}>{propiedad.tipo}</span>}
                    {propiedad.recamaras > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "6px 14px", borderRadius: 99, fontSize: 13 }}>🛏 {propiedad.recamaras} rec</span>}
                    {propiedad.banos > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "6px 14px", borderRadius: 99, fontSize: 13 }}>🚿 {propiedad.banos} baños</span>}
                    {propiedad.estacionamientos > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "6px 14px", borderRadius: 99, fontSize: 13 }}>🚗 {propiedad.estacionamientos} est</span>}
                    {propiedad.m2_construccion > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "6px 14px", borderRadius: 99, fontSize: 13 }}>📐 {propiedad.m2_construccion} m²</span>}
                    {propiedad.m2_terreno > 0 && <span style={{ background: "#f3f4f6", color: "#374151", padding: "6px 14px", borderRadius: 99, fontSize: 13 }}>🌳 {propiedad.m2_terreno} m² terreno</span>}
                  </div>
                  {!esVenta && (propiedad.mascotas_permitidas != null || propiedad.proteccion_juridica) && (
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
                      {propiedad.mascotas_permitidas != null && (
                        <span style={{ fontSize: 13, color: "#374151" }}>{propiedad.mascotas_permitidas ? "🐾 Se aceptan mascotas" : "🚫 No se aceptan mascotas"}</span>
                      )}
                      {propiedad.proteccion_juridica && (
                        <span style={{ fontSize: 13, color: "#374151" }}>🛡️ {PROTECCION_JURIDICA_LABEL[propiedad.proteccion_juridica] || ""}</span>
                      )}
                    </div>
                  )}
                  {esVenta && creditos.length > 0 && (
                    <p style={{ margin: "0 0 16px", fontSize: 13, color: "#374151" }}>💳 Acepta crédito: {creditos.join(", ")}</p>
                  )}
                  {propiedad.descripcion && (
                    <div>
                      <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>Descripción</h3>
                      <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.8, whiteSpace: "pre-line", wordBreak: "break-word" }}>{propiedad.descripcion}</p>
                    </div>
                  )}
                  <MapaUbicacion />
                </div>

                {datosOperativos.length > 0 && (
                  <div style={{ background: "#fff", borderRadius: 20, padding: "24px 28px", marginBottom: 16, border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                    <h3 style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>Datos de la propiedad</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                      {datosOperativos.map((d, i) => (
                        <div key={i}><p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>{d.label}</p><p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#374151" }}>{d.value}</p></div>
                      ))}
                    </div>
                  </div>
                )}

                {amenidades.length > 0 && (
                  <div style={{ background: "#fff", borderRadius: 20, padding: "24px 28px", marginBottom: 16, border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                    <h3 style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>Amenidades</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {amenidades.map((a, i) => <span key={i} style={{ background: "#f0fdf4", color: "#065f46", padding: "4px 12px", borderRadius: 99, fontSize: 13, fontWeight: 600 }}>✓ {a}</span>)}
                    </div>
                  </div>
                )}

                {videoEmbedUrl(propiedad.video_url) && (
                  <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 16 }}>
                    <iframe width="100%" height="320" src={videoEmbedUrl(propiedad.video_url)} frameBorder="0" allowFullScreen style={{ display: "block" }} />
                  </div>
                )}
                {propiedad.video_url && propiedad.video_url.includes("tiktok.com") && (
                  <a href={propiedad.video_url} target="_blank" rel="noreferrer" style={{ display: "block", background: "#000", color: "#fff", textAlign: "center", padding: "16px", borderRadius: 16, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
                    🎬 Ver video en TikTok
                  </a>
                )}
              </div>
              <div style={{ position: "sticky", top: 20 }}>
                <FormularioContacto />
              </div>
            </div>
          )}
        </div>

        <Footer />

        <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>
          💬
        </a>
      </div>
    </>
  );
}
export async function getServerSideProps({ params }) {
  try {
    // Acepta tanto el id interno (uuid) como el public_id (ej. "EB-XXXX" o "EMP-XXXX")
    const { data, error } = await supabasePublic
      .from("propiedades")
      .select("*")
      .eq("public_id", params.id)
      .in("status", ["published", "reserved"])
      .maybeSingle();

    if (error || !data) return { props: { propiedad: null } };
    return { props: { propiedad: data } };
  } catch (e) {
    return { props: { propiedad: null } };
  }
}
