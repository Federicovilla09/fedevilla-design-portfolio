import type { StepData } from "@/content/projects";
import styles from "./FeatureList.module.css";

type FeatureListProps = {
  items: StepData[];
};

export default function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <h3 className="t-h4">{item.title}</h3>
          <p className="t-body t-secundario">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}