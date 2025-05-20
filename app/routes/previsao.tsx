import Header from "~/components/header";
import HeroSection from "~/components/herosection";
import PrevisaoTempo from "../images/previsao_tempo.jpg";
import MapaPerigo from "../images/mapa_perigo.png";
import MapaSatelite from "../images/mapa_satelite.png";
import MapaNumerico from "../images/mapa-numerico.png";
import IconeAzulUmidade from "../images/icone_azul_umidade.png";
import IconeVermelhoUmidade from "../images/icone_vermelho_umidade.png";
import IconeNascerSol from "../images/icone_nascer_sol.png";
import IconePorSol from "../images/icone_por_sol.png";
import IconeLua from "../images/icone_lua.png";
import IconeOutono from "../images/icone_outono.png";
import { useState } from "react";

export default function Previsao() {
  const imageTypes = [
    {
      key: "avisos",
      title: "Avisos",
      link: MapaPerigo,
    },
    {
      key: "satelite",
      title: "Satélite",
      link: MapaSatelite,
    },
    {
      key: "previsao",
      title: "Previsão Numérica",
      link: MapaNumerico,
    },
  ];

  const [selectedButton, setSelectedButton] = useState(imageTypes[0]);

  return (
    <>
      <Header />
      <HeroSection />
      <div className="w-full flex justify-center items-center flex-col text-center">
        <img src={PrevisaoTempo} className="p-6 md:w-[50%]" alt="" />
        <h1 className="max-md:text-2xl md:text-4xl font-bold">
          Avisos Meteorológicos
        </h1>
        <div className="grid grid-cols-3 gap-4 w-full p-12">
          <div className="">
            <img
              src={selectedButton.link}
              className="rounded-md w-full"
              alt=""
            />
            <div className="flex w-full gap-1 mt-1">
              {imageTypes.map((item) => (
                <button
                  onClick={(e) => {
                    setSelectedButton(item);
                    console.log(selectedButton);
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                  className="flex-1 bg-gray-300 rounded-md"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col col-span-2 items-center">
            <p className="max-md:text-2xl md:text-3xl font-bold">
              São Paulo - SP | Digite outro local:
            </p>
            <input
              type="text"
              placeholder="Buscar Cidade..."
              className="border-2 border-gray-300 w-[80%] p-2 rounded-md mt-2"
            />
            <p className="max-md:text-2xl md:text-2xl font-bold mt-2 text-red-500">
              UMIDADE
            </p>
            <div className="flex flex-col items-center w-[90%] h-[100%] justify-around">
              <div className="flex justify-around w-full">
                <div>
                  <img src={IconeAzulUmidade} className="w-24" alt="" />
                  <p className="max-md:text-2xl md:text-2xl font-bold">90%</p>
                </div>
                <div>
                  <img src={IconeVermelhoUmidade} className="w-24" alt="" />
                  <p className="max-md:text-2xl md:text-2xl font-bold">90%</p>
                </div>
              </div>
              <div className="border-1 border-gray-400 w-4/5"></div>
              <div className="flex justify-around w-full">
                <div>
                  <img src={IconeNascerSol} className="w-24" alt="" />
                  <p className="max-md:text-2xl md:text-2xl font-bold">06h34</p>
                </div>
                <div>
                  <img src={IconePorSol} className="w-24" alt="" />
                  <p className="max-md:text-2xl md:text-2xl font-bold">17h33</p>
                </div>
              </div>
              <div className="border-1 border-gray-400 w-4/5"></div>
              <div className="flex justify-around w-full">
                <div>
                  <img src={IconeLua} className="w-24" alt="" />
                  <p className="max-md:text-2xl md:text-2xl font-bold">
                    Minguante
                  </p>
                </div>
                <div>
                  <img src={IconeOutono} className="w-24" alt="" />
                  <p className="max-md:text-2xl md:text-2xl font-bold">
                    Outono
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-500 mt-10">Footer</footer>
    </>
  );
}
