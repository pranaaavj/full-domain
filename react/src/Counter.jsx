import React, { useRef, useState } from 'react';

const Counter = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function handleStart() {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => {
        const newTime = prev + 0.1;
        return Number(newTime.toFixed(2));
      });
    }, 100);
  }

  function handleStop() {
    clearInterval(timerRef.current);
  }

  function handleReset() {
    setTime(0);
  }

  return (
    <div>
      Time: {time}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Counter;
