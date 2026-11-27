import Image from "next/image";
import type { ServiceData } from "@/content/projects";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({
  title,
  description,
  items,
  illustration,
}: ServiceData) {
  return (
    <article className={styles.card}>
      {illustration && (
        <Image
          src={illustration}
          alt=""
          width={318}
          height={140}
          className={styles.illustration}
        />
      )}
      <h3 className="t-h4">{title}</h3>
      <p className="t-small t-secundario">{description}</p>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item} className="t-small">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
