import { NavLink } from "react-router";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const menuItems = [
    { title: "HOME", link: "" },
    { title: "PREVISÃO", link: "/previsao" },
    { title: "SATÉLITES", link: "/satelites" },
    { title: "RISCO DE ENCHENTES", link: "/enchentes" },
    { title: "INFORMAÇÕES", link: "/info" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed bg-red-500 text-white top-0 left-0 w-full z-50">
        <div className="md:p-5 max-md:pt-5 max-md:pb-5 max-md:flex max-md:justify-around items-center">
          <h1 className=" max-md:text-2xl md:text-4xl font-bold">
            SOS Enchentes SP
          </h1>
          <Bars3Icon
            className="md:hidden size-7 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></Bars3Icon>
          <div
            className={`absolute md:hidden top-14 flex flex-col transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"
              } bg-red-700 w-80 rounded-md`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.link} // 👈 aqui!
                to={item.link}
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "black" : "white",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                className="pt-2 pb-2 w-full flex justify-center"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <p className="text-base max-md:hidden">
            Seu portal de informações e avisos sobre enchentes em São Paulo
          </p>
        </div>
        <div
          className={`w-full flex justify-around bg-red-700 h-8 items-center max-md:hidden`}
        >
          {menuItems.map((item) => (
            <NavLink
              to={item.link}
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "black" : "white",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </header>
    </>
  );
}
