import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/previsao", "routes/previsao.tsx"),
  route("/enchentes", "routes/risco_enchente.tsx"),
  route("/info", "routes/info.tsx"),
] satisfies RouteConfig;
