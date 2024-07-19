import { useState, useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddBtnClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <form className={styles["container"]} onSubmit={handleAddBtnClick}>
      <input
        type="text"
        className={styles["text-input"]}
        placeholder="enter your task"
        ref={todoNameElement}
      />
      <div className="col-4">
        <input
          type="date"
          className={styles["date-input"]}
          ref={dueDateElement}
        />
      </div>
      <div className={styles["col"]}>
        <button>
          <IoMdAdd />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
