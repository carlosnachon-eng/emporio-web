export default function Logo({ size = 40, dark = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/logo.png"
        alt="Emporio Inmobiliario"
        style={{ height: size * 1.4, width: "auto", objectFit: "contain" }}
      />
    </div>
  );
}
