import TodoItem from "./TodoItem";

const TodoItems = ({ todoitems }) => {
  return (
    <>
      {todoitems.map((item) => (
        <TodoItem
          key={item.name}
          TodoName={item.name}
          TodoDate={item.dueDate}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
