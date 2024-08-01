function Items({ foodItems }) {
  return (
    <>
      {foodItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default Items;
