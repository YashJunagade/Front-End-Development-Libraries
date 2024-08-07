import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-context";

function TodoItem({ name, date }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="todo-list">
      <p className="class1">{name}</p>
      <p className="class2">{date}</p>
      <button className="class3" onClick={() => deleteItem(name)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
