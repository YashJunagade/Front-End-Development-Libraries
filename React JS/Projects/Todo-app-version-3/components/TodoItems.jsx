import TodoItem from "./TodoItem";

const TodoItems = ({ todoitems, handleDeleteTodo }) => {
  return (
    <>
      {todoitems.map((item) => (
        <TodoItem
          key={item.name}
          TodoName={item.name}
          TodoDate={item.dueDate}
          onTodoDelete={handleDeleteTodo}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
