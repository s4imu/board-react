import styles from "../styles/Line.module.css";

import Square from "./Square";

export default function Line() {
  return (
    <div className={styles.line}>
      <Square />
      <Square black />
      <Square />
      <Square black />
      <Square />
      <Square black />
      <Square />
      <Square black />
    </div>
  );
}
