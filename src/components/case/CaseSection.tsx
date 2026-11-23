import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./CaseSection.module.css";

type CaseSectionProps = {
  label: string;
  title: string;
  intro?: string; // el párrafo gris debajo del título
  background?: "pagina" | "superficie"; // cálido o blanco, para alternar secciones
  aside?: React.ReactNode; // contenido de la columna derecha (ej: mockups)
  children: React.ReactNode; // el contenido propio de cada sección
};

export default function CaseSection({
  label,
  title,
  intro,
  background = "pagina",
  aside,
  children,
}: CaseSectionProps) {
  // El contenido principal: igual en los dos casos
  const main = (
    <>
      <SectionHeader label={label} title={title} />
      {intro && <p className={`t-body-l t-secundario ${styles.intro}`}>{intro}</p>}
      {children}
    </>
  );

  return (
    <section className={`${styles.section} ${styles[background]}`}>
      {aside ? (
        // Con columna lateral: texto a la izquierda, aside a la derecha
        <div className={`${styles.inner} ${styles.columns}`}>
          <div className={styles.main}>{main}</div>
          <div>{aside}</div>
        </div>
      ) : (
        // Sin columna lateral: todo apilado a lo ancho
        <div className={styles.inner}>{main}</div>
      )}
    </section>
  );
}