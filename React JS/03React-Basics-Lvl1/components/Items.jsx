import style from "./Items.module.css";

const Items = ({ foodItem }) => {
  return (
    <div className={style.list}>
      <li className="Li">{foodItem}</li>
      <button
        className={style.button}
        onClick={() => alert(`You bought the ${foodItem}.`)}
      >
        Buy now
      </button>
    </div>
  );
};

export default Items;
