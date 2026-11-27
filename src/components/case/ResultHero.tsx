import Button from "@/components/ui/Button";
import type { CaseStudy } from "@/content/projects";
import CaseVideo from "./CaseVideo";
import styles from "./ResultHero.module.css";

type ResultHeroProps = {
  name: string;
  result: CaseStudy["result"];
};

export default function ResultHero({ name, result }: ResultHeroProps) {
  return (
    <section className={styles.hero} data-theme="dark">
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={`t-h4 ${styles.status}`}>
            <span className={styles.dot} aria-hidden="true" />
            {result.status}
          </p>

          <h1 className={styles.title}>{name}</h1>
          <p className={`t-body-l t-secundario ${styles.summary}`}>{result.summary}</p>

          <div className={styles.actions}>
            <Button href={result.liveUrl}>Probalo en vivo</Button>
            <Button href="#proceso" variant="secondary" arrow={false}>
              Ver el proceso ↓
            </Button>
          </div>
          <p className={`t-small t-secundario ${styles.note}`}>{result.liveNote}</p>
        </div>

        <CaseVideo
          label={result.video.label}
          alt={result.video.alt}
          desktop={result.video.desktop}
          mobile={result.video.mobile}
        />
      </div>
    </section>
  );
}
