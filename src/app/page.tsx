import Folder from "@/components/project/Folder";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.hero}>
      <span className={styles.halo} aria-hidden="true" />

      <div className={styles.titles}>
        <h1 className="t-display">Portfolio</h1>
        <p className="t-small t-secundario">Diseñador UX/UI que también desarrolla · 2026</p>
      </div>

      <ul className={styles.deck} aria-label="Proyectos">
        {projects.map((project, i) => (
          <li key={project.slug} className={styles.item} style={{ zIndex: projects.length - i }}>
            <Folder project={project} />
          </li>
        ))}
        <li className={`${styles.item} ${styles.ctaItem}`}>
          <Folder variant="cta" />
        </li>
      </ul>
    </main>
  );
}