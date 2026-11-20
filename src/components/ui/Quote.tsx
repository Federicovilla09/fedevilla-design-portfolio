import styles from "./Quote.module.css";

type QuoteProps = {
  text: string;
  caption?: string; // opcional: no todas las citas tienen fuente
};

export default function Quote({ text, caption }: QuoteProps) {
  return (
    <figure className={styles.quote}>
      <span className={`t-h2 ${styles.mark}`} aria-hidden="true">
        “
      </span>
      <blockquote className="t-h4">{text}</blockquote>
      {caption && <figcaption className="t-small t-secundario">{caption}</figcaption>}
    </figure>
  );
}