import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DISPONIBLES = [
  { id: "107", tipo: "Vida I", nivel: "N1", m2: 77.24, terraza: 2.86, total: 80.10, precio: 2768910, enganche20: 553782, eng10: 27689 },
  { id: "201", tipo: "Vida II", nivel: "N2", m2: 78.32, terraza: 2.66, total: 80.98, precio: 2773855, enganche20: 554771, eng10: 27739 },
  { id: "203", tipo: "Paz II", nivel: "N2", m2: 50.63, terraza: 3.20, total: 53.83, precio: 2155520, enganche20: 431104, eng10: 21555 },
  { id: "205", tipo: "Refugio", nivel: "N2", m2: 71.86, terraza: 2.11, total: 73.97, precio: 2720523, enganche20: 544105, eng10: 27205 },
  { id: "206", tipo: "Armonía", nivel: "N2", m2: 88.21, terraza: 5.46, total: 93.67, precio: 3284175, enganche20: 656835, eng10: 32842 },
  { id: "207", tipo: "Vida I", nivel: "N2", m2: 77.21, terraza: 2.86, total: 80.07, precio: 2762500, enganche20: 552500, eng10: 27625 },
  { id: "301", tipo: "Vida II", nivel: "N3", m2: 78.32, terraza: 2.66, total: 80.98, precio: 2793855, enganche20: 558771, eng10: 27939 },
  { id: "302", tipo: "Alma", nivel: "N3/N4", m2: 104.20, terraza: 2.97, total: 107.17, precio: 3683008, enganche20: 736602, eng10: 36830 },
  { id: "304", tipo: "Calma II", nivel: "N2/N3", m2: 106.19, terraza: 3.02, total: 109.21, precio: 3703505, enganche20: 740701, eng10: 37035 },
  { id: "305", tipo: "Refugio", nivel: "N3", m2: 71.86, terraza: 2.11, total: 73.97, precio: 2740523, enganche20: 548105, eng10: 27405 },
  { id: "306", tipo: "Armonía", nivel: "N3", m2: 88.21, terraza: 5.46, total: 93.67, precio: 3303860, enganche20: 660772, eng10: 33039 },
  { id: "307", tipo: "Vida I", nivel: "N3", m2: 77.69, terraza: 5.68, total: 83.37, precio: 2883390, enganche20: 576678, eng10: 28834 },
  { id: "403", tipo: "Calma II", nivel: "N3/N4", m2: 110.75, terraza: 3.42, total: 114.17, precio: 3855265, enganche20: 771053, eng10: 38553 },
  { id: "404", tipo: "Paz I", nivel: "N4", m2: 53.29, terraza: 9.66, total: 62.95, precio: 2469885, enganche20: 493977, eng10: 24699 },
  { id: "405", tipo: "Refugio", nivel: "N4", m2: 71.86, terraza: 2.11, total: 73.97, precio: 2763931, enganche20: 552786, eng10: 27639 },
  { id: "406", tipo: "Armonía", nivel: "N4", m2: 88.21, terraza: 5.46, total: 93.67, precio: 3308860, enganche20: 661772, eng10: 33089 },
  { id: "407", tipo: "Vida I", nivel: "N4", m2: 77.69, terraza: 5.68, total: 83.37, precio: 2904835, enganche20: 580967, eng10: 29048 },
  { id: "501", tipo: "Calma I", nivel: "N4/N5", m2: 119.05, terraza: 10.36, total: 129.41, precio: 4073200, enganche20: 814640, eng10: 40732 },
  { id: "503", tipo: "Paz II", nivel: "N5", m2: 53.80, terraza: 12.04, total: 65.84, precio: 2595510, enganche20: 519102, eng10: 25955 },
  { id: "504", tipo: "Paz I", nivel: "N5", m2: 48.88, terraza: 3.09, total: 51.97, precio: 2137900, enganche20: 427580, eng10: 21379 },
  { id: "505", tipo: "Refugio", nivel: "N5", m2: 71.96, terraza: 2.11, total: 74.07, precio: 2783931, enganche20: 556786, eng10: 27839 },
  { id: "506", tipo: "Armonía", nivel: "N5", m2: 88.21, terraza: 5.45, total: 93.66, precio: 3323860, enganche20: 664772, eng10: 33239 },
  { id: "507", tipo: "Vida I", nivel: "N5", m2: 77.59, terraza: 5.79, total: 83.38, precio: 2925130, enganche20: 585026, eng10: 29251 },
  { id: "602", tipo: "Alma", nivel: "N6/N7", m2: 107.02, terraza: 4.95, total: 111.97, precio: 3920733, enganche20: 784147, eng10: 39207 },
  { id: "603", tipo: "Paz II", nivel: "N6", m2: 50.63, terraza: 3.20, total: 53.83, precio: 2213510, enganche20: 442702, eng10: 22135 },
  { id: "605", tipo: "Refugio", nivel: "N6", m2: 71.86, terraza: 2.11, total: 73.97, precio: 2800523, enganche20: 560105, eng10: 28005 },
  { id: "606", tipo: "Armonía", nivel: "N6", m2: 88.21, terraza: 5.46, total: 93.67, precio: 3343860, enganche20: 668772, eng10: 33439 },
  { id: "607", tipo: "Vida I", nivel: "N6", m2: 77.69, terraza: 5.68, total: 83.37, precio: 2944835, enganche20: 588967, eng10: 29448 },
  { id: "701", tipo: "Calma I", nivel: "N6/N7", m2: 119.05, terraza: 10.36, total: 129.41, precio: 4074500, enganche20: 814900, eng10: 40745 },
  { id: "703", tipo: "Paz II", nivel: "N7", m2: 50.63, terraza: 3.20, total: 53.83, precio: 2228510, enganche20: 445702, eng10: 22285 },
  { id: "704", tipo: "Calma II", nivel: "N6/N7", m2: 103.96, terraza: 4.70, total: 108.66, precio: 3763070, enganche20: 752614, eng10: 37631 },
  { id: "705", tipo: "Refugio", nivel: "N7", m2: 71.86, terraza: 2.11, total: 73.97, precio: 2800523, enganche20: 560105, eng10: 28005 },
  { id: "706", tipo: "Armonía", nivel: "N7", m2: 88.21, terraza: 5.45, total: 93.66, precio: 3348860, enganche20: 669772, eng10: 33489 },
  { id: "707", tipo: "Vida I", nivel: "N7", m2: 77.59, terraza: 5.79, total: 83.38, precio: 2945130, enganche20: 589026, eng10: 29451 },
];

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n);

