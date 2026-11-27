import styles from "./Chip.module.css";

type ChipProps = {
  children: React.ReactNode;
  active?: boolean;
  href?: string; // si tiene href, el chip es un link
};

export default function Chip({ children, active = false, href }: ChipProps) {
  const className = `${styles.chip} ${active ? styles.active : ""}`;

  if (href) {
    // Los links externos se abren en otra pestaña
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={`${className} ${styles.link}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <span className={className}>{children}</span>;
}