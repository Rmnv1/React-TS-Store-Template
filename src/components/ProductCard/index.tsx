import React, { useState } from "react";
import s from "./ProductCard.module.scss";
import { Button } from "@mui/material";
import { IProduct } from "../../models/index";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type Props = {
  product: IProduct;
};

export default function ProductCard({ product }: Props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(product.id);

  return (
    <div className={s.card}>
      <div className={s.title}>{product.name}</div>
      <img src={product.imgSrc} className={s.image} alt="Backpack" />
      <p className={s.description}>{product.description}</p>
      <span className={s.price}>{product.price}₽</span>
      <div className={s.btn_wrap}>
        {quantity ? (
          <>
            <div className={s.quantity_wrap}>
              <Button
                sx={{
                  color: "#17171b",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  fontSize: "1.2rem",
                  margin: "0px 15px",
                  width: "35px",
                  border: "1px solid #631cf9",
                }}
                onClick={() => decreaseCartQuantity(product.id)}
              >
                -
              </Button>
              <span className={s.quantity}>{quantity}</span>
              <Button
                sx={{
                  color: "#17171b",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  fontSize: "1.2rem",
                  margin: "0px 15px",
                  width: "35px",
                  border: "1px solid #631cf9",
                }}
                onClick={() => increaseCartQuantity(product.id)}
              >
                +
              </Button>
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
              onClick={() => removeFromCart(product.id)}
            >
              Убрать из корзины
            </Button>
          </>
        ) : (
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
            onClick={() => increaseCartQuantity(product.id)}
          >
            В корзину
          </Button>
        )}
      </div>
    </div>
  );
}
