import Quote from "@/components/ui/Quote";
import type { CaseStudy } from "@/content/projects";
import CaseSection from "./CaseSection";
import styles from "./CaseReaders.module.css";

type CaseReadersProps = {
  readers: CaseStudy["readers"];
};

export default function CaseReaders({ readers }: CaseReadersProps) {
  return (
    <CaseSection
      label={readers.label}
      title={readers.title}
      intro={readers.intro}
      background="superficie"
    >
      <ul className={styles.quotes}>
        {readers.quotes.map((quote) => (
          <li key={quote.text}>
            <Quote text={quote.text} caption={quote.caption} />
          </li>
        ))}
      </ul>

      <p className={`t-h4 ${styles.highlight}`}>{readers.highlight}</p>
    </CaseSection>
  );
}