// components/compra/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  function calculateTimeLeft() {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
        <div className="bg-primary-light rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold">
          {timeLeft[interval]}
        </div>
        <span className="text-sm mt-1 font-medium">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center">
      {timerComponents.length ? timerComponents : <span>¡El tiempo ha terminado!</span>}
    </div>
  );
};

export default Timer;