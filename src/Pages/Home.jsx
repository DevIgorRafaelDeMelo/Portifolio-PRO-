import React from "react";
import {
  FaBusinessTime,
  FaCalendarAlt,
  FaBlog,
  FaRocket,
  FaBuilding,
  FaClipboardList,
  FaChartBar,
  FaMobileAlt,
  FaGraduationCap,
} from "react-icons/fa";
import Divino from "../assets/Divino.png";
import Elo from "../assets/Elo.png";
import Footer from "..//Conponetes/Footer";

export default function Home() {
  const servicos = [
    {
      titulo: "Agendas Inteligentes",
      descricao:
        "Ferramentas de agendamento online para otimizar tempo e organização.",
      icone: <FaCalendarAlt className="text-purple-400 text-4xl mb-4" />,
    },
    {
      titulo: "Blogs Profissionais",
      descricao:
        "Plataformas de conteúdo com design atrativo e foco em engajamento.",
      icone: <FaBlog className="text-purple-400 text-4xl mb-4" />,
    },
    {
      titulo: "Landing Pages de Alta Conversão",
      descricao: "Páginas otimizadas para campanhas e geração de leads.",
      icone: <FaRocket className="text-purple-400 text-4xl mb-4" />,
    },
    {
      titulo: "Portais Corporativos",
      descricao:
        "Ambientes digitais completos para comunicação interna e externa.",
      icone: <FaBuilding className="text-purple-400 text-4xl mb-4" />,
    },
    {
      titulo: "Sistemas de Reservas Online",
      descricao:
        "Soluções para restaurantes, clínicas e academias com gestão eficiente.",
      icone: <FaClipboardList className="text-purple-400 text-4xl mb-4" />,
    },

    {
      titulo: "Plataformas Educacionais (E-learning)",
      descricao: "Ambientes digitais para cursos online e treinamentos.",
      icone: <FaGraduationCap className="text-purple-400 text-4xl mb-4" />,
    },
  ];

  return (
    <div className="bg-black text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-gray-900 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-pink-700 rounded-full blur-[150px] opacity-30"></div>

        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 relative z-10 drop-shadow-lg">
          VoidWorks
        </h1>
        <p className="text-gray-300 mb-6 max-w-xl relative z-10 text-lg">
          Soluções digitais modernas para negócios, e-commerce, agendas e blogs.
        </p>

        <p className="text-gray-400 mb-10 relative z-10 max-w-2xl text-base">
          Transformamos ideias em experiências digitais únicas, com foco em
          inovação e performance.
        </p>

        <div className="flex space-x-4 relative z-10">
          <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition shadow-lg shadow-purple-500/50">
            Ver Projetos
          </button>
          <button className="px-6 py-3 bg-pink-600 rounded-lg hover:bg-pink-500 transition shadow-lg shadow-pink-500/50">
            Fale Conosco
          </button>
        </div>
      </section>

      <section id="sobre" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Sobre Nós</h2>
          <p className="text-gray-300 leading-relaxed">
            Na <span className="text-purple-400 font-semibold">VoidWorks</span>,
            desenvolvemos soluções digitais que unem design moderno, tecnologia
            de ponta e foco em resultados. Nosso objetivo é transformar ideias
            em experiências digitais impactantes, ajudando empresas a se
            destacarem no ambiente online.
          </p>
          <p className="text-gray-400 mt-6">
            Oferecemos{" "}
            <span className="text-purple-300">sites corporativos</span> que
            reforçam a identidade da marca,{" "}
            <span className="text-purple-300">agendas inteligentes</span> para
            otimizar a gestão,{" "}
            <span className="text-purple-300">e-commerces modernos</span> que
            aumentam vendas e{" "}
            <span className="text-purple-300">blogs profissionais</span> que
            fortalecem a comunicação. Cada projeto é pensado sob medida para
            gerar performance, inovação e valor real para o negócio.
          </p>
        </div>
      </section>

      <section id="Serviços" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {servicos.map((servico, i) => (
              <div
                key={i}
                className="relative p-10 rounded-xl border border-gray-700 
                     hover:border-purple-500 transition group"
              >
                <div className="flex justify-center mb-6">
                  <div className="text-purple-400 text-5xl group-hover:text-purple-500 transition">
                    {servico.icone}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-purple-400 transition">
                  {servico.titulo}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {servico.descricao}
                </p>

                <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500 transition"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
            Soluções
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvemos, cada um pensado para
            entregar inovação, performance e design moderno.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                titulo: "Agenda Online",
                link: "https://divinovestido.com.br/",
                img: Divino,
                descricao:
                  "Sistema de agendamento inteligente para otimizar gestão de clientes.",
              },
              {
                titulo: "Site Empresarial",
                link: "https://selo-3q6z.vercel.app/",
                img: Elo,
                descricao:
                  "Presença digital moderna para empresas que querem se destacar.",
              },
              {
                titulo: "Blog Profissional",
                link: "https://www.exemplo3.com",
                img: "https://www.exemplo3.com/favicon.ico",
                descricao:
                  "Plataforma de conteúdo com design atrativo e foco em engajamento.",
              },
            ].map((proj) => (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2"
              >
                <img
                  src={proj.img}
                  alt={proj.titulo}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">
                    {proj.titulo}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{proj.descricao}</p>
                  <span className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-500 transition">
                    Acessar Site
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-purple-500 mb-6">
            Contato
          </h2>
          <p className="text-gray-400 mb-10">
            Tem um projeto em mente? Fale com a gente e vamos transformar sua
            ideia em realidade.
          </p>

          <form className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg border border-purple-500/30">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="email"
              placeholder="Seu Email"
              className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <textarea
              placeholder="Sua Mensagem"
              className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              rows="5"
            ></textarea>
            <button className="w-full py-3 bg-purple-600 rounded-lg text-white font-semibold shadow-lg hover:bg-purple-500 transition transform hover:scale-105">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
