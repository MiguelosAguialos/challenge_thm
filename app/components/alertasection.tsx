import { useState } from "react";

export default function AlertaSection() {
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    <section className="relative max-w-6xl mx-auto bg-white/80 p-6 rounded-2xl shadow-md flex flex-col gap-6">
      {/* TÍTULO + BOTÕES */}
      <div className="relative">
        {/* TÍTULO */}
        <div className="flex items-center gap-2 text-black font-semibold pr-48"> {/* Espaço reservado pros botões */}
          <img src="/icons/alertaAmarelo.gif" alt="check icon" className="w-8 h-8" />
          <h2>
            <strong>ALERTA AMARELO:</strong> Atenção, condições favoráveis para enchentes.
          </h2>
        </div>

        {/* BOTÕES EM POSIÇÃO ABSOLUTA À DIREITA */}
        <div className="absolute top-0 right-0 flex flex-col gap-2">
          {["Prevenção", "Evacuação", "Abrigos", "Contato"].map((item, index) => (
            <button
              key={index}
              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-all w-40 text-left"
              onClick={() => alert(`Você clicou em ${item}`)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* MAPA DE ALERTA */}
      <div>
        <img src="/mapadealertas.jpg" alt="Mapa de alerta" className="w-[50%]" />
      </div>

      {/* BOTÃO MOSTRAR MAIS */}
      <button
        onClick={() => setMostrarMais(!mostrarMais)}
        className="text-red-700 underline hover:text-red-900 transition self-start"
      >
        {mostrarMais ? "Ocultar informações" : "Mostrar mais informações"}
      </button>

      {/* CONTEÚDO EXPANDÍVEL */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          mostrarMais ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-red-50 p-4 rounded-xl border border-red-200 mt-2">
          <p className="text-sm text-red-900">
            Em caso de alerta amarelo, é importante manter-se atento às atualizações das autoridades locais. Verifique os pontos
            de risco da sua região e evite deslocamentos desnecessários. Tenha sempre um plano de evacuação definido e mantenha
            documentos e itens essenciais à mão.
          </p>
        </div>
      </div>
    </section>
  );
}
