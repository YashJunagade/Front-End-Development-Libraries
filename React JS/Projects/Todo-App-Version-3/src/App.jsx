import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import WlcMsg from "./Components/WlcMsg";
import { TodoItemsContext } from "./store/todo-item-context";
import "./App.css";
import { useReducer } from "react";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  let addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  function deleteItem(itemName) {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };

    dispatchTodoItems(deleteItemAction);
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
