import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import styles from "./Folder.module.css";

// Cada color de carpeta define su relleno y el color de sus textos
const PALETTE = {
  suave: { fill: "var(--color-suave)", text: "var(--color-carbon)", meta: "var(--color-piedra)", number: "var(--color-oscuro)" },
  carbon: { fill: "var(--color-carbon)", text: "var(--color-calido)", meta: "var(--color-gris)", number: "var(--color-terracota)" },
  terracota: { fill: "var(--color-terracota)", text: "var(--color-carbon)", meta: "var(--color-carbon)", number: "var(--color-carbon)" },
};

type FolderProps = {
  project?: Project;
  variant?: "project" | "cta";
};

export default function Folder({ project, variant = "project" }: FolderProps) {
  // Carpeta punteada "Tu proyecto", que invita a escribir
  if (variant === "cta" || !project) {
    return (
      <Link href="/contacto" className={`${styles.folder} ${styles.cta}`}>
        <span className={styles.tab} aria-hidden="true" />
        <span className={styles.body} aria-hidden="true" />
        <span className={styles.front}>
          <span className={styles.number}>+</span>
          <span className={styles.name}>Tu proyecto</span>
          <span className={styles.meta}>Disponible · 2026</span>
        </span>
      </Link>
    );
  }

  const c = PALETTE[project.color];
  const vars = {
    "--folder-fill": c.fill,
    "--folder-text": c.text,
    "--folder-meta": c.meta,
    "--folder-number": c.number,
  } as React.CSSProperties;

  return (
    <Link href={`/proyectos/${project.slug}`} className={styles.folder} style={vars}>
      <span className={styles.tab} aria-hidden="true" />
      <span className={styles.body} aria-hidden="true" />
      <span className={styles.cover} aria-hidden="true">
        {project.cover ? (
          <Image src={project.cover} alt="" fill sizes="(max-width: 768px) 70vw, 240px" />
        ) : (
          <span className={styles.coverPlaceholder}>Portada del proyecto</span>
        )}
      </span>
      <span className={styles.front}>
        <span className={styles.number}>{project.number}</span>
        <span className={styles.name}>{project.name}</span>
        <span className={styles.meta}>{project.meta}</span>
      </span>
    </Link>
  );
}