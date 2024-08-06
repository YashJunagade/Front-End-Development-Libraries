import { useRef } from "react";

function TodoInput({ onNewItem }) {
  const itemName = useRef();
  const itemDate = useRef();

  function handleBtnClick(event) {
    event.preventDefault();
    onNewItem(itemName.current.value, itemDate.current.value);
    itemName.current.value = "";
    itemDate.current.value = "";
  }
  return (
    <form className="input-todo" onSubmit={handleBtnClick}>
      <input
        className="class1"
        type="text"
        ref={itemName}
        placeholder="Enter Todo here"
      />
      <input className="class2" type="date" ref={itemDate} />
      <button className="class3">Add</button>
    </form>
  );
}

export default TodoInput;
