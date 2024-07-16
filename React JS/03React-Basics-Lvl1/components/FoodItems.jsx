import Items from "./Items";
import style from "./FoodItems.module.css";

const FoodItems = ({ items }) => {
  return (
    <ul className={style["ul-class"]}>
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          handleBuyButton={() => {
            alert(`bought the ${item}`);
          }}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
