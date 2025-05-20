import Header from "~/components/header";
import HeroSection from "~/components/herosection";
import RiscoEnchentes from "../images/risco_enchente.png";

export default function Previsao() {
  const data = [
    {
      date: "19/05",
      vol: "0.0 mm",
    },
    {
      date: "20/05",
      vol: "0.0 mm",
    },
    {
      date: "21/05",
      vol: "0.3 mm",
    },
    {
      date: "22/05",
      vol: "0.7 mm",
    },
    {
      date: "23/05",
      vol: "1.1 mm",
    },
    {
      date: "24/05",
      vol: "0.5 mm",
    },
    {
      date: "25/05",
      vol: "0.0 mm",
    },
    {
      date: "26/05",
      vol: "0.0 mm",
    },
  ];

  return (
    <>
      <Header />
      <HeroSection />
      <div className="w-full flex justify-center items-center flex-col text-center">
        <h1 className="max-md:text-2xl md:text-4xl font-bold">ESTATÍSTICAS</h1>
        <div className="grid grid-cols-2 gap-4 w-full p-12">
          <div>
            <img src={RiscoEnchentes} className="rounded-md w-full" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="max-md:text-2xl md:text-3xl font-bold">
              São Paulo - SP | Digite outro local:
            </p>
            <input
              type="text"
              placeholder="Buscar Cidade..."
              className="border-2 border-gray-300 w-[80%] p-2 rounded-md mt-2"
            />
            <div className="flex flex-col items-center w-[90%] h-[100%] justify-around">
              {data.map((item) => (
                <div className="flex justify-around w-full">
                  <p className="max-md:text-1xl md:text-2xl">{item.date}</p>
                  <p className="max-md:text-1xl md:text-2xl">{item.vol}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
