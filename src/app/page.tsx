import HeroDeck from "@/components/project/HeroDeck";
import HeroTitles from "@/components/project/HeroTitles";
import { projects } from "@/content/projects";
import IndexBar from "@/components/layout/IndexBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.hero}>
      <span className={styles.halo} aria-hidden="true" />
      <HeroTitles />
      <HeroDeck projects={projects} />
      <p className={`t-small t-secundario ${styles.hint}`}>
        Tocá una carpeta para abrirla · deslizá hacia arriba para ver la siguiente
      </p>
      <IndexBar />
    </main>
  );
}