const AMENIDADES = [
  { icon: "🏊", name: "Alberca con carriles" },
  { icon: "💪", name: "Gimnasio equipado" },
  { icon: "🧘", name: "Sala de yoga" },
  { icon: "🎾", name: "Cancha de tenis" },
  { icon: "⚽", name: "Cancha de fútbol / voleibol" },
  { icon: "☕", name: "Área de asadores" },
  { icon: "🛗", name: "Elevadores" },
  { icon: "🌳", name: "Jardines y áreas verdes" },
];

const TIPOLOGIAS = [
  { nombre: "Paz I / Paz II", rec: "1 rec", m2: "48 – 54 m²", desde: "$2,056,025", desc: "Ideal para inversión o primera vivienda. Terraza privada incluida." },
  { nombre: "Refugio", rec: "1 rec", m2: "71 – 72 m²", desde: "$2,701,429", desc: "Amplia distribución de una recámara con terraza y espacios generosos." },
  { nombre: "Vida I / Vida II", rec: "2 rec", m2: "77 – 78 m²", desde: "$2,762,500", desc: "La tipología más demandada. 2 recámaras con terraza privada." },
  { nombre: "Calma I / Calma II", rec: "2 rec", m2: "106 – 119 m²", desde: "$3,703,505", desc: "Departamento de gran formato con amplia terraza. Ideal para familias." },
  { nombre: "Alma", rec: "2 rec", m2: "104 – 107 m²", desde: "$3,672,720", desc: "Tipología premium en doble altura. Pocos disponibles." },
  { nombre: "Armonía", rec: "2 rec", m2: "88 m²", desde: "$3,282,290", desc: "Gran terraza de 5 m². Perfecta para quienes disfrutan los espacios al aire libre." },
];

