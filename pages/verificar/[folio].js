// emporio-web: pages/verificar/[folio].js
// Página pública de verificación de recibos de apartado

import { createClient } from "@supabase/supabase-js";
import Head from "next/head";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const fmt = (n) => "$" + Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 });

const ESTATUS_STYLE = {
  activo:     { bg: "#d1fae5", color: "#065f46", label: "✓ Activo",     icon: "✅" },
  vencido:    { bg: "#fef3c7", color: "#92400e", label: "⚠ Vencido",    icon: "⏰" },
  cancelado:  { bg: "#fee2e2", color: "#991b1b", label: "✕ Cancelado",  icon: "❌" },
  concretado: { bg: "#dbeafe", color: "#1e40af", label: "✓ Concretado", icon: "🏠" },
};

export default function VerificarRecibo({ recibo, error }) {
  const est = recibo ? (ESTATUS_STYLE[recibo.estatus] || ESTATUS_STYLE.activo) : null;

  return (
    <>
      <Head>
        <title>{recibo ? `Recibo ${recibo.folio} — Emporio Inmobiliario` : "Verificación — Emporio Inmobiliario"}</title>
        <meta name="robots" content="noindex" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight: "100vh", background: "#f4f5f7", fontFamily: "'Montserrat', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px" }}>

        {/* Logo */}
        <img src="https://www.emporioinmobiliario.com.mx/logo.png" alt="Emporio Inmobiliario" style={{ height: 64, marginBottom: 24 }} />

        <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", maxWidth: 480, width: "100%", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>

          {error || !recibo ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 48, margin: "0 0 16px" }}>❌</p>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", margin: "0 0 8px" }}>Documento no encontrado</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>El folio ingresado no corresponde a ningún recibo registrado en Emporio Inmobiliario.</p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <div style={{ display: "inline-block", background: est.bg, color: est.color, padding: "6px 16px", borderRadius: 99, fontSize: 13, fontWeight: 700, marginBottom: 12 }}>
                  {est.label}
                </div>
                <h1 style={{ fontSize: 28, fontWeight: 800, color: "#C8102E", margin: "0 0 4px", fontFamily: "monospace" }}>{recibo.folio}</h1>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
                  {recibo.tipo === "compraventa" ? "Recibo de Apartado — Compraventa" : "Recibo de Apartado — Arrendamiento"}
                </p>
              </div>

              {/* Línea roja */}
              <div style={{ height: 3, background: "linear-gradient(90deg, #C8102E, #9f1239)", borderRadius: 99, marginBottom: 20 }} />

              {/* Datos */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  ["Cliente",   recibo.cliente_nombre],
                  ["Inmueble",  recibo.inmueble],
                  ["Monto",     fmt(recibo.monto)],
                  ["Fecha",     new Date(recibo.fecha + "T12:00:00").toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })],
                  ["Emitido por", "Emporio Inmobiliario"],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                    <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 600, flexShrink: 0, marginRight: 12 }}>{label}</span>
                    <span style={{ fontSize: 13, color: "#1a1a2e", fontWeight: label === "Monto" ? 800 : 500, textAlign: "right", color: label === "Monto" ? "#C8102E" : "#1a1a2e" }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Sello verificado */}
              <div style={{ marginTop: 24, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28 }}>✅</span>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#065f46" }}>Documento verificado</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>Este recibo fue emitido por Emporio Inmobiliario y se encuentra registrado en nuestro sistema.</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <p style={{ marginTop: 20, fontSize: 12, color: "#9ca3af", textAlign: "center" }}>
          emporioinmobiliario.com.mx · (222) 257-3237
        </p>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { folio } = params;

  const { data: recibo, error } = await supabase
    .from("recibos_apartado")
    .select("folio, tipo, cliente_nombre, inmueble, monto, fecha, estatus")
    .eq("folio", folio.toUpperCase())
    .single();

  if (error || !recibo) {
    return { props: { recibo: null, error: true } };
  }

  return { props: { recibo, error: false } };
}
