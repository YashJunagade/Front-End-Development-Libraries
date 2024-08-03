import style from "./ItemList.module.css";

function ItemList({ foodItems, handleDeleteItem }) {
  return (
    <ul>
      {foodItems.map((foodItem, index) => (
        <li key={index}>
          {foodItem}
          <button onClick={() => handleDeleteItem(foodItem)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
