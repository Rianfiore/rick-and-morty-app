import * as S from "./styles";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { modalState } from "recoil/modal/atoms";
import useScrollPosition from "utils/hooks/useScrollPosition";
import { Dispatch, SetStateAction, useState } from "react";
import { themeState } from "recoil/theme/atom";
import { Switcher } from "components";

export const handleButtonAction = (
  setIsOpenNavBar: Dispatch<SetStateAction<boolean>>,
  isOpenNavBar: boolean
) => {
  setIsOpenNavBar(!isOpenNavBar);
};

export const NavBar = () => {
  const modal = useRecoilValue(modalState);
  const scrollPosition = useScrollPosition();
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const isDarkTheme = useRecoilValue(themeState);
  const inverseClass = scrollPosition >= 400 ? "inverse" : ""
  const unfocusedClass = modal.isModalOpen ? "background--unfocused" : ""

  return (
    <>
      <S.NavBar >
        <div data-testid="nav-bar" className={`background ${inverseClass} ${unfocusedClass}`}>
          <div
            className={`background__image ${
              modal.isModalOpen ? "background__image--unfocused" : ""
            }`}
          >
            <Image
              src={`/images/header-background${
                isDarkTheme ? "" : "-inverse"
              }.jpg`}
              alt=""
              layout="fill"
            />
          </div>
          <div className="background__title">
            <div className="background__title__border-image background__title__border-image--left">
              <Image
                src={`/images/rick${isDarkTheme ? "-inverse" : ""}.png`}
                alt=""
                width={100}
                height={150}
              />
            </div>
            <div className="background__title__text">
              <hr className="background__title__text__divider" />
              <h1>Characters</h1>
              <hr className="background__title__text__divider" />
            </div>
            <div className="background__title__border-image background__title__border-image--right">
              <Image
                src={`/images/morty${isDarkTheme ? "-inverse" : ""}.png`}
                alt=""
                width={100}
                height={150}
              />
            </div>
          </div>

          <button
            onClick={() => handleButtonAction(setIsOpenNavBar, isOpenNavBar)}
            className={`action-nav-bar ${
              scrollPosition >= 400
                ? isDarkTheme
                  ? "action-nav-bar--inverse"
                  : "action-nav-bar--inverse action-nav-bar--arrow-inverse"
                : ""
            } action-nav-bar--${
              isOpenNavBar ? "opened" : "closed"
            } action-nav-bar--${scrollPosition >= 200 ? "show" : "hide"} ${
              modal.isModalOpen
                ? scrollPosition < 400
                  ? "action-nav-bar--unfocused"
                  : "action-nav-bar--inverse--unfocused"
                : ""
            }`}
          >
            <Image
              src={`/images/arrow${
                isDarkTheme ? (scrollPosition < 400 ? "-inverse" : "") : ""
              }.png`}
              alt=""
              width={20}
              height={20}
            />
          </button>

          <div
            className={`background__nav-bar ${
              scrollPosition >= 400 ? "background__nav-bar--inverse" : ""
            } background__nav-bar--${
              scrollPosition >= 200 && !isOpenNavBar ? "hide" : "show"
            }`}
          >
            <nav className="background__nav-bar__content">
              <div
                className={`background__nav-bar__content__logo ${
                  scrollPosition >= 400 && !isDarkTheme
                    ? "background__nav-bar__content__logo--inverse"
                    : ""
                }`}
              >
                <Image
                  src={`/images/logo${
                    isDarkTheme ? (scrollPosition < 400 ? "-inverse" : "") : ""
                  }.png`}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="background__nav-bar__content__title">
                <div className="background__nav-bar__content__title__title-one">
                  <h3>Rick</h3>
                  <h6>and</h6>
                  <h3>Morty</h3>
                </div>
                <hr
                  className={`background__nav-bar__content__title__divider ${
                    scrollPosition >= 400
                      ? "background__nav-bar__content__title__divider--inverse"
                      : ""
                  }`}
                ></hr>
                <h3 className="background__nav-bar__content__title__title-two">
                  Database
                </h3>
              </div>
              <ul>
                <Switcher />
                <li>
                  <button
                    className={`background__nav-bar__content__api-doc ${
                      scrollPosition >= 400
                        ? "background__nav-bar__content__api-doc--inverse"
                        : ""
                    }`}
                  >
                    <a href="https://rickandmortyapi.com/documentation/">
                      API DOCS
                    </a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </S.NavBar>
    </>
  );
};
