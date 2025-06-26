import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";
import Header from "./components/Header";
import Controls from "./components/Controls";
import useTimer from "./hooks/useTimer";

const App = () => {
  const{
    mode,
    timeLeft,
    isRunning,
    handleReset,
    handleToggle,
    handleModeChange,
  } = useTimer();

  return (
    <div className="w-full h-screen ">
      <div className="flex  justify-center items-center min-h-screen bg-gray-900">
        <div className="w-[60vw] h-[80vh] bg-gray-700 flex flex-col  items-center rounded-[6rem]  pb-[5rem] pt-[2rem]">
          <Header
            mode={mode}
            onModeChange={handleModeChange}
          />
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
