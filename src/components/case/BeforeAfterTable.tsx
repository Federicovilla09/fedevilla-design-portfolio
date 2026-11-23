import type { BeforeAfterData } from "@/content/projects";
import styles from "./BeforeAfterTable.module.css";

type BeforeAfterTableProps = {
  rows: BeforeAfterData[];
};

export default function BeforeAfterTable({ rows }: BeforeAfterTableProps) {
  return (
    <table className={styles.table}>
      {/* Encabezados de columna: se ven solo en escritorio */}
      <thead className={styles.head}>
        <tr className={styles.row}>
          <th scope="col" className="t-label t-secundario">Tarea</th>
          <th scope="col" className="t-label t-secundario">Antes</th>
          <th scope="col" className="t-label t-secundario">Ahora</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.task} className={styles.row}>
            <th scope="row" className="t-h4">{row.task}</th>
            <td className="t-body t-secundario">
              <span className={styles.cellLabel}>Antes: </span>
              {row.before}
            </td>
            <td className="t-body">
              <span className={styles.cellLabel}>Ahora: </span>
              {row.after}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}