import styled from "styled-components";

export const ButtonCard = styled.div`
  background-color: ${(props) => props.theme.primaryColor.lightTransparent};

  position: absolute;
  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.5vw;

  .card__details__button {
    background-color: transparent;
    color: ${(props) => props.theme.secondaryColor.dark};

    border: none;

    width: 100%;
    height: 100%;

    text-transform: uppercase;
    font-family: "Righteous", cursive;
    font-size: clamp(7px, 1vw, 35px);

    &:hover {
      cursor: pointer;
    }
  }
`;
