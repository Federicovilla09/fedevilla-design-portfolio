import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./CaseSection.module.css";

type CaseSectionProps = {
  label: string;
  title: string;
  intro?: string; // el párrafo gris debajo del título (no todas lo tienen)
  background?: "pagina" | "superficie"; // cálido o blanco, para alternar secciones
  children: React.ReactNode; // el contenido propio de cada sección
};

export default function CaseSection({
  label,
  title,
  intro,
  background = "pagina",
  children,
}: CaseSectionProps) {
  return (
    <section className={`${styles.section} ${styles[background]}`}>
      <div className={styles.inner}>
        <SectionHeader label={label} title={title} />
        {intro && <p className={`t-body-l t-secundario ${styles.intro}`}>{intro}</p>}
        {children}
      </div>
    </section>
  );
}