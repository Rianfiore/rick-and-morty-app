import styled from "styled-components";

export const HomePage = styled.main`
  background: url("/images/main-background.jpg");
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
    z-index: 2;

    top: calc(50% - 50px);

    pointer-events: fill;

    &--left {
      left: 15vw;
    }

    &--right {
      right: 15vw;
    }

    button {
      background-color: #e5e5e5;
    }
  }
`;
