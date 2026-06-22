/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // Mejora compatibilidad y compresión en navegadores modernos sin
    // perder soporte en los que no soportan AVIF/WebP (Next.js hace el
    // fallback automático al formato original si el navegador no soporta
    // ninguno de estos).
    formats: ["image/avif", "image/webp"],
  },
};
module.exports = nextConfig;
