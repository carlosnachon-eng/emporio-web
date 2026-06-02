// emporio-web: pages/verificar-carta/[folio].js
import Head from "next/head";

const fmt = (n) => "$" + Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 });

const ESTATUS_STYLE = {
  oferta:       { bg: "#dbeafe", color: "#1e40af", label: "✓ Oferta activa" },
  contraoferta: { bg: "#fef3c7", color: "#92400e", label: "↩ Contraoferta" },
  aceptado:     { bg: "#d1fae5", color: "#065f46", label: "✓ Aceptado" },
  cancelado:    { bg: "#fee2e2", color: "#991b1b", label: "✕ Cancelado" },
};

export default function VerificarCarta({ carta }) {
  const est = carta ? (ESTATUS_STYLE[carta.estatus] || ESTATUS_STYLE.oferta) : null;

  return (
    <>
      <Head>
        <title>{carta ? `Carta ${carta.folio} — Emporio Inmobiliario` : "Verificación — Emporio Inmobiliario"}</title>
        <meta name="robots" content="noindex" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight: "100vh", background: "#f4f5f7", fontFamily: "'Montserrat', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px" }}>

        <img src="https://www.emporioinmobiliario.com.mx/logo.png" alt="Emporio Inmobiliario" style={{ height: 64, marginBottom: 24 }} />

        <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", maxWidth: 480, width: "100%", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>

          {!carta ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 48, margin: "0 0 16px" }}>❌</p>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>Documento no encontrado</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>El folio ingresado no corresponde a ninguna carta registrada en Emporio Inmobiliario.</p>
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <div style={{ display: "inline-block", background: est.bg, color: est.color, padding: "6px 16px", borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 12 }}>
                  {est.label}
                </div>
                <h1 style={{ fontSize: 28, fontWeight: 800, color: "#C8102E", margin: "0 0 4px", fontFamily: "monospace" }}>{carta.folio}</h1>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>Carta de Oferta de Compraventa</p>
              </div>

              <div style={{ height: 3, background: "linear-gradient(90deg, #C8102E, #9f1239)", borderRadius: 99, marginBottom: 20 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  ["Ofertante",   carta.cliente_nombre],
                  ["Propietarios", carta.propietarios],
                  ["Inmueble",    carta.inmueble],
                  ["Precio ofertado", fmt(carta.precio_oferta)],
                  carta.precio_contraoferta ? ["Contraoferta", fmt(carta.precio_contraoferta)] : null,
                  ["Fecha",       new Date(carta.fecha + "T12:00:00").toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })],
                  ["Emitido por", "Emporio Inmobiliario"],
                ].filter(Boolean).map(([label, value]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                    <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 600, flexShrink: 0, marginRight: 12 }}>{label}</span>
                    <span style={{ fontSize: 13, fontWeight: ["Precio ofertado","Contraoferta"].includes(label) ? 800 : 500, textAlign: "right", color: ["Precio ofertado","Contraoferta"].includes(label) ? "#C8102E" : "#1a1a2e" }}>{value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28 }}>✅</span>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#065f46" }}>Documento verificado</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>Esta carta fue emitida por Emporio Inmobiliario y se encuentra registrada en nuestro sistema.</p>
                </div>
              </div>
            </>
          )}
        </div>

        <p style={{ marginTop: 20, fontSize: 12, color: "#9ca3af", textAlign: "center" }}>
          emporioinmobiliario.com.mx · (222) 257-3237
        </p>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { folio } = params;
  try {
    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/cartas_oferta?folio=eq.${folio.toUpperCase()}&select=folio,estatus,cliente_nombre,propietarios,inmueble,precio_oferta,precio_contraoferta,fecha&limit=1`;
    const res = await fetch(url, {
      headers: {
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    });
    const data = await res.json();
    return { props: { carta: data?.[0] || null } };
  } catch (e) {
    return { props: { carta: null } };
  }
}
