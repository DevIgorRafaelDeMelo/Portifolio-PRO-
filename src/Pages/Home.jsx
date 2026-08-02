import React from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaBlog,
  FaBuilding,
  FaCalendarAlt,
  FaCheck,
  FaClipboardList,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";

import Divino from "../assets/Divino.png";
import Divino2 from "../assets/Divino2.png";
import Elo from "../assets/Elo.png";

export default function Home() {
  const servicos = [
    {
      numero: "01",
      titulo: "Sites institucionais",
      descricao:
        "Sites modernos para apresentar empresas, serviços, diferenciais e canais de atendimento.",
      icone: FaBuilding,
    },
    {
      numero: "02",
      titulo: "Agendas inteligentes",
      descricao:
        "Sistemas de agendamento para organizar horários, clientes e atendimentos.",
      icone: FaCalendarAlt,
    },
    {
      numero: "03",
      titulo: "Landing pages",
      descricao:
        "Páginas estratégicas para campanhas, captação de contatos e geração de oportunidades.",
      icone: FaRocket,
    },
    {
      numero: "04",
      titulo: "Blogs profissionais",
      descricao:
        "Plataformas para publicação de conteúdos, notícias e fortalecimento de autoridade.",
      icone: FaBlog,
    },
    {
      numero: "05",
      titulo: "Sistemas de reservas",
      descricao:
        "Soluções para clínicas, restaurantes, espaços de eventos e empresas de atendimento.",
      icone: FaClipboardList,
    },
    {
      numero: "06",
      titulo: "Plataformas educacionais",
      descricao:
        "Ambientes digitais para cursos, treinamentos, conteúdos e acompanhamento de alunos.",
      icone: FaGraduationCap,
    },
  ];

  const diferenciais = [
    "Design personalizado",
    "Experiência responsiva",
    "Boa velocidade de carregamento",
    "Estrutura pensada para conversão",
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
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

  const enviarFormulario = (event) => {
    event.preventDefault();

    const formulario = new FormData(event.currentTarget);

    const nome = formulario.get("nome");
    const email = formulario.get("email");
    const mensagem = formulario.get("mensagem");

    const texto = encodeURIComponent(
      `Olá! Meu nome é ${nome}.\n\nE-mail: ${email}\n\nSobre o projeto:\n${mensagem}`
    );

    window.open(
      `https://wa.me/5551998957775?text=${texto}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen bg-[#f2f0ea] text-[#101010]">
      {/* HERO */}
      <section className="relative min-h-screen border-b border-black/15 px-6 py-8 lg:px-12">
        <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-black/15 pb-6">
          <button
            type="button"
            onClick={() => scrollToSection("inicio")}
            className="text-xl font-black uppercase tracking-[-0.04em]"
          >
            Void<span className="text-blue-600">Works</span>
          </button>

          <nav className="hidden items-center gap-9 text-sm font-semibold uppercase tracking-[0.14em] md:flex">
            <button
              type="button"
              onClick={() => scrollToSection("sobre")}
              className="transition hover:text-blue-600"
            >
              Sobre
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("servicos")}
              className="transition hover:text-blue-600"
            >
              Serviços
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("projetos")}
              className="transition hover:text-blue-600"
            >
              Projetos
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contato")}
              className="transition hover:text-blue-600"
            >
              Contato
            </button>
          </nav>

          <button
            type="button"
            onClick={abrirWhatsApp}
            className="border border-black bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-blue-600"
          >
            Iniciar projeto
          </button>
        </header>

        <div
          id="inicio"
          className="mx-auto grid max-w-7xl gap-14 pb-12 pt-20 lg:grid-cols-[1.18fr_0.82fr] lg:pt-28"
        >
          <div>
            <p className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
              <span className="h-px w-12 bg-blue-600" />
              Estúdio de soluções digitais
            </p>

            <h1 className="max-w-5xl text-[15vw] font-black uppercase leading-[0.8] tracking-[-0.085em] sm:text-7xl md:text-8xl lg:text-[108px]">
              Ideias
              <span className="block text-blue-600">digitais</span>
              que funcionam.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
              <p className="max-w-md text-lg leading-8 text-black/65">
                Desenvolvemos sites, sistemas e experiências digitais para
                empresas que desejam crescer, organizar processos e fortalecer
                sua presença online.
              </p>

              <div className="flex flex-col items-start gap-5 sm:items-end">
                <button
                  type="button"
                  onClick={() => scrollToSection("projetos")}
                  className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.18em]"
                >
                  Ver projetos
                  <span className="flex h-12 w-12 items-center justify-center border border-black transition group-hover:bg-blue-600 group-hover:text-white">
                    <FaArrowRight />
                  </span>
                </button>

                <p className="text-xs uppercase tracking-[0.16em] text-black/45">
                  Sites • Sistemas • Plataformas
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[430px] border border-black/15 bg-[#151515] p-7 text-white lg:min-h-[620px]">
            <div className="flex items-center justify-between border-b border-white/20 pb-5">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Creative development
              </span>

              <span className="h-3 w-3 bg-blue-500" />
            </div>

            <div className="flex h-full flex-col justify-between pb-12 pt-12">
              <div>
                <p className="font-mono text-sm text-blue-400">
                  {"<digital_experience />"}
                </p>

                <h2 className="mt-7 max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] md:text-5xl">
                  Estratégia, tecnologia e identidade em um único projeto.
                </h2>
              </div>

              <div className="mt-16">
                <div className="grid grid-cols-3 border-l border-t border-white/20">
                  <div className="border-b border-r border-white/20 p-5">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                      Responsivo
                    </p>
                  </div>

                  <div className="border-b border-r border-white/20 p-5">
                    <p className="text-3xl font-bold">UI</p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                      Design
                    </p>
                  </div>

                  <div className="border-b border-r border-white/20 p-5">
                    <p className="text-3xl font-bold">UX</p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                      Experiência
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("sobre")}
                  className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:text-blue-400"
                >
                  Explorar
                  <FaArrowDown />
                </button>
              </div>
            </div>

            <div className="absolute right-0 top-32 h-32 w-2 bg-blue-600" />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-b border-black/15 px-6 py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.4fr_1.6fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
              Sobre
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-black uppercase leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Não criamos apenas sites.
              <span className="block text-black/30">
                Criamos ferramentas para negócios.
              </span>
            </h2>

            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              <p className="text-lg leading-8 text-black/65">
                A VoidWorks transforma necessidades empresariais em soluções
                digitais claras, modernas e funcionais. Cada projeto é pensado
                para resolver um problema real e gerar valor para a empresa.
              </p>

              <div>
                <p className="leading-8 text-black/55">
                  Desenvolvemos projetos personalizados, considerando a
                  identidade da marca, o perfil do público, os objetivos
                  comerciais e a experiência de quem utilizará a plataforma.
                </p>

                <div className="mt-8 grid gap-3">
                  {diferenciais.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-b border-black/15 py-4"
                    >
                      <FaCheck className="text-xs text-blue-600" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="border-b border-black/15 bg-[#151515] px-6 py-28 text-white lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.4fr_1.6fr]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400">
              Serviços
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                Soluções criadas para diferentes necessidades.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">
                Do primeiro contato com o cliente até a organização de processos
                internos, criamos soluções para diferentes etapas do negócio.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-white/20">
            {servicos.map(
              ({ numero, titulo, descricao, icone: Icone }, index) => (
                <article
                  key={titulo}
                  className="group grid gap-7 border-b border-white/20 py-9 transition lg:grid-cols-[0.2fr_0.2fr_0.6fr_1fr] lg:items-center"
                >
                  <span className="font-mono text-sm text-white/30">
                    {numero}
                  </span>

                  <Icone className="text-2xl text-blue-400" />

                  <h3 className="text-2xl font-bold tracking-[-0.03em] transition group-hover:text-blue-400">
                    {titulo}
                  </h3>

                  <div className="flex items-center justify-between gap-8">
                    <p className="max-w-xl leading-7 text-white/45">
                      {descricao}
                    </p>

                    <span className="hidden h-12 w-12 flex-shrink-0 items-center justify-center border border-white/20 transition group-hover:border-blue-500 group-hover:bg-blue-600 lg:flex">
                      <FaArrowRight className="text-sm" />
                    </span>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section
        id="projetos"
        className="border-b border-black/15 px-6 py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.4fr_1.6fr]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
              Projetos
            </p>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-4xl text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                Trabalhos em destaque.
              </h2>

              <p className="max-w-sm leading-7 text-black/50">
                Projetos desenvolvidos para melhorar a presença digital e a
                experiência dos clientes.
              </p>
            </div>
          </div>

          {/* DIVINO VESTIDO */}
          <article className="mt-24 grid gap-10 border-t border-black/15 pt-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[470px] bg-[#dedbd3] p-5 md:min-h-[650px]">
              <div className="absolute left-5 top-5 h-[76%] w-[64%] border border-black/15 bg-white p-2 shadow-xl">
                <img
                  src={Divino}
                  alt="Sistema de agendamento da Divino Vestido"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute bottom-5 right-5 h-[67%] w-[54%] border border-black/15 bg-white p-2 shadow-2xl transition duration-500 hover:-translate-y-2">
                <img
                  src={Divino2}
                  alt="Segunda tela do sistema Divino Vestido"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <span className="absolute bottom-7 left-7 text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Agenda digital
              </span>
            </div>

            <div className="flex flex-col justify-between border-t border-black/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-blue-600">01</span>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                    Sistema web
                  </span>
                </div>

                <h3 className="mt-10 text-5xl font-black uppercase leading-none tracking-[-0.055em] lg:text-7xl">
                  Divino
                  <span className="block text-blue-600">Vestido</span>
                </h3>

                <p className="mt-10 text-lg leading-8 text-black/60">
                  Plataforma criada para simplificar o agendamento de
                  atendimentos e melhorar a organização dos horários da loja.
                </p>

                <p className="mt-5 leading-7 text-black/45">
                  A solução oferece uma experiência simples para clientes e
                  facilita o controle dos atendimentos, horários e
                  disponibilidade.
                </p>
              </div>

              <a
                href="https://divinoteste.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 flex items-center justify-between border-b border-black py-5 font-bold uppercase tracking-[0.16em] transition hover:border-blue-600 hover:text-blue-600"
              >
                Acessar projeto
                <FaExternalLinkAlt className="text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </article>

          {/* ELO */}
          <article className="mt-28 grid gap-10 border-t border-black/15 pt-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between lg:pr-12">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-blue-600">02</span>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                    Site institucional
                  </span>
                </div>

                <h3 className="mt-10 text-5xl font-black uppercase leading-none tracking-[-0.055em] lg:text-7xl">
                  Elo
                  <span className="block text-blue-600">Contabilidade</span>
                </h3>

                <p className="mt-10 text-lg leading-8 text-black/60">
                  Site desenvolvido para transmitir credibilidade, proximidade e
                  apresentar os serviços do escritório contábil.
                </p>

                <p className="mt-5 leading-7 text-black/45">
                  O projeto reúne informações institucionais, serviços,
                  conteúdos e canais de atendimento em uma estrutura clara e
                  responsiva.
                </p>
              </div>

              <a
                href="https://elosolucoesempresariais.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 flex items-center justify-between border-b border-black py-5 font-bold uppercase tracking-[0.16em] transition hover:border-blue-600 hover:text-blue-600"
              >
                Acessar projeto
                <FaExternalLinkAlt className="text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="border border-black/15 bg-[#dedbd3] p-5">
              <img
                src={Elo}
                alt="Site institucional da Elo Contabilidade"
                className="h-full min-h-[380px] w-full object-cover object-top"
              />
            </div>
          </article>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="bg-blue-600 px-6 py-28 text-white lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">
              Contato
            </p>

            <h2 className="mt-10 max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Vamos criar algo relevante.
            </h2>

            <p className="mt-9 max-w-lg text-lg leading-8 text-white/70">
              Conte um pouco sobre sua empresa e sobre a solução que deseja
              desenvolver.
            </p>

            <button
              type="button"
              onClick={abrirWhatsApp}
              className="mt-10 flex items-center gap-4 border border-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] transition hover:bg-white hover:text-blue-600"
            >
              <FaWhatsapp className="text-xl" />
              Falar diretamente
            </button>
          </div>

          <form
            onSubmit={enviarFormulario}
            className="border border-white/30 bg-white p-7 text-black sm:p-10"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nome"
                  className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-black/50"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full border-b border-black/25 bg-transparent px-0 py-4 outline-none transition placeholder:text-black/30 focus:border-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-black/50"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  className="w-full border-b border-black/25 bg-transparent px-0 py-4 outline-none transition placeholder:text-black/30 focus:border-blue-600"
                />
              </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor="mensagem"
                className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-black/50"
              >
                Sobre o projeto
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={6}
                placeholder="Descreva brevemente o que você precisa..."
                className="w-full resize-none border-b border-black/25 bg-transparent px-0 py-4 outline-none transition placeholder:text-black/30 focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="group mt-10 flex w-full items-center justify-between bg-black px-7 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-blue-700"
            >
              Enviar pelo WhatsApp
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#151515] px-6 py-10 text-white lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
          <span className="text-xl font-black uppercase tracking-[-0.04em]">
            Void<span className="text-blue-500">Works</span>
          </span>

          <p className="text-xs uppercase tracking-[0.16em] text-white/40">
            © {new Date().getFullYear()} — Desenvolvimento digital
          </p>
        </div>
      </footer>
    </main>
  );
}