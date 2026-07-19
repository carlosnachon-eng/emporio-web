import Head from "next/head";
import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";

const SITE_URL = "https://www.emporioinmobiliario.com.mx";
const SERVICE_URL = "/administracion-de-condominios-puebla";

export default function CondominioArticle({ article, related = [] }) {
  const canonical = `${SITE_URL}/blog/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: "Emporio Inmobiliario",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Emporio Inmobiliario",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: canonical },
    ],
  };
  const faqSchema = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <Head>
        <title>{article.seoTitle || `${article.title} | Emporio Inmobiliario`}</title>
        <meta name="description" content={article.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <meta property="article:published_time" content="2026-07-18" />
        <meta property="article:modified_time" content="2026-07-18" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      </Head>

      <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff" }}>
        <Navbar />
        <header style={{ background: "linear-gradient(125deg,#111827,#1a1a2e)", padding: "62px 24px 54px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <nav aria-label="Migas de pan" style={{ fontSize: 13, marginBottom: 24 }}>
              <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>Inicio</Link>
              <span style={{ color: "#4b5563", margin: "0 9px" }}>›</span>
              <Link href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</Link>
            </nav>
            <p style={{ color: "#fda4af", fontSize: 12, fontWeight: 800, letterSpacing: ".13em", textTransform: "uppercase", margin: "0 0 15px" }}>
              {article.eyebrow || "Control condominal"}
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(30px,5vw,48px)", lineHeight: 1.12, margin: "0 0 20px", maxWidth: 800 }}>
              {article.title}
            </h1>
            <p style={{ color: "#d1d5db", fontSize: 17, lineHeight: 1.75, margin: "0 0 24px", maxWidth: 760 }}>
              {article.description}
            </p>
            <p style={{ color: "#9ca3af", fontSize: 13, margin: 0 }}>
              Actualizado el 18 de julio de 2026 · {article.readTime || "7 min de lectura"} · Emporio Inmobiliario
            </p>
          </div>
        </header>

        <main style={{ maxWidth: 820, margin: "0 auto", padding: "52px 24px 68px" }}>
          {article.intro.map((paragraph) => (
            <p key={paragraph} style={{ color: "#374151", fontSize: 17, lineHeight: 1.9, margin: "0 0 22px" }}>{paragraph}</p>
          ))}

          <aside style={{ background: "#fff7f8", border: "1px solid #fecdd3", borderRadius: 16, padding: "22px 24px", margin: "34px 0 44px" }}>
            <strong style={{ display: "block", color: "#881337", marginBottom: 7 }}>Obtén un resultado antes de hablar con una administradora</strong>
            <p style={{ color: "#4b5563", lineHeight: 1.7, fontSize: 14, margin: "0 0 14px" }}>
              La evaluación inicial y la calculadora generan un Reporte Ejecutivo personalizado sin costo y sin compromiso.
            </p>
            <Link href={`${SERVICE_URL}#herramientas`} style={{ color: "#C8102E", fontWeight: 800, fontSize: 14 }}>
              Evaluar el control de mi condominio →
            </Link>
          </aside>

          {article.sections.map((section) => (
            <section key={section.title} style={{ marginBottom: 44 }}>
              <h2 style={{ color: "#1a1a2e", fontSize: 27, lineHeight: 1.25, margin: "0 0 18px" }}>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} style={{ color: "#4b5563", fontSize: 16, lineHeight: 1.85, margin: "0 0 17px" }}>{paragraph}</p>
              ))}
              {section.items?.length > 0 && (
                <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
                  {section.items.map((item) => (
                    <div key={item.title || item} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: "17px 19px" }}>
                      {typeof item === "string" ? (
                        <p style={{ color: "#374151", lineHeight: 1.7, margin: 0 }}>✓ {item}</p>
                      ) : (
                        <>
                          <h3 style={{ color: "#1a1a2e", fontSize: 16, margin: "0 0 6px" }}>{item.title}</h3>
                          <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {article.faqs?.length > 0 && (
            <section style={{ margin: "50px 0" }}>
              <h2 style={{ color: "#1a1a2e", fontSize: 27, marginBottom: 20 }}>Preguntas frecuentes</h2>
              {article.faqs.map((faq) => (
                <div key={faq.question} style={{ borderTop: "1px solid #e5e7eb", padding: "21px 0" }}>
                  <h3 style={{ color: "#1a1a2e", fontSize: 16, margin: "0 0 8px" }}>{faq.question}</h3>
                  <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{faq.answer}</p>
                </div>
              ))}
            </section>
          )}

          <section style={{ background: "#111827", color: "#fff", borderRadius: 20, padding: "34px 30px", margin: "52px 0" }}>
            <p style={{ color: "#fda4af", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 9px" }}>
              Diagnóstico de Control Condominal
            </p>
            <h2 style={{ fontSize: 25, lineHeight: 1.25, margin: "0 0 12px" }}>Convierte las observaciones en un plan de mejora</h2>
            <p style={{ color: "#d1d5db", fontSize: 15, lineHeight: 1.75, margin: "0 0 20px" }}>
              Identifica información disponible, riesgos, prioridades y condiciones de transición antes de tomar una decisión sobre la administración.
            </p>
            <Link href={SERVICE_URL} style={{ display: "inline-block", background: "#C8102E", color: "#fff", padding: "12px 19px", borderRadius: 9, fontWeight: 800, textDecoration: "none" }}>
              Conocer el Diagnóstico de Control Condominal
            </Link>
          </section>

          {related.length > 0 && (
            <nav aria-label="Artículos relacionados">
              <h2 style={{ color: "#1a1a2e", fontSize: 23, marginBottom: 17 }}>Continúa revisando el control de tu condominio</h2>
              <div style={{ display: "grid", gap: 11 }}>
                {related.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} style={{ border: "1px solid #e5e7eb", borderRadius: 11, padding: "15px 17px", color: "#1a1a2e", fontWeight: 700, textDecoration: "none" }}>
                    {item.title} <span style={{ color: "#C8102E" }}>→</span>
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
