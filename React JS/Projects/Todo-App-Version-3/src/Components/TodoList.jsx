import { TodoItemsContext } from "../store/todo-item-context";
import TodoItem from "./TodoItem";
import { useContext } from "react";

function TodoList() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem name={item.name} date={item.date} key={item.name} />
      ))}
    </>
  );
}

export default TodoList;
