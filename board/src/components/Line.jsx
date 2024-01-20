import styles from "../styles/Line.module.css";

import Square from "./Square";

export default function Line(props) {
  return (
    <div className={styles.line}>
      <Square black={props.black} />
      <Square black={!props.black} />
      <Square black={props.black} />
      <Square black={!props.black} />
      <Square black={props.black} />
      <Square black={!props.black} />
      <Square black={props.black} />
      <Square black={!props.black} />
    </div>
  );
}
