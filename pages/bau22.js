import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeyendaProfeco from "../components/LeyendaProfeco";

const CDN = "https://res.cloudinary.com/djq3wl79q/image/upload";

const IMGS = {
  fachada_dia: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896677/fachada_dia_csan8h.jpg`,
  fachada_noche: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896677/fachada_noche_znady9.jpg`,
  fachada_aerea: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896677/fachada_aerea_ctx8tt.jpg`,
  charlie_cocina: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896676/charlie_cocina_zndc7w.jpg`,
  charlie_recamara: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896676/charlie_recamara_kgozbr.jpg`,
  charlie_plano: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896676/charlie_plano_puj8lt.jpg`,
  miles_sala: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896679/miles_sala_tlnr62.jpg`,
  miles_recamara: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/miles_recamara_igqpvs.jpg`,
  miles_plano1: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/miles_plano1_iv1rxc.jpg`,
  miles_plano2: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/miles_plano2_jygxwy.jpg`,
  kai_plano: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/kai_plano_e0k5dt.jpg`,
  kai_recamara: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/kai_recamara_zahfhv.jpg`,
  kai_cocina: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/kai_cocina_od5awk.jpg`,
  indigo_recamara: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/indigo_recamara_bduvxz.jpg`,
  indigo_cocina: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/indigo_cocina_butlil.jpg`,
  indigo_plano: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/indigo_plano_wj8xu0.jpg`,
  chef_arco: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/chef_arco_l0d5uw.jpg`,
  chef_barra1: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/chef_barra1_vk9gi2.jpg`,
  chef_barra2: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/chef_barra2_fvowrt.jpg`,
  chef_terraza: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/chef_terraza_ifd01y.jpg`,
  cava_principal: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/cava_principal_hiija8.jpg`,
  cava_barra: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/cava_barra_muteai.jpg`,
  coffee_principal: `https://res.cloudinary.com/djq3wl79q/image/upload/v1781896678/coffee_principal_sqfye3.jpg`,
};

const WA = "https://wa.me/522222573237?text=Hola,%20me%20interesa%20información%20sobre%20Bau22";

const fmt = (n) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 0 }).format(n);

const DISPONIBLES = [
  { depto: "103", modelo: "Miles", m2: 101,    precio: 3608849 },
  { depto: "209", modelo: "Kai",   m2: 65,     precio: 2595120 },
  { depto: "602", modelo: "Charlie", m2: 74.94, precio: 2941440 },
  { depto: "608", modelo: "Charlie", m2: 74.94, precio: 2951440 },
  { depto: "703", modelo: "Miles", m2: 100.95, precio: 4120000 },
  { depto: "704", modelo: "Miles", m2: 91.95,  precio: 3527150 },
];

