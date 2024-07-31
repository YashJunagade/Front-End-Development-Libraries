function ItemList() {
  let foodItems = ["Salad", "Milk", "butter", "seeds", "Ghee"];

  return (
    <>
      {foodItems.length == 0 && <h1>I'm hungry</h1>}
      <ul>
        {foodItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
