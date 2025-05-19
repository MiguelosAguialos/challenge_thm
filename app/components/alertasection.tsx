import { useState } from "react";

export default function AlertaSection() {
  const [mostrarMais, setMostrarMais] = useState(false);

  const buttons = [
    { label: "Como agir em caso de enchente", icon: "/icons/alertacircular.svg" },
    { label: "Reportar Alagamento / Incidente", icon:"/icons/alertaincolor.svg" },
    { label: "Quero Ajudar", icon:"/icons/suporte.svg"  },
    { label: "Ver rotas de fuga e abrigos", icon:"/icons/rota.svg" },
  ];

  return (
    <section className="relative max-w-6xl mx-auto bg-white/80 p-6 rounded-2xl shadow-md flex flex-col gap-6">
      <div className="relative">
        <div className="flex items-center gap-2 text-black font-semibold pr-72">
          <img src="/icons/alertaAmarelo.gif" alt="check icon" className="w-8 h-8" />
          <h2>
            <strong>ALERTA AMARELO:</strong> Atenção, condições favoráveis para enchentes.
          </h2>
        </div>

        {/* Botões alinhados à altura da imagem */}
        <div className="absolute top-0 right-0 flex flex-col w-72 h-[312px] justify-between">
          {buttons.map(({ label, icon }, index) => (
            <button
              key={index}
              className="bg-none shadow-md hover:shadow-lg text-black px-6 py-3 rounded-xl transition-all w-full text-left flex items-center justify-between gap-3"
              onClick={() => alert(`Você clicou em ${label}`)}
            >
              <span>{label}</span>
              {icon && <img src={icon} alt={`${label} icon`} className="w-6 h-6" />}
            </button>
          ))}
        </div>

        {/* Botão 'Mais Informações' mais abaixo */}
        <div className="absolute right-0 mt-[340px] w-72">
          <button
            onClick={() => setMostrarMais(!mostrarMais)}
            className="bg-none shadow-md hover:shadow-lg text-red-500 px-6 py-5 rounded-xl transition-all w-full text-center flex flex-col items-center gap-1"
          >
            <img src="/icons/medidoralerta.svg" alt="Mais Informações icon" className="w-50 h-20 mb-1" />
            <span>Mais Informações</span>
          </button>
        </div>
      </div>

      <div>
        <img src="/mapadealertas.jpg" alt="Mapa de alerta" className="w-[60%]" />
        <h3>
          Risco elevado de enchentes nas próximas 3 horas.{" "}
          <strong>Evite deslocamentos, busque áreas seguras.</strong>
        </h3>
        <a className="text-blue-700" href="#">
          Clique aqui para mais informações.
        </a>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-red-50 p-4 rounded-xl border border-red-200 text-red-900 text-sm ${
          mostrarMais ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
        style={{ pointerEvents: mostrarMais ? "auto" : "none" }}>
       <img src="public\icons\alertaverde.svg" alt="Alerta Verde" />
        <p>
            Situação Normal, sem riscos de enchentes.
            <strong> Medida de Segurança: </strong>Manter-se informado e preparado. 
        </p>

         <img src="public\icons\alertaamarelo.svg" alt="Alerta Amarelo" />
        <p>
        Atenção, condições favoráveis para enchentes.
        <strong> Medida de Segurança: </strong> Revisar planos de emergência e preparar kits de emergência.
        </p>

         <img src="public\icons\alertalaranja.svg" alt="Alerta Laranja" />
        <p>
        Alerta, risco moderado a alto de enchentes.
        <strong> Medida de Segurança: </strong> Evitar áreas de risco e seguir orientações das autoridades.
        </p>

         <img src="public\icons\alertavermelho.svg" alt="Alerta vermelho" />
        <p>
        Perigo, risco muito alto de enchentes iminentes.
        <strong> Medida de Segurança: </strong>Evacuar áreas de risco e buscar abrigo seguro.
        </p>
      </div>
    </section>
  );
}
