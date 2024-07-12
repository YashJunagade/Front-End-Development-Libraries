function TodoItem1() {
  let TodoName = "Buy Milk";
  let TodoDate = "01/07/2024";
  return (
    <div className="container todo-list">
      <div class="row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
