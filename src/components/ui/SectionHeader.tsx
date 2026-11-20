import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  label: string; // "01 · La historia"
  title: string; // "Cada libro, una lectura compartida."
};

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <p className="t-label t-secundario">{label}</p>
      <h2>{title}</h2>
    </header>
  );
}