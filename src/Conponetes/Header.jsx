import React, { useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { nome: "Início", id: "inicio" },
    { nome: "Sobre", id: "sobre" },
    { nome: "Serviços", id: "servicos" },
    { nome: "Projetos", id: "projetos" },
    { nome: "Contato", id: "contato" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuAberto(false);
  };

  const abrirWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Conheci a VoidWorks pelo site e gostaria de conversar sobre um projeto."
    );

    window.open(
      `https://wa.me/5551998957775?text=${mensagem}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/15 bg-[#f2f0ea]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* LOGO */}
        <button
          type="button"
          onClick={() => scrollToSection("inicio")}
          className="text-2xl font-black uppercase tracking-[-0.05em] text-[#101010]"
          aria-label="Ir para o início"
        >
          Void<span className="text-blue-600">Works</span>
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="relative py-2 text-xs font-bold uppercase tracking-[0.16em] text-black/60 transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"
            >
              {link.nome}
            </button>
          ))}
        </nav>

        {/* BOTÃO DESKTOP */}
        <button
          type="button"
          onClick={abrirWhatsApp}
          className="group hidden items-center gap-3 bg-[#101010] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-blue-600 lg:flex"
        >
          Iniciar projeto

          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex h-11 w-11 items-center justify-center border border-black/20 text-lg text-black transition hover:border-blue-600 hover:text-blue-600 lg:hidden"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`overflow-hidden border-t border-black/15 bg-[#f2f0ea] transition-all duration-300 lg:hidden ${menuAberto
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
          }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {links.map((link, index) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="flex items-center justify-between border-b border-black/15 py-5 text-left text-sm font-bold uppercase tracking-[0.15em] text-black/70 transition hover:pl-2 hover:text-blue-600"
            >
              <span>{link.nome}</span>

              <span className="font-mono text-xs text-black/30">
                0{index + 1}
              </span>
            </button>
          ))}

          <button
            type="button"
            onClick={abrirWhatsApp}
            className="mt-6 flex w-full items-center justify-center gap-3 bg-blue-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-blue-700"
          >
            <FaWhatsapp className="text-lg" />
            Falar no WhatsApp
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;