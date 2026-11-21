import Chip from "@/components/ui/Chip";
import NumberedItem from "@/components/ui/NumberedItem";
import Quote from "@/components/ui/Quote";
import SectionHeader from "@/components/ui/SectionHeader";
import Stat from "@/components/ui/Stat";
import type { CaseStudy } from "@/content/projects";
import styles from "./CasePain.module.css";

type CasePainProps = {
  pain: CaseStudy["pain"];
};

export default function CasePain({ pain }: CasePainProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader label={pain.label} title={pain.title} />
        <p className={`t-body-l t-secundario ${styles.intro}`}>{pain.intro}</p>

        <div className={styles.columns}>
          {/* Izquierda: el flujo paso a paso */}
          <div className={styles.flow}>
            <p className="t-label t-secundario">{pain.flowLabel}</p>
            <ol className={styles.steps}>
              {pain.steps.map((step, index) => (
                <NumberedItem key={step} number={index + 1}>
                  {step}
                </NumberedItem>
              ))}
            </ol>
          </div>

          {/* Derecha: los datos que lo prueban */}
          <div className={styles.data}>
            <div>
              <Chip>{pain.file}</Chip>
            </div>
            <Stat value={pain.stat.value} description={pain.stat.description} />
            <Quote text={pain.quote.text} caption={pain.quote.caption} />
          </div>
        </div>
      </div>
    </section>
  );
}