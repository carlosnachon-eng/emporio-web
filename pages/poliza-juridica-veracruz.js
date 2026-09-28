import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blindajeVeracruzPreviewEnabled } from "../lib/siteArchitecture";

export default function PolizaJuridicaVeracruz() {
  return (
    <>
      <Head>
        <title>Póliza jurídica en Veracruz | Emporio Blindaje Legal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />
      <main style={{maxWidth:900,margin:"0 auto",padding:"80px 24px",fontFamily:"Montserrat,sans-serif"}}>
        <p style={{color:"#C8102E",fontWeight:900,textTransform:"uppercase",letterSpacing:".12em"}}>Preview controlado</p>
        <h1>Emporio Blindaje Legal · Veracruz</h1>
        <p style={{lineHeight:1.8,color:"#4b5563"}}>Esta landing permanece fuera de producción pública mientras se valida la operación completa del servicio en la plaza Veracruz.</p>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  if (!blindajeVeracruzPreviewEnabled()) return { notFound: true };
  return { props: {} };
}
