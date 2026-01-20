"use client";
import { useState, useEffect, useCallback } from "react";

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="flex space-x-2">
        <div className="flex flex-col items-center bg-gray-200 p-2 rounded-lg shadow-md w-20 h-20">
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <span className="text-sm">days</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 p-2 rounded-lg shadow-md w-20 h-20">
          <span className="text-3xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm">hours</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 p-2 rounded-lg shadow-md w-20 h-20">
          <span className="text-3xl font-bold">{timeLeft.minutes}</span>
          <span className="text-sm">min</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 p-2 rounded-lg shadow-md w-20 h-20">
          <span className="text-3xl font-bold">{timeLeft.seconds}</span>
          <span className="text-sm">sec</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
