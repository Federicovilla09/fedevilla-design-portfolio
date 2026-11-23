import styles from "./ProcessStep.module.css";

type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

// Se usa adentro de un <ol>: devuelve un <li>
export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  // 1 → "01", 2 → "02"… (completa con ceros a la izquierda hasta tener 2 dígitos)
  const label = String(number).padStart(2, "0");

  return (
    <li className={styles.step}>
      <span className="t-numero-m" aria-hidden="true">
        {label}
      </span>
      <h3 className="t-h4">{title}</h3>
      <p className="t-small t-secundario">{description}</p>
    </li>
  );
}