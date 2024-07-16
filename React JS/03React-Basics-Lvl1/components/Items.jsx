import style from "./Items.module.css";

const Items = ({ foodItem, handleBuyButton }) => {
  return (
    <div className={style.list}>
      <li className="Li">{foodItem}</li>
      <button className={style.button} onClick={handleBuyButton}>
        Buy now
      </button>
    </div>
  );
};

export default Items;
