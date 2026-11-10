import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "text";
  size?: "L" | "M";
  arrow?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "L",
  arrow = true,
  fullWidth = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[variant],
    styles[`size${size}`],
    fullWidth ? styles.fullWidth : "",
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {content}
    </button>
  );
}