import Quote from "@/components/ui/Quote";
import type { CaseStudy } from "@/content/projects";
import { twoDigits } from "@/lib/format";
import CaseSection from "./CaseSection";
import styles from "./CaseChanges.module.css";

type CaseChangesProps = {
  changes: CaseStudy["changes"];
};

export default function CaseChanges({ changes }: CaseChangesProps) {
  return (
    <CaseSection label={changes.label} title={changes.title}>
      <ol className={styles.cards}>
        {changes.items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <span className="t-numero-m" aria-hidden="true">
              {twoDigits(index + 1)}
            </span>
            <h3 className="t-h3">{item.title}</h3>
            <p className="t-body t-secundario">{item.description}</p>
          </li>
        ))}
      </ol>

      <Quote text={changes.quote.text} caption={changes.quote.caption} />
    </CaseSection>
  );
}
