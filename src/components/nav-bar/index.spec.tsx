import { NavBar } from ".";
import { fireEvent, render,  } from "@testing-library/react";
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
  const { getByTestId } = makeSut();

describe("Nav Bar Component", () => {
  it("should render", () => {
    
    const navBar = getByTestId('nav-bar')

    expect(navBar).toBeInTheDocument();
  });

  it('should have classes', () => {
    const { getByTestId } = makeSut();
    const navBar = getByTestId('nav-bar')

    expect(navBar).toHaveClass('background')
  })



  describe('When has conditional classes', () => {

    it('should have inverse class', () => {
      const {getByTestId} = makeSut()
      const navBar = getByTestId('nav-bar')
  
      fireEvent.scroll(window, {target: {pageYOffset: 0}})
      expect(navBar).not.toHaveClass('inverse')
  
  
      fireEvent.scroll(window, {target: {pageYOffset: 400}})
      expect(navBar).toHaveClass('inverse')
    })
  })

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
