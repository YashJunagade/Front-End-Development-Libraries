import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const number = useRef();

  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }
  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }
  function handlePrivacyToggle() {
    dispatch({ type: "PRIVACY" });
  }
  function handleAdd() {
    dispatch({
      type: "ADD",
      payload: {
        number: number.current.value,
      },
    });
    number.current.value = "";
  }
  function handleSub() {
    dispatch({
      type: "SUB",
      payload: {
        number: number.current.value,
      },
    });
    number.current.value = "";
  }

  return (
    <>
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
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="enter number"
          ref={number}
          className="input-num"
        />
        <button type="button" className="btn btn-success" onClick={handleAdd}>
          +Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          -Sub
        </button>
      </div>
    </>
  );
}

export default Controls;
