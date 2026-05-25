import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DOCUMENTOS = [
{
numero:"01",
titulo:"Escritura del inmueble",
emoji:"📜",
descripcion:"La escritura acredita la propiedad y contiene información importante sobre el inmueble.",
revisar:[
"Nombre del propietario",
"Datos del inmueble",
"Copropietarios",
"Antecedentes"
]
},
{
numero:"02",
titulo:"Identificación oficial vigente",
emoji:"🪪",
descripcion:"Debe coincidir con los datos de la escritura y de la operación.",
revisar:[
"INE",
"Pasaporte",
"Cédula profesional"
]
},
{
numero:"03",
titulo:"CURP y RFC",
emoji:"🧾",
descripcion:"Estos documentos suelen requerirse durante el proceso.",
revisar:[
"CURP actualizada",
"RFC"
]
},
{
numero:"04",
titulo:"Boleta predial",
emoji:"🏠",
descripcion:"Ayuda a confirmar situación y adeudos.",
revisar:[
"Predial vigente",
"Adeudos pendientes"
]
},
{
numero:"05",
titulo:"Comprobante de agua",
emoji:"🚰",
descripcion:"Importante revisar si existen adeudos.",
revisar:[
"Pago vigente",
"Adeudos"
]
},
{
numero:"06",
titulo:"Documentos de condominio",
emoji:"🏢",
descripcion:"Si aplica para departamentos o fraccionamientos.",
revisar:[
"Reglamento",
"Mantenimiento"
]
},
{
numero:"07",
titulo:"Documentos adicionales",
emoji:"📄",
descripcion:"Dependiendo del caso pueden requerirse documentos extra.",
revisar:[
"Cancelación de hipoteca",
"Poderes",
"Sucesiones"
]
}
];

export default function DocumentosVenderCasa(){

return(
<>
<Head>

<title>
7 documentos necesarios para vender una casa en Puebla — Emporio Inmobiliario
</title>

<meta
name="description"
content="Descubre qué documentos necesitas para vender una casa en Puebla y evita retrasos durante el proceso de compraventa."
/>

<meta
name="keywords"
content="documentos vender casa Puebla, requisitos vender casa Puebla, escritura casa Puebla, documentos compraventa Puebla"
/>

<meta
property="og:title"
content="7 documentos necesarios para vender una casa en Puebla"
/>

<meta
property="og:description"
content="Conoce los documentos necesarios para vender una casa y evitar retrasos."
/>

<link
rel="canonical"
href="https://www.emporioinmobiliario.com.mx/blog/documentos-para-vender-casa-puebla"
/>

</Head>

<div style={{
fontFamily:"Montserrat,sans-serif"
}}>

<Navbar/>

<div style={{
background:"linear-gradient(120deg,#1a1a2e 0%,#0f1520 100%)",
padding:"70px 30px"
}}>

<div style={{
maxWidth:"780px",
margin:"auto"
}}>

<span style={{
color:"#fca5a5",
fontWeight:"700"
}}>
Documentación inmobiliaria
</span>

<h1 style={{
fontSize:"46px",
fontWeight:"900",
color:"#fff",
marginTop:"20px"
}}>
7 documentos necesarios para vender una casa en Puebla
</h1>

<p style={{
fontSize:"18px",
color:"rgba(255,255,255,.7)"
}}>
Conoce qué documentos debes preparar para evitar retrasos y facilitar tu operación inmobiliaria.
</p>

<div style={{
marginTop:"20px",
display:"flex",
gap:"20px",
color:"rgba(255,255,255,.5)"
}}>
<span>📅 11 mayo 2026</span>
<span>⏱ 6 min</span>
</div>

</div>

</div>

<div style={{
maxWidth:"780px",
margin:"auto",
padding:"50px 30px"
}}>

{DOCUMENTOS.map((doc)=>(
<div
key={doc.numero}
style={{
border:"1px solid #eee",
padding:"30px",
borderRadius:"20px",
marginBottom:"30px"
}}
>

<h2>
{doc.emoji} {doc.titulo}
</h2>

<p>
{doc.descripcion}
</p>

{
doc.revisar.map((item,index)=>(
<p key={index}>
✓ {item}
</p>
))
}

</div>
))}

</div>
{/* CTA */}
<div style={{
background:"#1a1a2e",
borderRadius:"20px",
padding:"40px 36px",
marginBottom:"56px",
position:"relative",
overflow:"hidden"
}}>

<div style={{
position:"absolute",
top:"-40px",
right:"-40px",
width:"200px",
height:"200px",
borderRadius:"50%",
background:"rgba(200,16,46,0.15)"
}}/>

<div style={{position:"relative",zIndex:1}}>

<p style={{
fontSize:"11px",
color:"#C8102E",
fontWeight:"700",
letterSpacing:"0.15em",
textTransform:"uppercase",
margin:"0 0 10px"
}}>
Emporio Inmobiliario
</p>

<h3 style={{
fontSize:"24px",
fontWeight:"900",
color:"#fff",
margin:"0 0 12px"
}}>
¿Quieres vender tu propiedad?
</h3>

<p style={{
fontSize:"15px",
color:"rgba(255,255,255,0.6)",
margin:"0 0 24px",
lineHeight:"1.7"
}}>
Te ayudamos a vender tu casa o departamento en Puebla con promoción, seguimiento y acompañamiento durante todo el proceso.
</p>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap"
}}>

