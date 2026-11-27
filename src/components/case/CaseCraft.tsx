import ServiceCard from "@/components/ui/ServiceCard";
import type { CaseStudy } from "@/content/projects";
import CaseSection from "./CaseSection";
import styles from "./CaseCraft.module.css";

type CaseCraftProps = {
  craft: CaseStudy["craft"];
};

export default function CaseCraft({ craft }: CaseCraftProps) {
  return (
    <CaseSection
      label={craft.label}
      title={craft.title}
      intro={craft.intro}
      background="superficie"
    >
      <div className={styles.cards}>
        {craft.services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </CaseSection>
  );
}