export default function TorreZaia() {
  return (
    <>
      <Head>
        <title>Torre Zaia — Departamentos en Preventa en Lomas de Angelópolis III, Puebla</title>
        <meta name="description" content="Torre Zaia: departamentos en preventa en Lomas de Angelópolis III, Puebla. 40 unidades desde $2,056,025. Entrega diciembre 2027. Enganche del 10% y mensualidades. Emporio Inmobiliario." />
        <meta name="keywords" content="torre zaia puebla, departamentos preventa lomas angelópolis, departamentos lomas angelópolis III, preventa puebla 2025, departamentos nuevos angelópolis" />
        <meta property="og:title" content="Torre Zaia — Departamentos en Preventa Lomas de Angelópolis III" />
        <meta property="og:description" content="40 departamentos en preventa desde $2,056,025. Enganche del 10%. Entrega diciembre 2027." />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/torre-zaia" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/torre-zaia" />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          * { box-sizing: border-box; }
          @media(max-width:768px){
            .hero-grid { grid-template-columns: 1fr !important; }
            .tip-grid { grid-template-columns: 1fr 1fr !important; }
            .am-grid { grid-template-columns: 1fr 1fr !important; }
            .tabla-row { grid-template-columns: repeat(3,1fr) !important; font-size: 12px !important; }
            .tabla-head { grid-template-columns: repeat(3,1fr) !important; font-size: 11px !important; }
            h1 { font-size: 32px !important; }
          }
          @media(max-width:480px){
            .tip-grid { grid-template-columns: 1fr !important; }
          }
        `}} />
        <Navbar />

        {/* HERO */}
        <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0d1525 100%)", position: "relative", overflow: "hidden", padding: "72px 32px 80px" }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,16,46,.2) 0%,transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,16,46,.08) 0%,transparent 70%)" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 48, alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,16,46,.2)", border: "1px solid rgba(200,16,46,.4)", padding: "6px 16px", borderRadius: 99, marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8102E", display: "inline-block" }} />
                  <span style={{ fontSize: 11, color: "#fca5a5", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>Preventa activa · Lomas de Angelópolis III</span>
                </div>
                <h1 style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1.05, margin: "0 0 8px", letterSpacing: "-.02em" }}>Torre <span style={{ color: "#C8102E" }}>Zaia</span></h1>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", margin: "0 0 20px", letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600 }}>Emporio Inmobiliario · Puebla</p>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,.7)", lineHeight: 1.8, margin: "0 0 36px" }}>
                  Torre residencial en la zona de mayor crecimiento de Puebla. Departamentos de 1 y 2 recámaras con terrazas privadas, acabados de primer nivel y ubicación estratégica en Lomas de Angelópolis III.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="https://wa.me/522222573237?text=Hola,%20me%20interesa%20información%20sobre%20Torre%20Zaia%20en%20Lomas%20de%20Angelópolis" target="_blank" rel="noreferrer"
                    style={{ background: "#C8102E", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                    💬 Quiero información
                  </a>
                  <a href="#disponibilidad" style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.85)", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,.2)" }}>
                    Ver disponibilidad →
                  </a>
                </div>
              </div>

              {/* Card datos clave */}
              <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: 32 }}>
                <p style={{ fontSize: 11, color: "#f59e0b", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", margin: "0 0 20px" }}>✦ Datos clave</p>
                {[
                  { label: "Precio desde", val: "$2,056,025" },
                  { label: "Enganche mínimo", val: "10% del precio" },
                  { label: "Mensualidades", val: "10 meses durante obra" },
                  { label: "Entrega", val: "Diciembre 2027" },
                  { label: "Tipologías", val: "1 y 2 recámaras" },
                  { label: "Ubicación", val: "Lomas de Angelópolis III" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{item.val}</span>
                  </div>
                ))}
                <div style={{ marginTop: 20, padding: "14px 16px", background: "rgba(200,16,46,.15)", border: "1px solid rgba(200,16,46,.3)", borderRadius: 10 }}>
                  <p style={{ fontSize: 12, color: "#fca5a5", fontWeight: 700, margin: "0 0 4px" }}>⚡ Unidades limitadas</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,.55)", margin: 0 }}>Algunas tipologías ya están vendidas. Consulta disponibilidad actualizada.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,.1)", borderRadius: 12, overflow: "hidden", marginTop: 48 }}>
              {[
                { val: "40", label: "Departamentos" },
                { val: "7", label: "Niveles" },
                { val: "50–129", label: "m² totales" },
                { val: "Dic 2027", label: "Entrega" },
              ].map((s, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.05)", padding: "18px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: "#f59e0b", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginTop: 4, textTransform: "uppercase", letterSpacing: ".5px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ESQUEMA DE PAGO */}
        <div style={{ padding: "64px 32px", background: "#fafafa" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Financiamiento</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Esquema de pago en preventa</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                { paso: "01", titulo: "Enganche 20%", desc: "Pago inicial al apartar tu departamento. Aseguras el precio de preventa desde el primer día.", color: "#C8102E" },
                { paso: "02", titulo: "10 mensualidades", desc: "Durante el período de construcción pagas mensualidades equivalentes al 10% restante del enganche.", color: "#1a1a2e" },
                { paso: "03", titulo: "70% a la entrega", desc: "El saldo restante se liquida al recibir las llaves. Puedes usar crédito hipotecario o contado.", color: "#C8102E" },
              ].map((p, i) => (
                <div key={i} style={{ background: p.color, borderRadius: 16, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", bottom: -20, right: -10, fontSize: 80, fontWeight: 900, color: "rgba(255,255,255,.08)", lineHeight: 1 }}>{p.paso}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,.6)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 12 }}>Paso {p.paso}</div>
                  <h3 style={{ fontSize: 22, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>{p.titulo}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.7)", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TIPOLOGÍAS */}
        <div style={{ padding: "64px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Modelos disponibles</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: 0 }}>Tipologías Torre Zaia</h2>
            </div>
            <div className="tip-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {TIPOLOGIAS.map((t, i) => (
                <div key={i} style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 14, padding: "24px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e", margin: 0 }}>{t.nombre}</h3>
                    <span style={{ fontSize: 10, fontWeight: 700, background: "#fff0f2", color: "#C8102E", padding: "3px 8px", borderRadius: 99 }}>{t.rec}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 6px" }}>📐 {t.m2}</p>
                  <p style={{ fontSize: 18, fontWeight: 900, color: "#C8102E", margin: "0 0 10px" }}>Desde {t.desde}</p>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AMENIDADES */}
        <div style={{ padding: "64px 32px", background: "#1a1a2e" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Amenidades</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: 0 }}>Todo lo que necesitas en un solo lugar.</h2>
            </div>
            <div className="am-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
              {AMENIDADES.map((a, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{a.icon}</div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.8)", margin: 0 }}>{a.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DISPONIBILIDAD */}
        <div id="disponibilidad" style={{ padding: "64px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 11, color: "#C8102E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px" }}>Lista de precios actualizada</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#1a1a2e", margin: "0 0 8px" }}>Disponibilidad Torre Zaia</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>Solo se muestran unidades disponibles. Consulta disponibilidad exacta por WhatsApp — algunas unidades se apartan rápido.</p>
            </div>

            <div style={{ border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,.06)", overflowX: "auto" }}>
              <div className="tabla-head" style={{ display: "grid", gridTemplateColumns: "80px 1fr 80px 80px 100px 120px 130px", background: "#C8102E", minWidth: 700 }}>
                {["Unidad", "Tipología", "Nivel", "m² Depto", "m² Total", "Precio", "Eng. 20%"].map((h, i) => (
                  <div key={i} style={{ padding: "12px 14px", fontSize: 11, fontWeight: 800, color: "#fff", borderLeft: i > 0 ? "1px solid rgba(255,255,255,.2)" : "none" }}>{h}</div>
                ))}
              </div>
              {DISPONIBLES.map((dep, i) => (
                <div key={i} className="tabla-row" style={{ display: "grid", gridTemplateColumns: "80px 1fr 80px 80px 100px 120px 130px", background: i % 2 === 0 ? "#fff" : "#fafafa", borderTop: "1px solid #f3f4f6", minWidth: 700 }}>
                  <div style={{ padding: "13px 14px", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{dep.id}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.tipo}</div>
                  <div style={{ padding: "13px 14px", fontSize: 12, color: "#6b7280", borderLeft: "1px solid #f3f4f6" }}>{dep.nivel}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.m2}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{dep.total}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, fontWeight: 800, color: "#C8102E", borderLeft: "1px solid #f3f4f6" }}>{fmt(dep.precio)}</div>
                  <div style={{ padding: "13px 14px", fontSize: 13, color: "#374151", borderLeft: "1px solid #f3f4f6" }}>{fmt(dep.enganche20)}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 12, fontStyle: "italic" }}>*Precios en MXN + IVA. Sujetos a cambio sin previo aviso. Entrega proyectada diciembre 2027.</p>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Torre%20Zaia%20en%20Lomas%20de%20Angelópolis" target="_blank" rel="noreferrer"
                style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                💬 Apartar mi departamento en Torre Zaia
              </a>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div style={{ padding: "64px 32px", background: "#C8102E", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>¿Listo para invertir en Torre Zaia?</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.85)", margin: "0 0 32px", lineHeight: 1.7 }}>Las unidades se están agotando. Habla con un asesor de Emporio Inmobiliario hoy y asegura tu precio de preventa.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20sobre%20Torre%20Zaia%20en%20Lomas%20de%20Angelópolis" target="_blank" rel="noreferrer"
                style={{ background: "#fff", color: "#C8102E", padding: "14px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
                💬 Hablar por WhatsApp
              </a>
              <a href="tel:+522222573237" style={{ background: "rgba(255,255,255,.15)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,.3)" }}>
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
