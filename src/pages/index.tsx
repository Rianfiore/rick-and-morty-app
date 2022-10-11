//Types and Interfaces
import type { NextPage } from "next";

import * as S from "styles/homePage";

//Components
import { Pagination } from "components";
import { useRecoilValue } from "recoil";
import { modalState } from "recoil/modal/atoms";
import { createGlobalStyle } from "styled-components";

//Components

import { Modal } from "components";

const UnfocusStyle = createGlobalStyle`
  
  main {
    filter: blur(2px) brightness(50%);
  }
`;

const Home: NextPage = () => {
  const modal = useRecoilValue(modalState);

  return (
    <>
      {modal.isModalOpen && (
        <>
          <Modal />
          <UnfocusStyle />
        </>
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
