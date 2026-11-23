import type { MockupSet } from "@/content/projects";
import Mockup from "./Mockup";
import styles from "./MockupPair.module.css";

type MockupPairProps = {
  screens: MockupSet;
  halo?: boolean; // círculo blur detrás (solo el hero lo usa)
  priority?: boolean; // true si se ve apenas carga la página
};

export default function MockupPair({ screens, halo = false, priority = false }: MockupPairProps) {
  return (
    <div className={styles.pair}>
      {halo && <span className={styles.halo} aria-hidden="true" />}
      <Mockup
        device="desktop"
        screen={screens.desktop}
        url={screens.url}
        sizes="(min-width: 1440px) 1008px, 86vw"
        className={styles.desktop}
        priority={priority}
      />
      <Mockup
        device="mobile"
        screen={screens.mobile}
        sizes="(min-width: 1440px) 288px, 34vw"
        className={styles.mobile}
        priority={priority}
      />
    </div>
  );
}