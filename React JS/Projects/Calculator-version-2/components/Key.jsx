import styles from "./Key.module.css";

const Key = ({ BtnList, onBtnClick }) => {
  return (
    <>
      {BtnList.map((btn) => (
        <button
          key={btn}
          className={styles["btn"]}
          onClick={() => onBtnClick(btn)}
        >
          {btn}
        </button>
      ))}
    </>
  );
};

export default Key;
