import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import Header from "~/components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main>Main</main>
      <footer>Footer</footer>
    </>
  );
}
