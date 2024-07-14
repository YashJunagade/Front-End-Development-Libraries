import "./App.css";

function App() {
  let items = ["egg", "milk", "bread", "butter"];

  if (items.length === 0) {
    return <h1>i'm hungry.</h1>;
  }
  return (
    <>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
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
