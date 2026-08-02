import React from "react";
import {
  FaArrowUp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* TOPO */}
        <div className="grid lg:grid-cols-4 gap-14">

          {/* LOGO */}
          <div>
            <h2 className="text-4xl font-black tracking-[-0.05em] uppercase">
              Void<span className="text-blue-500">Works</span>
            </h2>

            <p className="mt-6 text-white/55 leading-8">
              Desenvolvemos sites, plataformas e sistemas modernos,
              focados em performance, experiência do usuário e
              crescimento dos nossos clientes.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-white/40 mb-6">
              Navegação
            </h3>

            <div className="flex flex-col gap-4">

              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left hover:text-blue-400 transition"
              >
                Início
              </button>

              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left hover:text-blue-400 transition"
              >
                Sobre
              </button>

              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left hover:text-blue-400 transition"
              >
                Serviços
              </button>

              <button
                onClick={() => scrollToSection("projetos")}
                className="text-left hover:text-blue-400 transition"
              >
                Projetos
              </button>

              <button
                onClick={() => scrollToSection("contato")}
                className="text-left hover:text-blue-400 transition"
              >
                Contato
              </button>

            </div>
          </div>

          {/* CONTATO */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-white/40 mb-6">
              Contato
            </h3>

            <div className="space-y-4 text-white/60">

              <p>contato@voidworks.com.br</p>

              <p>(51) 99999-9999</p>

              <p>Rio Grande do Sul • Brasil</p>

            </div>
          </div>

          {/* REDES */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-white/40 mb-6">
              Redes Sociais
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 border border-white/15 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 border border-white/15 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-12 h-12 border border-white/15 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/5551998957775"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 border border-white/15 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

        {/* LINHA */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} VoidWorks. Todos os direitos reservados.
          </p>

          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-white/50 hover:text-blue-400 transition"
          >
            Voltar ao topo

            <div className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition">
              <FaArrowUp />
            </div>

          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;