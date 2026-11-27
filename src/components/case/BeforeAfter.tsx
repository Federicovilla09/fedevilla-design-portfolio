"use client";

import { useRef, useState } from "react";
import type { CaseStudy } from "@/content/projects";
import { useMediaQuery } from "@/lib/useMediaQuery";
import Mockup from "./Mockup";
import PdfStack from "./PdfStack";
import styles from "./BeforeAfter.module.css";

type BeforeAfterProps = {
  before: CaseStudy["compare"]["before"];
  after: CaseStudy["compare"]["after"];
};

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  // Dónde está el divisor, de 0 a 100 (%). Arranca al medio.
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  // En escritorio el divisor se mueve de izquierda a derecha; en mobile, de arriba a abajo
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const vertical = !isDesktop;

  // Convierte la posición del dedo/mouse en un porcentaje del comparador
  function moveTo(clientX: number, clientY: number) {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return;
    const ratio = vertical ? (clientY - box.top) / box.height : (clientX - box.left) / box.width;
    setPosition(Math.min(100, Math.max(0, ratio * 100)));
  }

  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    // "Captura" el puntero: aunque el dedo se salga de la manija, la seguimos moviendo
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX, event.clientY);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      moveTo(event.clientX, event.clientY);
    }
  }

  // Teclado: flechas mueven de a 5 %, Inicio/Fin van a los extremos
  function handleKeyDown(event: React.KeyboardEvent) {
    const steps: Record<string, number> = {
      ArrowLeft: -5,
      ArrowUp: -5,
      ArrowRight: 5,
      ArrowDown: 5,
    };
    if (event.key in steps) {
      event.preventDefault(); // que la flecha no haga scroll
      setPosition((current) => Math.min(100, Math.max(0, current + steps[event.key])));
    } else if (event.key === "Home") {
      setPosition(0);
    } else if (event.key === "End") {
      setPosition(100);
    }
  }

  // El "después" se recorta desde el divisor: lo que queda antes del divisor muestra el "antes"
  const clip = vertical ? `inset(${position}% 0 0 0)` : `inset(0 0 0 ${position}%)`;

  return (
    <div
      ref={containerRef}
      className={styles.compare}
      // Una variable CSS con la posición: la usan el divisor y la manija
      style={{ "--position": `${position}%` } as React.CSSProperties}
    >
      {/* Antes: el PDF */}
      <div className={`${styles.layer} ${styles.before}`}>
        <div className={styles.half}>
          <span className={styles.tag}>{before.label}</span>
          <div className={styles.pdf}>
            <PdfStack className={styles.pdfDrawing} />
            <span className={`t-small ${styles.file}`}>{before.file}</span>
          </div>
        </div>
      </div>

      {/* Después: la app, recortada según el divisor */}
      <div className={`${styles.layer} ${styles.after}`} style={{ clipPath: clip }}>
        <div className={`${styles.half} ${styles.afterHalf}`}>
          <span className={`${styles.tag} ${styles.tagDark}`}>{after.label}</span>
          <div className={styles.phone}>
            <Mockup device="mobile" screen={after.screen} sizes="(min-width: 1024px) 250px, 50vw" />
          </div>
        </div>
      </div>

      <span className={styles.divider} aria-hidden="true" />

      <button
        type="button"
        role="slider"
        aria-label="Comparar antes y después"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} % del antes visible`}
        aria-orientation={vertical ? "vertical" : "horizontal"}
        className={styles.handle}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onKeyDown={handleKeyDown}
      >
        <span aria-hidden="true">{vertical ? "↕" : "‹ ›"}</span>
      </button>
    </div>
  );
}
