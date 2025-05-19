import { useRef, useState } from "react";

export default function MainContent() {
  const [mostrarMaisTexto, setMostrarMaisTexto] = useState(false);
  const maisInfoRef = useRef<HTMLDivElement>(null);

  const abrirTexto = () => {
    setMostrarMaisTexto(true);
    setTimeout(() => {
      maisInfoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const fecharTexto = () => {
    setMostrarMaisTexto(false);
  };

  return (
    <main className="relative mb-10 z-10 px-8 pt-12">
      <section
        className="max-w-6xl mx-auto bg-white/80 p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6"
        style={{ backgroundColor: "#A3000017" }}
      >
        {/* Coluna texto */}
        <div className="flex-1 space-y-4">
          <p className="text-sm text-black text-left">
            O SOS Enchentes SP é uma plataforma dedicada a fornecer informações essenciais e atualizadas sobre enchentes na cidade
            de São Paulo. Nosso objetivo é ajudar a população a se preparar, reagir e se recuperar de eventos de enchente, minimizando
            os impactos e promovendo a segurança de todos.
          </p>

          <p className="text-sm text-black text-left">
            A plataforma oferece um sistema de alerta antecipado inteligente, que informa proativamente cidadãos e autoridades sobre riscos iminentes de enchentes. Isso permite que ações preventivas e de evacuação sejam tomadas com antecedência, reduzindo danos materiais e protegendo vidas.
          </p>
          <p className="text-sm text-black text-left mb-4">
            Além disso, o site conta com um mapeamento interativo das áreas de risco e rotas de fuga. Os usuários podem visualizar claramente as áreas com maior risco de enchente, rotas de evacuação seguras e a localização de abrigos temporários. Essa funcionalidade é essencial para orientar a população em momentos de crise, garantindo que todos saibam para onde ir e como se proteger.
          </p>
          <p className="text-sm text-black text-left mb-4">
            A central de informações e recursos unificada é outro componente crucial do SOS Enchentes SP. Aqui, os usuários encontram notícias recentes, comunicados oficiais, guias de prevenção, contatos de emergência e informações sobre o status de funcionamento de serviços públicos. Tudo isso em um único local, facilitando o acesso à informação e reduzindo a desinformação.
          </p>
        </div>

        {/* Coluna vídeo + botão */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="h-60 bg-black rounded-md text-white text-sm flex items-center justify-center">
            Vídeo aqui
          </div>

          {/* Botão Ler mais desaparece se texto expandido estiver aberto */}
          {!mostrarMaisTexto && (
            <button
              onClick={abrirTexto}
              className="bg-none shadow-md hover:shadow-lg text-red-500 px-6 py-3 rounded-xl transition-all w-full text-center"
            >
              Ler mais
            </button>
          )}
        </div>
      </section>

      {/* Texto expandido */}
      <div
        ref={maisInfoRef}
        className={`max-w-6xl mx-auto bg-white/80 rounded-2xl shadow-md transition-all duration-500 ease-in-out overflow-hidden px-6 py-6 mt-4 relative ${
          mostrarMaisTexto ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ pointerEvents: mostrarMaisTexto ? "auto" : "none", backgroundColor: "#A3000017" }}
      >
        {/* Conteúdo do texto */}
        <p className="text-sm text-black text-left mb-4">
          Para aqueles que desejam ajudar, a plataforma oferece uma seção dedicada ao voluntariado e gerenciamento de doações. Cidadãos podem se cadastrar como voluntários, informando suas habilidades e disponibilidade, enquanto órgãos oficiais e ONGs podem cadastrar necessidades específicas. Além disso, há uma lista de itens necessários e pontos de coleta oficiais para doações, garantindo que a ajuda chegue a quem mais precisa.
        </p>
        <p className="text-sm text-black text-left mb-4">
          O SOS Enchentes SP também facilita a comunicação direta entre cidadãos e órgãos públicos. Através de um canal de reporte de ocorrências, os usuários podem informar alagamentos, deslizamentos, árvores caídas e outras emergências, permitindo uma resposta rápida e coordenada das autoridades competentes.
        </p>
        <p className="text-sm text-black text-left mb-4">
          Por fim, a plataforma inclui um módulo de educação e prevenção contínua, com artigos, vídeos, infográficos e quizzes sobre como agir antes, durante e depois de uma enchente. Esse conteúdo educativo é fundamental para aumentar a conscientização e o preparo da população, promovendo uma cultura de resiliência e segurança.
        </p>
        <p className="text-sm text-black text-left mb-4">
          Nosso compromisso é fornecer uma plataforma multifacetada que atenda às necessidades dos cidadãos, da Defesa Civil e de outros órgãos públicos, antes, durante e após os eventos de enchente. Juntos, podemos construir uma São Paulo mais segura e resiliente.
        </p>
        <h3 className="text-center font-semibold mt-8 mb-4">TECNOLOGIAS UTILIZADAS</h3>
        <p className="text-sm text-black text-center mb-4">
          Este protótipo foi desenvolvido utilizando uma variedade de tecnologias e conceitos aprendidos ao longo do curso. No frontend, utilizamos HTML5, CSS3 e JavaScript para construir a estrutura e a interatividade das páginas. Para garantir um design responsivo e uma experiência de usuário agradável, empregamos o framework Bootstrap e aplicamos princípios de UX Writing.
        </p>
        <p className="text-sm text-black text-center mb-4">
          Para a construção de interfaces dinâmicas e componentizadas, utilizamos React, que nos permitiu criar uma aplicação mais modular e eficiente. No backend, a linguagem Python foi fundamental para a manipulação de dados, integração com APIs externas e implementação da lógica de negócios. Embora o backend não seja o foco deste protótipo, conceitos de Flask foram considerados para futuras implementações.
        </p>
        <p className="text-sm text-black text-center mb-4">
          A persistência de dados foi planejada utilizando bancos de dados relacionais, com conceitos de conexão via Python abordados no curso. Além disso, utilizamos GitHub para o versionamento do código e colaboração entre os membros da equipe.
        </p>
        <p className="text-sm text-black text-center mb-6">
          Nosso objetivo foi criar uma plataforma multifacetada que atenda às necessidades dos cidadãos, da Defesa Civil e de outros órgãos públicos, antes, durante e após os eventos de enchente. Este projeto demonstra a aplicação prática dos conhecimentos adquiridos até a Fase 7 do curso, incluindo modelagem, diagramação, algoritmos e fluxogramas.
        </p>
        <h3 className="text-center font-semibold mb-2">INTEGRANTES DO GRUPO</h3>
        <p className="text-sm text-black text-center mb-10">
          Yasmin Baracat<br />
          José Vitor<br />
          Miguel Aguiar
        </p>

        {/* Botão Ler menos no canto inferior esquerdo */}
        {mostrarMaisTexto && (
          <button
            onClick={fecharTexto}
            className="absolute bottom-6 right-6 bg-none shadow-md hover:shadow-lg text-red-500 px-6 py-3 rounded-xl transition-all w-max text-center"
          >
            Ler menos
          </button>
        )}
      </div>
    </main>
  );
}
