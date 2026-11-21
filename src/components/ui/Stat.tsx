import type { StatData } from "@/content/projects";
import styles from "./Stat.module.css";

export default function Stat({ value, description }: StatData) {
  return (
    <div className={styles.stat}>
      <p className="t-h1">{value}</p>
      <p className="t-small t-secundario">{description}</p>
    </div>
  );
}