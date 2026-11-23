"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./CaseTabs.module.css";

type Tab = "resultado" | "proceso";

const TABS: { id: Tab; label: string }[] = [
  { id: "resultado", label: "Resultado" },
  { id: "proceso", label: "Proceso" },
];

type CaseTabsProps = {
  number: string;
  name: string;
  next?: { slug: string; name: string }; // el próximo proyecto con caso (si hay)
  resultado: React.ReactNode; // contenido de la pestaña Resultado
  proceso: React.ReactNode; // contenido de la pestaña Proceso
};

export default function CaseTabs({ number, name, next, resultado, proceso }: CaseTabsProps) {
  // Qué pestaña está activa. Arranca en "resultado".
  const [active, setActive] = useState<Tab>("resultado");

  // Referencias a los botones, para poder moverles el foco con el teclado
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(tab: Tab) {
    setActive(tab);
    window.scrollTo({ top: 0 }); // cada pestaña se empieza a leer desde arriba
  }

  // Con las flechas ← → se pasa de una pestaña a la otra (así funcionan las tabs accesibles)
  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + TABS.length) % TABS.length;

    select(TABS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <div className={styles.bar}>
        <nav aria-label="Migas de pan" className={`t-small t-secundario ${styles.breadcrumb}`}>
          <Link href="/proyectos">← Proyectos</Link>
          <span aria-hidden="true">/</span>
          <span>
            {number} · {name}
          </span>
        </nav>

        <div role="tablist" aria-label="Vista del caso" className={styles.tabs}>
          {TABS.map((tab, index) => {
            const selected = active === tab.id;

            return (
              <button
                key={tab.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls={`panel-${tab.id}`}
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                className={`t-h4 ${styles.tab} ${selected ? styles.active : ""}`}
                onClick={() => select(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {next && (
          <Link href={`/proyectos/${next.slug}`} className={`t-boton ${styles.next}`}>
            <span className={styles.nextLong}>Siguiente proyecto</span>
            <span className={styles.nextShort}>Siguiente</span>
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>

      {/* Las dos pestañas están en el HTML; la que no está activa queda oculta con "hidden" */}
      <div role="tabpanel" id="panel-resultado" aria-labelledby="tab-resultado" hidden={active !== "resultado"}>
        {resultado}
      </div>
      <div role="tabpanel" id="panel-proceso" aria-labelledby="tab-proceso" hidden={active !== "proceso"}>
        {proceso}
      </div>
    </>
  );
}