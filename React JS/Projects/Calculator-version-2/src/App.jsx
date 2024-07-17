import OutputScreen from "../components/OutputScreen";
import Keys from "../components/Keys";
import "./App.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const getValue = (btn) => {
    if (btn === "C") {
      setCalVal("");
    } else if (btn === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + btn;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className="main-container">
      <OutputScreen displayVal={calVal}></OutputScreen>
      <Keys onBtnClick={getValue}></Keys>
    </div>
  );
}

export default App;
