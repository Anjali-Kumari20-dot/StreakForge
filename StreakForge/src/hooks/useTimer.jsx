import { useEffect, useState } from "react";

const useTimer = () => {
  const getInitialTime = (selectedMode) => {
    switch (selectedMode) {
      case "focus":
        return 25 * 60;
      case "break":
        return 5 * 60;
      case "rest":
        return 15 * 60;
      default:
        return 25 * 60;
    }
  };


  const [timeLeft, setTimeLeft] = useState(getInitialTime("focus"));
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("focus");

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false); // Optionally stop the timer at zero
      // You could also trigger an alert, sound, or switch mode here
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(getInitialTime(mode));
  };

  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(getInitialTime(newMode));
  };

  return {
    mode,
    setMode,
    timeLeft,
    setTimeLeft,
    isRunning,
    setIsRunning,
    handleReset,
    handleToggle,
    handleModeChange,
  };
};

export default useTimer;
