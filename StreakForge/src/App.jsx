import React from "react";
import Timer from "./components/Timer";
import { FaPlay, FaRedo, FaCog } from "react-icons/fa";

const App = () => {
  return (
    <div className="w-full h-screen ">
      <div className="flex  justify-center items-center min-h-screen bg-gray-900">
        <div className="w-[60vw] h-[80vh] bg-gray-700 flex flex-col  items-center rounded-[6rem]  pb-[5rem] pt-[2rem]">
          {/* Header: Focus , Break, Rest */}
          <header className="w-full max-w-md flex justify-around text-white  gap-10 mb-8 ">
            <button className="flex-1 text-center py-2 font-semibold bg-gray-500 rounded hover:bg-gray-600">
              Focus
            </button>
            <button className="flex-1 text-center py-2 font-semibold bg-gray-500 rounded hover:bg-gray-600">
              Break
            </button>
            <button className="flex-1 text-center py-2 font-semibold bg-gray-500 rounded hover:bg-gray-600">
              Rest
            </button>
          </header>

          {/* Timer Section */}
          <main className="flex-grow text-white flex flex-col justify-center items-center">
            <Timer />
          </main>

          {/* Bottom Controls */}
          <footer className="w-full max-w-md flex justify-around items-center mt-8">
            <div className="flex gap-[8rem]">
              <FaRedo className="w-6 h-6 cursor-pointer text-gray-300" />
              <FaPlay className="w-8 h-8 cursor-pointer text-white" />
              <FaCog className="w-6 h-6 cursor-pointer text-gray-300" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
