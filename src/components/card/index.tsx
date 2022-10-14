import Image from "next/image";
import { LegacyRef } from "react";
import { useHover } from "utils/hooks";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "recoil/modal/atoms";

import * as S from "./styles";

import { ICard } from "./types";
import { themeState } from "recoil/theme/atom";
import { ButtonCard } from "components";
import { api } from "services";
import { IModalState } from "recoil/modal/atoms/types";

export const openModal = (
  id: number,
  setModal: SetterOrUpdater<IModalState>
) => {
  api.getCharacter(`/${id}`).then((character) => {
    setModal({ ...character, isModalOpen: true });
  });
};

export const Card = ({ id, img, title }: ICard) => {
  const [hoverRef, isHovered] = useHover();
  const [, setModal] = useRecoilState(modalState);
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
            <ButtonCard
              label="Show Details"
              onClick={() => openModal(id, setModal)}
            />
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
