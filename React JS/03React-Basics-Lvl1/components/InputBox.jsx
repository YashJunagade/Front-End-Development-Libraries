import style from "./InputBox.module.css";

const InputBox = ({ addNewFood, addFood }) => {
  return (
    <div className={style["input-box"]}>
      <input
        className={style["input"]}
        type="text"
        placeholder="Enter healthy food"
        onKeyDown={addNewFood}
      />
    </div>
  );
};

export default InputBox;
