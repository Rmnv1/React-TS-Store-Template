import React from "react";
import s from "./ProductCard.module.scss";
import { Button } from "@mui/material";

type Props = {};

export default function ProductCard({}: Props) {
  return (
    <div className={s.card}>
      <div className={s.title}>Рюкзак, очень крутой и модный</div>
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        className={s.image}
        alt="Backpack"
      />
      <p className={s.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptatum?
      </p>
      <div className={s.btn_wrap}>
        <Button
          size="large"
          sx={{
            color: "#FFF",
            backgroundColor: "#631cf9",
            borderColor: "green",
            padding: "10px 50px",
            fontWeight: "600",
            fontFamily: "Montserrat",
            "&:hover": {
              backgroundColor: "#8751fa",
            },
          }}
          fullWidth={false}
          color="primary"
          variant="contained"
        >
          Купить
        </Button>
      </div>
    </div>
  );
}
