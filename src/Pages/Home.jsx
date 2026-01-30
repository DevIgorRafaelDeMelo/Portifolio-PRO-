import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-xl rounded-lg p-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Página Inicial
        </h1>
        <p className="text-gray-600 mb-6">
          Bem-vindo ao seu projeto React + Tailwind 🚀
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Começar
        </button>
      </div>
    </div>
  );
}
