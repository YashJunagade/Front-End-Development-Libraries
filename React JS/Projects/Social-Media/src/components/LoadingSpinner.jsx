function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center text-primary spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
