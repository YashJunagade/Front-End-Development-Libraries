import Items from "./Items";

function ItemList({ foodItems }) {
  return (
    <ul>
      {foodItems.map((item) => (
        <Items key={item} item={item}></Items>
      ))}
    </ul>
  );
}

export default ItemList;
