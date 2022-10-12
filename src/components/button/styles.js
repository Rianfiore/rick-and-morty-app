import styled from "styled-components";

export const Button = styled.div`
  .button {
    color: ${(props) => props.theme.primaryColor.base};
    background-color: ${(props) => props.theme.secondaryColor.base};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5vw;

    border-radius: 100%;
    border: 0.2vw solid ${(props) => props.theme.primaryColor.base};

    transition: all 0.1s ease-in-out;

    font-size: clamp(3px, 0.8vw, 20px);

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.secondaryColor.base};
      transform: scale(105%);

      &:active {
        transform: scale(95%);

        transition: all 0.05s ease-in-out;
      }
    }

    &--disabled {
      opacity: 0.3;
      pointer-events: none;
    }

    &--text {
      width: 1.8vw;
      height: 1.8vw;

      font-weight: 1000;

      border: 0.15vw solid ${(props) => props.theme.primaryColor.base};
    }

    &--selected {
      background-color: ${(props) => props.theme.primaryColor.base};
      color: ${(props) => props.theme.secondaryColor.high};

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.primaryColor.base};
        transform: scale(105%);

        color: ${(props) => props.theme.secondaryColor.high};

        &:active {
          transform: scale(95%);
        }
      }
    }

    &--left {
      transform: rotate(180deg);

      &:hover {
        transform: rotate(180deg) scale(105%);

        &:active {
          transform: rotate(180deg) scale(95%);
        }
      }
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;

      &--small {
        width: 1vw;
        height: 1vw;
      }

      &--medium {
        width: 2vw;
        height: 2vw;
      }

      &--large {
        width: 4vw;
        height: 4vw;
      }
    }
  }
`;
