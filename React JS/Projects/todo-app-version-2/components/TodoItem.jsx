import styles from "./TodoItem.module.css";

const TodoItem = ({ TodoName, TodoDate }) => {
  return (
    <div className={`$styles["todo-list"] container`}>
      <div className="row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
