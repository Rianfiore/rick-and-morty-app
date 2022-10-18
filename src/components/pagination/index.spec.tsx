import { Pagination } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { RecoilRoot } from "recoil";

const makeSut = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <Pagination />
      </RecoilRoot>
    </ThemeProvider>
  );

describe("Pagination Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("pagination")).toBeInTheDocument();
  });
});

describe("Page Indicator Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("page-indicator")).toBeInTheDocument();
  });

  describe('when ', () => {})
});
