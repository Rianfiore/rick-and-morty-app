import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "recoil/modal/atoms";
import { createGlobalStyle } from "styled-components";
import * as S from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { Episode } from "recoil/api/atoms/types";
import Image from "next/image";
import { themeState } from "recoil/theme/atom";

const BodyOverride = createGlobalStyle`
  
body {
  overflow: hidden;
  margin-right: 17px;
  pointer-events: none;
}
`;

export const Modal = () => {
  const [, setModal] = useRecoilState(modalState);
  const [lastEpisode, setLastEpisode] = useState<Episode | null>();
  const modal = useRecoilValue(modalState);
  const [closeAnimation, setCloseAnimation] = useState(true);
  const isDarkTheme = useRecoilValue(themeState);

  useEffect(() => {
    if (modal) {
      const url = modal.episode.at(-1) as string;
      axios.get(url).then((res) => setLastEpisode(res.data));
    }
  }, [modal]);

  return (
    <S.Modal>
      <BodyOverride />

      <div
        className={`modal ${
          closeAnimation ? "modal--opened" : "modal--closed"
        } ${
          modal.slideDirection === "next"
            ? "modal--next"
            : modal.slideDirection === "prev"
            ? "modal--prev"
            : ""
        }`}
      >
        <div className="modal__container">
          <div
            className={`modal__container__header ${
              isDarkTheme ? "modal__container__header--inverse" : ""
            }`}
          >
            <h2
              className={`modal__container__header__title ${
                isDarkTheme ? "modal__container__header__title--inverse" : ""
              }`}
            >
              Identification Card
            </h2>
            <button
              onClick={() => {
                setCloseAnimation(false);
                setTimeout(() => {
                  setModal({ ...modal, isModalOpen: false });
                }, 1000);
              }}
              className={`modal__container__header__exit-button ${
                isDarkTheme
                  ? "modal__container__header__exit-button--inverse"
                  : ""
              }`}
              type="submit"
            >
              X
            </button>
          </div>
          <div className="modal__container__content">
            <div className="modal__container__content__details">
              <div className="modal__container__content__label">
                <h4>ID: </h4>
                <p>{`${modal.id}`}</p>
              </div>
              <div className="modal__container__content__label">
                <h4>Species: </h4>
                <p>{`${modal.species}`}</p>
              </div>
              <div className="modal__container__content__label">
                <h4>Gender: </h4>
                <p>{`${modal.gender}`}</p>
              </div>
            </div>
            <div className="modal__container__content__main">
              <div className="modal__container__content__main__photo">
                <div className="modal__container__content__main__photo__img">
                  <Image src={modal.image} alt="" width={200} height={200} />
                </div>
                <div className="modal__container__content__main__photo__status">
                  <div className="modal__container__content__label">
                    <h4>Status: </h4>
                    <p>{`${modal.status}`}</p>
                  </div>
                </div>
              </div>
              <div className="modal__container__content__main__title">
                <h1 className="modal__container__content__main__title__name">
                  {modal.name}
                </h1>
                <h2 className="modal__container__content__main__title__origin">
                  Origin: {modal.origin.name}
                </h2>
              </div>
            </div>
          </div>
          <div
            className={`modal__container__footer ${
              isDarkTheme ? "modal__container__footer--inverse" : ""
            }`}
          >
            <div className="modal__container__footer__details">
              <div className="modal__container__footer__label">
                <h4>Last Known Location: </h4>
                <p>{modal.location.name}</p>
              </div>
              {lastEpisode && (
                <div className="modal__container__footer__label">
                  <h4>First seen in:</h4>
                  <p>{lastEpisode.name}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </S.Modal>
  );
};
