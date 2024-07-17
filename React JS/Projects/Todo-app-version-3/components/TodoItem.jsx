import styles from "./TodoItem.module.css";

const TodoItem = ({ TodoName, TodoDate }) => {
  return (
    <div className={styles["todo-list"]}>
      <div className={styles["todoname"]}>{TodoName}</div>
      <div className={styles["tododate"]}>{TodoDate}</div>
      <div className={styles["btn"]}>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
