import styled from "styled-components";

export const Modal = styled.div`
  .modal {
    position: fixed;
    z-index: 2;
    left: calc(50% - 425px);
    top: calc(50% - 275px);

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
        top: calc(50% - 275px);
      }
    }

    @keyframes exitModal {
      from {
        top: calc(50% - 275px);
      }

      to {
        top: 100%;
      }
    }

    @keyframes nextModal {
      0% {
        left: calc(50% - 425px);
      }

      100% {
        left: -100%;
      }
    }

    @keyframes prevModal {
      0% {
        left: calc(50% - 425px);
      }

      100% {
        left: 100%;
      }
    }

    &__container {
      background-color: ${(props) => props.theme.secondaryColor.base};

      display: flex;
      flex-direction: column;
      align-items: center;

      width: 850px;
      height: 550px;

      border-radius: 50px;

      overflow: hidden;
      &__header {
        background-color: ${(props) => props.theme.primaryColor.base};

        width: 100%;
        height: 20%;

        display: flex;
        justify-content: center;
        align-items: center;

        &__title {
          text-transform: uppercase;
          letter-spacing: 5px;

          color: ${(props) => props.theme.secondaryColor.base};

          font-size: 30px;
        }

        &__exit-button {
          background-color: transparent;
          color: ${(props) => props.theme.secondaryColor.base};

          border: 3px solid ${(props) => props.theme.secondaryColor.base};
          border-radius: 150px;

          width: 25px;
          height: 25px;

          position: absolute;
          left: 93%;
          top: 5%;
          padding: 5px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-weight: 1000;

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
        height: 70%;

        font-size: 20px;
        color: ${(props) => props.theme.primaryColor.base};
      }

      &__footer {
        background-color: ${(props) => props.theme.primaryColor.base};
        height: 13%;

        padding: 0px 15px;

        font-size: 15px;
        color: ${(props) => props.theme.secondaryColor.light};

        h4 {
          color: ${(props) => props.theme.secondaryColor.base};
        }

        p {
          color: ${(props) => props.theme.secondaryColor.base};
        }
      }

      &__content,
      &__footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;

        gap: 20px;

        padding: 15px 0px;

        &__main {
          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 100px;

          &__photo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;

            &__img {
              display: flex;
              justify-content: center;

              border: 5px solid ${(props) => props.theme.primaryColor.base};
              border-radius: 100%;

              img {
                border-radius: 100%;
              }
            }
          }

          &__title {
            letter-spacing: 5px;
            color: ${(props) => props.theme.primaryColor.base};

            width: 450px;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;

            text-align: center;

            h1 {
              font-size: clamp(20px, 2rem, 45px);
              text-transform: uppercase;
            }
          }
        }

        &__details {
          display: flex;
          justify-content: space-around;
          gap: 150px;
        }

        &__label {
          display: flex;
          gap: 10px;

          h4 {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
