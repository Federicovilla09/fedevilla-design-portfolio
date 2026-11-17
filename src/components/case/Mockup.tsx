import Image from "next/image";
import type { Screen } from "@/content/projects";
import styles from "./Mockup.module.css";

type MockupProps = {
  device: "desktop" | "mobile";
  screen: Screen;
  url?: string; // solo para escritorio
  sizes: string; // qué ancho ocupa en pantalla (para que next/image elija el tamaño justo)
  className?: string;
  priority?: boolean; // true = cargarla primero, porque se ve apenas entrás
};

export default function Mockup({ device, screen, url, sizes, className = "", priority }: MockupProps) {
  const image = (
    <Image src={screen.src} alt={screen.alt} fill sizes={sizes} priority={priority} className={styles.image} />
  );

  if (device === "mobile") {
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <div className={styles.phone}>
          <div className={styles.phoneScreen}>{image}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.browser}>
        <div className={styles.bar} aria-hidden="true">
          <span className={styles.dots}>
            <span />
            <span />
            <span />
          </span>
          {url && <span className={styles.url}>{url}</span>}
        </div>
        <div className={styles.browserScreen}>{image}</div>
      </div>
    </div>
  );
}