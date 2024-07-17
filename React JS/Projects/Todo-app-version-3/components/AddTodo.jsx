import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className={styles["container"]}>
      <input
        type="text"
        className={styles["text-input"]}
        placeholder="enter your task"
      />
      <div className="col-4">
        <input type="date" className={styles["date-input"]} />
      </div>
      <div className={styles["col"]}>
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
