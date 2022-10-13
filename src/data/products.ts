//TODO: Its a temporary solution. In the future take data from the "fake api products"

import { IProduct } from "../models/index";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Рюкзак, очень крутой и модный1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptatum?1",
    price: 1000,
    imgSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Рюкзак, очень крутой и модный2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptatum?2",
    price: 2000,
    imgSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "Рюкзак, очень крутой и модный3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptatum?3",
    price: 3000,
    imgSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
];
