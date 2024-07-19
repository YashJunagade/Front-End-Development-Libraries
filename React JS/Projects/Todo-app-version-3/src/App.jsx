import AppName from "../components/AppName";
import AddTodo from "../components/AddTodo";
import TodoItems from "../components/TodoItems";
import TodoItem from "../components/TodoItem";
import WelcomeMessage from "../components/WelcomeMessages";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const handleDeleteTodo = (todoItemname) => {
    const itemRemoved = todoItems.filter((item) => item.name !== todoItemname);
    setTodoItems(itemRemoved);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoitems={todoItems}
        handleDeleteTodo={handleDeleteTodo}
      ></TodoItems>
    </center>
  );
}

export default App;
