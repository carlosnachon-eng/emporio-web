export default function Logo({ size = 40, dark = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/IMG_7034.jpeg"
        alt="Emporio Inmobiliario"
        style={{ height: size * 1.4, width: "auto", objectFit: "contain" }}
      />
    </div>
  );
}
