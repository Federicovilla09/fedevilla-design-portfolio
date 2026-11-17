import Chip from "@/components/ui/Chip";
import type { TagGroupData } from "@/content/projects";
import styles from "./TagGroup.module.css";

export default function TagGroup({ label, items }: TagGroupData) {
  return (
    <div className={styles.group}>
      <p className="t-label t-secundario">{label}</p>
      <ul className={styles.chips}>
        {items.map((item) => (
          <li key={item}>
            <Chip>{item}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}