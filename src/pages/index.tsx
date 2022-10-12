//Types and Interfaces
import type { NextPage } from "next";

import * as S from "styles/homePage";

//Components
import { Pagination, Button } from "components";
import { useRecoilValue, useRecoilState } from "recoil";
import { modalState } from "recoil/modal/atoms";
import { createGlobalStyle } from "styled-components";

//Components

import { Modal } from "components";
import { pageState } from "recoil/api/atoms";
import axios from "axios";
import { themeState } from "recoil/theme/atom";

const UnfocusStyle = createGlobalStyle`
  
  main {
    filter: blur(8px) brightness(40%);
  }
`;

const Home: NextPage = () => {
  const [, setModal] = useRecoilState(modalState);
  const modal = useRecoilValue(modalState);
  const page = useRecoilValue(pageState);
  const isDarkTheme = useRecoilValue(themeState);

  return (
    <>
      {modal.isModalOpen && (
        <S.ModalInterface>
          <div className="modal-interface__button modal-interface__button--left">
            <Button
              size="large"
              type="button"
              icon={`/images/arrow${isDarkTheme ? "-inverse" : ""}.png`}
              iconSize={100}
              orientation="left"
              disabled={modal.id <= 1}
              onClick={() => {
                if (modal.id <= 1) return;

                axios
                  .get(
                    `https://rickandmortyapi.com/api/character/${modal.id - 1}`
                  )
                  .then((res) => {
                    setModal({ ...modal, slideDirection: "prev" });
                    setTimeout(() => {
                      setModal({ ...res.data, isModalOpen: true });
                    }, 1500);
                  });
              }}
            />
          </div>
          <Modal />
          <div className="modal-interface__button modal-interface__button--right">
            <Button
              size="large"
              type="button"
              icon={`/images/arrow${isDarkTheme ? "-inverse" : ""}.png`}
              iconSize={100}
              disabled={page ? modal.id >= page.info.count : true}
              onClick={() => {
                if (page && modal.id >= page.info.count) return;

                axios
                  .get(
                    `https://rickandmortyapi.com/api/character/${modal.id + 1}`
                  )
                  .then((res) => {
                    setModal({ ...modal, slideDirection: "next" });
                    setTimeout(() => {
                      setModal({ ...res.data, isModalOpen: true });
                    }, 1000);
                  });
              }}
            />
          </div>
          <UnfocusStyle />
        </S.ModalInterface>
      )}

      <S.HomePage>
        <div className="page__home">
          <Pagination />
        </div>
      </S.HomePage>
    </>
  );
};

export default Home;
