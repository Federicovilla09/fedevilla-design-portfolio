import HeroDeck from "@/components/project/HeroDeck";
import HeroTitles from "@/components/project/HeroTitles";
import IndexBar from "@/components/layout/IndexBar";
import Button from "@/components/ui/Button";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.hero}>
      <span className={styles.halo} aria-hidden="true" />
      <HeroTitles />
      <HeroDeck projects={projects} />

      <div className={styles.mobileFooter}>
        <p className="t-small t-secundario">Tocá o deslizá las carpetas</p>
        <Button href="/proyectos" fullWidth>
          Ver todos los proyectos
        </Button>
      </div>

      <IndexBar />
    </main>
  );
}