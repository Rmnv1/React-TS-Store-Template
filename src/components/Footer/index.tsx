import React from "react";
import s from "./Footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className={s.footer}>
      <a
        className={s.footer_link}
        href="https://github.com/Rmnv1"
        target="_blank"
      >
        Github
      </a>
    </footer>
  );
}
