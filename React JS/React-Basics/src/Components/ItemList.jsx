import Items from "./Items";

function ItemList({ foodItems }) {
  return (
    <ul>
      <Items foodItems={foodItems}></Items>
    </ul>
  );
}

export default ItemList;
