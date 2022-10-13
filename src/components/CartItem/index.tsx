import React from "react";
import Button from "@mui/material/Button";
import s from "./CartItem.module.scss";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { products } from "../../data/products";

type Props = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: Props) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className={s.item_wrap}>
      <div className={s.item}>
        <div className={s.item_side}>
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="cart element photo"
            className={s.image}
          />
        </div>
        <div className={s.item_side}>
          <span className={s.item_delete} onClick={() => removeFromCart(id)}>
            &times;
          </span>
          <div className={s.item_name}>{item.name}</div>
          <div className={s.quantity_wrap}>
            <button
              className={s.quantity_btn}
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <span className={s.quantity}>{quantity}</span>
            <button
              className={s.quantity_btn}
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className={s.sum_wrap}>
        <span className={s.price}>{item.price}₽</span>
        <span className={s.total}>{item.price * quantity}₽</span>
      </div>
    </div>
  );
}
