import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
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

function ExclusivaBadge() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#1a1a2e", color: "#fff", padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 700, letterSpacing: 0.3 }}>
      ⭐ Exclusiva
    </span>
  );
}

function LeyendaProfeco() {
  return (
    <p style={{ margin: "16px 0 0", fontSize: 10.5, color: "#9ca3af", lineHeight: 1.5, textAlign: "center" }}>
      La información presentada en este anuncio es de carácter informativo y referencial; no constituye una oferta vinculante
      ni sustituye la información que se proporcione en el contrato correspondiente. En cumplimiento de la normatividad de la
      Procuraduría Federal del Consumidor (PROFECO) en materia de publicidad inmobiliaria, Emporio Inmobiliario se compromete
      a que la información aquí mostrada sea veraz y comprobable.
    </p>
  );
}

function altFoto(fotos, i, titulo) {
  const base = titulo ? `${titulo} — Emporio Inmobiliario` : "Propiedad en Puebla — Emporio Inmobiliario";
  return fotos.length > 1 ? `${base}, foto ${i + 1} de ${fotos.length}` : base;
}

function Lightbox({ fotos, index, titulo, onClose, onPrev, onNext }) {
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
      <div onClick={e => e.stopPropagation()} style={{ position: "relative", width: "85vw", height: "85vh", maxWidth: 1200, maxHeight: 900 }}>
        {fotos[index]?.url && (
          <Image
            src={fotos[index].url}
            alt={altFoto(fotos, index, titulo)}
            fill
            sizes="85vw"
            style={{ objectFit: "contain", borderRadius: 8 }}
          />
        )}
      </div>
      {fotos.length > 1 && (
        <button onClick={e => { e.stopPropagation(); onNext(); }} style={{ position: "absolute", right: 20, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 26, width: 52, height: 52, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
      )}
      {fotos.length > 1 && (
        <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, maxWidth: "90vw", overflowX: "auto", padding: "4px 8px" }}>
          {fotos.map((f, i) => (
            <div key={i} onClick={e => e.stopPropagation()} style={{ position: "relative", width: 52, height: 38, borderRadius: 6, overflow: "hidden", flexShrink: 0, cursor: "pointer", border: i === index ? "2px solid #C8102E" : "2px solid rgba(255,255,255,0.2)", opacity: i === index ? 1 : 0.55 }}>
              {f.url && <Image src={f.url} alt={altFoto(fotos, i, titulo)} fill sizes="52px" style={{ objectFit: "cover" }} />}
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
      {lightbox && <Lightbox fotos={fotos} index={actual} titulo={titulo} onClose={() => setLightbox(false)} onPrev={prev} onNext={next} />}
      <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 10, background: "#f3f4f6", height: 260, position: "relative", cursor: fotos.length > 0 ? "zoom-in" : "default", width: "100%" }}>
        {imagenPrincipal ? (
          <Image
            src={imagenPrincipal}
            alt={altFoto(fotos, actual, titulo)}
            onClick={() => fotos.length > 0 && setLightbox(true)}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            style={{ objectFit: "cover" }}
            priority
          />
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
            <div key={i} onClick={() => setActual(i)} style={{ position: "relative", width: 84, height: 62, borderRadius: 10, overflow: "hidden", flexShrink: 0, cursor: "pointer", border: actual === i ? "2px solid #C8102E" : "2px solid transparent", opacity: actual === i ? 1 : 0.6 }}>
              {foto.url && <Image src={foto.url} alt={altFoto(fotos, i, titulo)} fill sizes="84px" style={{ objectFit: "cover" }} />}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

const PROTECCION_JURIDICA_LABEL = {
  blindaje_legal: "Renta con Blindaje Legal Emporio",
  aval: "Requiere aval",
  otra_poliza: "Requiere póliza jurídica",
};

function FormularioContacto({ propiedad, contacto, setContacto, enviando, enviado, errorEnvio, onEnviar, isMobile }) {
  return (
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
          {errorEnvio && (
            <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: 10, padding: "10px 14px", marginBottom: 14 }}>
              <p style={{ margin: 0, fontSize: 13, color: "#991b1b" }}>⚠️ {errorEnvio}</p>
            </div>
          )}
          {[
            { label: "Nombre completo", key: "nombre", type: "text", placeholder: "Tu nombre" },
            { label: "Teléfono", key: "telefono", type: "tel", placeholder: "2221234567" },
            { label: "Email", key: "email", type: "email", placeholder: "tu@email.com" },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: 14 }}>
              <label htmlFor={`propiedad-${f.key}`} style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 4 }}>{f.label}</label>
              <input id={`propiedad-${f.key}`} name={f.key} type={f.type} placeholder={f.placeholder} value={contacto[f.key]} onChange={e => setContacto(c => ({ ...c, [f.key]: e.target.value }))}
                style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, boxSizing: "border-box", fontFamily: "'Montserrat', sans-serif" }} />
            </div>
          ))}
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="propiedad-mensaje" style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Mensaje</label>
            <textarea id="propiedad-mensaje" name="mensaje" placeholder={`Hola, me interesa la propiedad ${propiedad.public_id || ""}...`} value={contacto.mensaje} onChange={e => setContacto(c => ({ ...c, mensaje: e.target.value }))}
              style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, boxSizing: "border-box", minHeight: 80, resize: "vertical", fontFamily: "'Montserrat', sans-serif" }} />
          </div>
          <button onClick={onEnviar} disabled={enviando || !contacto.nombre || !contacto.telefono}
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
}

