import { SearchBar } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { RecoilRoot } from "recoil";

const makeSut = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <SearchBar />
      </RecoilRoot>
    </ThemeProvider>
  );

describe("Search Bar Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("search-bar")).toBeInTheDocument();
  });
});
