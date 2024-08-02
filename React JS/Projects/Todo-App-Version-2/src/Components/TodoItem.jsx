function TodoItem({ name, date }) {
  return (
    <div className="todo-list">
      <p className="class1">{name}</p>
      <p className="class2">{date}</p>
      <button className="class3">Delete</button>
    </div>
  );
}

export default TodoItem;