const PROTOTIPOS = [
  {
    nombre: "Charlie",
    m2: 76, m2auto: 12.5,
    recamaras: 2, banos: 2, plantas: 1, balcon: true,
    desc: "Charlie siempre nos enamora, porque es perfecto para dos personas. Su distribución hace que cualquiera se sienta en casa gracias a la luz natural que lo caracteriza y su ventilación para mantener un hogar fluido.",
    acabados: "Cocina integral de granito San Gabriel, carpintería con acabado en MDF y pisos Sereni en áreas comunes y Piamont en recámaras y baño.",
    fotos: [
      { src: IMGS.charlie_cocina, label: "Cocina — Sala / comedor" },
      { src: IMGS.charlie_recamara, label: "Recámara principal" },
    ],
    plano: IMGS.charlie_plano,
  },
  {
    nombre: "Miles",
    m2: 91, m2auto: 12.5,
    recamaras: 2, banos: 2.5, plantas: 2, balcon: true,
    desc: "Miles nos ha robado el corazón. Con doble altura, es el prototipo más completo de Bau22 y está listo para recibir a toda la familia y amigos. La recámara del piso de arriba puede adaptarse a tus necesidades: estudio de trabajo o vestidor, por ejemplo.",
    acabados: "Cocina integral de granito San Gabriel, carpintería con acabado en MDF tipo parota y pisos Sereni en áreas comunes y Piamont en recámaras y baño.",
    fotos: [
      { src: IMGS.miles_sala, label: "Sala — doble altura" },
      { src: IMGS.miles_recamara, label: "Recámara — planta alta" },
    ],
    plano: IMGS.miles_plano1,
    plano2: IMGS.miles_plano2,
  },
  {
    nombre: "Kai",
    m2: 68, m2auto: 12.5,
    recamaras: 2, banos: 2, plantas: 1, balcon: false,
    desc: "Kai es tu primer depa: 68 metros cuadrados y 2 recámaras con 2 baños completos. Tiene todo lo necesario para emprender un nuevo camino, independiente.",
    acabados: "Cocina integral de granito negro San Gabriel, carpintería con acabado en MDF y pisos de la marca Cesantoni.",
    fotos: [
      { src: IMGS.kai_recamara, label: "Recámara principal" },
      { src: IMGS.kai_cocina, label: "Cocina — Sala / comedor" },
    ],
    plano: IMGS.kai_plano,
  },
  {
    nombre: "Indigo",
    m2: 76, m2auto: 12.1,
    recamaras: 3, banos: 2, plantas: 1, balcon: false,
    desc: "Indigo está especialmente diseñado para familias que disfrutan los nuevos retos. Su distribución permite tener a toda la familia contenta en 76 metros cuadrados, con 3 recámaras y 2 baños completos.",
    acabados: "Granito negro San Gabriel en cocina, carpintería en MDF con tonos nogales sofisticados y pisos marca Cesantoni.",
    fotos: [
      { src: IMGS.indigo_recamara, label: "Recámara principal" },
      { src: IMGS.indigo_cocina, label: "Cocina — Sala / comedor" },
    ],
    plano: IMGS.indigo_plano,
  },
];

const AMENIDADES = [
  "Salón del Chef", "Sky Lounge", "Barra de Mixología", "Cava",
  "Zona Asadores en Casa Club", "Salón de Eventos", "Fire pit", "Karaoke",
  "Huerto", "Mesa Ping Pong", "Cross Fit", "Fitness Area", "Gimnasio",
  "Pet area", "Pet washing station", "Recepción Paquetería",
  "Bodega utilería", "Aparcabicicletas", "Coffee room / Coworking",
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Bau22 — Departamentos de entrega inmediata en Lomas de Angelópolis, Puebla",
  "description": "Bau22, un proyecto de Valor City: departamentos de entrega inmediata en Lomas de Angelópolis, Puebla. 4 prototipos desde $2,595,120 MXN. Roof garden con Salón del Chef, Cava y Coffee room. Comercializado por Emporio Inmobiliario.",
  "url": "https://www.emporioinmobiliario.com.mx/bau22",
  "image": IMGS.fachada_dia,
  "datePosted": "2026-01-01",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MXN",
    "price": "2595120",
    "availability": "https://schema.org/InStock"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Parque Volcanes, Lomas 3",
    "addressLocality": "San Andrés Cholula",
    "addressRegion": "Puebla",
    "postalCode": "72810",
    "addressCountry": "MX"
  },
  "numberOfRooms": "2-3",
  "floorSize": {
    "@type": "QuantitativeValue",
    "minValue": "65",
    "maxValue": "101",
    "unitCode": "MTK"
  },
  "amenityFeature": AMENIDADES.map(a => ({ "@type": "LocationFeatureSpecification", "name": a, "value": true })),
  "seller": {
    "@type": "RealEstateAgent",
    "name": "Emporio Inmobiliario",
    "url": "https://www.emporioinmobiliario.com.mx",
    "telephone": "+522222573237",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5to Retorno de Osa Menor 2A, Reserva Territorial Atlixcayotl",
      "addressLocality": "San Andrés Cholula",
      "addressRegion": "Puebla",
      "addressCountry": "MX"
    }
  }
};
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  if (index === null) return null;
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.93)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <button onClick={onClose} style={{ position:"absolute", top:20, right:24, background:"rgba(255,255,255,.12)", border:"none", color:"#fff", fontSize:22, width:44, height:44, borderRadius:"50%", cursor:"pointer" }}>✕</button>
      <div style={{ position:"absolute", top:24, left:"50%", transform:"translateX(-50%)", background:"rgba(255,255,255,.12)", color:"#fff", padding:"4px 16px", borderRadius:99, fontSize:13, fontWeight:600 }}>
        {items[index].label} — {index + 1} / {items.length}
      </div>
      <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{ position:"absolute", left:20, background:"rgba(255,255,255,.15)", border:"none", color:"#fff", fontSize:28, width:52, height:52, borderRadius:"50%", cursor:"pointer" }}>‹</button>
      <img src={items[index].src} alt={items[index].label} onClick={e => e.stopPropagation()} style={{ maxWidth:"85vw", maxHeight:"85vh", objectFit:"contain", borderRadius:8 }} />
      <button onClick={e => { e.stopPropagation(); onNext(); }} style={{ position:"absolute", right:20, background:"rgba(255,255,255,.15)", border:"none", color:"#fff", fontSize:28, width:52, height:52, borderRadius:"50%", cursor:"pointer" }}>›</button>
    </div>
  );
}

