import { ButtonHTMLAttributes } from "react";

export interface ICard {
  id: number,
  img: string,
  title: string
}

export interface IButtonCard extends ButtonHTMLAttributes<HTMLButtonElement> {
  identificator: number,
  label: string
}