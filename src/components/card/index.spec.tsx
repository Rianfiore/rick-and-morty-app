import { Card } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { RecoilRoot } from "recoil";
import axios from "axios";

const makeSut = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <Card
          id={1}
          img="https://rickandmortyapi.com/api/character/1"
          title="Rick Sanchez"
        />
      </RecoilRoot>
    </ThemeProvider>
  );

describe("Card Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("card")).toBeInTheDocument();
  });

  describe("when clicks on card", () => {
    it("should return character data", async () => {});
  });
});
