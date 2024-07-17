import AppName from "../components/AppName";
import AddTodo from "../components/AddTodo";
import TodoItems from "../components/TodoItems";
import TodoItem from "../components/TodoItem";
import "./App.css";

function App() {
  const todoitems = [
    {
      name: "Buy Milk",
      dueDate: "15/07/24",
    },
    {
      name: "Go to College",
      dueDate: "15/07/24",
    },
    {
      name: "Complete React Course",
      dueDate: "20/07/24",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoitems={todoitems}></TodoItems>
    </center>
  );
}

export default App;
