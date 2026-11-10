export type Project = {
  slug: string;
  number: string;
  name: string;
  meta: string;
  status: "En producción" | "En curso" | "2026";
  color: "suave" | "carbon" | "terracota";
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "biblioteca-de-letrita",
    number: "01",
    name: "Biblioteca de Letrita",
    meta: "UX/UI + Dev · En producción",
    status: "En producción",
    color: "suave",
    cover: "/images/projects/letrita/cover.png",
  },
  {
    slug: "actitud",
    number: "02",
    name: "Actitud · App de socios",
    meta: "UX/UI · En curso",
    status: "En curso",
    color: "carbon",
  },
  {
    slug: "fedevilla-design",
    number: "03",
    name: "fedevilla.design",
    meta: "Identidad · Instagram",
    status: "2026",
    color: "terracota",
  },
];