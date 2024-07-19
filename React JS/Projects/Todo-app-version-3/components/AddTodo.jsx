import { useState } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoname, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddBtnClick = () => {
    onNewItem(todoname, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className={styles["container"]}>
      <input
        type="text"
        className={styles["text-input"]}
        placeholder="enter your task"
        onChange={handleNameChange}
        value={todoname}
      />
      <div className="col-4">
        <input
          type="date"
          className={styles["date-input"]}
          onChange={handleDateChange}
          value={dueDate}
        />
      </div>
      <div className={styles["col"]}>
        <button type="button" onClick={handleAddBtnClick}>
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
