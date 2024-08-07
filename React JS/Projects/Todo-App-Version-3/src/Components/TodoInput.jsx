import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-item-context";

function TodoInput() {
  const itemName = useRef();
  const itemDate = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  function handleBtnClick(event) {
    event.preventDefault();
    addNewItem(itemName.current.value, itemDate.current.value);
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
