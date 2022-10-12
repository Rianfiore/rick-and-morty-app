//Libs

//Types and Interfaces
import type { AppProps } from "next/app";

import * as S from "styles/app";

//Components
import { NavBar, ThemeController } from "components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  
  * {
  margin: 0;
  padding: 0;
  box-sizing: none;
  font-weight: 400;
  
  list-style: none;
  }

  a {
    all: unset;
  }

  body {
    font-family: 'Patua One', cursive;
    color: black;

    background-color: black;

    user-select: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <ThemeController>
          <S.App>
            <NavBar />
            <Component {...pageProps} />
          </S.App>
        </ThemeController>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
