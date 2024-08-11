function Controls({ tweetQuote, fetchQuote }) {
  return (
    <div className="controls-container">
      <a
        href="twitter.com/intent/tweet"
        id="tweet-quote"
        onClick={(e) => {
          e.preventDefault();
          tweetQuote();
        }}
      >
        click here
      </a>
      <div id="new-quote">
        <button onClick={fetchQuote}>new Quote</button>
      </div>
    </div>
  );
}

export default Controls;
