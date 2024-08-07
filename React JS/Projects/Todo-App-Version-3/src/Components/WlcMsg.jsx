import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-context";

function WlcMsg() {
  const { todoItems } = useContext(TodoItemsContext);
  return todoItems.length === 0 && <p>No task for today Enjoy!!</p>;
}

export default WlcMsg;
