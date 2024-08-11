import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

function Controls() {
  const dispatch = useDispatch();
  const number = useRef();

  function handleIncrement() {
    dispatch(counterActions.increment());
  }
  function handleDecrement() {
    dispatch(counterActions.decrement());
  }
  function handlePrivacyToggle() {
    dispatch(privacyActions.toggle());
  }
  function handleAdd() {
    dispatch(counterActions.add(number.current.value));
    number.current.value = "";
  }
  function handleSub() {
    dispatch(counterActions.sub(number.current.value));
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
