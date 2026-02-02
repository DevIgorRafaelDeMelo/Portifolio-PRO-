import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-blue-500/30 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
            VoidWorks
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Criando soluções digitais modernas e impactantes.
          </p>
        </div>

        {/* Contato extra */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Contato</h3>
          <p className="text-gray-400 text-sm">contato@voidworks.com.br</p>
          <p className="text-gray-400 text-sm">+55 (11) 99999-9999</p>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Redes Sociais
          </h3>
          <div className="flex justify-center md:justify-start space-x-6 text-xl">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/5511999999999" // coloque seu número aqui
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} VoidWorks. Todos os direitos reservados.
      </div>
    </footer>
  );
}
