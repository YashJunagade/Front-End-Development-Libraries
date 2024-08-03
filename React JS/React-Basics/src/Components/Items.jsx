import style from "./Items.module.css";

function Items({ item, handleClickBtn }) {
  return (
    <>
      <li className={style.list}>
        {item}
        <button onClick={handleClickBtn}>Buy</button>
      </li>
      {/* <li className={style["list"]}>{item}</li> */}
    </>
  );
}

export default Items;
