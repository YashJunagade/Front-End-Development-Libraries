const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item"
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
