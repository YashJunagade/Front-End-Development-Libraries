const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
