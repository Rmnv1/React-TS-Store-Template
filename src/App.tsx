import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import routes from "./pages/routes";
import Footer from "./components/Footer";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
