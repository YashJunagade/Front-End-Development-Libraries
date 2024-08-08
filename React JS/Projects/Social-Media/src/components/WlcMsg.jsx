function WlcMsg({ onGetPostsClick }) {
  return (
    <center className="wlc-msg">
      <h1>There are no posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Posts From Server
      </button>
    </center>
  );
}

export default WlcMsg;
