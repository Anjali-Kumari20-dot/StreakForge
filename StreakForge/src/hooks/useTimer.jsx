// export default useTimer;
import { useEffect, useState } from "react";

const playSound = () => {
  new Audio('/alarm.mp3').play();
};

const useTimer = (customDurations) => {
  const [mode, setMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(customDurations[mode] * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  // 🕒 Syncs timer when mode or durations change
  useEffect(() => {
    setTimeLeft(customDurations[mode] * 60);
  }, [mode, customDurations]);

  // ⏳ Countdown tick logic
  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // 🔄 Transition when timer hits 0
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      playSound();
      setIsRunning(false);

      if(mode === "focus"){
        const nextCycle = cycleCount + 1;
        setCycleCount(nextCycle);
        setMode(nextCycle % 4 === 0 ? "rest" : "break");
      } else {
        setMode("focus");
      }
    }
  }, [timeLeft, isRunning, mode, cycleCount]);

  // Manual controls
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(customDurations[mode] * 60);
  };

  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    setCycleCount(0);
  };

  return {
    mode,
    timeLeft,
    isRunning,
    handleReset,
    handleToggle,
    handleModeChange,
  };
};

export default useTimer;
