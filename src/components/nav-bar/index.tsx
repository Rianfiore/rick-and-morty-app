import * as S from "./styles";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { modalState } from "recoil/modal/atoms";
import useScrollPosition from "utils/hooks/useScrollPosition";
import { useState } from "react";

export const NavBar = () => {
  const modal = useRecoilValue(modalState);
  const scrollPosition = useScrollPosition();
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  return (
    <>
      <S.NavBar>
        <div
          className={`background ${scrollPosition >= 400 ? "inverse" : ""} ${
            modal.isModalOpen ? "background--unfocused" : ""
          }`}
        >
          <div
            className={`background__image ${
              modal.isModalOpen ? "background__image--unfocused" : ""
            }`}
          >
            <Image src="/images/header-background.jpg" alt="" layout="fill" />
          </div>
          <div className="background__title">
            <div className="background__title__border-image background__title__border-image--left">
              <Image src="/images/rick.png" alt="" width={100} height={150} />
            </div>
            <div className="background__title__text">
              <hr className="background__title__text__divider" />
              <h1>Characters</h1>
              <hr className="background__title__text__divider" />
            </div>
            <div className="background__title__border-image background__title__border-image--right">
              <Image src="/images/morty.png" alt="" width={100} height={150} />
            </div>
          </div>

          <button
            onClick={() => setIsOpenNavBar(!isOpenNavBar)}
            className={`action-nav-bar ${
              scrollPosition >= 400 ? "action-nav-bar--inverse" : ""
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
            <Image src="/images/arrow.png" alt="" width={20} height={20} />
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
                  scrollPosition >= 400
                    ? "background__nav-bar__content__logo--inverse"
                    : ""
                }`}
              >
                <Image src="/images/logo.png" alt="" width={50} height={50} />
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