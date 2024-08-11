import Controls from "./components/controls";
import Display from "./components/Display";
import "./App.css";

function App() {
  return (
    <>
      <div id="quote-box">
        <Display></Display>
        <Controls></Controls>
      </div>
    </>
  );
}

export default App;
