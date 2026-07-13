import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HotWeek() {
  return (
    <>
      <Head>
        <title>Hot Week Emporio — Promociones en renta y venta</title>
        <meta
          name="description"
          content="Hot Week Emporio: beneficios especiales al comprar o rentar propiedades participantes en Puebla."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.emporioinmobiliario.com.mx/hot-week" />
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <Navbar />

        <div style={{
          background: "linear-gradient(120deg,#1a1a2e 0%,#0f1520 100%)",
          padding: "72px 32px",
          textAlign: "center"
        }}>
          <p style={{ color: "#fca5a5", fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase" }}>
            🔥 Hot Week Emporio
          </p>
          <h1 style={{ color: "#fff", fontSize: "clamp(32px,5vw,54px)", fontWeight: 900, margin: "0 0 18px" }}>
            Beneficios especiales al comprar o rentar
          </h1>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 17, maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
            Solo por tiempo limitado, algunas propiedades participantes cuentan con beneficios exclusivos al cerrar tu operación.
          </p>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 32px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 24,
            marginBottom: 56
          }}>
            <div style={{ background: "#1a1a2e", borderRadius: 22, padding: "36px 30px", color: "#fff" }}>
              <div style={{ fontSize: 42, marginBottom: 14 }}>🏡</div>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: "0 0 12px" }}>Si compras</h2>
              <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.8, fontSize: 15 }}>
                Aparta una propiedad participante durante Hot Week y recibe una Smart TV de 50” al concretar tu compra.
              </p>
              <a href="/propiedades?operacion=sale" style={{
                display: "inline-block",
                marginTop: 18,
                background: "#C8102E",
                color: "#fff",
                padding: "13px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800
              }}>
                Ver propiedades en venta →
              </a>
            </div>

            <div style={{ background: "#C8102E", borderRadius: 22, padding: "36px 30px", color: "#fff" }}>
              <div style={{ fontSize: 42, marginBottom: 14 }}>🔑</div>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: "0 0 12px" }}>Si rentas</h2>
              <p style={{ color: "rgba(255,255,255,.86)", lineHeight: 1.8, fontSize: 15 }}>
                Firma tu contrato durante Hot Week y recibe 25% de descuento en tu póliza jurídica.
              </p>
              <a href="/propiedades?operacion=rental" style={{
                display: "inline-block",
                marginTop: 18,
                background: "#fff",
                color: "#C8102E",
                padding: "13px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 800
              }}>
                Ver propiedades en renta →
              </a>
            </div>
          </div>

          <div style={{
            background: "#fafafa",
            border: "1px solid #f3f4f6",
            borderRadius: 22,
            padding: "36px 30px"
          }}>
            <h2 style={{ color: "#1a1a2e", fontSize: 28, fontWeight: 900, margin: "0 0 20px" }}>
              Términos y condiciones
            </h2>

            {[
              "Promoción válida únicamente del 25 de mayo al 31 de mayo de 2026.",
              "Aplica únicamente en propiedades participantes identificadas dentro de la campaña Hot Week Emporio.",
              "Los beneficios aplican únicamente al concretar la operación correspondiente.",
              "En operaciones de compra, el beneficio será una Smart TV de 50” entregada una vez concluida y formalizada la operación.",
              "La Smart TV mostrada es ilustrativa. Marca y modelo sujetos a disponibilidad.",
              "En operaciones de renta, el beneficio consistirá en un 25% de descuento sobre la póliza jurídica correspondiente.",
              "El descuento aplica únicamente en pólizas emitidas directamente por Emporio Blindaje Legal.",
              "El beneficio no es transferible ni canjeable por dinero en efectivo.",
              "Solo aplica un beneficio por operación.",
              "No es acumulable con otras promociones.",
              "Emporio Inmobiliario se reserva el derecho de modificar o cancelar la promoción por causas extraordinarias."
            ].map((t, i) => (
              <p key={i} style={{ color: "#374151", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
                • {t}
              </p>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="https://wa.me/522222573237?text=Hola,%20quiero%20información%20de%20Hot%20Week%20Emporio" target="_blank" rel="noreferrer" style={{
              background: "#C8102E",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: 12,
              fontWeight: 900,
              textDecoration: "none",
              display: "inline-block"
            }}>
              💬 Quiero aprovechar Hot Week
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
