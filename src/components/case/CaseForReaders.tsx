import type { CaseStudy } from "@/content/projects";
import CaseSection from "./CaseSection";
import FeatureList from "./FeatureList";
import PhonePair from "./PhonePair";

type CaseForReadersProps = {
  forReaders: CaseStudy["forReaders"];
};

export default function CaseForReaders({ forReaders }: CaseForReadersProps) {
  return (
    <CaseSection
      label={forReaders.label}
      title={forReaders.title}
      aside={<PhonePair screens={forReaders.screens} />}
    >
      <FeatureList items={forReaders.features} />
    </CaseSection>
  );
}