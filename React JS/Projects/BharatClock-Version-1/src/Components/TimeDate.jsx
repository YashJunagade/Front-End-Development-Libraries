function TimeDate() {
  const time = new Date();
  return (
    <p>
      Date : {time.toLocaleDateString()} -Time : {time.toLocaleTimeString()}
    </p>
  );
}

export default TimeDate;
