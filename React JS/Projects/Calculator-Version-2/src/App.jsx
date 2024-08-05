import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [inputVal, setInputVal] = useState("10");

  function handleOnBtnClick(btnVal) {
    if (btnVal === "C") {
      setInputVal("");
    } else if (btnVal === "=") {
      setInputVal(eval(inputVal));
    } else {
      setInputVal(inputVal + btnVal);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display currVal={inputVal}></Display>
      <ButtonsContainer onBtnClick={handleOnBtnClick}></ButtonsContainer>
    </div>
  );
}

export default App;
