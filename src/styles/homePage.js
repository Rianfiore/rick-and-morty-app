import styled from "styled-components";

export const HomePage = styled.main`
  background: ${(props) => props.theme.backgroundMain};
  background-position: center;
  background-size: cover;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  padding: 5vw 0vw;

  .page__home {
    width: 100%;
  }
`;

export const ModalInterface = styled.div`
  position: fixed;
  z-index: 3;

  width: 100vw;
  height: 100vh;

  .modal-interface__button {
    position: absolute;
    z-index: 4;
    top: calc(50% - 2.5vw);

    pointer-events: fill;

    &--left {
      left: 15vw;
    }

    &--right {
      right: 15vw;
    }

    button {
      background-color: ${(props) => props.theme.secondaryColor.base};
    }
  }
`;
