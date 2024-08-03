import Heading from "./Components/Heading";
import ItemList from "./Components/ItemList";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Salad", "Milk", "butter", "seeds", "Ghee"];

  let [foodItems, setFoodItems] = useState([
    "Salad",
    "Milk",
    "butter",
    "seeds",
    "Ghee",
  ]);

  function onKeyDown(event) {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      setFoodItems([...foodItems, newFoodItem]);
      event.target.value = "";
    }
  }

  function onDeleteItem(item) {
    let deleteItem = foodItems.filter((foodItem) => foodItem !== item);
    setFoodItems(deleteItem);
  }

  return (
    <Container>
      <Heading></Heading>
      <ErrorMsg foodItems={foodItems}></ErrorMsg>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ItemList
        foodItems={foodItems}
        handleDeleteItem={onDeleteItem}
      ></ItemList>
    </Container>
  );
}

export default App;
