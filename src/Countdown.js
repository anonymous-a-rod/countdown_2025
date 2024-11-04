import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('June 1, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 p-4 text-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          Countdown to Our Special Day 💖
        </h1>
        <div className="flex justify-around items-center text-pink-700 text-lg font-semibold">
          <div className="flex flex-col items-center bg-pink-50 rounded-lg p-6 w-24 md:w-32 h-24 md:h-32 shadow-md">
            <span className="text-4xl font-bold">{days}</span>
            <span className="text-xs md:text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center bg-pink-50 rounded-lg p-6 w-24 md:w-32 h-24 md:h-32 shadow-md">
            <span className="text-4xl font-bold">{hours}</span>
            <span className="text-xs md:text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-pink-50 rounded-lg p-6 w-24 md:w-32 h-24 md:h-32 shadow-md">
            <span className="text-4xl font-bold">{minutes}</span>
            <span className="text-xs md:text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center bg-pink-50 rounded-lg p-6 w-24 md:w-32 h-24 md:h-32 shadow-md">
            <span className="text-4xl font-bold">{seconds}</span>
            <span className="text-xs md:text-sm">Seconds</span>
          </div>
        </div>
        <p className="text-pink-600 italic text-xl mt-6">
          Just a little longer until we’re together! 💞
        </p>
      </div>
    </div>
  );
};

export default Countdown;
