import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  obtenerProyecto,
  registrarProyectoEvento,
} from "../lib/proyectosAnalytics";

function clasificarEnlace(anchor) {
  const href = anchor.getAttribute("href") || "";

  if (href.includes("wa.me/")) return "whatsapp";
  if (href.startsWith("tel:")) return "telefono";
  if (href.includes("/partners/registro")) return "registro_partner";
  if (href.includes("/partners/login")) return "login_partner";
  if (href === "#disponibilidad" || href.endsWith("#disponibilidad")) {
    return "disponibilidad";
  }

  return null;
}

function etiquetaCta(anchor) {
  return (
    anchor.dataset.proyectoCta ||
    anchor.textContent?.replace(/\s+/g, " ").trim().slice(0, 100) ||
    "sin-etiqueta"
  );
}

export default function ProyectosAnalytics() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const proyecto = obtenerProyecto(router.asPath);
    if (!proyecto) return;

    registrarProyectoEvento(proyecto, "visita", {
      titulo: document.title,
    });

    const registrarClick = (event) => {
      const anchor = event.target.closest?.("a");
      if (!anchor) return;

      const tipo = clasificarEnlace(anchor);
      if (!tipo) return;

      registrarProyectoEvento(proyecto, tipo, {
        cta: etiquetaCta(anchor),
        href: (anchor.getAttribute("href") || "").slice(0, 300),
      });
    };

    document.addEventListener("click", registrarClick, true);
    return () => document.removeEventListener("click", registrarClick, true);
  }, [router.asPath, router.isReady]);

  return null;
}
