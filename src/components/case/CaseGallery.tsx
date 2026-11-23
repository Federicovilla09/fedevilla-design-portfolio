import type { CaseStudy } from "@/content/projects";
import CaseSection from "./CaseSection";
import Mockup from "./Mockup";
import styles from "./CaseGallery.module.css";

type CaseGalleryProps = {
  gallery: CaseStudy["gallery"];
};

export default function CaseGallery({ gallery }: CaseGalleryProps) {
  const { phone, panel, screens } = gallery;

  return (
    <CaseSection label={gallery.label} title={gallery.title} background="superficie">
      <div className={styles.layout}>
        {/* Izquierda: el celular grande (solo en escritorio) */}
        <div className={styles.phone}>
          <Mockup device="mobile" screen={phone} sizes="380px" />
        </div>

        {/* Derecha: el panel de escritorio y los celulares chicos */}
        <div className={styles.gallery}>
          <figure className={styles.panel}>
            <Mockup
              device="desktop"
              screen={panel.screen}
              url={panel.url}
              sizes="(min-width: 1024px) 770px, 90vw"
            />
            <figcaption className="t-small t-secundario">{panel.caption}</figcaption>
          </figure>

          <ul className={styles.screens}>
            {screens.map((screen) => (
              <li key={screen.src} className={screen.desktopOnly ? styles.desktopOnly : undefined}>
                <figure className={styles.screen}>
                  <Mockup device="mobile" screen={screen} sizes="(min-width: 1024px) 236px, 45vw" />
                  <figcaption className="t-small t-secundario">{screen.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CaseSection>
  );
}