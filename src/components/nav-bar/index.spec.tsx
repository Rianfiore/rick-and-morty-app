import { NavBar } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { RecoilRoot } from "recoil";
import { handleButtonAction } from ".";
import React from "react";

const makeSut = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <NavBar />
      </RecoilRoot>
    </ThemeProvider>
  );

describe("Nav Bar Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("nav-bar")).toBeInTheDocument();
  });

  it("should call open action button function", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("nav-bar")).toBeInTheDocument();

    const [buttonAction] =
      getByTestId("nav-bar").getElementsByClassName("action-nav-bar");

    expect(buttonAction).toBeInTheDocument();

    if (fireEvent.click(buttonAction)) {
      makeSut();

      const isOpenNavBar = false;
      React.useState = jest.fn().mockReturnValue([isOpenNavBar, {}]);

      expect(handleButtonAction(jest.fn(), isOpenNavBar)).toBeCalled;
    }
  });
});
