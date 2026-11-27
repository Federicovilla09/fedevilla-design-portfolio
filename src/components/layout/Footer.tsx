import Link from "next/link";
import Chip from "@/components/ui/Chip";
import Logo from "@/components/ui/Logo";
import { COPYRIGHT_YEAR, FOOTER_NAV, SOCIAL_LINKS } from "@/content/site";
import styles from "./Footer.module.css";

export default function Footer() {
  // Solo las redes que ya tienen link
  const social = SOCIAL_LINKS.filter((link) => link.href);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.brand}>
            <Logo />
            <p className="t-small t-secundario">
              Diseño de productos digitales, del research al código.
            </p>
          </div>

          <nav aria-label="Pie de página" className={styles.column}>
            <p className="t-label t-secundario">Navegación</p>
            <ul className={styles.links}>
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="t-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <p className="t-label t-secundario">Redes</p>
            <ul className={styles.social}>
              {social.map((link) => (
                <li key={link.label}>
                  <Chip href={link.href}>{link.label}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <p className="t-small t-secundario">© {COPYRIGHT_YEAR} fedevilla.design</p>
          <p className="t-small t-secundario">Hecho en Argentina</p>
        </div>
      </div>
    </footer>
  );
}
