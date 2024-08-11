function Display({ author, quote, loding }) {
  return (
    <div className="display-container">
      <div id="text">{loding ? "Loading..." : `${quote}`}</div>
      <div id="author">{loding ? "" : `${author}`}</div>
    </div>
  );
}

export default Display;
