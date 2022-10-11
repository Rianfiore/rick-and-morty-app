//Libs
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Types and Interfaces
import type { AppProps } from "next/app";

import * as S from "styles/app";

//Components
import { NavBar } from "components";
import { createGlobalStyle } from "styled-components";
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

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RecoilRoot>
        <S.App>
          <NavBar />
          <Component {...pageProps} />
        </S.App>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
