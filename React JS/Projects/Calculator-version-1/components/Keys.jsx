import Key from "./Key";
import styles from "./Keys.module.css";

const Keys = () => {
  const BtnList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles["calculator-keys"]}>
      <Key BtnList={BtnList}></Key>
    </div>
  );
};

export default Keys;
