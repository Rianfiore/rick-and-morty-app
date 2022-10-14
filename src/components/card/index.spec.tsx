import { Card, ButtonCard } from "components";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "theme";
import { RecoilRoot, useRecoilState } from "recoil";
import mockAxios from "jest-mock-axios";
import axios from "axios";
import { openModal } from ".";
import { modalState } from "recoil/modal/atoms";

const useSetModal = () => {
  const [, setModal] = useRecoilState(modalState);

  return setModal;
};

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

const makeSutButton = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <ButtonCard
          label="Show Details"
          onClick={() => openModal(1, useSetModal)}
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

      it("should call open modal function", () => {
        const { getByTestId } = makeSut();

        if (fireEvent.mouseOver(getByTestId("card"))) {
          const buttonDetails = screen.getByRole("button");

          if (fireEvent.click(buttonDetails)) {
            makeSutButton();

            expect(openModal(1, useSetModal)).toBeCalled;
          }
        }
      });

      it("should get api data successfully", async () => {
        const { getByTestId, getByText } = makeSut();

        if (fireEvent.mouseOver(getByTestId("card"))) {
          const { container } = makeSutButton();
          const buttonDetails = container;

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
