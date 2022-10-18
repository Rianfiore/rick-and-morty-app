import { Button } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { hexToRGB } from "utils/functions";
import { IButton } from "./types";


const makeSut = ({orientation = 'right', selected = false, disabled=false, children = null, icon = null} : IButton) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <Button orientation={orientation} selected={selected} disabled={disabled} icon={icon}>{children}</Button>
    </ThemeProvider>
  );

describe("Button Default Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut({});
    const button = getByTestId("button")

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button')
  });

  it("should render correct styles on button", () => {
    const { getByTestId } = makeSut({});

    if (getByTestId("button")) {
      expect(getByTestId("button")).toHaveStyle({
        color: `${lightTheme.primaryColor.base}`,
        "background-color": `${lightTheme.secondaryColor.base}`,
        border: `0.2vw solid ${lightTheme.primaryColor.base}`,
      });
    }

    const buttonText = getByTestId("button").querySelector("button__text");

    if (buttonText) {
      expect(buttonText).toHaveStyle({
        border: `0.15vw solid ${lightTheme.primaryColor.base}}`,
      });
    } else {
      const buttonTextChild = getByTestId("button").childNodes;

      expect(buttonTextChild.length).toBe(0);
    }
  });

  describe("when has conditional classNames on component", () => {

    it('should render orientation class', () => {
      
    const orientation = 'left'
    const { getByTestId } = makeSut({orientation: orientation});
    const button = getByTestId("button")

    if (orientation === 'left') {
      expect(button).toHaveClass("button--left");
      expect(button).toHaveStyle({
        transform: "rotate(180deg)",
      });
    } else {
      expect(button).not.toHaveClass("button--left");
    }})

    it('should render selected class', () => {
      const selected = true
      const { getByTestId } = makeSut({selected: selected});
      const button = getByTestId("button")
  
      if (selected) {
        expect(button).toHaveClass('button--selected')
      } else {
        expect(button).not.toHaveClass('button--selected')
      }
    })

    it('should render disabled class', () => {
      const disabled = true
      const { getByTestId } = makeSut({disabled: disabled});
      const button = getByTestId("button")
  
      if (disabled) {
        expect(button).toHaveClass('button--disabled')
      } else {
        expect(button).not.toHaveClass('button--disabled')
      }
    })

    it('should render size class', () => {
      const children = 'Clique aqui'
      const { getByTestId } = makeSut({children: children});
      const button = getByTestId("button")

      expect(button).toHaveClass('button__text--medium')
    })
  });

  describe('when has pseudoclass on component', () => {
    
    it("should render correct pseudoclass hover", () => {

      const { getByTestId } = makeSut({});
      const { getComputedStyle } = window;

      window.getComputedStyle = (elt) => getComputedStyle(elt);

      const onHover = getComputedStyle(getByTestId("button"), ":hover");

      expect(onHover).toHaveProperty("background-color", hexToRGB(`${lightTheme.secondaryColor.base}`));
    });
  })

  describe('when has conditional rendering on component', () => {
    it ('should render button image when has icon', () => {
      const iconPath = '/images/arrow.png'
      const { getByTestId } = makeSut({icon: iconPath});
      const [buttonImage] = getByTestId("button").getElementsByClassName('button__image')
  
      expect(buttonImage).toBeInTheDocument()
    })


  })
});
