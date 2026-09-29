import Head from "next/head";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SemanticBreadcrumbs from "../components/SemanticBreadcrumbs";
import OwnerLeadForm from "../components/OwnerLeadForm";
import { generarSlugPropiedad, SITE_URL } from "../lib/propertySeo";

const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const CSS=`
.iv-page{font-family:'Montserrat',sans-serif;background:#f8f7f5;color:#171717}.iv-wrap{max-width:1160px;margin:0 auto}.iv-section{padding:78px 28px}.iv-hero{background:#171722;color:#fff}.iv-hero-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:44px;align-items:center}.iv-kicker{color:#fda4af;font-size:12px;font-weight:900;letter-spacing:.15em;text-transform:uppercase}.iv-hero h1{font-size:54px;line-height:1.05;letter-spacing:-.035em;margin:12px 0 20px}.iv-copy{font-size:16px;line-height:1.8;color:#5b5b62}.iv-hero .iv-copy{color:#d1d5db}.iv-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}.iv-button{display:inline-flex;padding:14px 20px;border-radius:8px;background:#c8102e;color:#fff;font-weight:900;text-decoration:none}.iv-button.alt{background:#fff;color:#171722}.iv-plazas{display:grid;grid-template-columns:1fr 1fr;gap:14px}.iv-plaza{padding:24px;background:#fff;color:#171722;border-radius:14px}.iv-plaza strong{display:block;font-size:22px}.iv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.iv-card{display:block;background:#fff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;color:#171722;text-decoration:none}.iv-card img{width:100%;height:190px;object-fit:cover}.iv-card-body{padding:18px}.iv-card h3{font-size:16px;line-height:1.4;margin:4px 0 8px}.iv-meta{font-size:12px;color:#6b7280}.iv-dark{background:#171722;color:#fff}.iv-dark .iv-copy{color:#cbd5e1}.iv-two{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:start}.iv-services{display:grid;gap:12px}.iv-service{background:#fff;padding:18px;border-left:3px solid #c8102e}.iv-service strong{display:block;margin-bottom:5px}.iv-form{background:#eeeae5}.owner-form{background:#fff;padding:38px;border-top:4px solid #c8102e;box-shadow:0 16px 50px rgba(0,0,0,.08)}.owner-form h2{font-size:31px;margin:8px 0 10px}.owner-form-intro{color:#666;line-height:1.65;margin:0 0 24px}.owner-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:17px}.owner-form label{font-size:13px;font-weight:800;color:#333}.owner-form label span,.owner-privacy{font-weight:400;color:#777}.owner-wide{grid-column:1/-1}.owner-submit{width:100%;margin-top:20px;border:0;border-radius:7px;padding:15px;background:#c8102e;color:#fff;font-weight:900;font-size:15px}.owner-privacy{font-size:11px;line-height:1.6}.owner-error{color:#991b1b;font-size:13px}.owner-success{display:grid;gap:8px;padding:32px;background:#ecfdf5;color:#065f46;border-left:4px solid #059669}
@media(max-width:850px){.iv-hero-grid,.iv-two{grid-template-columns:1fr}.iv-grid{grid-template-columns:1fr 1fr}.iv-hero h1{font-size:42px}}@media(max-width:600px){.iv-section{padding:56px 20px}.iv-grid,.iv-plazas,.owner-form-grid{grid-template-columns:1fr}.owner-wide{grid-column:auto}.iv-hero h1{font-size:36px}.owner-form{padding:26px 20px}}
`;

const config={
 plaza:"VERACRUZ",
 landingPath:"/inmobiliaria-veracruz",
 subject:"Nuevo propietario interesado — Veracruz",
 defaultScenario:"opinion_valor",
 analyticsContext:"inmobiliaria_veracruz",
 conversionEvent:"site_owner_lead_veracruz",
 zonePlaceholder:"Veracruz, Boca del Río o Riviera Veracruzana",
};

function foto(p){return p?.fotos?.find?.(f=>f?.url)?.url||"";}

