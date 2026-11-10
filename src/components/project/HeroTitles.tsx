"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT, DURATION } from "@/lib/motion";
import styles from "@/app/page.module.css";

export default function HeroTitles() {
  const reduce = useReducedMotion();
  const from = { opacity: 0, y: reduce ? 0 : 24 };

  return (
    <div className={styles.titles}>
      <motion.h1
        className="t-display"
        initial={from}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.1 }}
      >
        Portfolio
      </motion.h1>
      <motion.p
        className="t-small t-secundario"
        initial={from}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.3 }}
      >
        Diseñador UX/UI que también desarrolla · 2026
      </motion.p>
    </div>
  );
}