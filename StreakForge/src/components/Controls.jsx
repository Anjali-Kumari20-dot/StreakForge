import React from "react";
import { FaPlay, FaRedo, FaCog } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Controls = ({ isRunning, onPlayPause, onReset, onOpenSettings }) => {
  return (
    <footer className="w-full max-w-md flex justify-around items-center mt-8">
      <div className="flex gap-[8rem]">
        <FaRedo
          onClick={onReset}
          className="w-6 h-6 transition transform duration-399 ease-out  hover:scale-125 cursor-pointer text-white"
        />
        {isRunning ? (
          <FaPause
            className={`w-8 h-8 cursor-pointer text-white ${isRunning ? 'animate-pulse' : ''}`}
            onClick={onPlayPause}
          />
        ) : (
          <FaPlay
            className="w-8 h-8 cursor-pointer transition transform duration-399 ease-out  hover:scale-125 text-white"
            onClick={onPlayPause}
          />
        )}
        <FaCog onClick={() => {
          console.log("Settings clicked");
          onOpenSettings();}} className="transition transform hover:scale-110 duration-399 ease-out hover:scale-125 w-6 h-6 cursor-pointer text-white" />
      </div>
    </footer>
  );
};

export default Controls;
