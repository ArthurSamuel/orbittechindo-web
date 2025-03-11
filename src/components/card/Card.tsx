import React from "react";
import { Container } from "./Card.style";

interface ICard {
  children: React.ReactElement | React.ReactElement[];
  onClick(): void;
}

export default function Card({ children, onClick }: ICard) {
  return <Container onClick={onClick}>{children}</Container>;
}
