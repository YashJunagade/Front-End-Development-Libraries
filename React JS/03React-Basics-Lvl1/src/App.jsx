import ErrorMsg from "../components/ErrorMsg";
import FoodItems from "../components/FoodItems";
import Container from "../components/Container";
import "./App.css";

function App() {
  let itemsList = ["egg", "milk", "bread", "butter"];
  return (
    <Container>
      <h1>Item List</h1>
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
