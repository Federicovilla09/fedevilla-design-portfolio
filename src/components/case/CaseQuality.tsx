import Stat from "@/components/ui/Stat";
import type { CaseStudy } from "@/content/projects";
import CaseSection from "./CaseSection";
import styles from "./CaseQuality.module.css";

type CaseQualityProps = {
  quality: CaseStudy["quality"];
};

export default function CaseQuality({ quality }: CaseQualityProps) {
  return (
    <CaseSection label={quality.label} title={quality.title}>
      {/* Puntajes de Lighthouse */}
      <h3 className="t-label t-secundario">{quality.scoresLabel}</h3>
      <ul className={styles.scores}>
        {quality.scores.map((score) => (
          <li key={score.description}>
            <Stat value={score.value} description={score.description} />
          </li>
        ))}
      </ul>

      {/* Ajustes */}
      <h3 className="t-label t-secundario">{quality.adjustmentsLabel}</h3>
      <ul className={styles.adjustments}>
        {quality.adjustments.map((adjustment) => (
          <li key={adjustment.title} className={styles.adjustment}>
            <h4 className="t-h4">{adjustment.title}</h4>
            <p className="t-small t-secundario">{adjustment.description}</p>
          </li>
        ))}
      </ul>
    </CaseSection>
  );
}
