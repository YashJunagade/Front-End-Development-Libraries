import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import WlcMsg from "./Components/WlcMsg";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  let handleNewItem = (itemName, itemDate) => {
    setTodoItems((currItem) => [
      ...currItem,
      { name: itemName, date: itemDate },
    ]);
  };

  function handleDeleteBtn(iName) {
    const afterDelete = todoItems.filter((item) => item.name !== iName);
    setTodoItems(afterDelete);
  }

  return (
    <div className="main">
      <AppName></AppName>
      <TodoInput onNewItem={handleNewItem}></TodoInput>
      {todoItems.length === 0 && <WlcMsg></WlcMsg>}
      <TodoList todoItems={todoItems} onDeleteBtn={handleDeleteBtn}></TodoList>
    </div>
  );
}

export default App;
