import React from "react";
import { ReactNode } from "react";
import s from "./SectionTitle.module.scss";

type Props = {
  children: ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return <h2 className={s.title}>{children}</h2>;
}
