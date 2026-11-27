import { twoDigits } from "@/lib/format";
import styles from "./ProcessStep.module.css";

type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

// Se usa adentro de un <ol>: devuelve un <li>
export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <li className={styles.step}>
      <span className="t-numero-m" aria-hidden="true">
        {twoDigits(number)}
      </span>
      <h3 className="t-h4">{title}</h3>
      <p className="t-small t-secundario">{description}</p>
    </li>
  );
}