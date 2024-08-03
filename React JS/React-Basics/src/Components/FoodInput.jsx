const FoodInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item"
      onChange={(event) => console.log(event.target.value)}
    />
  );
};

export default FoodInput;
