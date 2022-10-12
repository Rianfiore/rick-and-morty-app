import styled from "styled-components";

export const Card = styled.div`
  .card {
    background: ${(props) => props.theme.backgroundGalaxy};
    background-size: contain;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 13vw;
    height: 20vw;

    border: 0.4vw solid ${(props) => props.theme.secondaryColor.dark};
    border-radius: 2.5vw;

    filter: drop-shadow(
      5px 5px 0px ${(props) => props.theme.dropShadowColor20}
    );

    transition: all 0.1s ease-in-out;

    &:active {
      transform: scale(95%);

      transition: all 0.05s ease-in-out;
    }

    &--hover {
      cursor: pointer;
      transform: scale(105%);
    }

    &__details {
      background-color: ${(props) => props.theme.primaryColor.lightTransparent};

      position: absolute;

      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 1.5vw;

      &__button {
        background-color: transparent;
        color: ${(props) => props.theme.secondaryColor.dark};

        border: none;

        width: 100%;
        height: 100%;

        text-transform: uppercase;
        font-family: "Righteous", cursive;
        font-size: clamp(7px, 1vw, 35px);
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      position: relative;
      transform: translateY(-8%);

      padding: 0.2vw 0.5vw;

      gap: 0.35vw;

      &--hover {
        opacity: 0.2;
      }

      &__photo {
        background: ${(props) => props.theme.backgroundPortal} no-repeat;
        background-size: 13vw 13vw;
        background-position: center;

        width: 14vw;
        height: 14vw;

        transform: scale(72.5%);

        display: flex;
        align-items: center;
        justify-content: center;

        &__cover {
          position: absolute;
          z-index: 1;

          width: 15vw;

          filter: drop-shadow(
            2px 2px 0px ${(props) => props.theme.dropShadowColor50}
          );

          animation: rotating 50s linear infinite;

          img {
            filter: ${(props) => props.theme.backgroundPortalFilter};
          }
        }
        img {
          border-radius: 100%;
          transform: scale(95%);
        }
      }

      &__text-box {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 80%;
        height: 2vw;

        translate: 0% -20%;

        &__name {
          font-size: clamp(6px, 1.3vw, 30px);
          text-align: center;
          color: ${(props) => props.theme.primaryColor.base};
          filter: drop-shadow(
              0.2vw 0px 0px ${(props) => props.theme.secondaryColor.dark}
            )
            drop-shadow(
              0px 0.2vw 0px ${(props) => props.theme.secondaryColor.dark}
            )
            drop-shadow(
              -0.1vw 0px 0px ${(props) => props.theme.secondaryColor.dark}
            )
            drop-shadow(
              0px -0.1vw 0px ${(props) => props.theme.secondaryColor.dark}
            )
            drop-shadow(
              0.3vw 0.2vw 0.1vw ${(props) => props.theme.dropShadowColor50}
            );
        }
      }
    }
  }

  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
