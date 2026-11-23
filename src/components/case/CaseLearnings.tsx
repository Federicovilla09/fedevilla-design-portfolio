import ProcessStep from "@/components/ui/ProcessStep";
import type { CaseStudy } from "@/content/projects";
import CaseSection from "./CaseSection";
import styles from "./CaseLearnings.module.css";

type CaseLearningsProps = {
  learnings: CaseStudy["learnings"];
};

export default function CaseLearnings({ learnings }: CaseLearningsProps) {
  return (
    <CaseSection label={learnings.label} title={learnings.title} intro={learnings.intro}>
      <ol className={styles.principles}>
        {learnings.principles.map((principle, index) => (
          <ProcessStep
            key={principle.title}
            number={index + 1}
            title={principle.title}
            description={principle.description}
          />
        ))}
      </ol>
    </CaseSection>
  );
}