import Quote from "@/components/ui/Quote";
import SectionHeader from "@/components/ui/SectionHeader";
import type { CaseStudy } from "@/content/projects";
import styles from "./CaseStory.module.css";

type CaseStoryProps = {
  story: CaseStudy["story"];
};

export default function CaseStory({ story }: CaseStoryProps) {
  return (
    <section className={styles.section}>
      <div className={styles.columns}>
        <SectionHeader label={story.label} title={story.title} />

        <div className={styles.content}>
          {story.paragraphs.map((text) => (
            <p key={text} className="t-body-l t-secundario">
              {text}
            </p>
          ))}
          <Quote text={story.quote.text} caption={story.quote.caption} />
        </div>
      </div>
    </section>
  );
}