"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Folder from "@/components/project/Folder";
import type { Project } from "@/content/projects";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { EASE_OUT, DURATION } from "@/lib/motion";
import styles from "@/app/page.module.css";

export default function HeroDeck({ projects }: { projects: Project[] }) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const reduce = useReducedMotion();

  // Orden actual del mazo (en mobile cambia al deslizar)
  const [order, setOrder] = useState(projects.map((p) => p.slug));
  // Carpeta abierta por toque
  const [active, setActive] = useState<string | null>(null);
  // Evita que soltar un arrastre cuente como toque
  const dragged = useRef(false);

  const list = isMobile
    ? order.map((slug) => projects.find((p) => p.slug === slug)!)
    : projects;

  const sendToBack = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]]);
    setActive(null);
  };

  return (
    <ul className={styles.deck} aria-label="Proyectos">
      {list.map((project, i) => {
        const isTop = i === 0;
        return (
          <motion.li
            key={project.slug}
            layout
            className={styles.item}
            style={{ zIndex: list.length - i }}
            initial={{ opacity: 0, y: reduce ? 0 : 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              default: { duration: DURATION.slow, ease: EASE_OUT, delay: 0.45 + i * 0.12 },
              layout: { duration: DURATION.base, ease: EASE_OUT },
            }}
            drag={isMobile && isTop && !reduce ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.6}
            onDragStart={() => {
              dragged.current = true;
            }}
            onDragEnd={(_, info) => {
              if (info.offset.y < -60 || info.velocity.y < -400) sendToBack();
              setTimeout(() => {
                dragged.current = false;
              }, 50);
            }}
            onClickCapture={(e) => {
              // Mobile: el primer toque abre la carpeta, el segundo entra al proyecto
              if (dragged.current || (isMobile && active !== project.slug)) {
                e.preventDefault();
                if (!dragged.current) setActive(project.slug);
              }
            }}
          >
            <Folder project={project} open={active === project.slug} />
          </motion.li>
        );
      })}

      <motion.li
        className={`${styles.item} ${styles.ctaItem}`}
        initial={{ opacity: 0, y: reduce ? 0 : 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.45 }}
      >
        <Folder variant="cta" />
      </motion.li>
    </ul>
  );
}