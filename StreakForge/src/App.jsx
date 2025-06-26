import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import { FaPlay, FaRedo, FaCog } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Header from "./components/Header";
import Controls from "./components/Controls";

const App = () => {
  const initialTime = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

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
    setTimeLeft(initialTime);
  };

  const handleToggle = () => {
    setIsRunning(prev => !prev);
  };

  return (
    <div className="w-full h-screen ">
      <div className="flex  justify-center items-center min-h-screen bg-gray-900">
        <div className="w-[60vw] h-[80vh] bg-gray-700 flex flex-col  items-center rounded-[6rem]  pb-[5rem] pt-[2rem]">
          <Header />
          <main className="text-9xl tracking-widest font-bold  flex-grow text-white flex flex-col justify-center items-center">
            <Timer timeLeft={timeLeft} />
          </main>
          <Controls
            isRunning={isRunning}
            onPlayPause={handleToggle}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
