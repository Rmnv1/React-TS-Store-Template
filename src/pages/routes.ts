import About from "./About";
import Catalog from "./Catalog";
import Home from "./Home";

const routes = [
  {
    id: 1,
    name: "Главная",
    path: "/React-TS-Store-Template/",
    component: Home,
  },
  {
    id: 2,
    name: "Каталог",
    path: "/React-TS-Store-Template/catalog",
    component: Catalog,
  },
  {
    id: 3,
    name: "О нас",
    path: "/React-TS-Store-Template/about",
    component: About,
  },
];

export default routes;
