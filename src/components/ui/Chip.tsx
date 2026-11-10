import styles from "./Chip.module.css";

type ChipProps = {
  children: React.ReactNode;
  active?: boolean;
};

export default function Chip({ children, active = false }: ChipProps) {
  return <span className={`${styles.chip} ${active ? styles.active : ""}`}>{children}</span>;
}