/** Un grupo de etiquetas del caso: "Rol", "Plataforma", "Stack"… */
export type TagGroupData = {
  label: string;
  items: string[];
};

/** Captura de una pantalla real que se muestra dentro de un Mockup */
export type Screen = {
  src: string;
  alt: string;
};

/** Contenido del caso de estudio. Lo vamos completando sección por sección. */
export type CaseStudy = {
  kind: string; // "Caso de estudio · producto end to end"
  version: string; // "v1.0"
  date: string; // "Sept. 2026"
  tagline: string; // "De un PDF a una app propia."
  summary: string;
  tags: TagGroupData[];
  hero: {
    url: string; // el texto que aparece en la barra del navegador
    desktop: Screen;
    mobile: Screen;
  };
  story: {
    label: string;
    title: string;
    paragraphs: string[];
    quote: { text: string; caption: string };
  };
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  meta: string;
  status: "En producción" | "En curso" | "2026";
  color: "suave" | "carbon" | "terracota";
  cover?: string;
  caseStudy?: CaseStudy; // opcional: no todos los proyectos tienen caso todavía
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
    caseStudy: {
      kind: "Caso de estudio · producto end to end",
      version: "v1.0",
      date: "Sept. 2026",
      tagline: "De un PDF a una app propia.",
      summary:
        "La historia de una biblioteca personal que se alquila por WhatsApp, y de cómo dejó de depender de un PDF.",
      tags: [
        {
          label: "Rol",
          items: ["Investigación", "Diseño UX/UI", "Desarrollo"],
        },
        { label: "Plataforma", items: ["Web app", "Mobile first"] },
        { label: "Stack", items: ["Figma", "React", "Supabase", "Vercel"] },
      ],
      hero: {
        url: "alquiler-de-libros.vercel.app/catalogo",
        desktop: {
          src: "/images/projects/letrita/catalogo-escritorio.webp",
          alt: "Catálogo en escritorio: recomendados, filtros por género y recién llegados.",
        },
        mobile: {
          src: "/images/projects/letrita/catalogo-mobile.webp",
          alt: "Catálogo en el celular: buscador, libro recomendado y recién llegados.",
        },
      }, // ← acá termina hero
      story: {
        label: "01 · La historia",
        title: "Cada libro, una lectura compartida.",
        paragraphs: [
          "Ella no alquila un stock: alquila su biblioteca. Cada libro lo leyó, le puso su propio puntaje y anotó qué lo hace especial. Algunos todavía guardan subrayados y notas en los márgenes.",
          "Empezó a prestarlos porque cree que los libros son para eso: para leerlos, compartirlos y contagiar las ganas de leer. Cuando una lectora le pregunta qué leer, no le manda una lista: le recomienda el que va con ella.",
        ],
        quote: {
          text: "Hay que inyectarse cada día de fantasía para no morir de realidad.",
          caption: "La frase que acompaña a la biblioteca",
        },
      },
    },
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

/** Busca un proyecto por su slug (la parte final de la URL). */
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
