import Link from "next/link";
import Chip from "@/components/ui/Chip";
import type { CaseStudy, Project } from "@/content/projects";
import styles from "./CaseHero.module.css";
import TagGroup from "./TagGroup";
import Mockup from "./Mockup";

type CaseHeroProps = {
  project: Project;
  caseStudy: CaseStudy;
};

export default function CaseHero({ project, caseStudy }: CaseHeroProps) {
  const { hero } = caseStudy;

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* Migas de pan: de dónde viene esta página */}
        <nav
          aria-label="Migas de pan"
          className={`t-small t-secundario ${styles.breadcrumb}`}
        >
          <Link href="/proyectos">← Proyectos</Link>
          <span aria-hidden="true">/</span>
          <span>{project.number}</span>
        </nav>

        {/* Número grande + estado + fecha */}
        <div className={styles.meta}>
          <span className="t-numero-l" aria-hidden="true">
            {project.number}
          </span>
          <Chip active>
            ● {project.status} · {caseStudy.version}
          </Chip>
          <span className="t-small t-secundario">{caseStudy.date}</span>
        </div>

        <p className="t-label t-acento">{caseStudy.kind}</p>
        <h1>{project.name}</h1>
        <p className="t-h3 t-secundario">{caseStudy.tagline}</p>
        <p className={`t-body-l t-secundario ${styles.summary}`}>
          {caseStudy.summary}
        </p>

        {/* Etiquetas: Rol, Plataforma, Stack */}
        <div className={styles.tags}>
          {caseStudy.tags.map((group) => (
            <TagGroup
              key={group.label}
              label={group.label}
              items={group.items}
            />
          ))}
        </div>

        {/* Composición: escritorio de fondo, celular adelante, círculo blur detrás */}
        <div className={styles.mockups}>
          <span className={styles.halo} aria-hidden="true" />
          <Mockup
            device="desktop"
            screen={hero.desktop}
            url={hero.url}
            sizes="(min-width: 1440px) 1008px, 86vw"
            className={styles.desktop}
            priority
          />
          <Mockup
            device="mobile"
            screen={hero.mobile}
            sizes="(min-width: 1440px) 288px, 34vw"
            className={styles.mobile}
            priority
          />
        </div>
      </div>
    </section>
  );
}
