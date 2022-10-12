import { Container } from "@mui/material";
import React from "react";
import About from "../components/About";
import Catalog from "../components/Catalog";
import MainSlider from "../components/MainSlider";

type Props = {};

export default function Home({}: Props) {
  return (
    <main>
      <MainSlider />
      <Catalog />
      <About />
    </main>
  );
}
