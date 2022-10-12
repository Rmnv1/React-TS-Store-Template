import Container from "@mui/material/Container";
import React from "react";
import ProductCard from "../ProductCard";
import s from "./Catalog.module.scss";

type Props = {};

export default function Catalog({}: Props) {
  return (
    <section>
      <Container>
        <h2 className={s.title}>Каталог товаров</h2>
        <div className={s.wrapper}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </section>
  );
}
