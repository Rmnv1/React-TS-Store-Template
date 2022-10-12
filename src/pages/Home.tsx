import { Container } from "@mui/material";
import React from "react";
import Catalog from "../components/Catalog";
import MainSlider from "../components/MainSlider";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <MainSlider />
      <Catalog />
    </div>
  );
}
