import styled from "styled-components";

export const Modal = styled.div`
  .modal {
    position: absolute;
    z-index: 2;

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    filter: drop-shadow(
      10px 10px 10px ${(props) => props.theme.dropShadowColor20}
    );

    &--opened {
      pointer-events: fill;
      animation: enterModal 1s forwards;
    }

    &--closed {
      animation: exitModal 1s forwards;
    }

    &--next {
      animation: nextModal 1s forwards !important;
    }

    &--prev {
      animation: prevModal 1s forwards !important;
    }
    @keyframes enterModal {
      from {
        top: 100%;
      }

      to {
        top: 0%;
      }
    }

    @keyframes exitModal {
      from {
        top: 0%;
      }

      to {
        top: 100%;
      }
    }

    @keyframes nextModal {
      0% {
        left: 0%;
      }

      100% {
        left: -100%;
      }
    }

    @keyframes prevModal {
      0% {
        left: 0%;
      }

      100% {
        left: 100%;
      }
    }

    &__container {
      background-color: ${(props) => props.theme.secondaryColor.dark};

      display: flex;
      flex-direction: column;
      align-items: center;

      width: 40vw;
      height: auto;

      border-radius: 2.5vw;

      overflow: hidden;
      &__header {
        background-color: ${(props) => props.theme.primaryColor.base};

        width: 100%;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1.5vw 0vw;

        &--inverse {
          background-color: ${(props) => props.theme.neutralColor.base};
        }

        &__title {
          text-transform: uppercase;
          letter-spacing: 0.5vw;

          color: ${(props) => props.theme.secondaryColor.base};

          font-size: 1.5vw;

          &--inverse {
            color: ${(props) => props.theme.primaryColor.base};
          }
        }

        &__exit-button {
          background-color: transparent;
          color: ${(props) => props.theme.secondaryColor.base};

          border: 0.25vw solid ${(props) => props.theme.secondaryColor.base};
          border-radius: 150px;

          width: 1.2vw;
          height: 1.2vw;

          position: absolute;
          right: 32vw;

          padding: 0.5vw;

          font-size: 0.6vw;

          display: flex;
          align-items: center;
          justify-content: center;

          font-weight: 1000;

          &--inverse {
            border-color: ${(props) => props.theme.primaryColor.base};
            color: ${(props) => props.theme.primaryColor.base};
          }

          &:hover {
            cursor: pointer;

            transform: scale(105%);
          }

          &:active {
            transform: scale(95%);
          }
        }
      }

      &__content {
        font-size: 1.3vw;
        color: ${(props) => props.theme.primaryColor.base};

        gap: 2vw;

        padding: 1.5vw 0vw;
      }

      &__footer {
        background-color: ${(props) => props.theme.primaryColor.base};
        width: 100%;
        height: auto;

        padding: 1.2vw 0vw;

        font-size: 0.8vw;
        color: ${(props) => props.theme.secondaryColor.light};

        h4 {
          color: ${(props) => props.theme.secondaryColor.base};
        }

        p {
          color: ${(props) => props.theme.secondaryColor.base};
        }

        &--inverse {
          background-color: ${(props) => props.theme.neutralColor.base};

          h4 {
            color: ${(props) => props.theme.primaryColor.base};
          }

          p {
            color: ${(props) => props.theme.primaryColor.base};
          }
        }
      }

      &__content,
      &__footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;

        &__main {
          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 3vw;

          &__photo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.2vw;

            &__img {
              display: flex;
              justify-content: center;

              width: 7vw;
              height: 7vw;

              border: 0.45vw solid ${(props) => props.theme.primaryColor.base};
              border-radius: 100%;

              img {
                border-radius: 100%;
              }
            }

            &__status {
              font-size: 1vw;
              letter-spacing: 0.1vw;
              text-transform: uppercase;
            }
          }

          &__title {
            letter-spacing: 0.7vw;
            color: ${(props) => props.theme.primaryColor.base};

            width: 20vw;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1vw;

            text-align: center;

            &__name {
              font-size: 1.8vw;
              text-transform: uppercase;
            }

            &__origin {
              font-size: 1vw;
              letter-spacing: 0.25vw;
              text-transform: uppercase;
            }
          }
        }

        &__details {
          display: flex;
          justify-content: space-around;
          gap: 5vw;
        }

        &__label {
          display: flex;
          gap: 0.3vw;

          h4 {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
