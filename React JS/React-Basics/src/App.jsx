import Heading from "./Components/Heading";
import ItemList from "./Components/ItemList";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";

function App() {
  let foodItems = ["Salad", "Milk", "butter", "seeds", "Ghee"];
  return (
    <Container>
      <Heading></Heading>
      <ErrorMsg foodItems={foodItems}></ErrorMsg>
      <ItemList foodItems={foodItems}></ItemList>
    </Container>
  );
}

export default App;
