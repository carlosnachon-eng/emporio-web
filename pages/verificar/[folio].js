// emporio-web: pages/verificar/[folio].js
// Página pública de verificación del recibo original y sus abonos.

import Head from "next/head";

const fmt = (n) =>
  "$" +
  Number(n || 0).toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formatDate = (date) => {
  if (!date) return "—";

  return new Date(`${date}T12:00:00`).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatPaymentMethod = (method) => {
  if (!method) return null;

  return method
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const ESTATUS_STYLE = {
  activo: { bg: "#d1fae5", color: "#065f46", label: "✓ Activo" },
  solicitud_recibida: { bg: "#dbeafe", color: "#1e40af", label: "✓ Solicitud recibida" },
  vencido: { bg: "#fef3c7", color: "#92400e", label: "⚠ Vencido" },
  cancelado: { bg: "#fee2e2", color: "#991b1b", label: "✕ Cancelado" },
  concretado: { bg: "#dbeafe", color: "#1e40af", label: "✓ Concretado" },
};

const DetailRow = ({ label, value, highlighted = false, last = false }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "10px 0",
      borderBottom: last ? "none" : "1px solid #f3f4f6",
      gap: 16,
    }}
  >
    <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 600, flexShrink: 0 }}>
      {label}
    </span>
    <span
      style={{
        fontSize: 13,
        fontWeight: highlighted ? 800 : 500,
        textAlign: "right",
        color: highlighted ? "#C8102E" : "#1a1a2e",
        overflowWrap: "anywhere",
      }}
    >
      {value || "—"}
    </span>
  </div>
);

