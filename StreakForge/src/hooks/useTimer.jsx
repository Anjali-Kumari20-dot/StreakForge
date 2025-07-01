// import { useEffect, useState } from "react";

// const useTimer = (initialTime) => {
//   const [mode, setMode] = useState("focus");
//   const [timeLeft, setTimeLeft] = useState(customDurations[mode] * 60);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     setTimeLeft(customDurations[mode] * 60);
//   }, [mode, customDurations]);

//   useEffect(() => {
//     let timer;
//     if (isRunning && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, timeLeft]);

//   useEffect(() => {
//     if (timeLeft === 0 && isRunning) {
//       setIsRunning(false);
//       // Trigger sound or auto-mode switch here if you want
//     }
//   }, [timeLeft, isRunning]);

//   const handleReset = () => {
//     setIsRunning(false);
//     setTimeLeft(initialTime);
//   };

//   const handleToggle = () => {
//     setIsRunning((prev) => !prev);
//   };

//   // const handleModeChange = (newMode) => {
//   //   setMode(newMode);
//   //   // setIsRunning(false);
//   //   setShowSettings(false);
//   // };

//   return {
//     mode,
//     setMode,
//     timeLeft,
//     setTimeLeft,
//     isRunning,
//     setIsRunning,
//     handleReset,
//     handleToggle,
//     handleModeChange,
//   };
// };

// export default useTimer;
import { useEffect, useState } from "react";

const useTimer = (customDurations) => {
  const [mode, setMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(customDurations[mode] * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(customDurations[mode] * 60);
  }, [mode, customDurations]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      // Optional: auto-switch mode or play sound
    }
  }, [timeLeft, isRunning]);

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
