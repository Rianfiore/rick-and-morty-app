import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "theme";

import { useRecoilState, useRecoilValue } from "recoil";
import { themeState } from "recoil/theme/atom";

import { IThemeController } from "./types";
import { useEffect } from "react";

export const ThemeController = ({ children }: IThemeController) => {
  const isDarkMode = useRecoilValue(themeState);
  const [, setIsDarkMode] = useRecoilState(themeState)

  useEffect(() => {
    if(localStorage) {

      const themeLocalStorage = localStorage.getItem('isDarkTheme')
      const theme : boolean = themeLocalStorage === 'true' ? true : false
      
      setIsDarkMode(theme)
    }
  }, [setIsDarkMode])



  return (
    <div data-testid="theme-controller">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </div>
  );
};
