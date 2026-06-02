import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fmt = (n) => new Intl.NumberFormat("es-MX", {
  style: "currency", currency: "MXN", minimumFractionDigits: 0
}).format(n || 0);

export default function Propiedades() {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [iniciado, setIniciado] = useState(false);
  const [page, setPage] = useState(1);
  const [operacion, setOperacion] = useState("rental");
  const [tipo, setTipo] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [recamaras, setRecamaras] = useState("");
  const [orden, setOrden] = useState(""); // "" | "precio_asc" | "precio_desc" | "reciente" | "antiguo"

  const fetchProperties = async (params = {}) => {
    setLoading(true);
    try {
      const p = {
        page: params.page ?? page,
        operacion: params.operacion ?? operacion,
        tipo: params.tipo ?? tipo,
        precioMin: params.precioMin ?? precioMin,
        precioMax: params.precioMax ?? precioMax,
        recamaras: params.recamaras ?? recamaras,
        orden: params.orden ?? orden,
      };
      const query = new URLSearchParams();
      query.append("page", p.page);
      query.append("operacion", p.operacion);
      if (p.tipo) query.append("tipo", p.tipo);
      if (p.precioMin) query.append("precioMin", p.precioMin);
      if (p.precioMax) query.append("precioMax", p.precioMax);
      if (p.recamaras) query.append("recamaras", p.recamaras);
      if (p.orden) query.append("orden", p.orden);

      const res = await fetch(`/api/propiedades-eb?${query.toString()}`);
      const data = await res.json();
      let props = data.content || [];
      if (p.orden === "precio_asc")  props = [...props].sort((a, b) => (a.operations?.[0]?.amount || 0) - (b.operations?.[0]?.amount || 0));
      if (p.orden === "precio_desc") props = [...props].sort((a, b) => (b.operations?.[0]?.amount || 0) - (a.operations?.[0]?.amount || 0));
      if (p.orden === "reciente")    props = [...props].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      if (p.orden === "antiguo")     props = [...props].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      setProperties(props);
      setPagination(data.pagination || {});
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  // Leer query params de la URL al cargar — fix para catálogos compartidos
  useEffect(() => {
    if (!router.isReady || iniciado) return;
    const opParam = router.query.operacion;
    // Mapear "venta"/"sale"/"renta"/"rental" al valor correcto para la API
    let opInicial = "rental";
    if (opParam === "sale" || opParam === "venta") opInicial = "sale";
    else if (opParam === "rental" || opParam === "renta") opInicial = "rental";
    setOperacion(opInicial);
    setIniciado(true);
    fetchProperties({ operacion: opInicial, page: 1 });
  }, [router.isReady]);

  const handleOperacion = (op) => {
    setOperacion(op);
    setPage(1);
    // Actualizar URL sin recargar
    router.replace({ pathname: '/propiedades', query: { operacion: op } }, undefined, { shallow: true });
    fetchProperties({ operacion: op, page: 1 });
  };
  const handleFiltros = () => { setPage(1); fetchProperties({ page: 1 }); };
  const handleOrden = (o) => { setOrden(o); setPage(1); fetchProperties({ orden: o, page: 1 }); };
  const handleLimpiar = () => {
    setTipo(""); setPrecioMin(""); setPrecioMax(""); setRecamaras(""); setOrden(""); setPage(1);
    fetchProperties({ tipo: "", precioMin: "", precioMax: "", recamaras: "", orden: "", page: 1 });
  };
  const handlePage = (p) => { setPage(p); fetchProperties({ page: p }); window.scrollTo(0, 0); };

  const tituloSEO = operacion === "rental"
    ? "Propiedades en Renta en Puebla — Emporio Inmobiliario"
    : "Propiedades en Venta en Puebla — Emporio Inmobiliario";

  const descSEO = operacion === "rental"
    ? "Encuentra departamentos, casas y locales en renta en Puebla, Cholula, Lomas de Angelópolis y zona metropolitana. Más de 30 opciones activas con Emporio Inmobiliario."
    : "Casas, departamentos y terrenos en venta en Puebla. Más de 45 propiedades activas en Lomas de Angelópolis, San Andrés Cholula, Cuautlancingo y toda la zona metropolitana.";

  return (
    <>
      <Head>
        <title>{tituloSEO}</title>
        <meta name="description" content={descSEO} />
        <meta name="keywords" content={operacion === "rental" ? "departamentos en renta puebla, casas en renta puebla, renta cholula, renta lomas angelópolis, renta cuautlancingo" : "casas en venta puebla, departamentos en venta puebla, terrenos puebla, venta inmuebles cholula, propiedades lomas angelópolis"} />
        <meta property="og:title" content={tituloSEO} />
        <meta property="og:description" content={descSEO} />
        <meta property="og:url" content={`https://www.emporioinmobiliario.com.mx/propiedades?operacion=${operacion}`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.emporioinmobiliario.com.mx/propiedades`} />
      </Head>
      <div style={{ minHeight: "100vh", background: "#fafafa", fontFamily: "'Montserrat', 'system-ui', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          * { box-sizing: border-box; }
          .prop-card { display: flex; flex-direction: row; }
          .prop-img  { width: 280px; min-width: 280px; height: 200px; }
          .prop-body { padding: 20px 28px; }
          .filtros   { display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-end; }
          .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
          @media (max-width: 640px) {
            .prop-card { flex-direction: column !important; }
            .prop-img  { width: 100% !important; min-width: unset !important; height: 200px !important; }
            .prop-body { padding: 16px 16px 20px !important; }
            .filtros   { gap: 8px; }
            .filtros select, .filtros input { font-size: 13px !important; padding: 8px 10px !important; }
            .header-row { flex-direction: column; align-items: flex-start; gap: 8px; }
            .toggle-btns { width: 100%; }
            .toggle-btn  { flex: 1; text-align: center; }
          }
        `}} />

        <Navbar />

        {/* Header */}
        <div style={{ background: "#1a1a2e", padding: "40px 32px 32px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 8px" }}>Catálogo</p>
            <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 900, color: "#fff" }}>
              {operacion === "rental" ? "🏠 Propiedades en Renta" : "🏡 Propiedades en Venta"}
            </h1>
            {pagination.total ? (
              <p style={{ margin: "0 0 24px", fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{pagination.total} propiedades encontradas en Puebla</p>
            ) : <div style={{ marginBottom: 24 }} />}
            <div className="toggle-btns" style={{ display: "flex", gap: 8 }}>
              {[{ label: "🏠 Renta", value: "rental" }, { label: "🏡 Venta", value: "sale" }].map(op => (
                <button key={op.value} className="toggle-btn" onClick={() => handleOperacion(op.value)} style={{
                  padding: "9px 28px", borderRadius: 8, cursor: "pointer",
                  fontWeight: 700, fontSize: 14, fontFamily: "'Montserrat', sans-serif",
                  border: "2px solid",
                  borderColor: operacion === op.value ? "#C8102E" : "rgba(255,255,255,0.2)",
                  background: operacion === op.value ? "#C8102E" : "transparent",
                  color: "#fff",
                  transition: "all 0.15s",
                }}>
                  {op.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px" }}>

          {/* Filtros */}
          <div className="filtros" style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0" }}>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Tipo</label>
              <select value={tipo} onChange={e => setTipo(e.target.value)} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff", fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                <option value="">Todos</option>
                <option value="Departamento">Departamento</option>
                <option value="Casa">Casa</option>
                <option value="Casa en condominio">Casa en condominio</option>
                <option value="Local comercial">Local comercial</option>
                <option value="Oficina">Oficina</option>
                <option value="Terreno">Terreno</option>
                <option value="Bodega">Bodega</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Precio mín</label>
              <input type="number" placeholder="$0" value={precioMin} onChange={e => setPrecioMin(e.target.value)} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, width: 110, fontFamily: "'Montserrat', sans-serif" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Precio máx</label>
              <input type="number" placeholder="Sin límite" value={precioMax} onChange={e => setPrecioMax(e.target.value)} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, width: 130, fontFamily: "'Montserrat', sans-serif" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Recámaras</label>
              <select value={recamaras} onChange={e => setRecamaras(e.target.value)} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff", fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                <option value="">Cualquiera</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#9ca3af", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Ordenar por</label>
              <select value={orden} onChange={e => handleOrden(e.target.value)} style={{ padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff", fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                <option value="">Relevancia</option>
                <option value="precio_asc">Precio: menor a mayor</option>
                <option value="precio_desc">Precio: mayor a menor</option>
                <option value="reciente">Más recientes</option>
                <option value="antiguo">Más antiguos</option>
              </select>
            </div>
            <button onClick={handleFiltros} style={{ padding: "10px 24px", background: "#C8102E", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14, fontFamily: "'Montserrat', sans-serif" }}>
              🔍 Buscar
            </button>
            {(tipo || precioMin || precioMax || recamaras || orden) && (
              <button onClick={handleLimpiar} style={{ padding: "10px 16px", background: "#f3f4f6", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 13, color: "#6b7280", fontFamily: "'Montserrat', sans-serif" }}>
                ✕ Limpiar
              </button>
            )}
          </div>

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: "center", padding: 80 }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🏠</div>
              <p style={{ color: "#9ca3af", fontSize: 16, fontWeight: 500 }}>Cargando propiedades...</p>
            </div>
          )}

          {/* Sin resultados */}
          {!loading && properties.length === 0 && (
            <div style={{ background: "#fff", borderRadius: 16, padding: 60, textAlign: "center", border: "1px solid #f0f0f0" }}>
              <p style={{ fontSize: 48, margin: "0 0 12px" }}>🔍</p>
              <p style={{ color: "#6b7280", fontSize: 16, fontWeight: 500 }}>No encontramos propiedades con esos filtros</p>
              <button onClick={handleLimpiar} style={{ marginTop: 16, padding: "10px 24px", background: "#C8102E", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                Ver todas las propiedades
              </button>
            </div>
          )}

          {/* Lista */}
          {!loading && properties.map(p => {
            const op = p.operations?.[0];
            const precio = op?.amount || 0;
            const imgUrl = p.title_image_thumb || p.title_image_full;
            const agente = p.agent?.name || p.user?.name || null;
            const agenteInicial = agente ? agente.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase() : null;
            const tipoOp = op?.type === "sale" ? "EN VENTA" : "EN RENTA";
            const esVenta = op?.type === "sale";

            return (
              <a key={p.public_id} href={`/propiedades/${p.public_id}`} style={{ textDecoration: "none" }}>
                <div
                  className="prop-card"
                  style={{ background: "#fff", borderRadius: 20, overflow: "hidden", marginBottom: 16, border: "1px solid #f0f0f0", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div className="prop-img" style={{ overflow: "hidden", flexShrink: 0, background: "#f3f4f6", position: "relative" }}>
                    {imgUrl
                      ? <img src={imgUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>🏠</div>
                    }
                    <div style={{ position: "absolute", top: 10, left: 10 }}>
                      <span style={{ display: "inline-block", background: esVenta ? "#1a1a2e" : "#C8102E", color: "#fff", padding: "4px 12px", borderRadius: 99, fontSize: 11, fontWeight: 800, letterSpacing: "0.06em" }}>
                        {tipoOp}
                      </span>
                    </div>
                  </div>
                  <div className="prop-body" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a1a2e", lineHeight: 1.3, maxWidth: "65%" }}>{p.title}</h2>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ margin: 0, fontSize: 22, fontWeight: 900, color: "#C8102E" }}>{fmt(precio)}</p>
                          <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>{op?.currency} / {op?.unit === "total" ? "total" : "mes"}</p>
                        </div>
                      </div>
                      <p style={{ margin: "0 0 14px", fontSize: 13, color: "#6b7280" }}>📍 {typeof p.location === "string" ? p.location : ""}</p>
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
                        {p.property_type && <span style={{ fontSize: 12, background: "#f3f4f6", color: "#374151", padding: "4px 12px", borderRadius: 99, fontWeight: 600 }}>{p.property_type}</span>}
                        {p.bedrooms > 0 && <span style={{ fontSize: 13, color: "#374151" }}>🛏 {p.bedrooms}</span>}
                        {p.bathrooms > 0 && <span style={{ fontSize: 13, color: "#374151" }}>🚿 {p.bathrooms}</span>}
                        {p.parking_spaces > 0 && <span style={{ fontSize: 13, color: "#374151" }}>🚗 {p.parking_spaces}</span>}
                        {p.construction_size > 0 && <span style={{ fontSize: 13, color: "#374151" }}>📐 {p.construction_size} m²</span>}
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {agente ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#C8102E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800 }}>
                              {agenteInicial}
                            </div>
                            <span style={{ fontSize: 12, color: "#6b7280", fontWeight: 600 }}>{agente}</span>
                          </div>
                        ) : (
                          <span style={{ fontSize: 11, color: "#9ca3af" }}>ID: {p.public_id}</span>
                        )}
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#C8102E" }}>Ver detalle →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}

          {/* Paginación */}
          {pagination.total > 10 && (
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32, marginBottom: 16 }}>
              {page > 1 && (
                <button onClick={() => handlePage(page - 1)} style={{ padding: "10px 24px", background: "#fff", border: "1.5px solid #e5e7eb", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontFamily: "'Montserrat', sans-serif", color: "#374151" }}>
                  ← Anterior
                </button>
              )}
              <span style={{ padding: "10px 24px", background: "#C8102E", color: "#fff", borderRadius: 10, fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}>
                Página {page} de {Math.ceil(pagination.total / 10)}
              </span>
              {pagination.next_page && (
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
