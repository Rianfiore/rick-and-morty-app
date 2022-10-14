import { ThemeController, NavBar } from "components";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { RecoilRoot } from "recoil";

const makeSut = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <ThemeController>
          <NavBar />
        </ThemeController>
      </RecoilRoot>
    </ThemeProvider>
  );

describe("Theme Controller Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("theme-controller")).toBeInTheDocument();
  });
});
