import Button from "@/components/ui/Button";
import styles from "./ContactCTA.module.css";

type ContactCTAProps = {
  title?: string;
  text?: string;
  cta?: string;
};

export default function ContactCTA({
  title = "¿Tenés algo parecido en tu negocio?",
  text = "Contame tu idea y vemos juntos el próximo paso.",
  cta = "Escribime y charlamos",
}: ContactCTAProps) {
  return (
    <section className={styles.section} data-theme="dark">
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <p className="t-body-l t-secundario">{text}</p>
        <div className={styles.action}>
          <Button href="/contacto">{cta}</Button>
        </div>
      </div>
    </section>
  );
}
