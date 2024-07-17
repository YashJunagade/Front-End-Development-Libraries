import Items from "./Items";
import style from "./FoodItems.module.css";
import { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className={style["ul-class"]}>
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
