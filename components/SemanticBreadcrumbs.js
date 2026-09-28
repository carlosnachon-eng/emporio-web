import Link from "next/link";
import { SITE_URL } from "../lib/siteArchitecture";

export default function SemanticBreadcrumbs({ items, dark = false }) {
  const allItems = [{ label: "Emporio", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="semantic-breadcrumbs">
        {allItems.map((item, index) => (
          <span key={`${item.href}-${index}`}>
            {index > 0 && <span aria-hidden="true"> / </span>}
            {index === allItems.length - 1
              ? <span aria-current="page">{item.label}</span>
              : <Link href={item.href}>{item.label}</Link>}
          </span>
        ))}
      </nav>
      <style jsx>{`
        .semantic-breadcrumbs {
          max-width: 1160px; margin: 0 auto; padding: 18px 28px;
          font: 600 12px/1.5 Montserrat, sans-serif; color: ${dark ? "#d1d5db" : "#6b7280"};
        }
        .semantic-breadcrumbs a { color: inherit; text-decoration: none; }
        .semantic-breadcrumbs a:hover { color: #c8102e; }
        @media(max-width:600px){ .semantic-breadcrumbs{padding:14px 20px} }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
