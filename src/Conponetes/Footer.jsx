import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/30 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-purple-500">VoidWorks</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Criando soluções digitais modernas e impactantes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#servicos" className="hover:text-purple-500 transition">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-purple-500 transition">
                Portfólio
              </a>
            </li>
            <li>
              <a href="#equipe" className="hover:text-purple-500 transition">
                Equipe
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-purple-500 transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            Redes Sociais
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition"
            >
              <FaGithub />
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
