import { notFound } from "next/navigation";
import CaseChanges from "@/components/case/CaseChanges";
import CaseCompare from "@/components/case/CaseCompare";
import CaseCraft from "@/components/case/CaseCraft";
import CaseLearnings from "@/components/case/CaseLearnings";
import CasePain from "@/components/case/CasePain";
import CaseQuality from "@/components/case/CaseQuality";
import CaseReaders from "@/components/case/CaseReaders";
import CaseStory from "@/components/case/CaseStory";
import CaseTabs from "@/components/case/CaseTabs";
import ResultHero from "@/components/case/ResultHero";
import ContactCTA from "@/components/layout/ContactCTA";
import Footer from "@/components/layout/Footer";
import ProcessIntro from "@/components/case/ProcessIntro";
import { getProject, projects } from "@/content/projects";
import CaseGallery from "@/components/case/CaseGallery";

// Le dice a Next qué páginas generar en el build: una por cada proyecto con caso
export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export default async function CasePage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  // Si el proyecto no existe, o todavía no tiene caso → 404
  if (!project?.caseStudy) notFound();

  const { caseStudy } = project;

  // El próximo proyecto que tenga caso (si no hay ninguno, no se muestra el botón)
  const next = projects.find((p) => p.caseStudy && p.slug !== project.slug);

  return (
    <>
      <main>
        <CaseTabs
          number={project.number}
          name={project.name}
          next={next ? { slug: next.slug, name: next.name } : undefined}
          resultado={
            <>
              <ResultHero name={project.name} result={caseStudy.result} />
              <CaseCompare compare={caseStudy.compare} />
              <CaseChanges changes={caseStudy.changes} />
            </>
          }
          proceso={
            <>
              <ProcessIntro process={caseStudy.process} />
              <CaseStory story={caseStudy.story} />
              <CasePain pain={caseStudy.pain} />
              <CaseReaders readers={caseStudy.readers} />
              <CaseLearnings learnings={caseStudy.learnings} />
              <CaseGallery gallery={caseStudy.gallery} />
              <CaseCraft craft={caseStudy.craft} />
              <CaseQuality quality={caseStudy.quality} />
            </>
          }
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}