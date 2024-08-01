import style from "./Items.module.css";

function Items({ item }) {
  return (
    <>
      <li className={style.list}>{item}</li>
      {/* <li className={style["list"]}>{item}</li> */}
    </>
  );
}

export default Items;
