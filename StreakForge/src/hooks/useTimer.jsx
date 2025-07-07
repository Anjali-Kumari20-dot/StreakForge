// export default useTimer;
import { useEffect, useState } from "react";

let currentAudio;

const audioDurations = {
  focus: 5000,
  break: 5000,
  rest: 5000,
}

const playSound = (mode, onFinish) => {
  if(currentAudio){
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(`/${mode}.mp3`);
  currentAudio.play()
  .then(() => {
    currentAudio.onended = () => {
      if(typeof onFinish === "function") onFinish();
    };
  })
  .catch(err => {
    console.warn("Playback failed:", err);
    // Still call onFinish if sound fails, so timer doesn't hang
    if(typeof onFinish === "function") onFinish();
  });
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

   // When timer ends, play sound, notify, and switch mode after delay
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);

      // Play sound, then switch mode inside callback 
      playSound(mode, () => {
        if (mode === "focus") {
          const nextCycle = cycleCount + 1;
          setCycleCount(nextCycle);
          setMode(nextCycle % 4 === 0 ? "rest" : "break");
        } else {
          setMode("focus");
        }
        setTimeLeft(customDurations[mode] * 60); // Reset for new mode
        setIsRunning(true);
      }); 
    }
  }, [timeLeft, isRunning, mode, cycleCount, customDurations]);

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
