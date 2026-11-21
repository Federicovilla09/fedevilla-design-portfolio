import styles from "./NumberedItem.module.css";

type NumberedItemProps = {
  number: number;
  children: React.ReactNode;
};

// Se usa adentro de un <ol>: por eso devuelve un <li>
export default function NumberedItem({ number, children }: NumberedItemProps) {
  return (
    <li className={styles.item}>
      <span className={`t-h4 ${styles.circle}`} aria-hidden="true">
        {number}
      </span>
      <span className="t-body">{children}</span>
    </li>
  );
}