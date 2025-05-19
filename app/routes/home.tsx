import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import Header from "~/components/header";
import HeroSection from "~/components/herosection";
import MainContent from "~/components/maincontent";
import AlertaSection from "~/components/alertasection";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MainContent />
      <AlertaSection />
      <footer className="text-center text-gray-500 mt-10">Footer</footer>

    </>
  );
}
