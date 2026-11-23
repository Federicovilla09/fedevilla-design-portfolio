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

/** Una cita con su fuente */
export type QuoteData = {
  text: string;
  caption: string;
};

/** Un número grande con su explicación: "1 de 5", "100"… */
export type StatData = {
  value: string;
  description: string;
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
    quote: QuoteData;
  };
  pain: {
    label: string;
    title: string;
    intro: string;
    flowLabel: string;
    steps: string[];
    file: string; // el chip con el nombre del PDF
    stat: StatData;
    quote: QuoteData;
  };
  readers: {
    label: string;
    title: string;
    intro: string;
    quotes: QuoteData[]; // una lista de citas
    highlight: string; // el bloque terracota
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
      }, // ← acá termina story
      pain: {
        label: "02 · El dolor",
        title: "Cada libro nuevo era rehacer el catálogo.",
        intro:
          "Lo que más pesaba no era alquilar: era mostrar lo que tenía. Y saber qué estaba prestado dependía de fichas de papel.",
        flowLabel: "Lo que pasaba con cada libro nuevo",
        steps: [
          "Compra un libro nuevo.",
          "Edita el PDF a mano.",
          "Lo vuelve a mandar a cada clienta.",
          "Muchas no lo descargan en el celular.",
          "Le escriben igual para preguntar qué tiene.",
        ],
        file: "catalogo-libros.pdf · 17 páginas",
        stat: {
          value: "1 de 5",
          description:
            "Así calificó lo fácil que le resultaba actualizar su catálogo.",
        },
        quote: {
          text: "Me hace tedioso editarlo cada vez que compro libros nuevos, y enviarlo nuevamente.",
          caption: "La dueña de la biblioteca",
        },
      }, // ← acá termina pain
      readers: {
        label: "03 · Del otro lado",
        title: "Las lectoras querían elegir; el PDF les pedía paciencia.",
        intro:
          "Hablé con cinco clientas habituales: tenían ganas de leer, pero algunas abandonaban la búsqueda a mitad de camino porque recorrer el PDF se hacía pesado.",
        quotes: [
          { text: "Pensé en descargarlo después… y me olvidé.", caption: "Lectora de romance" },
          { text: "Un PDF no tiene filtros y es complicado.", caption: "Lectora de fantasía y policiales" },
          { text: "Me desmotivó la búsqueda.", caption: "Lectora de fantasía y policiales" },
          { text: "Capaz descubro alguno que no imaginaba.", caption: "Sobre lo que querría poder hacer" },
        ],
        highlight:
          "Lo que sí funcionaba: la recomendación personal, los recordatorios y coordinar todo por WhatsApp. Eso no había que tocarlo.",
      }, // ← acá termina readers
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