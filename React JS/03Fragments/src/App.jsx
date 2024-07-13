import "./App.css";

function App() {
  let items = ["egg", "milk", "bread", "butter"];
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

/* there are two syntax of fragments 
  1. <React.Fragments></React.Fragments>
  2. <></>
*/
export default App;
