import styles from "./Display.module.css";

const Display = ({ currVal }) => {
  return (
    <input className={styles.display} type="text" value={currVal} readOnly />
  );
};

export default Display;
