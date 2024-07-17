import styles from "./OutputScreen.module.css";

const OutputScreen = ({ displayVal }) => {
  return (
    <>
      <input
        type="text"
        className={styles["output-screen"]}
        value={displayVal}
        readOnly
      />
    </>
  );
};

export default OutputScreen;
