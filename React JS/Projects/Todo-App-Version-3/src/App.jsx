import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import WlcMsg from "./Components/WlcMsg";
import TodoItemsContextProvider from "./store/todo-item-context";
import "./App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="main">
        <AppName></AppName>
        <TodoInput></TodoInput>
        <WlcMsg></WlcMsg>
        <TodoList></TodoList>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
