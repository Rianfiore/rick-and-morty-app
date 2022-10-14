import { ButtonHTMLAttributes } from "react";

export interface IButtonCard extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}