function GaleriaGrid({ items }) {
  const [lb, setLb] = useState(null);
  const prev = () => setLb(i => (i - 1 + items.length) % items.length);
  const next = () => setLb(i => (i + 1) % items.length);
  return (
    <>
      <Lightbox items={items} index={lb} onClose={() => setLb(null)} onPrev={prev} onNext={next} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:12 }}>
        {items.map((img, i) => (
          <div key={i} onClick={() => setLb(i)} style={{ borderRadius:12, overflow:"hidden", aspectRatio:"4/3", cursor:"zoom-in", position:"relative", background:"#f3f4f6" }}>
            <img src={img.src} alt={img.label} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform .3s" }}
              onMouseOver={e => e.target.style.transform="scale(1.04)"}
              onMouseOut={e => e.target.style.transform="scale(1)"} />
            <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(transparent,rgba(0,0,0,.5))", padding:"20px 12px 10px" }}>
              <span style={{ fontSize:12, color:"#fff", fontWeight:600 }}>{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Bau22() {
  return (
    <>
      <Head>
        <title>Bau22 — Departamentos de Entrega Inmediata en Lomas de Angelópolis, Puebla</title>
        <meta name="description" content="Bau22, un proyecto de Valor City: departamentos de entrega inmediata en Lomas de Angelópolis, Puebla. 4 prototipos desde $2,595,120 MXN. Roof garden con Salón del Chef, Cava y Coffee room. Comercializado por Emporio Inmobiliario." />
        <meta name="keywords" content="bau22 puebla, departamentos entrega inmediata lomas angelópolis, valor city puebla, departamentos lomas de angelópolis, depas nuevos puebla, bau22 valor city" />
        <meta property="og:title" content="Bau22 — Entrega Inmediata en Lomas de Angelópolis | Emporio Inmobiliario" />
        <meta property="og:description" content="4 prototipos desde $2,595,120 MXN. Entrega inmediata. Roof garden con Salón del Chef, Cava y Coffee room en Lomas de Angelópolis, Puebla." />
        <meta property="og:image" content={IMGS.fachada_dia} />
        <meta property="og:url" content="https://www.emporioinmobiliario.com.mx/bau22" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/bau22" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </Head>

      <div style={{ fontFamily:"'Montserrat', sans-serif", background:"#fff" }}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html:`
          * { box-sizing:border-box; }
          @media(max-width:768px){
            .hero-grid{grid-template-columns:1fr!important;}
            .stats-grid{grid-template-columns:repeat(2,1fr)!important;}
            .two-col{grid-template-columns:1fr!important;}
            .proto-grid{grid-template-columns:1fr!important;}
            .units-grid{grid-template-columns:1fr!important;}
            .amen-grid{grid-template-columns:repeat(2,1fr)!important;}
            h1{font-size:38px!important;}
          }
        `}} />
        <Navbar />

        {/* HERO */}
        <div style={{ position:"relative", minHeight:"92vh", display:"flex", alignItems:"flex-end", overflow:"hidden", background:"#0d0d0d" }}>
          <img src={IMGS.fachada_noche} alt="Bau22 fachada — Lomas de Angelópolis, Puebla"
            style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(10,10,10,.95) 0%, rgba(10,10,10,.55) 55%, rgba(10,10,10,.15) 100%)" }} />

          <div style={{ position:"relative", zIndex:1, width:"100%", maxWidth:1100, margin:"0 auto", padding:"0 32px 72px" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(200,16,46,.18)", border:"1px solid rgba(200,16,46,.5)", padding:"6px 16px", borderRadius:99, marginBottom:20 }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#C8102E", display:"inline-block" }} />
              <span style={{ fontSize:11, color:"#fca5a5", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase" }}>Entrega inmediata · Lomas de Angelópolis</span>
            </div>

            <h1 style={{ fontSize:60, fontWeight:900, color:"#fff", lineHeight:1.0, margin:"0 0 8px", letterSpacing:"-.02em" }}>Bau<span style={{ color:"#C8102E" }}>22</span></h1>
            <p style={{ fontSize:14, color:"rgba(255,255,255,.5)", margin:"0 0 20px", letterSpacing:".15em", textTransform:"uppercase", fontWeight:600 }}>Un proyecto de Valor City · Puebla</p>
            <p style={{ fontSize:17, color:"rgba(255,255,255,.75)", lineHeight:1.8, margin:"0 0 16px", maxWidth:560 }}>
              Múdate ya. Departamentos de entrega inmediata en Lomas de Angelópolis, con roof garden, Salón del Chef, Cava y más de 18 amenidades.
            </p>
            <p style={{ fontSize:22, fontWeight:900, color:"#f59e0b", margin:"0 0 32px" }}>Desde $2,595,120 · 6 unidades disponibles</p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <a href={WA} target="_blank" rel="noreferrer"
                style={{ background:"#C8102E", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                💬 Quiero información
              </a>
              <a href="#disponibilidad" style={{ background:"rgba(255,255,255,.12)", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:700, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,.25)" }}>
                Ver disponibilidad →
              </a>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div style={{ background:"#1a1a2e" }}>
          <div className="stats-grid" style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
            {[
              { val:"4", label:"Prototipos" },
              { val:"6", label:"Disponibles" },
              { val:"19", label:"Amenidades" },
              { val:"Inmediata", label:"Entrega" },
            ].map((s, i) => (
              <div key={i} style={{ padding:"28px 20px", textAlign:"center", borderRight: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                <div style={{ fontSize:30, fontWeight:900, color:"#C8102E" }}>{s.val}</div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,.4)", marginTop:4, textTransform:"uppercase", letterSpacing:".5px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* QUÉ ES BAU22 */}
        <div style={{ padding:"72px 32px 0", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center" }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 12px" }}>Bau22 es</p>
              <h2 style={{ fontSize:28, fontWeight:900, color:"#1a1a2e", margin:"0 0 16px" }}>Un espacio para el individualismo, la independencia y la diversidad.</h2>
              <p style={{ fontSize:15, color:"#6b7280", lineHeight:1.8, margin:0 }}>
                Bau22 es el nuevo proyecto inmobiliario de Valor City: la continuación de su línea de viviendas flexibles en Puebla, construidas para el nuevo paradigma de vida moderno y con la premisa de facilitar libertad, facilidad y conveniencia en cuanto a su ubicación — Lomas de Angelópolis.
              </p>
            </div>
          </div>
        </div>

        {/* UBICACIÓN */}
        <div style={{ padding:"56px 32px 72px", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }}>
              <div>
                <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 12px" }}>Ubicación</p>
                <h2 style={{ fontSize:32, fontWeight:900, color:"#1a1a2e", margin:"0 0 8px" }}>Lomas, la mini ciudad<br/>perfecta para tu nuevo depa.</h2>
                <p style={{ fontSize:14, color:"#6b7280", margin:"0 0 24px" }}>Nos encontramos en Parque Volcanes, Lomas 3 · C.P. 72810, San Andrés Cholula, Puebla</p>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {[
                    { icon:"🛣️", lugar:"Av. Atlixcáyotl", dist:"Acceso directo" },
                    { icon:"🌊", lugar:"Parque Cascatta", dist:"A unos pasos" },
                    { icon:"🏘️", lugar:"Sonatta / Lomas I y II", dist:"Vecino inmediato" },
                    { icon:"🛍️", lugar:"Blvd. de las Cascadas", dist:"Muy cerca" },
                  ].map((item, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", background:"#fff", borderRadius:10, border:"1px solid #f3f4f6" }}>
                      <span style={{ fontSize:18, flexShrink:0 }}>{item.icon}</span>
                      <span style={{ fontSize:13, color:"#374151", flex:1 }}>{item.lugar}</span>
                      <span style={{ fontSize:12, fontWeight:700, color:"#C8102E" }}>{item.dist}</span>
                    </div>
                  ))}
                </div>
                <a href="https://maps.google.com/?q=Parque+Volcanes+Lomas+3+San+Andres+Cholula+Puebla" target="_blank" rel="noreferrer"
                  style={{ display:"inline-block", marginTop:20, background:"#1a1a2e", color:"#fff", padding:"12px 22px", borderRadius:10, fontWeight:700, fontSize:13, textDecoration:"none" }}>
                  📍 Ver en Google Maps
                </a>
              </div>
              <div style={{ borderRadius:20, overflow:"hidden", height:400, boxShadow:"0 10px 40px rgba(0,0,0,.08)" }}>
                <img src={IMGS.fachada_aerea} alt="Vista aérea Bau22 — Lomas de Angelópolis" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              </div>
            </div>
          </div>
        </div>

        {/* PROTOTIPOS */}
        <div id="prototipos" style={{ padding:"72px 32px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:48 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>4 prototipos</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:0 }}>Encuentra tu Bau22.</h2>
            </div>

            {PROTOTIPOS.map((p, idx) => (
              <div key={p.nombre} style={{ marginBottom: idx < PROTOTIPOS.length - 1 ? 56 : 0 }}>
                <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24, flexWrap:"wrap" }}>
                  <h3 style={{ fontSize:24, fontWeight:900, color:"#1a1a2e", margin:0, fontStyle:"italic" }}>{p.nombre}</h3>
                  <span style={{ fontSize:13, color:"#6b7280" }}>
                    {p.recamaras} Recámaras · {p.banos} Baños · {p.m2} m² + {p.m2auto} m² auto · {p.plantas === 2 ? "2 plantas (doble altura)" : "1 planta"}
                  </span>
                </div>

                <div className="proto-grid" style={{ display:"grid", gridTemplateColumns: p.plano2 ? "260px 1fr 260px" : "260px 1fr", gap:24, alignItems:"start", marginBottom:20 }}>
                  <img src={p.plano} alt={`Plano departamento ${p.nombre} Bau22`} style={{ width:"100%", borderRadius:12, border:"1px solid #f3f4f6" }} />

                  <div>
                    <p style={{ fontSize:14.5, color:"#374151", lineHeight:1.7, margin:"0 0 12px" }}>{p.desc}</p>
                    <p style={{ fontSize:13, color:"#6b7280", lineHeight:1.6, margin:0 }}><strong style={{ color:"#1a1a2e" }}>Acabados: </strong>{p.acabados}</p>
                  </div>

                  {p.plano2 && (
                    <img src={p.plano2} alt={`Plano planta alta ${p.nombre} Bau22`} style={{ width:"100%", borderRadius:12, border:"1px solid #f3f4f6" }} />
                  )}
                </div>

                <GaleriaGrid items={p.fotos} />
              </div>
            ))}
          </div>
        </div>
        {/* ACABADOS */}
        <div style={{ padding:"72px 32px", background:"#1a1a2e" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:40 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Calidad en cada detalle</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#fff", margin:"0 0 12px" }}>Acabados.</h2>
              <p style={{ fontSize:15, color:"rgba(255,255,255,.5)", maxWidth:640, margin:"0 auto" }}>Nuestro equipo arquitectónico selecciona materiales que aseguran una durabilidad larga para pisos, cocina y carpintería.</p>
            </div>

            <div className="two-col" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
              <div style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.08)", borderRadius:14, padding:"24px 22px" }}>
                <p style={{ fontSize:12, fontWeight:700, color:"#C8102E", textTransform:"uppercase", letterSpacing:".1em", margin:"0 0 10px" }}>Cocina y baños</p>
                <p style={{ fontSize:13.5, color:"rgba(255,255,255,.75)", lineHeight:1.7, margin:0 }}>Cocina integral con granito San Gabriel. Muros Charlot Blanco Brillante Cesantoni en cocina y Sereni Cesantoni hexagonal en baños.</p>
              </div>
              <div style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.08)", borderRadius:14, padding:"24px 22px" }}>
                <p style={{ fontSize:12, fontWeight:700, color:"#C8102E", textTransform:"uppercase", letterSpacing:".1em", margin:"0 0 10px" }}>Carpintería</p>
                <p style={{ fontSize:13.5, color:"rgba(255,255,255,.75)", lineHeight:1.7, margin:0 }}>Acabados en MDF, resistente y elegante para un interiorismo a la altura de cada espacio.</p>
              </div>
              <div style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.08)", borderRadius:14, padding:"24px 22px" }}>
                <p style={{ fontSize:12, fontWeight:700, color:"#C8102E", textTransform:"uppercase", letterSpacing:".1em", margin:"0 0 10px" }}>Pisos Cesantoni</p>
                <p style={{ fontSize:13.5, color:"rgba(255,255,255,.75)", lineHeight:1.7, margin:0 }}>Área común y recámaras: Sereni. Pasillos: Gaudi Café. Baños: Piamont Blanco. Terrazas: Stockton. Coworking: Gaudi Gris.</p>
              </div>
            </div>
          </div>
        </div>

        {/* AMENIDADES */}
        <div style={{ padding:"72px 32px", background:"#fafafa" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:40 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Amenidades perfectas para vivir en comunidad</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:0 }}>19 espacios para disfrutar.</h2>
            </div>

            <div className="amen-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginBottom:56 }}>
              {AMENIDADES.map((a, i) => (
                <div key={i} style={{ background:"#fff", border:"1px solid #f3f4f6", borderRadius:10, padding:"14px 16px", fontSize:13, fontWeight:600, color:"#374151", textAlign:"center" }}>
                  {a}
                </div>
              ))}
            </div>

            {/* SALÓN DEL CHEF */}
            <div style={{ marginBottom:56 }}>
              <div style={{ display:"flex", alignItems:"baseline", gap:14, marginBottom:6, flexWrap:"wrap" }}>
                <h3 style={{ fontSize:26, fontWeight:900, color:"#1a1a2e", margin:0, fontStyle:"italic" }}>Salón del Chef</h3>
                <span style={{ fontSize:12, fontWeight:700, color:"#C8102E", textTransform:"uppercase", letterSpacing:".08em" }}>Diseño de Cibrian Arquitectos × Chef Saúl Carranza</span>
              </div>
              <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.7, margin:"0 0 20px", maxWidth:680 }}>
                Espacio exclusivo diseñado por el reconocido chef Saúl Carranza de la mano de Cibrian Arquitectos, para brindarte una auténtica experiencia de cocina y encuentro gastronómico.
              </p>
              <GaleriaGrid items={[
                { src: IMGS.chef_arco, label: "Salón del Chef — comedor" },
                { src: IMGS.chef_barra1, label: "Barra y cocina abierta" },
                { src: IMGS.chef_barra2, label: "Mesa comunal" },
                { src: IMGS.chef_terraza, label: "Terraza y lounge" },
              ]} />
            </div>

            {/* CAVA */}
            <div style={{ marginBottom:56 }}>
              <h3 style={{ fontSize:26, fontWeight:900, color:"#1a1a2e", margin:"0 0 6px", fontStyle:"italic" }}>Cava</h3>
              <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.7, margin:"0 0 20px", maxWidth:680 }}>
                Espacio ideal para compartir y disfrutar, con amigos o familia. Con espacios privados para el almacenamiento de tus mejores vinos.
              </p>
              <GaleriaGrid items={[
                { src: IMGS.cava_principal, label: "Cava — área de mesas" },
                { src: IMGS.cava_barra, label: "Cava — barra" },
              ]} />
            </div>

            {/* COFFEE ROOM */}
            <div>
              <h3 style={{ fontSize:26, fontWeight:900, color:"#1a1a2e", margin:"0 0 6px", fontStyle:"italic" }}>Coffee Room</h3>
              <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.7, margin:"0 0 20px", maxWidth:680 }}>
                Tu espacio de coworking dentro de Bau22: ideal para trabajar desde casa o recibir una junta sin salir del edificio.
              </p>
              <GaleriaGrid items={[
                { src: IMGS.coffee_principal, label: "Coffee Room / Coworking" },
              ]} />
            </div>
          </div>
        </div>
        {/* DISPONIBILIDAD */}
        <div id="disponibilidad" style={{ padding:"72px 32px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ marginBottom:32 }}>
              <p style={{ fontSize:11, color:"#C8102E", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", margin:"0 0 10px" }}>Lista de precios actualizada</p>
              <h2 style={{ fontSize:36, fontWeight:900, color:"#1a1a2e", margin:"0 0 8px" }}>Disponibilidad Bau22</h2>
              <p style={{ fontSize:14, color:"#6b7280" }}>Entrega inmediata. Solo unidades disponibles — consulta vigencia exacta, algunas se apartan rápido.</p>
            </div>

            <div style={{ border:"1px solid #f3f4f6", borderRadius:16, overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,.06)", overflowX:"auto" }}>
              <div style={{ display:"grid", gridTemplateColumns:"90px 1fr 90px 150px", background:"#C8102E", minWidth:520 }}>
                {["Depto.","Modelo","m²","Precio"].map((h,i) => (
                  <div key={i} style={{ padding:"12px 14px", fontSize:11, fontWeight:800, color:"#fff", borderLeft: i>0?"1px solid rgba(255,255,255,.2)":"none" }}>{h}</div>
                ))}
              </div>
              {DISPONIBLES.map((dep, i) => (
                <div key={i} style={{ display:"grid", gridTemplateColumns:"90px 1fr 90px 150px", background: i%2===0?"#fff":"#fafafa", borderTop:"1px solid #f3f4f6", minWidth:520 }}>
                  <div style={{ padding:"13px 14px", fontSize:13, fontWeight:700, color:"#1a1a2e" }}>{dep.depto}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.modelo}</div>
                  <div style={{ padding:"13px 14px", fontSize:13, color:"#374151", borderLeft:"1px solid #f3f4f6" }}>{dep.m2} m²</div>
                  <div style={{ padding:"13px 14px", fontSize:13, fontWeight:800, color:"#C8102E", borderLeft:"1px solid #f3f4f6" }}>{fmt(dep.precio)}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize:12, color:"#9ca3af", marginTop:12, fontStyle:"italic" }}>*Precios en MXN. Sujetos a cambio sin previo aviso. Entrega inmediata.</p>

            <div style={{ textAlign:"center", marginTop:32 }}>
              <a href={WA} target="_blank" rel="noreferrer"
                style={{ display:"inline-block", background:"#C8102E", color:"#fff", padding:"14px 32px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                💬 Apartar mi departamento en Bau22
              </a>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div style={{ background:"#C8102E", padding:"72px 32px", textAlign:"center" }}>
          <div style={{ maxWidth:640, margin:"0 auto" }}>
            <h2 style={{ fontSize:36, fontWeight:900, color:"#fff", margin:"0 0 16px", lineHeight:1.1 }}>Múdate ya. Sin esperar obra.</h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,.85)", margin:"0 0 32px", lineHeight:1.7 }}>Bau22 es entrega inmediata. Habla con un asesor de Emporio Inmobiliario hoy y conoce el departamento que se adapta a tu vida.</p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a href={WA} target="_blank" rel="noreferrer"
                style={{ background:"#fff", color:"#C8102E", padding:"14px 28px", borderRadius:12, fontWeight:800, fontSize:15, textDecoration:"none" }}>
                💬 Hablar por WhatsApp
              </a>
              <a href="tel:+522222573237" style={{ background:"rgba(255,255,255,.15)", color:"#fff", padding:"14px 28px", borderRadius:12, fontWeight:700, fontSize:15, textDecoration:"none", border:"1px solid rgba(255,255,255,.3)" }}>
                📞 222 257 3237
              </a>
            </div>
            <p style={{ margin:"20px 0 0", fontSize:12, color:"rgba(255,255,255,.6)" }}>
              Bau22 · Un proyecto de Valor City · Comercializado por Emporio Inmobiliario
            </p>
          </div>
        </div>

        <LeyendaProfeco />
        <Footer />
        <a href={WA} target="_blank" rel="noreferrer"
          style={{ position:"fixed", bottom:24, right:24, background:"#25d366", color:"#fff", width:56, height:56, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, boxShadow:"0 4px 16px rgba(0,0,0,.2)", textDecoration:"none", zIndex:100 }}>
          💬
        </a>
      </div>
    </>
  );
}
