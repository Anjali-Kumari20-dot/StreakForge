import React, { useState } from "react";

const Header = ({ mode, onModeChange }) => {
  return (
    <header className="w-full max-w-md flex justify-around text-white  gap-10 mb-8 ">
      <button
        onClick={() => onModeChange("focus")}
        className={`flex-1 ${mode === "focus" ? "bg-blue-500 text-white" : "bg-gret-500"} cursor-pointer  text-center py-2 font-semibold bg-gray-500 rounded hover:bg-gray-600`}
      >
        Focus
      </button>
      <button
        onClick={() => onModeChange("break")}
        className="flex-1  cursor-pointer  text-center py-2 font-semibold bg-gray-500 rounded hover:bg-gray-600"
      >
        Break
      </button>
      <button
        onClick={() => onModeChange("rest")}
        className="flex-1  cursor-pointer text-center py-2 font-semibold bg-gray-500 rounded hover:bg-gray-600"
      >
        Rest
      </button>
    </header>
  );
};

export default Header;