import { notFound } from "next/navigation";
import CaseHero from "@/components/case/CaseHero";
import CaseLearnings from "@/components/case/CaseLearnings";
import CasePain from "@/components/case/CasePain";
import CaseReaders from "@/components/case/CaseReaders";
import CaseStory from "@/components/case/CaseStory";
import CaseTabs from "@/components/case/CaseTabs";
import ProcessIntro from "@/components/case/ProcessIntro";
import { getProject, projects } from "@/content/projects";

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
    <main>
      <CaseTabs
        number={project.number}
        name={project.name}
        next={next ? { slug: next.slug, name: next.name } : undefined}
        resultado={
          // Provisorio: el hero actual, hasta que armemos el Resultado nuevo
          <CaseHero project={project} caseStudy={caseStudy} />
        }
        proceso={
          <>
            <ProcessIntro process={caseStudy.process} />
            <CaseStory story={caseStudy.story} />
            <CasePain pain={caseStudy.pain} />
            <CaseReaders readers={caseStudy.readers} />
            <CaseLearnings learnings={caseStudy.learnings} />
          </>
        }
      />
    </main>
  );
}