import type { Screen } from "@/content/projects";
import Mockup from "./Mockup";
import styles from "./PhonePair.module.css";

type PhonePairProps = {
  screens: Screen[];
};

export default function PhonePair({ screens }: PhonePairProps) {
  return (
    <div className={styles.pair}>
      {screens.map((screen) => (
        <Mockup
          key={screen.src}
          device="mobile"
          screen={screen}
          sizes="(min-width: 1024px) 260px, 45vw"
        />
      ))}
    </div>
  );
}