import ErrorMsg from "../components/ErrorMsg";
import FoodItems from "../components/FoodItems";
import Container from "../components/Container";
import InputBox from "../components/InputBox";
import "./App.css";
import { useState } from "react";

function App() {
  let [itemsList, setItemList] = useState([]);

  const addNewFood = (event) => {
    if (event.key === "Enter") {
      let newFood = event.target.value;
      let newItemsList = [...itemsList, newFood];
      setItemList(newItemsList);
      event.target.value = "";
    }
  };

  return (
    <Container>
      <h1>Item List</h1>
      <InputBox addNewFood={addNewFood}></InputBox>
      <ErrorMsg items={itemsList}></ErrorMsg>
      <FoodItems items={itemsList}></FoodItems>
    </Container>
  );
}

/* Conditional Rendering

1. if-else statements
  if (items.length === 0) {
    return <h1>i'm hungry.</h1>;
  }

2. ternery operator
3. logical operator

*/

/* Map Method 

      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

*/

/* there are two syntax of fragments 
  1. <React.Fragments></React.Fragments>
  2. <></>
*/
export default App;
