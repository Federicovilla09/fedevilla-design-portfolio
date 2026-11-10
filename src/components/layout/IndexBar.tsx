import Chip from "@/components/ui/Chip";
import styles from "./IndexBar.module.css";

export default function IndexBar() {
  return (
    <div className={styles.bar}>
      <span className="t-small">● Índice</span>
      <Chip>Colección de trabajos · 2026</Chip>
      <span className="t-h4">#00</span>
    </div>
  );
}