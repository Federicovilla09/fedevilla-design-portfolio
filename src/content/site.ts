// Datos generales del sitio (los usan el Footer y otras partes)

export type SiteLink = {
  label: string;
  href: string; // vacío = todavía no lo tengo, no se muestra
};

export const FOOTER_NAV: SiteLink[] = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Proceso", href: "/sobre-mi#proceso" },
  { label: "Contacto", href: "/contacto" },
];

export const SOCIAL_LINKS: SiteLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/fedevilla.design" },
  { label: "LinkedIn", href: "" }, // pendiente
  { label: "Email", href: "" }, // pendiente: "mailto:tu@email.com"
];

export const COPYRIGHT_YEAR = 2026;
