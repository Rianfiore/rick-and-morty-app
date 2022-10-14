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

    font-size: clamp(10px, 1.2vw, 25px);

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

    &__text {
      width: 1.8vw;
      height: 1.8vw;

      font-weight: 1000;

      border: 0.15vw solid ${(props) => props.theme.primaryColor.base};

      &--small {
        min-width: 20px;
        width: 1vw;
        min-height: 20px;
        height: 1vw;
      }

      &--medium {
        min-width: 40px;
        width: 2vw;
        min-height: 40px;
        height: 2vw;
      }

      &--large {
        width: 4vw;
        height: 4vw;
      }

      @media (min-width: 800px) {
        &--small {
          width: 3vw;
          height: 3vw;
        }

        &--medium {
          width: 6vw;
          height: 6vw;
        }

        &--large {
          width: 8vw;
          height: 8vw;
        }
      }
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
        min-width: 20px;
        width: 1vw;
        min-height: 20px;
        height: 1vw;
      }

      &--medium {
        min-width: 40px;
        width: 2vw;
        min-height: 40px;
        height: 2vw;
      }

      &--large {
        width: 4vw;
        height: 4vw;
      }

      @media (min-width: 800px) {
        &--small {
          width: 3vw;
          height: 3vw;
        }

        &--medium {
          width: 6vw;
          height: 6vw;
        }

        &--large {
          width: 8vw;
          height: 8vw;
        }
      }
    }
  }
`;
