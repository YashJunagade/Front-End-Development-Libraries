import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import WlcMsg from "./Components/WlcMsg";
import { TodoItemsContext } from "./store/todo-item-context";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  let addNewItem = (itemName, itemDate) => {
    setTodoItems((currItem) => [
      ...currItem,
      { name: itemName, date: itemDate },
    ]);
  };

  function deleteItem(iName) {
    const afterDelete = todoItems.filter((item) => item.name !== iName);
    setTodoItems(afterDelete);
  }

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <div className="main">
        <AppName></AppName>
        <TodoInput></TodoInput>
        <WlcMsg></WlcMsg>
        <TodoList></TodoList>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
