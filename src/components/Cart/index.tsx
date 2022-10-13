import React from "react";
import { Button, Drawer } from "@mui/material";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import s from "./Cart.module.scss";
import CartItem from "../CartItem";
import { products } from "../../data/products";

type Props = {
  isOpen: boolean;
};

export default function Cart({ isOpen }: Props) {
  const { closeCart, cartItems } = useShoppingCart();
  const cartContent = () => (
    <div className={s.cart}>
      <div className={s.cart_header}>
        <div className={s.cart_title}>Корзина</div>
        <span className={s.cart_close} onClick={closeCart}>
          &times;
        </span>
      </div>
      <div className={s.cart_content}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        {cartItems.length ? (
          <>
            <div className={s.cart_sum}>
              Итог:{" "}
              <span className={s.total}>
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
                ₽
              </span>
            </div>
            <Button
              size="large"
              sx={{
                color: "#FFF",
                backgroundColor: "#631cf9",
                padding: "10px 50px",
                fontWeight: "600",
                width: "100%",
                fontFamily: "Montserrat",
                "&:hover": {
                  backgroundColor: "#8751fa",
                },
              }}
              fullWidth={false}
              color="primary"
              variant="contained"
            >
              Оформить
            </Button>
          </>
        ) : (
          "Корзина пуста!"
        )}
      </div>
    </div>
  );

  return (
    <>
      <Drawer anchor={"right"} onClose={closeCart} open={isOpen}>
        {cartContent()}
      </Drawer>
    </>
  );
}
