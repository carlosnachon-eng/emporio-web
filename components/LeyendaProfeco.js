export default function LeyendaProfeco() {
  return (
    <aside
      aria-label="Aviso informativo PROFECO"
      style={{
        padding: "24px 32px",
        background: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <p
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          fontSize: 10.5,
          color: "#6b7280",
          lineHeight: 1.65,
          textAlign: "center",
        }}
      >
        La información presentada en este anuncio es de carácter informativo y referencial; no
        constituye una oferta vinculante ni sustituye la información que se proporcione en el
        contrato correspondiente. En cumplimiento de la normatividad de la Procuraduría Federal
        del Consumidor (PROFECO) en materia de publicidad inmobiliaria, Emporio Inmobiliario se
        compromete a que la información aquí mostrada sea veraz y comprobable.
      </p>
    </aside>
  );
}
