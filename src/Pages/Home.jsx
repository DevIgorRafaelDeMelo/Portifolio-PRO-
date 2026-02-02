import React from "react";
import {
  FaCalendarAlt,
  FaBlog,
  FaRocket,
  FaBuilding,
  FaClipboardList,
  FaGraduationCap,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
} from "react-icons/fa";
import Divino from "../assets/Divino.png";
import Divino2 from "../assets/Divino2.png";
import Elo from "../assets/Elo.png";
import { SiTailwindcss, SiVercel } from "react-icons/si";

export default function Home() {
  const servicos = [
    {
      titulo: "Agendas Inteligentes",
      descricao:
        "Ferramentas de agendamento online para otimizar tempo e organização.",
      icone: <FaCalendarAlt className="text-blue-400 text-4xl mb-4" />,
    },
    {
      titulo: "Blogs Profissionais",
      descricao:
        "Plataformas de conteúdo com design atrativo e foco em engajamento.",
      icone: <FaBlog className="text-blue-400 text-4xl mb-4" />,
    },
    {
      titulo: "Landing Pages de Alta Conversão",
      descricao: "Páginas otimizadas para campanhas e geração de leads.",
      icone: <FaRocket className="text-blue-400 text-4xl mb-4" />,
    },
    {
      titulo: "Portais Corporativos",
      descricao:
        "Ambientes digitais completos para comunicação interna e externa.",
      icone: <FaBuilding className="text-blue-400 text-4xl mb-4" />,
    },
    {
      titulo: "Sistemas de Reservas Online",
      descricao:
        "Soluções para restaurantes, clínicas e academias com gestão eficiente.",
      icone: <FaClipboardList className="text-blue-400 text-4xl mb-4" />,
    },

    {
      titulo: "Plataformas Educacionais (E-learning)",
      descricao: "Ambientes digitais para cursos online e treinamentos.",
      icone: <FaGraduationCap className="text-blue-400 text-4xl mb-4" />,
    },
  ];

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 px-10 py-20 overflow-hidden">
        {/* Detalhes extras no background */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[200px] opacity-30"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500 rounded-full   opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 border border-blue-500/20 rounded-full animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full relative z-10 ">
          <div className="space-y-6 text-center md:text-left">
            {/* Fonte maior e responsiva */}
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 ">
              VoidWorks
            </h1>

            <p className="text-blue-200 text-base sm:text-lg md:text-2xl max-w-md mx-auto md:mx-0 leading-relaxed">
              Criando soluções digitais modernas e impactantes.
            </p>

            <p className="text-blue-300 text-sm sm:text-base md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
              Criamos experiências digitais únicas, com foco em inovação,
              performance e design sofisticado.
            </p>

            {/* Botões só aparecem em telas md pra cima */}
            <div className="hidden md:flex space-x-6 pt-4">
              <button className="px-10 py-5 rounded bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 transition shadow-lg shadow-blue-500/40 text-white font-semibold text-xl transform hover:scale-105">
                Ver Projetos
              </button>
              <button className="px-10 py-5 rounded bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition shadow-lg shadow-indigo-500/40 text-white font-semibold text-xl transform hover:scale-105">
                Fale Conosco
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-tr from-indigo-700 to-blue-500 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-0 transition duration-500 flex flex-col items-center justify-center space-y-6">
              <FaReact className="text-cyan-300 text-7xl animate-spin-slow drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]" />
              <div className="flex space-x-6 text-5xl text-white">
                <SiTailwindcss className="hover:text-cyan-400 transition" />
                <FaNodeJs className="hover:text-green-400 transition" />
                <SiVercel className="hover:text-gray-300 transition" />
                <FaLaptopCode className="hover:text-blue-300 transition" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-900 rounded-full blur-2xl opacity-40"></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Sobre Nós</h2>
          <p className="text-gray-300 leading-relaxed">
            Na <span className="text-blue-400 font-semibold">VoidWorks</span>,
            desenvolvemos soluções digitais que unem design moderno, tecnologia
            de ponta e foco em resultados. Nosso objetivo é transformar ideias
            em experiências digitais impactantes, ajudando empresas a se
            destacarem no ambiente online.
          </p>
          <p className="text-gray-400 mt-6">
            Oferecemos <span className="text-blue-300">sites corporativos</span>{" "}
            que reforçam a identidade da marca,{" "}
            <span className="text-blue-300">agendas inteligentes</span> para
            otimizar a gestão,{" "}
            <span className="text-blue-300">e-commerces modernos</span> que
            aumentam vendas e{" "}
            <span className="text-blue-300">blogs profissionais</span> que
            fortalecem a comunicação. Cada projeto é pensado sob medida para
            gerar performance, inovação e valor real para o negócio.
          </p>
        </div>
      </section>

      <section id="Serviços" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-16">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {servicos.map((servico, i) => (
              <div
                key={i}
                className="relative p-10 rounded-xl border border-gray-700 
                   hover:border-blue-500 transition group"
              >
                <div className="flex justify-center mb-6">
                  <div className="text-blue-400 text-5xl group-hover:text-blue-500 transition">
                    {servico.icone}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-blue-400 transition">
                  {servico.titulo}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {servico.descricao}
                </p>

                <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="py-20 px-6 bg-gray-950">
        <h2 className="text-4xl font-bold text-blue-400 mb-16  text-center">
          Parceiros
        </h2>
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              {/* Divina Estilo mantém azul */}
              <h2 className="text-4xl font-extrabold tracking-tight flex items-baseline gap-2">
                {/* Divina Estilo destacado */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 drop-shadow-[0_0_15px_rgba(0,150,255,0.5)]">
                  Divina Estilo
                </span>

                {/* Agenda Online menor e neutro */}
              </h2>
              <span className="text-lg font-medium text-gray-400 tracking-wide">
                Agenda Online
              </span>

              <p className="text-gray-300 text-lg leading-relaxed">
                Sistema de agendamento inteligente para otimizar a gestão de
                clientes, com interface simples e recursos avançados de
                organização.
              </p>

              <p className="text-gray-400">
                Permite controle de horários, notificações automáticas e
                integração com plataformas externas, garantindo eficiência e
                praticidade.
              </p>
            </div>
            <div className="relative  flex justify-center items-center w-full h-auto mt-20 md:w-80 md:h-46 ">
              {/* Primeira imagem */}
              <img
                src={Divino}
                alt="Agenda Online"
                className="w-40 h-56 md:w-full md:h-full rounded shadow-lg transform transition duration-500 z-10 hover:scale-105 hover:z-50"
              />

              {/* Segunda imagem */}
              <img
                src={Divino2}
                alt="Site Empresarial"
                className="w-40 h-56 md:w-full md:h-full rounded shadow-lg transform transition duration-500 z-20 md:absolute md:top-12 md:left-40 hover:scale-105"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem à direita */}
            <div className="flex justify-center md:order-2">
              <img
                src={Elo}
                alt="Site Empresarial"
                className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105 w-100"
              />
            </div>

            {/* Texto à esquerda */}
            <div className="space-y-6 text-left md:order-1">
              <h2 className="text-4xl font-extrabold tracking-tight flex items-baseline gap-2">
                {/* Marca destacada */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 drop-shadow-[0_0_15px_rgba(0,150,255,0.5)]">
                  Elo Contabilidade
                </span>
                {/* Subtítulo neutro */}
              </h2>
              <span className="text-lg font-medium text-gray-400 tracking-wide">
                Site Empresarial
              </span>

              <p className="text-gray-300 text-lg leading-relaxed">
                Presença digital moderna para empresas que querem se destacar no
                mercado e transmitir credibilidade.
              </p>
              <p className="text-gray-400">
                Estrutura otimizada para SEO, design responsivo e integração com
                ferramentas corporativas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center  ">
            <div className="space-y-6 text-left ">
              <h2 className="text-4xl font-extrabold tracking-tight flex items-baseline gap-2">
                {/* Marca destacada */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 drop-shadow-[0_0_15px_rgba(0,150,255,0.5)]">
                  E-commerce
                </span>
                {/* Subtítulo neutro */}
              </h2>
              <span className="text-lg font-medium text-gray-400 tracking-wide">
                Moderno
              </span>

              <p className="text-gray-300 text-lg leading-relaxed">
                Plataforma de vendas online com design atrativo e foco em
                conversão.
              </p>
              <p className="text-gray-400">
                Recursos como carrinho inteligente, meios de pagamento
                integrados e painel administrativo completo para gestão de
                produtos e clientes.
              </p>
            </div>

            {/* Imagem à direita */}
            <div className="flex justify-center">
              <img
                src="/images/ecommerce.jpg"
                alt="E-commerce Moderno"
                className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-500 mb-6">
            Contato
          </h2>
          <p className="text-gray-400 mb-10">
            Tem um projeto em mente? Fale com a gente e vamos transformar sua
            ideia em realidade.
          </p>

          <form className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg border border-blue-500/30">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Seu Email"
              className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              placeholder="Sua Mensagem"
              className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              rows="5"
            ></textarea>
            <button className="w-full py-3 bg-blue-600 rounded-lg text-white font-semibold shadow-lg hover:bg-blue-500 transition transform hover:scale-105">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
