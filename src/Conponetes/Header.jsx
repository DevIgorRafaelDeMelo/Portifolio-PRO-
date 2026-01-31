import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition">
          VoidWorks
        </div>

        <a
          href="#contact"
          className="ml-6 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition shadow-lg shadow-purple-500/50 font-semibold transform hover:scale-105"
        >
          Vamos Conversar
        </a>
      </div>
    </header>
  );
};

export default Header;
