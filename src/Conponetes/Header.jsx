import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition">
          VoidWorks
        </div>
      </div>
    </header>
  );
};

export default Header;
