import { Button } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { hexToRGB } from "utils/functions";

const makeSut = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <Button orientation="left" />
    </ThemeProvider>
  );

describe("Button Default Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("button")).toBeInTheDocument();
  });

  it("should render correct styles on button", () => {
    const { getByTestId } = makeSut();

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

  it("should render classNames on button", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("button")).toHaveClass("button--left");

    const buttonLeft = getByTestId("button").querySelector("button--left");

    if (buttonLeft) {
      expect(buttonLeft).toHaveStyle({
        transform: "rotate(180deg)",
      });
    }
  });

  it("should render correct pseudoclass hover", () => {
    const { getByTestId } = makeSut();
    const { getComputedStyle } = window;

    window.getComputedStyle = (elt) => getComputedStyle(elt);

    const onHover = getComputedStyle(getByTestId("button"), ":hover");

    expect(onHover).toHaveProperty(
      "background-color",
      hexToRGB(`${lightTheme.secondaryColor.base}`)
    );
  });
});
