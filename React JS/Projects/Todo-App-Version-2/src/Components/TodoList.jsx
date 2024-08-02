import TodoItem from "./TodoItem";

function TodoList({ todoItems }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem name={item.name} date={item.date} key={item.name}></TodoItem>
      ))}
    </>
  );
}

export default TodoList;