export default function InmobiliariaVeracruz({ propiedades=[] }) {
 const title="Inmobiliaria en Veracruz | Venta y renta de propiedades | Emporio";
 const description="Emporio Inmobiliario en Veracruz y Boca del Río. Encuentra propiedades, comercializa tu inmueble y solicita una Opinión de Valor con atención profesional.";
 const schema={"@context":"https://schema.org","@graph":[{"@type":"WebPage",url:`${SITE_URL}/inmobiliaria-veracruz`,name:title,description},{"@type":"Service",name:"Servicios inmobiliarios en Veracruz",provider:{"@type":"RealEstateAgent",name:"Emporio Inmobiliario",url:SITE_URL},areaServed:["Veracruz","Boca del Río","Riviera Veracruzana"].map(name=>({"@type":"Place",name}))}]};
 return <><Head><title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={`${SITE_URL}/inmobiliaria-veracruz`}/><meta name="robots" content="index, follow"/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={`${SITE_URL}/inmobiliaria-veracruz`}/><meta property="og:type" content="website"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></Head><style dangerouslySetInnerHTML={{__html:CSS}}/><div className="iv-page"><Navbar/><SemanticBreadcrumbs items={[{label:"Veracruz",href:"/inmobiliaria-veracruz"}]}/>
 <header className="iv-section iv-hero"><div className="iv-wrap iv-hero-grid"><div><p className="iv-kicker">Emporio Inmobiliario · Veracruz</p><h1>Inmobiliaria en Veracruz para encontrar, vender o rentar propiedad</h1><p className="iv-copy">Emporio extiende su experiencia inmobiliaria a Veracruz, Boca del Río y Riviera Veracruzana con inventario real, atención a compradores y estrategia comercial para propietarios.</p><div className="iv-actions"><a className="iv-button" href="#inventario-veracruz">Ver propiedades en Veracruz</a><Link className="iv-button alt" href="/vender-propiedad-veracruz">Quiero vender una propiedad</Link></div></div><div className="iv-plazas"><div className="iv-plaza"><strong>Veracruz</strong><span>Operación comercial activa</span></div><div className="iv-plaza"><strong>Puebla</strong><span>Más de 20 años de experiencia</span></div></div></div></header>
 <main><section id="inventario-veracruz" className="iv-section"><div className="iv-wrap"><p className="iv-kicker">Inventario Veracruz</p><h2>Propiedades disponibles en la plaza</h2><p className="iv-copy">Consulta una muestra del inventario activo y entra a cada ficha para revisar precio, ubicación y características.</p><div className="iv-grid" style={{marginTop:28}}>{propiedades.map(p=><Link className="iv-card" key={p.public_id} href={`/propiedades/${generarSlugPropiedad(p)}`}>{foto(p)&&<img src={foto(p)} alt={p.titulo}/>}<div className="iv-card-body"><p className="iv-kicker">{p.status==="reserved"?"Reservada":p.operacion==="sale"?"En venta":"En renta"}</p><h3>{p.titulo}</h3><p className="iv-meta">{[p.colonia,p.ciudad,p.estado].filter(Boolean).join(", ")}</p></div></Link>)}</div></div></section>
 <section className="iv-section iv-dark"><div className="iv-wrap iv-two"><div><p className="iv-kicker">Para quien busca</p><h2>Compra o renta con información clara</h2><p className="iv-copy">Te ayudamos a ubicar opciones, revisar condiciones y coordinar visitas con el equipo que atiende la plaza Veracruz.</p><Link className="iv-button" href="/propiedades">Explorar catálogo</Link></div><div><p className="iv-kicker">Para propietarios</p><h2>Comercializa tu propiedad con Emporio</h2><p className="iv-copy">Analizamos el inmueble, definimos posicionamiento, promovemos, filtramos interesados y acompañamos negociación y cierre.</p><Link className="iv-button" href="/vender-propiedad-veracruz">Solicitar Opinión de Valor</Link></div></div></section>
 <section className="iv-section"><div className="iv-wrap iv-two"><div><p className="iv-kicker">Servicios</p><h2>Una operación inmobiliaria, no sólo publicaciones</h2><p className="iv-copy">Compra y renta de propiedades, comercialización para propietarios, Opinión de Valor y administración de inmuebles.</p><Link className="iv-button" href="/administracion-de-propiedades-veracruz">Administrar una propiedad</Link></div><div className="iv-services">{["Compra y renta de propiedades","Comercialización para venta y renta","Opinión de Valor"].map(s=><div className="iv-service" key={s}><strong>{s}</strong><span>Atención de Emporio Inmobiliario.</span></div>)}<Link className="iv-service" href="/administracion-de-propiedades-veracruz"><strong>Administración de propiedades</strong><span>Cobranza, reportes y coordinación de mantenimiento.</span></Link></div></div></section>
 <section className="iv-section iv-form"><div className="iv-wrap iv-two"><div><p className="iv-kicker">Propietarios en Veracruz</p><h2>Cuéntanos sobre tu propiedad</h2><p className="iv-copy">Comparte los datos esenciales y el equipo de captación revisará tu caso. Conservamos la plaza, servicio y origen de la solicitud para dar seguimiento correcto.</p></div><OwnerLeadForm config={config}/></div></section></main>
 <Footer brandDescription="Experiencia inmobiliaria nacida en Puebla y aplicada hoy también en Veracruz."/></div></>;
}
export async function getServerSideProps(){
 const {data}=await supabasePublic.from("propiedades").select("public_id,titulo,precio,operacion,tipo,ciudad,colonia,estado,fotos,status,created_at").in("status",["published","reserved"]).ilike("estado","Veracruz").order("created_at",{ascending:false}).limit(12);
 return {props:{propiedades:data||[]}};
}
