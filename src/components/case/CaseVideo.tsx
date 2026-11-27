import { getImageProps } from "next/image";
import type { VideoSource } from "@/content/projects";
import styles from "./CaseVideo.module.css";

type CaseVideoProps = {
  label: string;
  alt: string;
  desktop: VideoSource;
  mobile: VideoSource;
};

export default function CaseVideo({ label, alt, desktop, mobile }: CaseVideoProps) {
  // Una portada para escritorio (horizontal) y otra para celular (vertical).
  // getImageProps arma los tamaños optimizados de cada una para usarlos en un <picture>.
  const common = { alt, priority: true };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: desktop.poster, width: 1440, height: 900, sizes: "1200px" });
  const {
    props: { srcSet: mobileSrcSet, ...imageProps },
  } = getImageProps({ ...common, src: mobile.poster, width: 393, height: 852, sizes: "90vw" });

  return (
    <figure className={styles.frame}>
      {/* El navegador elige la portada según el ancho de la pantalla */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
        <source srcSet={mobileSrcSet} />
        <img {...imageProps} alt={alt} className={styles.poster} />
      </picture>

      {/* Velo oscuro de abajo, para que la etiqueta se lea */}
      <span className={styles.veil} aria-hidden="true" />

      <figcaption className={`t-small ${styles.label}`}>{label}</figcaption>
    </figure>
  );
}
