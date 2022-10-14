import { Modal } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { RecoilRoot } from "recoil";

const makeSut = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <Modal />
      </RecoilRoot>
    </ThemeProvider>
  );

describe("Modal Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("modal")).toBeInTheDocument();
  });
});
