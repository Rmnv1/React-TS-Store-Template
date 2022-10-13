import Container from "@mui/material/Container";
import React from "react";
import ProductCard from "../ProductCard";
import SectionTitle from "../UI/SectionTitle/";
import { products } from "../../data/products";
import s from "./Catalog.module.scss";
import { IProduct } from "../../models";

type Props = {};

export default function Catalog({}: Props) {
  return (
    <section>
      <Container>
        <SectionTitle>Каталог товаров</SectionTitle>
        <div className={s.wrapper}>
          {products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
