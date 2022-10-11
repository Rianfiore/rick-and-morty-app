import { IButton } from "./types";

import * as S from "./styles";

import Image from "next/image";

export const Button = ({
  children,
  icon = null,
  orientation = "right",
  iconSize = 30,
  selected = false,
  disabled = false,
  ...args
}: IButton) => {
  return (
    <S.Button>
      <button
        className={`button ${
          orientation !== "right" ? `button--${orientation}` : ""
        } ${selected ? "button--selected" : ""} 
        ${disabled ? "button--disabled" : ""}
        ${children ? "button--text" : ""}`}
        {...args}
      >
        {icon ? (
          <Image src={icon} alt="" width={iconSize} height={iconSize} />
        ) : (
          children
        )}
      </button>
    </S.Button>
  );
};
