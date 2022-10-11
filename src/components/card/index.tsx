import Image from "next/image";
import { LegacyRef } from "react";
import { useHover } from "utils/hooks";
import { useRecoilState } from "recoil";
import { modalState } from "recoil/modal/atoms";

import * as S from "./styles";

import { ICard } from "./types";
import axios from "axios";

export const Card = ({ id, img, title }: ICard) => {
  const [hoverRef, isHovered] = useHover();
  const [, setModal] = useRecoilState(modalState);

  return (
    <>
      <S.Card>
        <div
          ref={hoverRef as LegacyRef<HTMLDivElement>}
          onClick={() => {
            axios
              .get(`https://rickandmortyapi.com/api/character/${id}`)
              .then((res) => setModal({ ...res.data, isModalOpen: true }));
          }}
          className={`card ${isHovered ? `card--hover` : ""}`}
        >
          {isHovered && (
            <div className="card__details">
              <button type="button" className="card__details__button">
                Ver detalhes
              </button>
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
                  src="/images/portal-cover.png"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <Image
                className="card__content__photo__img"
                src={img}
                alt=""
                width={100}
                height={100}
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
