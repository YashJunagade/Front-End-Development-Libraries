import AppName from "./Components/AppName";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="main">
      <AppName></AppName>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
