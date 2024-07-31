function ItemList() {
  let foodItems = ["Salad", "Milk", "butter", "seeds", "Ghee"];

  return (
    <>
      <ul>
        {foodItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
