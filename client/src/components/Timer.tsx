"use client";
import { use, useEffect, useState } from "react";

const Timer: React.FC = () => {
  const targetTime = new Date();
  targetTime.setHours(targetTime.getHours() + 20);

  const [remainingTime, setRemainingTime] = useState(
    targetTime.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetTime.getTime() - currentTime.getTime();

      if (timeDifference <= 0) {
        clearInterval(interval);
        setRemainingTime(0);
      } else {
        setRemainingTime(timeDifference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  return (
    <div className="w-full flex flex-row justify-center items-center gap-1 font-normal text-md py-6">
      <span>Sale ends in</span>
      <span className="text-2xl text-pink-500">
        {formatTime(remainingTime).hours}
      </span>{" "}
      H :{" "}
      <span className="text-2xl text-pink-500">
        {formatTime(remainingTime).minutes}
      </span>{" "}
      M :{" "}
      <span className="text-2xl text-pink-500">
        {formatTime(remainingTime).seconds}
      </span>{" "}
      S
    </div>
  );
};

export default Timer;
