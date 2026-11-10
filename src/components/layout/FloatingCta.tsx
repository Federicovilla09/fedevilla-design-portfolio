"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import Button from "@/components/ui/Button";
import { EASE_OUT } from "@/lib/motion";
import styles from "./FloatingCta.module.css";

export default function FloatingCta() {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // En la página Proyectos sería redundante
  if (pathname === "/proyectos") return null;

  // En la Home espera a que entren las carpetas
  const delay = pathname === "/" ? 1.2 : 0.3;

  return (
    <motion.div
      className={styles.wrap}
      initial={{ y: reduce ? 0 : 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      <Button href="/proyectos">Ver proyectos</Button>
    </motion.div>
  );
}