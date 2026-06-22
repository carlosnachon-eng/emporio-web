import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
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

// Misma lógica que en pages/propiedades/[id].js — debe coincidir
// exactamente para que los links del listado no generen un salto extra de
// redirect 301 hacia la URL "correcta" (funcionaría igual, pero es
// innecesario y más lento para el usuario).
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
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return `${slugBase}-${propiedad.public_id}`;
}

const PAGE_SIZE = 10;

export default function Propiedades({ propiedadesIniciales }) {
  const router = useRouter();
  const [todas] = useState(propiedadesIniciales || []);
  const [iniciado, setIniciado] = useState(false);
  const [page, setPage] = useState(1);
  const [operacion, setOperacion] = useState("rental");
  const [tipo, setTipo] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [recamaras, setRecamaras] = useState("");
  const [orden, setOrden] = useState("");

  useEffect(() => {
    if (!router.isReady || iniciado) return;
    const opParam = router.query.operacion;
    let opInicial = "rental";
    if (opParam === "sale" || opParam === "venta") opInicial = "sale";
    else if (opParam === "rental" || opParam === "renta") opInicial = "rental";
    setOperacion(opInicial);
    setIniciado(true);
  }, [router.isReady]);

  const filtradas = useMemo(() => {
    let r = todas.filter(p => p.operacion === operacion);
    if (tipo) r = r.filter(p => p.tipo === tipo);
    if (precioMin) r = r.filter(p => (p.precio || 0) >= Number(precioMin));
    if (precioMax) r = r.filter(p => (p.precio || 0) <= Number(precioMax));
    if (recamaras) r = r.filter(p => (p.recamaras || 0) >= Number(recamaras));

    if (orden === "precio_asc")  r = [...r].sort((a, b) => (a.precio || 0) - (b.precio || 0));
    if (orden === "precio_desc") r = [...r].sort((a, b) => (b.precio || 0) - (a.precio || 0));
    if (orden === "reciente")    r = [...r].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    if (orden === "antiguo")     r = [...r].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    return r;
  }, [todas, operacion, tipo, precioMin, precioMax, recamaras, orden]);

  const totalProps = filtradas.length;
  const totalPages = Math.max(1, Math.ceil(totalProps / PAGE_SIZE));
  const propiedadesPagina = filtradas.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleOperacion = (op) => {
    setOperacion(op); setPage(1);
    router.replace({ pathname: "/propiedades", query: { operacion: op } }, undefined, { shallow: true });
  };
  const handleLimpiar = () => { setTipo(""); setPrecioMin(""); setPrecioMax(""); setRecamaras(""); setOrden(""); setPage(1); };
  const handlePage = (p) => { setPage(p); window.scrollTo(0, 0); };

  const tituloSEO = operacion === "rental"
    ? "Propiedades en Renta en Puebla — Emporio Inmobiliario"
    : "Propiedades en Venta en Puebla — Emporio Inmobiliario";
  const descSEO = operacion === "rental"
    ? "Encuentra departamentos, casas y locales en renta en Puebla, Cholula, Lomas de Angelópolis y zona metropolitana con Emporio Inmobiliario."
    : "Casas, departamentos y terrenos en venta en Puebla, Lomas de Angelópolis, San Andrés Cholula y toda la zona metropolitana.";

  return (
    <>
      <Head>
        <title>{tituloSEO}</title>
        <meta name="description" content={descSEO} />
        <meta name="keywords" content={operacion === "rental" ? "departamentos en renta puebla, casas en renta puebla, renta cholula, renta lomas angelópolis" : "casas en venta puebla, departamentos en venta puebla, terrenos puebla, venta inmuebles cholula"} />
        <meta property="og:title" content={tituloSEO} />
        <meta property="og:description" content={descSEO} />
        <meta property="og:url" content={`https://www.emporioinmobiliario.com.mx/propiedades?operacion=${operacion}`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/propiedades" />
      </Head>
      <div style={{ minHeight: "100vh", background: "#fafafa", fontFamily: "'Montserrat', 'system-ui', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          * { box-sizing: border-box; }
          .prop-card { display: flex; flex-direction: row; }
          .prop-img  { width: 280px; min-width: 280px; height: 200px; }
          .prop-body { padding: 20px 28px; }
          .filtros   { display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-end; }
          @media (max-width: 640px) {
            .prop-card { flex-direction: column !important; }
            .prop-img  { width: 100% !important; min-width: unset !important; height: 200px !important; }
            .prop-body { padding: 16px 16px 20px !important; }
            .filtros   { gap: 8px; }
            .toggle-btns { width: 100%; }
            .toggle-btn  { flex: 1; text-align: center; }
          }
        `}} />

        <Navbar />

        <div style={{ background: "#1a1a2e", padding: "40px 32px 32px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 8px" }}>Catálogo</p>
            <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 900, color: "#fff" }}>
              {operacion === "rental" ? "🏠 Propiedades en Renta" : "🏡 Propiedades en Venta"}
            </h1>
            <p style={{ margin: "0 0 24px", fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{totalProps} propiedades encontradas en Puebla</p>
            <div className="toggle-btns" style={{ display: "flex", gap: 8 }}>
              {[{ label: "🏠 Renta", value: "rental" }, { label: "🏡 Venta", value: "sale" }].map(op => (
                <button key={op.value} className="toggle-btn" onClick={() => handleOperacion(op.value)} style={{
                  padding: "9px 28px", borderRadius: 8, cursor: "pointer",
                  fontWeight: 700, fontSize: 14, fontFamily: "'Montserrat', sans-serif",
                  border: "2px solid",
                  borderColor: operacion === op.value ? "#C8102E" : "rgba(255,255,255,0.2)",
                  background: operacion === op.value ? "#C8102E" : "transparent",
                  color: "#fff",
                }}>
                  {op.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px" }}>

          <div className="filtros" style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0" }}>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Tipo</label>
              <select value={tipo} onChange={e => { setTipo(e.target.value); setPage(1); }} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff", fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                <option value="">Todos</option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Local comercial">Local comercial</option>
                <option value="Oficina">Oficina</option>
                <option value="Edificio">Edificio</option>
                <option value="Bodega">Bodega</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Precio mín</label>
              <input type="number" placeholder="$0" value={precioMin} onChange={e => { setPrecioMin(e.target.value); setPage(1); }} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, width: 110, fontFamily: "'Montserrat', sans-serif" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Precio máx</label>
              <input type="number" placeholder="Sin límite" value={precioMax} onChange={e => { setPrecioMax(e.target.value); setPage(1); }} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, width: 130, fontFamily: "'Montserrat', sans-serif" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Recámaras</label>
              <select value={recamaras} onChange={e => { setRecamaras(e.target.value); setPage(1); }} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff", fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                <option value="">Cualquiera</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Ordenar por</label>
              <select value={orden} onChange={e => setOrden(e.target.value)} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff", fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                <option value="">Relevancia</option>
                <option value="precio_asc">Precio: menor a mayor</option>
                <option value="precio_desc">Precio: mayor a menor</option>
                <option value="reciente">Más recientes</option>
                <option value="antiguo">Más antiguos</option>
              </select>
            </div>
            {(tipo || precioMin || precioMax || recamaras || orden) && (
              <button onClick={handleLimpiar} style={{ padding: "10px 16px", background: "#f3f4f6", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 13, color: "#6b7280", fontFamily: "'Montserrat', sans-serif" }}>
                ✕ Limpiar
              </button>
            )}
          </div>

          {propiedadesPagina.length === 0 && (
            <div style={{ background: "#fff", borderRadius: 16, padding: 60, textAlign: "center", border: "1px solid #f0f0f0" }}>
              <p style={{ fontSize: 48, margin: "0 0 12px" }}>🔍</p>
              <p style={{ color: "#6b7280", fontSize: 16, fontWeight: 500 }}>No encontramos propiedades con esos filtros</p>
              <button onClick={handleLimpiar} style={{ marginTop: 16, padding: "10px 24px", background: "#C8102E", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                Ver todas las propiedades
              </button>
            </div>
          )}

          {propiedadesPagina.map(p => {
            const imgUrl = Array.isArray(p.fotos) && p.fotos[0]?.url;
            const esVenta = p.operacion === "sale";
            return (
              <a key={p.public_id} href={`/propiedades/${generarSlug(p)}`} style={{ textDecoration: "none" }}>
                <div className="prop-card" style={{ background: "#fff", borderRadius: 20, overflow: "hidden", marginBottom: 16, border: "1px solid #f0f0f0", cursor: "pointer" }}>
                  <div className="prop-img" style={{ overflow: "hidden", flexShrink: 0, background: "#f3f4f6", position: "relative" }}>
                    {imgUrl
                      ? <img src={imgUrl} alt={p.titulo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>🏠</div>
                    }
                    <div style={{ position: "absolute", top: 10, left: 10 }}>
                      <span style={{ display: "inline-block", background: esVenta ? "#1a1a2e" : "#C8102E", color: "#fff", padding: "4px 12px", borderRadius: 99, fontSize: 11, fontWeight: 800, letterSpacing: "0.06em" }}>
                        {esVenta ? "EN VENTA" : "EN RENTA"}
                      </span>
                    </div>
                    {p.es_exclusiva && (
                      <div style={{ position: "absolute", top: 10, right: 10 }}>
                        <span style={{ display: "inline-block", background: "#fff", color: "#1a1a2e", padding: "4px 12px", borderRadius: 99, fontSize: 11, fontWeight: 800, letterSpacing: "0.06em" }}>
                          ⭐ EXCLUSIVA
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="prop-body" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a1a2e", lineHeight: 1.3, maxWidth: "65%" }}>{p.titulo}</h2>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ margin: 0, fontSize: 22, fontWeight: 900, color: "#C8102E" }}>{fmt(p.precio)}</p>
                          <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>{p.moneda || "MXN"} {esVenta ? "total" : "/ mes"}</p>
                        </div>
                      </div>
                      <p style={{ margin: "0 0 14px", fontSize: 13, color: "#6b7280" }}>📍 {[p.colonia, p.ciudad].filter(Boolean).join(", ")}</p>
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
                        {p.tipo && <span style={{ fontSize: 12, background: "#f3f4f6", color: "#374151", padding: "4px 12px", borderRadius: 99, fontWeight: 600 }}>{p.tipo}</span>}
                        {p.recamaras > 0 && <span style={{ fontSize: 13, color: "#374151" }}>🛏 {p.recamaras}</span>}
                        {p.banos > 0 && <span style={{ fontSize: 13, color: "#374151" }}>🚿 {p.banos}</span>}
                        {p.estacionamientos > 0 && <span style={{ fontSize: 13, color: "#374151" }}>🚗 {p.estacionamientos}</span>}
                        {p.m2_construccion > 0 && <span style={{ fontSize: 13, color: "#374151" }}>📐 {p.m2_construccion} m²</span>}
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#C8102E" }}>Ver detalle →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}

          {totalProps > PAGE_SIZE && (
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32, marginBottom: 16 }}>
              {page > 1 && (
                <button onClick={() => handlePage(page - 1)} style={{ padding: "10px 24px", background: "#fff", border: "1.5px solid #e5e7eb", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                  ← Anterior
                </button>
              )}
              <span style={{ padding: "10px 24px", background: "#C8102E", color: "#fff", borderRadius: 10, fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                Página {page} de {totalPages}
              </span>
              {page < totalPages && (
                <button onClick={() => handlePage(page + 1)} style={{ padding: "10px 24px", background: "#fff", border: "1.5px solid #e5e7eb", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                  Siguiente →
                </button>
              )}
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

export async function getServerSideProps() {
  try {
    const { data, error } = await supabasePublic
      .from("propiedades")
      .select("*")
      .in("status", ["published", "reserved"])
      .order("created_at", { ascending: false });

    if (error) return { props: { propiedadesIniciales: [] } };
    return { props: { propiedadesIniciales: data || [] } };
  } catch (e) {
    return { props: { propiedadesIniciales: [] } };
  }
}
