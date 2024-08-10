import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }
  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-success"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        -1
      </button>
    </div>
  );
}

export default Controls;
