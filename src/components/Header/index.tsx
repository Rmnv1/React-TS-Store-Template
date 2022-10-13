import { Button, Container, Drawer } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { ReactNode, useState } from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../../pages/routes";
import Hamburger from "hamburger-react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type Props = {};

export default function Header({}: Props) {
  const matches = useMediaQuery("(max-width:1100px)");
  const [hamburger, setHamburger] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();

  const list = () => (
    <div className={s.menu}>
      <nav className={s.menu_nav}>
        <div className={s.menu_header}>
          <div className={s.menu_title}>Меню</div>
          <span className={s.menu_close} onClick={() => setHamburger(false)}>
            &times;
          </span>
        </div>
        {routes.map((route) => (
          <NavLink
            className={s.header_link}
            key={route.id}
            to={route.path}
            onClick={() => setHamburger(false)}
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );

  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.header_left}>
            <NavLink to={"/React-TS-Store-Template/"} className={s.logo}>
              Rndm<span>Store</span>
            </NavLink>
            <nav className={s.header_nav}>
              {routes.map((route) => (
                <NavLink
                  className={s.header_link}
                  key={route.id}
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className={s.header_right}>
            <button className={s.cart_wrap}>
              <ShoppingCartIcon className={s.cart_icon} onClick={openCart} />
              <span className={s.cart_count}>{cartQuantity}</span>
            </button>

            {matches && (
              <div className={s.hamburger_wrap}>
                <Hamburger
                  size={28}
                  color="#17171b"
                  toggled={hamburger}
                  toggle={setHamburger}
                  rounded
                  label="Show menu"
                  hideOutline={false}
                />
              </div>
            )}
            <Drawer
              anchor={"right"}
              open={hamburger}
              onClose={() => setHamburger(false)}
            >
              {list()}
            </Drawer>
          </div>
        </div>
      </Container>
    </header>
  );
}
