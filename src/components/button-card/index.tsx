import * as S from "./styles";
import { IButtonCard } from "./types";

export const ButtonCard = ({ label, ...rest }: IButtonCard) => {
  return (
    <S.ButtonCard>
      <button {...rest} type="button" className="card__details__button">
        {label}
      </button>
    </S.ButtonCard>
  );
};
