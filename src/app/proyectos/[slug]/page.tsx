import { notFound } from "next/navigation";
import CaseHero from "@/components/case/CaseHero";
import { getProject } from "@/content/projects";
import CaseStory from "@/components/case/CaseStory";

export default async function CasePage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  // Si el proyecto no existe, o todavía no tiene caso → 404
  if (!project?.caseStudy) notFound();

  return (
    <main>
      <CaseHero project={project} caseStudy={project.caseStudy} />
      <CaseStory story={project.caseStudy.story} />
    </main>
  );
}