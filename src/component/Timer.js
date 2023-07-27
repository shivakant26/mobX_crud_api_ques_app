import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(40); 

  const decrementTimer = () => {
    setSeconds((prevSeconds) => prevSeconds - 1);
  };

  useEffect(() => {
    if (seconds <= 0) return;
    const timerId = setInterval(decrementTimer, 1000);
    return () => clearInterval(timerId);
  }, [seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <p>Ramaing Time : <span style={{color:"tomato"}}>{formatTime(seconds)}</span></p>
    </div>
  );
};

export default Timer;
