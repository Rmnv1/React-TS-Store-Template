import Container from "@mui/material/Container";
import React from "react";
import ProductCard from "../ProductCard";
import SectionTitle from "../UI/SectionTitle/";

import s from "./Catalog.module.scss";

type Props = {};

export default function Catalog({}: Props) {
  return (
    <section>
      <Container>
        <SectionTitle>Каталог товаров</SectionTitle>
        <div className={s.wrapper}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </section>
  );
}
