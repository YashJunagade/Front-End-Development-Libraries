import styles from "./Key.module.css";

const Key = ({ BtnList }) => {
  return (
    <>
      {BtnList.map((btn) => (
        <button key={btn} className={styles["btn"]}>
          {btn}
        </button>
      ))}
    </>
  );
};

export default Key;
