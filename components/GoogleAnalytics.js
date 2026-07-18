import Script from "next/script";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : "";

export default function GoogleAnalytics() {
  if (!MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        id="ga4-bootstrap"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', '${MEASUREMENT_ID}', {
              send_page_view: true,
              debug_mode: window.location.hostname.endsWith('.vercel.app')
            });
          `,
        }}
      />
      <Script
        id="ga4-library"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
      />
    </>
  );
}
