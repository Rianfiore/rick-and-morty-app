import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
children?: ReactNode,
icon?: string | null,
iconSize?: number,
selected?: boolean,
disabled?: boolean,
orientation?: 'left' | 'right' | 'up' | 'down'
}