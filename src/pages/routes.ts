import About from "./About";
import Catalog from "./Catalog";
import Home from "./Home";

const routes = [
  {
    id: 1,
    name: "Главная",
    path: "/",
    component: Home,
  },
  {
    id: 2,
    name: "Каталог",
    path: "/catalog",
    component: Catalog,
  },
  {
    id: 3,
    name: "О нас",
    path: "/about",
    component: About,
  },
];

export default routes;
