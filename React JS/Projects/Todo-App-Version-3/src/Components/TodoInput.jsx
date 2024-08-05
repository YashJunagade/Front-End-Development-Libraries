import { useState } from "react";

function TodoInput({ onNewItem }) {
  let [itemName, setItemName] = useState("");
  let [itemDate, setItemDate] = useState("");

  function handleItemName(event) {
    setItemName(event.target.value);
  }
  function handleItemDate(event) {
    setItemDate(event.target.value);
  }
  function handleBtnClick() {
    onNewItem(itemName, itemDate);
    setItemName("");
    setItemDate("");
  }
  return (
    <div className="input-todo">
      <input
        className="class1"
        type="text"
        placeholder="Enter Todo here"
        value={itemName}
        onChange={handleItemName}
      />
      <input
        className="class2"
        type="date"
        value={itemDate}
        onChange={handleItemDate}
      />
      <button className="class3" onClick={handleBtnClick}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
