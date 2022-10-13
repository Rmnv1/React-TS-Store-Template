import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Footer from "./components/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <ShoppingCartProvider>
        <Header />
        <Routes>
          <Route path="/React-TS-Store-Template/" element={<Home />} />
          <Route
            path="/React-TS-Store-Template/catalog"
            element={<Catalog />}
          />
          <Route path="/React-TS-Store-Template/about" element={<About />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}
