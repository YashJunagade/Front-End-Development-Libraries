import style from "./Items.module.css";

function Items({ item }) {
  function handleClickBtn() {
    alert(`${item} is bought`);
  }

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
