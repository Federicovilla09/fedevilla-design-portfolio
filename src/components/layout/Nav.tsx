"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/sobre-mi#proceso", label: "Proceso" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll de fondo y permite cerrar con Escape mientras el menú está abierto
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={styles.nav}>
      <Logo />

      {/* Escritorio */}
      <nav className={styles.links} aria-label="Principal">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="t-body">
            {l.label}
          </Link>
        ))}
      </nav>
      <div className={styles.desktopCta}>
        <Button href="/proyectos">Proyectos</Button>
      </div>

      {/* Mobile */}
      <div className={styles.mobileActions}>
        <button
          className={styles.menuButton}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(!open)}
        >
          <span className={`${styles.line} ${open ? styles.lineTopOpen : ""}`} />
          <span className={`${styles.line} ${styles.lineShort} ${open ? styles.lineBottomOpen : ""}`} />
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className={styles.overlay} data-theme="dark">
          <nav className={styles.overlayLinks} aria-label="Menú">
            {LINKS.map((l, i) => (
              <Link key={l.href} href={l.href} className={styles.overlayLink} onClick={() => setOpen(false)}>
                <span className="t-numero-m">0{i + 1}</span>
                <span className="t-h2">{l.label}</span>
              </Link>
            ))}
          </nav>
          <Button href="/proyectos" fullWidth>
            Ver proyectos
          </Button>
        </div>
      )}
    </header>
  );
}