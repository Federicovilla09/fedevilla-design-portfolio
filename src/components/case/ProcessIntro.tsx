import type { CaseStudy } from "@/content/projects";
import styles from "./ProcessIntro.module.css";

type ProcessIntroProps = {
  process: CaseStudy["process"];
};

export default function ProcessIntro({ process }: ProcessIntroProps) {
  return (
    <section className={styles.intro}>
      <div className={styles.inner}>
        <p className="t-label t-acento">{process.label}</p>
        <h2 className="t-h1">{process.title}</h2>
        <p className="t-body-l t-secundario">{process.intro}</p>
      </div>
    </section>
  );
}