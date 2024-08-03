import Heading from "./Components/Heading";
import ItemList from "./Components/ItemList";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  let foodItems = ["Salad", "Milk", "butter", "seeds", "Ghee"];

  function handleOnChange(event) {
    console.log(event.target.value);
  }
  return (
    <Container>
      <Heading></Heading>
      <ErrorMsg foodItems={foodItems}></ErrorMsg>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <ItemList foodItems={foodItems}></ItemList>
    </Container>
  );
}

export default App;
