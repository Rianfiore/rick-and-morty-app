import { IButton } from "./types";

import * as S from "./styles";

import Image from "next/image";

export const Button = ({
  children,
  icon = null,
  orientation = "right",
  size = "medium",
  iconSize = 30,
  selected = false,
  disabled = false,
  ...args
}: IButton) => {
  console.log(size);
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
          <div className={`button__image button__image--${size}`}>
            <Image src={icon} alt="" width={iconSize} height={iconSize} />
          </div>
        ) : (
          children
        )}
      </button>
    </S.Button>
  );
};
