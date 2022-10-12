import styled from "styled-components";

export const NavBar = styled.header`
  width: 100%;

  .background {
    width: 100%;
    max-height: 800px;
    height: 60vw;

    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.primaryColor.dark};

    overflow: hidden;

    animation: backgroundColor 2s forwards;

    transition: all 0.1s ease-in-out;

    &__image {
      position: absolute;
      z-index: 0;

      width: 100%;
      height: 100%;

      animation: enterBackground 2s forwards;

      @keyframes enterBackground {
        from {
          filter: brightness(100%) contrast(150%) blur(0px);

          opacity: 0%;
        }

        to {
          filter: brightness(80%) contrast(150%) blur(6px);

          opacity: 100%;
        }
      }

      &--unfocused {
        filter: grayscale(100%) sepia(100%) brightness(25%) contrast(150%)
          hue-rotate(70deg) blur(8px);
      }
    }

    &--unfocused {
      background-color: ${(props) => props.theme.primaryColor.unfocused};

      .background {
        &__title,
        &__nav-bar {
          filter: blur(5px) brightness(40%);
        }
      }
    }

    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding-bottom: 50px;
      padding-top: 100px;

      filter: drop-shadow(
        2px 2px 5px ${(props) => props.theme.dropShadowColor20}
      );

      user-select: none;

      &__border-image {
        background-color: ${(props) => props.theme.secondaryColor.dark};

        max-width: 100px;
        width: 7vw;

        max-height: 100px;
        height: 7vw;

        display: flex;
        align-items: center;

        border: 0.8vw solid ${(props) => props.theme.primaryColor.base};

        padding: clamp(12px, 3.8vw, 100px);

        filter: drop-shadow(
          2px 2px 5px ${(props) => props.theme.dropShadowColor20}
        );

        &--left {
          border-top-left-radius: 100%;
          border-bottom-left-radius: 100%;

          padding-left: clamp(12px, 5vw, 100px);

          filter: drop-shadow(
            0px 5px 0px ${(props) => props.theme.dropShadowColor20}
          );
        }

        &--right {
          border-top-right-radius: 100%;
          border-bottom-right-radius: 100%;

          padding-right: clamp(12px, 5vw, 100px);

          filter: drop-shadow(
            0px 5px 0px ${(props) => props.theme.dropShadowColor20}
          );
        }
      }

      &__text {
        background-color: ${(props) => props.theme.secondaryColor.dark};
        color: ${(props) => props.theme.primaryColor.base};

        font-family: "Righteous", cursive;
        font-weight: 1000;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8vw;

        text-transform: uppercase;
        letter-spacing: 0.4vw;

        filter: drop-shadow(
          0px 5px 0px ${(props) => props.theme.dropShadowColor20}
        );

        animation: enterText 1s forwards;

        @keyframes enterText {
          from {
            font-size: 0px;
          }

          to {
            font-size: clamp(12px, 3vw, 50px);
          }
        }

        &__divider {
          background-color: ${(props) => props.theme.primaryColor.base};
          border: 0.4vw solid ${(props) => props.theme.primaryColor.base};

          max-width: 1200px;
          animation: enterDivider 1s forwards;

          @keyframes enterDivider {
            from {
              width: 0px;
            }

            to {
              width: 55vw;
            }
          }
        }
      }
    }

    &__nav-bar {
      background-color: ${(props) => props.theme.secondaryColor.dark};
      color: ${(props) => props.theme.primaryColor.base};

      max-width: 1400px;
      width: 50%;
      min-height: 100px;
      height: 5vw;

      position: fixed;

      z-index: 2;

      display: flex;
      justify-content: center;
      align-items: center;

      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      border-bottom: 5px solid ${(props) => props.theme.dropShadowColor20};

      filter: drop-shadow(
        2.5px 2.5px 10px ${(props) => props.theme.dropShadowColor20}
      );

      transition: all 0.2s ease-in-out;

      &--hide {
        animation: hideNavBar 1s forwards;
      }

      &--show {
        animation: showNavBar 1s forwards;
      }

      &--inverse {
        background-color: ${(props) => props.theme.primaryColor.base};

        color: ${(props) => props.theme.secondaryColor.base};
      }

      &__content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 25vw;

        &__logo {
          min-width: 30px;
          width: 4vw;
          max-width: 50px;

          min-height: 30px;
          height: 4vw;
          max-height: 50px;

          display: flex;
          justify-content: center;
          align-items: center;

          &--inverse {
            filter: brightness(0%) invert(100%);
          }

          img {
            &:hover {
              cursor: pointer;
            }
          }

          @media (max-width: 1000px) {
            width: 6vw;
            height: 6vw;
          }
        }

        &__title {
          text-transform: uppercase;
          display: flex;
          flex-direction: column;
          align-items: center;

          user-select: none;

          position: absolute;

          gap: 0.2vw;

          &__title-one {
            display: flex;
            align-items: center;

            gap: 0.3vw;

            font-size: clamp(8px, 1.3vw, 18px);
            letter-spacing: 0.2vw;

            h6 {
              font-weight: 500;
            }
          }

          &__divider {
            width: 100%;
            border: 0.03vw solid ${(props) => props.theme.primaryColor.base};
            background-color: ${(props) => props.theme.primaryColor.base};

            &--inverse {
              border: 1px solid ${(props) => props.theme.secondaryColor.high};
              background-color: ${(props) => props.theme.secondaryColor.high};
            }
          }

          &__title-two {
            font-size: clamp(6px, 0.8vw, 12px);
            letter-spacing: 6px;
          }

          @media (max-width: 1000px) {
            gap: 1vw;

            &__title-one {
              font-size: clamp(10px, 1.7vw, 18px);
            }

            &__title-two {
              font-size: clamp(7px, 1.2vw, 12px);
            }
          }
        }

        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3vw;
        }

        &__api-doc {
          background-color: transparent;
          color: ${(props) => props.theme.primaryColor.base};

          display: flex;
          align-items: center;

          padding: 0.25vw 0.7vw;

          border: 0.15vw solid ${(props) => props.theme.primaryColor.base};
          border-radius: 0.3vw;

          &--inverse {
            border-color: ${(props) => props.theme.secondaryColor.base};
            color: ${(props) => props.theme.secondaryColor.dark};

            &:hover {
              cursor: pointer;

              background-color: ${(props) =>
                props.theme.secondaryColor.dark} !important;
              color: ${(props) => props.theme.primaryColor.base} !important;

              border-color: ${(props) =>
                props.theme.secondaryColor.dark} !important;

              transition: all 0.2s ease-in-out;
            }
          }

          a {
            font-weight: 700;
            font-size: clamp(9px, 0.5vw, 13px);
          }

          &:hover {
            cursor: pointer;

            background-color: ${(props) => props.theme.primaryColor.base};
            color: ${(props) => props.theme.secondaryColor.base};

            transition: all 0.2s ease-in-out;
          }

          &:active {
            background-color: ${(props) => props.theme.primaryColor.light};
            border-color: ${(props) => props.theme.primaryColor.light};

            transition: all 0.1s ease-in-out;
          }
        }

        @media (min-width: 2000px) {
          gap: 20vw;
        }

        @media (max-width: 1000px) {
          ul {
            gap: 10vw;
          }

          &__api-doc {
            padding: 4px 5px;
            border-radius: clamp(3px, 0.8vw, 5px);
          }
        }

        @media (max-width: 570px) {
          ul {
            gap: 2vw;
            flex-direction: column;
          }
        }
      }

      @keyframes hideNavBar {
        from {
          top: 0%;
        }

        to {
          top: -20vw;
        }
      }

      @keyframes showNavBar {
        from {
          top: -20vw;
        }

        to {
          top: 0%;
        }
      }

      @media (max-width: 1000px) {
        width: 100%;
        min-height: 95px;
      }

      @media (max-width: 650px) {
        min-height: 75px;
      }

      @media (max-width: 400px) {
        min-height: 65px;
      }
    }

    @keyframes backgroundColor {
      from {
        background-color: ${(props) => props.theme.secondaryColor.high};
      }

      to {
        background-color: ${(props) => props.theme.primaryColor.dark};
      }
    }
  }

  .action-nav-bar {
    background-color: ${(props) => props.theme.secondaryColor.dark};
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 2;

    width: 100px;
    height: 35px;

    border: none;
    border-bottom: 5px solid ${(props) => props.theme.dropShadowColor20};
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;

    color: ${(props) => props.theme.primaryColor.base};

    filter: drop-shadow(
      2px 2px 2px ${(props) => props.theme.dropShadowColor20}
    );

    transition: 0.2s all ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(95%);

      &:active {
        transform: scale(105%);
      }
    }

    &--unfocused {
      filter: grayscale(100%) sepia(100%) brightness(40%) contrast(150%)
        hue-rotate(70deg) blur(5px);
    }

    &--arrow-inverse {
      img {
        filter: brightness(0%) invert(100%);
      }
    }

    &--inverse {
      background-color: ${(props) => props.theme.primaryColor.base};
      color: ${(props) => props.theme.secondaryColor.high};

      &--unfocused {
        filter: brightness(40%) blur(3px);
      }
    }

    &--opened {
      animation: openNavBar2000 1s ease-in forwards !important;
    }

    &--closed {
      animation: closedNavBar2000 0.6s forwards !important;
    }

    &--show {
      animation: showButton 1s forwards;
    }

    &--hide {
      animation: hideButton 1s forwards;
    }

    @keyframes openNavBar400 {
      0% {
        top: -5px;
      }

      50% {
        top: -5px;
      }

      100% {
        top: 65px;
      }
    }

    @keyframes openNavBar650 {
      0% {
        top: -5px;
      }

      50% {
        top: -5px;
      }

      100% {
        top: 75px;
      }
    }

    @keyframes openNavBar2000 {
      0% {
        top: -5px;
      }

      50% {
        top: -5px;
      }

      100% {
        top: 95px;
      }
    }

    @keyframes openNavBarAfter2000 {
      0% {
        top: -5px;
      }

      50% {
        top: -5px;
      }

      100% {
        top: 5.1vw;
      }
    }

    @keyframes closedNavBar2000 {
      0% {
        top: 95px;
      }

      50% {
        top: -5px;
      }

      100% {
        top: -5px;
      }
    }

    @keyframes closedNavBarAfter2000 {
      0% {
        top: 5.1vw;
      }

      50% {
        top: -5px;
      }

      100% {
        top: -5px;
      }
    }

    @keyframes showButton {
      from {
        top: -14%;
      }

      to {
        top: -1%;
      }
    }

    @keyframes hideButton {
      from {
        top: -1%;
      }

      to {
        top: -14%;
      }
    }

    img {
      transform: rotate(90deg);
    }

    @media (min-width: 2000px) {
      &--opened {
        animation: openNavBarAfter2000 1s ease-in forwards !important;
      }

      &--closed {
        animation: closedNavBarAfter2000 0.6s forwards !important;
      }
    }

    @media (max-width: 650px) {
      &--opened {
        animation: openNavBar650 1s ease-in forwards !important;
      }
    }

    @media (max-width: 400px) {
      &--opened {
        animation: openNavBar400 1s ease-in forwards !important;
      }
    }
  }
`;
