import { Card } from ".";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { RecoilRoot } from "recoil";
import mockAxios from "jest-mock-axios";
import axios from "axios";
import { mount, shallow } from "enzyme";

const makeSut = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <Card
          id={1}
          img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
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

  describe("when hover on card", () => {
    it("should render button details", () => {
      const { getByTestId } = makeSut();

      if (fireEvent.mouseOver(getByTestId("card"))) {
        const buttonDetails = screen.getByRole("button");

        expect(buttonDetails).toBeInTheDocument();
        expect(buttonDetails).toHaveClass("card__details__button");
      }
    });

    describe("when click on card", () => {
      it("should be able to click", () => {
        const { getByTestId } = makeSut();

        if (fireEvent.mouseOver(getByTestId("card"))) {
          const buttonDetails = screen.getByRole("button");

          expect(buttonDetails).not.toHaveAttribute("disabled");
        }
      });

      it("should get api data successfully", async () => {
        const { getByText, getByTestId } = makeSut();

        if (fireEvent.mouseOver(getByTestId("card"))) {
          const onClick = jest.fn();
          const buttonDetails = screen.getByRole("button");

          fireEvent.click(buttonDetails);

          expect(onClick).toBeCalled();

          if (fireEvent.click(buttonDetails)) {
            const title = getByText("Rick Sanchez");

            expect(title).toBeInTheDocument;

            const character = {
              id: 1,
              name: "Rick Sanchez",
            };

            mockAxios.get.mockResolvedValueOnce(character);

            axios
              .get(
                `https://rickandmorty.com/api/character/?name=${character.name}`
              )
              .then((res) => {
                expect(res).toEqual(character);
              });
          }
        }
      });
    });
  });
});