function MapaUbicacion({ lat, lng, mostrarExacta, direccion }) {
  if (lat && lng && mostrarExacta) {
    return (
      <div style={{ marginTop: 24 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>📍 Ubicación</h3>
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #f0f0f0" }}>
          <iframe title={`Mapa de ${direccion}`} loading="lazy" width="100%" height="220" frameBorder="0" scrolling="no" style={{ display: "block", width: "100%" }}
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
}

export default function PropiedadDetalle({ propiedad }) {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState(null);
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
  const seoUrl = `https://www.emporioinmobiliario.com.mx/propiedades/${generarSlug(propiedad)}`;

  // ── Datos estructurados (Schema.org) ──────────────────────────────────
  // Regla estricta: nunca se inventa un valor. Cada campo solo se incluye
  // si existe un dato real en Supabase; si falta, simplemente se omite esa
  // propiedad del JSON-LD (Google tolera campos faltantes, pero no
  // tolera bien datos falsos o de relleno).
  const directionMap = { sale: "Buy", lease: "Rent" };
  const businessFunction = directionMap[propiedad.operacion];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": seoUrl,
    url: seoUrl,
    ...(propiedad.titulo && { name: propiedad.titulo }),
    ...(seoDesc && { description: seoDesc }),
    ...(fotos.length > 0 && { image: fotos.map((f) => f.url).filter(Boolean) }),
    ...(propiedad.created_at && { datePosted: propiedad.created_at.split("T")[0] }),
  };

  // Dirección — solo si hay al menos ciudad o colonia reales (nunca se
  // rellena con "Puebla" genérico si el dato no vino de Supabase).
  if (propiedad.ciudad || propiedad.colonia || propiedad.estado) {
    jsonLd.address = {
      "@type": "PostalAddress",
      ...(propiedad.colonia && { addressLocality: propiedad.colonia }),
      ...(propiedad.ciudad && { addressRegion: propiedad.ciudad }),
      ...(propiedad.estado && { addressCountry: "MX" }),
    };
  }

  // Coordenadas — solo si la propiedad tiene lat/lng reales capturados.
  if (lat != null && lng != null) {
    jsonLd.geo = { "@type": "GeoCoordinates", latitude: lat, longitude: lng };
  }

  // Precio — solo si hay un precio mayor a 0 capturado.
  if (precio > 0) {
    jsonLd.offers = {
      "@type": "Offer",
      price: precio,
      priceCurrency: "MXN",
      ...(businessFunction && { businessFunction: `http://purl.org/goodrelations/v1#${businessFunction}` }),
      availability: "https://schema.org/InStock",
      url: seoUrl,
    };
  }

  // Características físicas — solo las que tengan un valor numérico real.
  if (propiedad.recamaras > 0) jsonLd.numberOfRooms = propiedad.recamaras;
  if (propiedad.banos > 0) jsonLd.numberOfBathroomsTotal = propiedad.banos;
  if (propiedad.m2_construccion > 0) {
    jsonLd.floorSize = { "@type": "QuantitativeValue", value: propiedad.m2_construccion, unitCode: "MTK" };
  }

  jsonLd.broker = {
    "@type": "RealEstateAgent",
    name: "Emporio Inmobiliario",
    url: "https://www.emporioinmobiliario.com.mx",
  };

  const handleContacto = async () => {
    setEnviando(true);
    setErrorEnvio(null);
    try {
      const res = await fetch("/api/contacto-propiedad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contacto, propiedad_id: propiedad.public_id, propiedad_titulo: propiedad.titulo }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorEnvio(data.error || "No se pudo enviar el mensaje. Intenta por WhatsApp.");
      } else {
        setEnviado(true);
      }
    } catch (e) {
      setErrorEnvio("Error de conexión. Intenta por WhatsApp.");
    }
    setEnviando(false);
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content={seoImage} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seoUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fafafa", minHeight: "100vh" }}>
        <Navbar />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "16px" : "32px" }}>
          {isMobile ? (
            <div>
              <Galeria fotos={fotos} titulo={propiedad.titulo} />
              {videoEmbedUrl(propiedad.video_url) && (
                <div style={{ marginTop: 12, marginBottom: 16, borderRadius: 16, overflow: "hidden" }}>
                  <iframe title={`Video de ${propiedad.titulo || "la propiedad"}`} loading="lazy" width="100%" height="220" src={videoEmbedUrl(propiedad.video_url)} frameBorder="0" allowFullScreen style={{ display: "block" }} />
                </div>
              )}
              {propiedad.video_url && propiedad.video_url.includes("tiktok.com") && (
                <a href={propiedad.video_url} target="_blank" rel="noreferrer" style={{ display: "block", marginTop: 12, marginBottom: 16, background: "#000", color: "#fff", textAlign: "center", padding: "14px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
                  🎬 Ver video en TikTok
                </a>
              )}
              <div style={{ background: "#fff", borderRadius: 20, padding: "20px", marginBottom: 16, border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <h1 style={{ margin: 0, fontSize: 19, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.3 }}>{propiedad.titulo || ""}</h1>
                  <StatusBadge status={status} />
                  {propiedad.es_exclusiva && <ExclusivaBadge />}
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
                {esVenta && propiedad.veridada_url && (
                  <a href={propiedad.veridada_url} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 12, background: "#eff6ff", color: "#1e40af", padding: "8px 14px", borderRadius: 99, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                    🛡️ Propiedad verificada por Veridada
                  </a>
                )}
                {propiedad.descripcion && (
                  <div style={{ marginTop: 16 }}>
                    <h3 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>Descripción</h3>
                    <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.8, whiteSpace: "pre-line", wordBreak: "break-word" }}>{propiedad.descripcion}</p>
                  </div>
                )}
              </div>
              <FormularioContacto propiedad={propiedad} contacto={contacto} setContacto={setContacto} enviando={enviando} enviado={enviado} errorEnvio={errorEnvio} onEnviar={handleContacto} isMobile={isMobile} />
              <MapaUbicacion lat={lat} lng={lng} mostrarExacta={propiedad.mostrar_ubicacion_exacta} direccion={direccion} />
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
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 340px", gap: 24, alignItems: "start" }}>
              <div>
                <Galeria fotos={fotos} titulo={propiedad.titulo} />
                {videoEmbedUrl(propiedad.video_url) && (
                  <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 16 }}>
                    <iframe title={`Video de ${propiedad.titulo || "la propiedad"}`} loading="lazy" width="100%" height="320" src={videoEmbedUrl(propiedad.video_url)} frameBorder="0" allowFullScreen style={{ display: "block" }} />
                  </div>
                )}
                {propiedad.video_url && propiedad.video_url.includes("tiktok.com") && (
                  <a href={propiedad.video_url} target="_blank" rel="noreferrer" style={{ display: "block", marginBottom: 16, background: "#000", color: "#fff", textAlign: "center", padding: "16px", borderRadius: 16, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
                    🎬 Ver video en TikTok
                  </a>
                )}
                <div style={{ background: "#fff", borderRadius: 20, padding: "24px 28px", marginBottom: 16, border: "1px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ flex: 1, marginRight: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.3 }}>{propiedad.titulo || ""}</h1>
                        <StatusBadge status={status} />
                        {propiedad.es_exclusiva && <ExclusivaBadge />}
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
                  {esVenta && propiedad.veridada_url && (
                    <a href={propiedad.veridada_url} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16, background: "#eff6ff", color: "#1e40af", padding: "9px 16px", borderRadius: 99, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                      🛡️ Propiedad verificada por Veridada — ver sello
                    </a>
                  )}
                  {propiedad.descripcion && (
                    <div>
                      <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>Descripción</h3>
                      <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.8, whiteSpace: "pre-line", wordBreak: "break-word" }}>{propiedad.descripcion}</p>
                    </div>
                  )}
                  <MapaUbicacion lat={lat} lng={lng} mostrarExacta={propiedad.mostrar_ubicacion_exacta} direccion={direccion} />
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
              </div>
              <div style={{ position: "sticky", top: 20 }}>
                <FormularioContacto propiedad={propiedad} contacto={contacto} setContacto={setContacto} enviando={enviando} enviado={enviado} errorEnvio={errorEnvio} onEnviar={handleContacto} isMobile={isMobile} />
              </div>
            </div>
          )}
          <LeyendaProfeco />
        </div>

        <Footer />

        <a href="https://wa.me/522222573237" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, right: 24, background: "#25d366", color: "#fff", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", textDecoration: "none", zIndex: 100 }}>
          💬
        </a>
      </div>
    </>
  );
}
// Construye el slug ideal a partir de los datos actuales de la propiedad.
// Si el título, operación o ciudad cambian después, el slug "correcto"
// cambia también — getServerSideProps se encarga de redirigir (301) hacia
// la versión vigente cada vez que detecta que la URL recibida no coincide.
function generarSlug(propiedad) {
  const partes = [];
  partes.push(propiedad.tipo || "propiedad");
  partes.push(propiedad.operacion === "sale" ? "venta" : "renta");
  if (propiedad.colonia) partes.push(propiedad.colonia);
  else if (propiedad.ciudad && propiedad.ciudad.toLowerCase() !== "puebla") partes.push(propiedad.ciudad);
  partes.push("puebla");

  const slugBase = partes
    .join(" ")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return `${slugBase}-${propiedad.public_id}`;
}

// El public_id siempre tiene el formato EB-XXXX o EMP-XXXX al final de la
// URL, sin importar qué slug venga antes. Esta función lo extrae de forma
// confiable tanto de la URL vieja (solo el ID) como de la nueva (slug+ID).
function extraerPublicId(param) {
  const match = String(param).match(/((?:EB|EMP)-[A-Z0-9]+)$/i);
  return match ? match[1].toUpperCase() : param;
}

export async function getServerSideProps({ params, req, resolvedUrl }) {
  try {
    const publicIdSolicitado = extraerPublicId(params.id);

    const { data, error } = await supabasePublic
      .from("propiedades")
      .select("*")
      .eq("public_id", publicIdSolicitado)
      .in("status", ["published", "reserved"])
      .maybeSingle();

    if (error || !data) return { props: { propiedad: null } };

    // Si la URL recibida no es exactamente el slug vigente (porque venía
    // sin slug, con un slug viejo, o cualquier variante), redirigimos de
    // forma permanente (301) a la versión correcta. Esto preserva el valor
    // SEO de los links viejos en vez de simplemente mostrar la página bajo
    // cualquier URL (lo cual generaría contenido duplicado a ojos de Google).
    const slugCorrecto = generarSlug(data);
    if (params.id !== slugCorrecto) {
      return {
        redirect: {
          destination: `/propiedades/${slugCorrecto}`,
          permanent: true,
        },
      };
    }

    // Registrar la visita (para el futuro reporte a propietarios). Filtro
    // básico de bots/crawlers conocidos por user-agent, para no inflar las
    // estadísticas con tráfico que no es de prospectos reales.
    const userAgent = (req?.headers?.["user-agent"] || "").toLowerCase();
    const esBotConocido = /bot|crawl|spider|facebookexternalhit|whatsapp|slurp|bingpreview/.test(userAgent);
    if (!esBotConocido) {
      const referrer = req?.headers?.referer || req?.headers?.referrer || "";
      let origen = "directo";
      if (referrer.includes("facebook.com") || referrer.includes("instagram.com")) origen = "redes";
      else if (referrer.includes("google.")) origen = "google";
      else if (referrer && !referrer.includes("emporioinmobiliario")) origen = "otro";

      // No bloqueamos la respuesta si el insert falla — es analítica, no
      // debe afectar la carga de la página para el visitante.
      supabasePublic
        .from("visitas_propiedad")
        .insert({ propiedad_id: data.id, propiedad_public_id: data.public_id, origen })
        .then(() => {})
        .catch(() => {});
    }

    return { props: { propiedad: data } };
  } catch (e) {
    return { props: { propiedad: null } };
  }
}
