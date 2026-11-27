import type { CaseStudy } from "@/content/projects";
import BeforeAfter from "./BeforeAfter";
import CaseSection from "./CaseSection";

type CaseCompareProps = {
  compare: CaseStudy["compare"];
};

export default function CaseCompare({ compare }: CaseCompareProps) {
  return (
    <CaseSection label={compare.label} title={compare.title} background="superficie">
      <BeforeAfter before={compare.before} after={compare.after} />
      <p className="t-small t-secundario">{compare.hint}</p>
    </CaseSection>
  );
}
