let ClockTime = () => {
  let time = new Date();
  return (
    <p>
      this is current time : {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};

export default ClockTime;
