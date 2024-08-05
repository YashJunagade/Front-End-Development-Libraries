import TodoItem from "./TodoItem";

function TodoList({ todoItems, onDeleteBtn }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          name={item.name}
          date={item.date}
          key={item.name}
          onDeleteBtn={onDeleteBtn}
        ></TodoItem>
      ))}
    </>
  );
}

export default TodoList;
