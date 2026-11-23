import type { CaseStudy } from "@/content/projects";
import BeforeAfterTable from "./BeforeAfterTable";
import CaseSection from "./CaseSection";
import MockupPair from "./MockupPair";

type CaseLibraryProps = {
  library: CaseStudy["library"];
};

export default function CaseLibrary({ library }: CaseLibraryProps) {
  return (
    <CaseSection label={library.label} title={library.title} background="superficie">
      <BeforeAfterTable rows={library.rows} />
      <MockupPair screens={library.screens} />
    </CaseSection>
  );
}