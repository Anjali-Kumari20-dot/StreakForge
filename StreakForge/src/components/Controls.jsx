import React from "react";
import { FaPlay, FaRedo, FaCog } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Controls = ({ isRunning, onPlayPause, onReset }) => {
  return (
    <footer className="w-full max-w-md flex justify-around items-center mt-8">
      <div className="flex gap-[8rem]">
        <FaRedo
          onClick={onReset}
          className="w-6 h-6 cursor-pointer text-white"
        />
        {isRunning ? (
          <FaPause
            className="w-8 h-8 cursor-pointer text-white"
            onClick={onPlayPause}
          />
        ) : (
          <FaPlay
            className="w-8 h-8 cursor-pointer text-white"
            onClick={onPlayPause}
          />
        )}
        <FaCog className="w-6 h-6 cursor-pointer text-white" />
      </div>
    </footer>
  );
};

export default Controls;
