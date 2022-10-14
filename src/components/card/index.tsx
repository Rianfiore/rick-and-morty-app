import Image from "next/image";
import { LegacyRef } from "react";
import { useHover } from "utils/hooks";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "recoil/modal/atoms";

import * as S from "./styles";

import { ICard, IButtonCard } from "./types";
import axios from "axios";
import { themeState } from "recoil/theme/atom";

export const ButtonCard = ({ identificator, label }: IButtonCard) => {
  const [, setModal] = useRecoilState(modalState);
  return (
    <button
      type="button"
      data-testid="button-details"
      className="card__details__button"
      onClick={() => {
        axios
          .get(`https://rickandmortyapi.com/api/character/${identificator}`)
          .then((res) => setModal({ ...res.data, isModalOpen: true }));
      }}
    >
      {label}
    </button>
  );
};

export const Card = ({ id, img, title }: ICard) => {
  const [hoverRef, isHovered] = useHover();

  const isDarkTheme = useRecoilValue(themeState);

  return (
    <>
      <S.Card>
        <div
          data-testid="card"
          ref={hoverRef as LegacyRef<HTMLDivElement>}
          className={`card ${isHovered ? `card--hover` : ""}`}
        >
          {isHovered && (
            <div className="card__details">
              <ButtonCard identificator={id} label="Show Details" />
            </div>
          )}
          <div
            className={`card__content ${
              isHovered ? "card__content--hover" : ""
            }`}
          >
            <div className="card__content__photo">
              <div className="card__content__photo__cover">
                <Image
                  src={`/images/portal-cover${
                    isDarkTheme ? "-inverse" : ""
                  }.png`}
                  alt=""
                  width={1500}
                  height={1500}
                />
              </div>

              <Image
                className="card__content__photo__img"
                src={img}
                alt=""
                width={250}
                height={250}
              />
            </div>
            <div className="card__content__text-box">
              <h4 className="card__content__text-box__name">{title}</h4>
            </div>
          </div>
        </div>
      </S.Card>
    </>
  );
};
