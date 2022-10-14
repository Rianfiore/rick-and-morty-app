import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "theme";

import { useRecoilValue } from "recoil";
import { themeState } from "recoil/theme/atom";

import { IThemeController } from "./types";

export const ThemeController = ({ children }: IThemeController) => {
  const isDarkMode = useRecoilValue(themeState);

  return (
    <div data-testid="theme-controller">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </div>
  );
};
