import { useEffect, useState } from "react";

function TimeDate() {
  let [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p>
      Date : {time.toLocaleDateString()} -Time : {time.toLocaleTimeString()}
    </p>
  );
}

export default TimeDate;
