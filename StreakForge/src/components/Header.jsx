import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
