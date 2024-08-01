import Heading from "./Components/Heading";
import ItemList from "./Components/ItemList";
import ErrorMsg from "./Components/ErrorMsg";

function App() {
  let foodItems = ["Salad", "Milk", "butter", "seeds", "Ghee"];
  return (
    <>
      <Heading></Heading>
      <ErrorMsg foodItems={foodItems}></ErrorMsg>
      <ItemList foodItems={foodItems}></ItemList>
    </>
  );
}

export default App;