export default function VerificarRecibo({ recibo }) {
  const est = recibo ? ESTATUS_STYLE[recibo.estatus] || ESTATUS_STYLE.activo : null;
  const abonos = recibo?.recibos_abonos || [];
  const montoOriginal = Number(recibo?.monto || 0);
  const totalAbonos = abonos.reduce((total, abono) => total + Number(abono.monto || 0), 0);
  const totalRecibido = montoOriginal + totalAbonos;
  const totalAcordado = Number(recibo?.monto_total_acordado || recibo?.monto || 0);
  const saldo = Math.max(0, totalAcordado - totalRecibido);

  return (
    <>
      <Head>
        <title>
          {recibo
            ? `Recibo ${recibo.folio} — Emporio Inmobiliario`
            : "Verificación — Emporio Inmobiliario"}
        </title>
        <meta name="robots" content="noindex" />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "#f4f5f7",
          fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px",
        }}
      >
        <img
          src="/logo.png"
          alt="Emporio Inmobiliario"
          style={{ height: 64, maxWidth: "100%", objectFit: "contain", marginBottom: 24 }}
        />

        <main
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 28px",
            maxWidth: 560,
            width: "100%",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          }}
        >
          {!recibo ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 48, margin: "0 0 16px" }}>❌</p>
              <h1
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#1a1a2e",
                  margin: "0 0 8px",
                }}
              >
                Documento no encontrado
              </h1>
              <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
                El folio ingresado no corresponde a ningún recibo registrado en Emporio
                Inmobiliario.
              </p>
            </div>
          ) : (
            <>
              <header style={{ textAlign: "center", marginBottom: 24 }}>
                <div
                  style={{
                    display: "inline-block",
                    background: est.bg,
                    color: est.color,
                    padding: "6px 16px",
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {est.label}
                </div>
                <h1
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#C8102E",
                    margin: "0 0 4px",
                    fontFamily: "monospace",
                    overflowWrap: "anywhere",
                  }}
                >
                  {recibo.folio}
                </h1>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
                  {recibo.tipo === "compraventa"
                    ? "Recibo de Apartado — Compraventa"
                    : "Recibo de Apartado — Arrendamiento"}
                </p>
              </header>

              <div
                style={{
                  height: 3,
                  background: "linear-gradient(90deg, #C8102E, #9f1239)",
                  borderRadius: 99,
                  marginBottom: 20,
                }}
              />

              <section aria-labelledby="recibo-original">
                <h2
                  id="recibo-original"
                  style={{
                    margin: "0 0 8px",
                    color: "#1a1a2e",
                    fontSize: 15,
                    fontWeight: 800,
                  }}
                >
                  Recibo original
                </h2>
                <DetailRow label="Cliente" value={recibo.cliente_nombre} />
                <DetailRow label="Inmueble" value={recibo.inmueble} />
                <DetailRow label="Monto" value={fmt(montoOriginal)} highlighted />
                <DetailRow label="Fecha" value={formatDate(recibo.fecha)} />
                <DetailRow label="Emitido por" value="Emporio Inmobiliario" last />
              </section>

              {abonos.length > 0 && (
                <>
                  <section
                    aria-label="Resumen de pagos"
                    style={{
                      marginTop: 22,
                      padding: "14px 16px",
                      borderRadius: 10,
                      background: "#fff7ed",
                      border: "1px solid #fed7aa",
                    }}
                  >
                    <DetailRow label="Total acordado" value={fmt(totalAcordado)} />
                    <DetailRow label="Total recibido" value={fmt(totalRecibido)} />
                    <DetailRow
                      label={saldo > 0 ? "Saldo pendiente" : "Estado del pago"}
                      value={saldo > 0 ? fmt(saldo) : "Liquidado"}
                      highlighted={saldo > 0}
                      last
                    />
                  </section>

                  <section aria-labelledby="abonos-complementarios" style={{ marginTop: 24 }}>
                    <h2
                      id="abonos-complementarios"
                      style={{
                        margin: "0 0 12px",
                        color: "#1a1a2e",
                        fontSize: 15,
                        fontWeight: 800,
                      }}
                    >
                      Abonos complementarios ({abonos.length})
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {abonos.map((abono, index) => (
                        <article
                          key={abono.id || `${abono.fecha}-${index}`}
                          style={{
                            padding: "14px 16px",
                            border: "1px solid #e5e7eb",
                            borderRadius: 10,
                            background: "#fafafa",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 12,
                              marginBottom: 6,
                            }}
                          >
                            <span style={{ color: "#6b7280", fontSize: 11, fontWeight: 700 }}>
                              RECIBO COMPLEMENTARIO
                            </span>
                            <span
                              style={{
                                color: "#C8102E",
                                fontFamily: "monospace",
                                fontSize: 13,
                                fontWeight: 800,
                              }}
                            >
                              {recibo.folio}-A{String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <DetailRow label="Monto" value={fmt(abono.monto)} highlighted />
                          <DetailRow label="Fecha" value={formatDate(abono.fecha)} />
                          {abono.forma_pago && (
                            <DetailRow
                              label="Forma de pago"
                              value={formatPaymentMethod(abono.forma_pago)}
                            />
                          )}
                          {abono.recibido_por && (
                            <DetailRow label="Recibido por" value={abono.recibido_por} />
                          )}
                          {abono.notas && <DetailRow label="Notas" value={abono.notas} last />}
                        </article>
                      ))}
                    </div>
                  </section>
                </>
              )}

              <div
                style={{
                  marginTop: 24,
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: 10,
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 28 }}>✅</span>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#065f46" }}>
                    Documento verificado
                  </p>
                  <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>
                    {abonos.length === 0
                      ? "Este recibo se encuentra registrado en nuestro sistema."
                      : `El recibo original y ${
                          abonos.length === 1 ? "su abono" : "sus abonos"
                        } se encuentran registrados en nuestro sistema.`}
                  </p>
                </div>
              </div>
            </>
          )}
        </main>

        <p style={{ marginTop: 20, fontSize: 12, color: "#9ca3af", textAlign: "center" }}>
          emporioinmobiliario.com.mx · (222) 257-3237
        </p>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const folio = String(params?.folio || "").trim().toUpperCase();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!folio || !supabaseUrl || !supabaseAnonKey) {
    return { props: { recibo: null } };
  }

  try {
    const url = new URL("/rest/v1/recibos_apartado", supabaseUrl);
    url.searchParams.set("folio", `eq.${folio}`);
    url.searchParams.set(
      "select",
      "folio,tipo,cliente_nombre,inmueble,monto,monto_total_acordado,fecha,estatus,recibos_abonos(id,monto,fecha,forma_pago,recibido_por,notas,created_at)"
    );
    url.searchParams.set("recibos_abonos.order", "created_at.asc");
    url.searchParams.set("limit", "1");

    const res = await fetch(url, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Supabase respondió ${res.status}`);
    }

    const data = await res.json();
    const recibo = data?.[0] || null;

    return {
      props: {
        recibo: recibo
          ? {
              ...recibo,
              recibos_abonos: [...(recibo.recibos_abonos || [])].sort(
                (a, b) => new Date(a.created_at) - new Date(b.created_at)
              ),
            }
          : null,
      },
    };
  } catch (error) {
    console.error("No se pudo verificar el recibo en Supabase:", error);
    return { props: { recibo: null } };
  }
}
