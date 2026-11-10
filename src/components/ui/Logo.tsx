import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = {
  variant?: "full" | "monogram";
};

export default function Logo({ variant = "full" }: LogoProps) {
  return (
    <Link href="/" className={styles.logo} aria-label="fedevilla.design, ir al inicio">
      <span className={styles.monogram} aria-hidden="true">
        fv
      </span>
      {variant === "full" && <span className={styles.name}>fedevilla.design</span>}
    </Link>
  );
}