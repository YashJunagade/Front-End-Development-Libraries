import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "02/08/24",
    },
    {
      name: "tony",
      date: "03/08/24",
    },
  ];
  return (
    <div className="main">
      <AppName></AppName>
      <TodoInput></TodoInput>
      <TodoList todoItems={todoItems}></TodoList>
    </div>
  );
}

export default App;