<a
href="/propiedades"
style={{
background:"#C8102E",
color:"#fff",
padding:"13px 24px",
borderRadius:"10px",
fontWeight:"800",
fontSize:"14px",
textDecoration:"none"
}}
>
Ver propiedades →
</a>

<a
href="https://wa.me/522222573237"
target="_blank"
rel="noreferrer"
style={{
background:"rgba(255,255,255,0.08)",
color:"#fff",
padding:"13px 24px",
borderRadius:"10px",
fontWeight:"700",
fontSize:"14px",
textDecoration:"none",
border:"1px solid rgba(255,255,255,0.15)"
}}
>
💬 Pedir asesoría
</a>

</div>
</div>
</div>

{/* También te puede interesar */}

<h2 style={{
fontSize:"22px",
fontWeight:"900",
color:"#1a1a2e",
margin:"0 0 20px"
}}>
También te puede interesar
</h2>

<div style={{
display:"flex",
flexDirection:"column",
gap:"12px"
}}>

<a
href="/blog/que-revisar-antes-firmar-promesa-compraventa-puebla"
style={{textDecoration:"none"}}
>
<div style={{
display:"flex",
alignItems:"center",
gap:"16px",
padding:"16px 20px",
border:"1px solid #f3f4f6",
borderRadius:"12px"
}}>
<span style={{fontSize:"24px"}}>📝</span>
<span style={{
fontSize:"15px",
fontWeight:"600",
color:"#1a1a2e"
}}>
Qué revisar antes de firmar una promesa de compraventa
</span>
<span style={{
marginLeft:"auto",
fontSize:"13px",
color:"#C8102E",
fontWeight:"700"
}}>
Leer →
</span>
</div>
</a>

<a
href="/blog/como-evitar-fraudes-inmobiliarios-puebla"
style={{textDecoration:"none"}}
>
<div style={{
display:"flex",
alignItems:"center",
gap:"16px",
padding:"16px 20px",
border:"1px solid #f3f4f6",
borderRadius:"12px"
}}>
<span style={{fontSize:"24px"}}>🚨</span>
<span style={{
fontSize:"15px",
fontWeight:"600",
color:"#1a1a2e"
}}>
Cómo evitar fraudes inmobiliarios al comprar una casa
</span>
<span style={{
marginLeft:"auto",
fontSize:"13px",
color:"#C8102E",
fontWeight:"700"
}}>
Leer →
</span>
</div>
</a>

</div>

<a
href="https://wa.me/522222573237"
target="_blank"
rel="noreferrer"
style={{
position:"fixed",
bottom:"24px",
right:"24px",
background:"#25d366",
color:"#fff",
width:"56px",
height:"56px",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize:"26px",
boxShadow:"0 4px 16px rgba(0,0,0,0.2)",
textDecoration:"none",
zIndex:"100"
}}
>
💬
</a>
  
<Footer/>

</div>

</>
)

}
