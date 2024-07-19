import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ TodoName, TodoDate, onTodoDelete }) => {
  return (
    <div className={styles["todo-list"]}>
      <div className={styles["todoname"]}>{TodoName}</div>
      <div className={styles["tododate"]}>{TodoDate}</div>
      <div className={styles["btn"]}>
        <button type="button" onClick={() => onTodoDelete(TodoName)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
