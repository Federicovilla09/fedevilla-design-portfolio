import styles from "./page.module.css";

/* Página de prueba de tokens y tipografía.
   Temporal: se reemplaza por la Home en la etapa 3. */

const textStyles = [
  { className: "display", name: "Display", sizes: "84 → 200", sample: "Portfolio" },
  { className: "h1", name: "H1", sizes: "44 → 112", sample: "Biblioteca de Letrita" },
  { className: "h2", name: "H2", sizes: "32 → 56", sample: "Cómo trabajo" },
  { className: "h3", name: "H3", sizes: "22 → 32", sample: "Del problema a la pantalla" },
  { className: "h4", name: "H4", sizes: "18 → 22", sample: "Investigación y prototipo" },
  {
    className: "body-l",
    name: "Body L",
    sizes: "15 → 19",
    sample: "Diseñador UX/UI que también desarrolla. Mirá los proyectos y escribime.",
  },
  {
    className: "body",
    name: "Body",
    sizes: "14 → 16",
    sample: "Cada proyecto arranca entendiendo a quién le sirve y qué tiene que resolver.",
  },
  {
    className: "small",
    name: "Small",
    sizes: "12 → 13",
    sample: "Diseñador UX/UI que también desarrolla · 2026",
  },
  { className: "label", name: "Label", sizes: "11 → 13", sample: "UX/UI + Dev · En producción" },
  { className: "boton", name: "Botón", sizes: "14 → 15", sample: "Ver proyectos →" },
];

const semanticColors = [
  "fondo-pagina",
  "fondo-superficie",
  "texto-primario",
  "texto-secundario",
  "borde-default",
  "accion-primaria",
  "acento-decorativo",
  "acento-texto",
];

const radii = ["xs", "sm", "md", "lg", "xl", "pill"];

function TypeSpecimen() {
  return (
    <ul className={styles.specimen}>
      {textStyles.map((style) => (
        <li key={style.className} className={styles.row}>
          <p className={`label ${styles.meta}`}>
            {style.name} · {style.sizes}
          </p>
          <p className={style.className}>{style.sample}</p>
        </li>
      ))}
    </ul>
  );
}

function Numbers() {
  return (
    <div className={styles.numbers}>
      <div>
        <p className={`label ${styles.meta}`}>Número L · 48 → 96</p>
        <p className={`numero-l ${styles.accent}`}>01 02 03</p>
      </div>
      <div>
        <p className={`label ${styles.meta}`}>Número M · 32 → 48</p>
        <p className={`numero-m ${styles.accent}`}>01 02 03</p>
      </div>
    </div>
  );
}

function Swatches() {
  return (
    <>
      <ul className={styles.swatches}>
        {semanticColors.map((token) => (
          <li key={token} className={styles.swatch}>
            <span
              className={styles.chip}
              style={{ backgroundColor: `var(--${token})` }}
              aria-hidden="true"
            />
            <span className="small">{token}</span>
          </li>
        ))}
      </ul>
      <ul className={styles.radii}>
        {radii.map((radius) => (
          <li key={radius} className={styles.swatch}>
            <span
              className={styles.radius}
              style={{ borderRadius: `var(--radius-${radius})` }}
              aria-hidden="true"
            />
            <span className="small">{radius}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Home() {
  return (
    <main>
      <section className={styles.section} aria-labelledby="claro">
        <header className={styles.header}>
          <p className={`label ${styles.accent}`}>● Sistema de diseño</p>
          <h1 id="claro" className="h2">
            Modo claro
          </h1>
          <p className={`small ${styles.meta}`}>
            Achicá la ventana de 1440 a 390 px para ver cómo escala la tipografía.
          </p>
        </header>
        <TypeSpecimen />
        <Numbers />
        <Swatches />
        <button type="button" className={`boton ${styles.button}`}>
          Probar el foco
        </button>
      </section>

      <section data-theme="dark" className={styles.section} aria-labelledby="oscuro">
        <header className={styles.header}>
          <p className={`label ${styles.accent}`}>● data-theme=&quot;dark&quot;</p>
          <h2 id="oscuro" className="h2">
            Modo oscuro
          </h2>
        </header>
        <TypeSpecimen />
        <Numbers />
        <Swatches />
        <button type="button" className={`boton ${styles.button}`}>
          Probar el foco
        </button>
      </section>
    </main>
  );
}
