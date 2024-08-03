import Items from "./Items";

function ItemList({ foodItems }) {
  return (
    <ul>
      {foodItems.map((item) => (
        <Items
          key={item}
          item={item}
          handleClickBtn={() => alert(`${item} is bought`)}
        ></Items>
      ))}
    </ul>
  );
}

export default ItemList;
