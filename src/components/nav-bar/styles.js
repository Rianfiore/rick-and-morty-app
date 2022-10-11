import styled from "styled-components";

export const NavBar = styled.header`
  width: 100%;

  .background {
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;
    background-color: white;

    overflow: hidden;

    animation: backgroundColor 2s forwards;

    transition: all 0.1s ease-in-out;

    @keyframes backgroundColor {
      from {
        background-color: #fff;
      }

      to {
        background-color: #006400;
      }
    }

    &__image {
      position: absolute;
      z-index: 0;

      width: 100%;
      height: 100%;

      animation: enterBackground 2s forwards;

      @keyframes enterBackground {
        from {
          filter: grayscale(100%) sepia(100%) brightness(100%) contrast(150%)
            hue-rotate(0deg) blur(0px);

          opacity: 0%;
        }

        to {
          filter: grayscale(100%) sepia(100%) brightness(40%) contrast(150%)
            hue-rotate(70deg) blur(6px);

          opacity: 100%;
        }
      }

      &--unfocused {
        filter: grayscale(100%) sepia(100%) brightness(25%) contrast(150%)
          hue-rotate(70deg) blur(8px);
      }
    }

    &--unfocused {
      background-color: rgba(0, 100, 0, 0.5);

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

      filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.1));

      user-select: none;

      &__border-image {
        background-color: white;

        width: 75px;
        height: 75px;

        display: flex;
        align-items: center;

        border: 5px solid #006400;

        padding: 40px;

        filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.1));

        &--left {
          border-top-left-radius: 100px;
          border-bottom-left-radius: 100px;

          padding-left: 55px;

          filter: drop-shadow(0px 5px 0px rgba(0, 0, 0, 0.2));
        }

        &--right {
          border-top-right-radius: 100px;
          border-bottom-right-radius: 100px;

          padding-right: 55px;

          filter: drop-shadow(0px 5px 0px rgba(0, 0, 0, 0.2));
        }
      }

      &__text {
        background-color: white;
        color: #006400;

        font-family: "Righteous", cursive;
        font-weight: 1000;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        text-transform: uppercase;
        letter-spacing: 4px;

        filter: drop-shadow(0px 5px 0px rgba(0, 0, 0, 0.2));

        animation: enterText 1s forwards;

        @keyframes enterText {
          from {
            font-size: 0px;
          }

          to {
            font-size: 35px;
          }
        }

        &__divider {
          background-color: #006400;
          border: 3px solid #006400;

          animation: enterDivider 1s forwards;

          @keyframes enterDivider {
            from {
              width: 0px;
            }

            to {
              width: 750px;
            }
          }
        }
      }
    }

    &__nav-bar {
      background-color: white;
      color: #006400;

      width: 50%;
      height: 100px;

      position: fixed;

      z-index: 2;

      display: flex;
      justify-content: center;
      align-items: center;

      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      border-bottom: 5px solid rgba(0, 0, 0, 0.2);

      filter: drop-shadow(2.5px 2.5px 10px rgba(0, 0, 0, 0.2));

      transition: all 0.2s ease-in-out;

      &--hide {
        animation: hideNavBar 1s forwards;
      }

      &--show {
        animation: showNavBar 1s forwards;
      }

      @keyframes hideNavBar {
        from {
          top: 0%;
        }

        to {
          top: -14%;
        }
      }

      @keyframes showNavBar {
        from {
          top: -14%;
        }

        to {
          top: 0%;
        }
      }

      &--inverse {
        background-color: rgba(0, 100, 0, 1);

        color: white;
      }

      &__content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 450px;

        &__logo {
          &--inverse {
            filter: brightness(0%) invert(100%);
          }

          img {
            &:hover {
              cursor: pointer;
            }
          }
        }

        &__title {
          text-transform: uppercase;
          display: flex;
          flex-direction: column;
          align-items: center;

          user-select: none;

          position: absolute;

          gap: 4px;

          &__title-one {
            display: flex;
            align-items: center;

            gap: 8px;

            font-size: 20px;
            letter-spacing: 3px;

            h6 {
              font-weight: 500;
            }
          }

          &__divider {
            width: 100%;
            border: 1px solid #006400;
            background-color: #006400;

            &--inverse {
              border: 1px solid white;
              background-color: white;
            }
          }

          &__title-two {
            font-size: 15px;
            letter-spacing: 6px;
          }
        }

        ul {
          display: flex;
          justify-content: space-between;
          gap: 3vw;
        }

        &__api-doc {
          background-color: transparent;
          color: #006400;

          padding: 5px 10px;

          border: 2px solid #006400;
          border-radius: 10px;

          &--inverse {
            border-color: white;
            color: white;
          }

          a {
            font-weight: 700;
          }

          &:hover {
            cursor: pointer;

            background-color: #006400;
            color: white;

            transition: all 0.2s ease-in-out;
          }

          &:active {
            background-color: #5cad4a;
            border-color: #5cad4a;

            transition: all 0.1s ease-in-out;
          }
        }
      }
    }
  }

  .action-nav-bar {
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 2;

    width: 100px;
    height: 35px;

    border: none;
    border-bottom: 5px solid rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;

    color: #006400;

    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));

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

    &--inverse {
      background-color: #006400;
      color: white;

      &--unfocused {
        filter: brightness(40%) blur(3px);
      }

      img {
        filter: brightness(0%) invert(100%);
      }
    }

    &--opened {
      animation: openNavBar 1s ease-in forwards !important;
    }

    &--closed {
      animation: closedNavBar 0.6s forwards !important;
    }

    &--show {
      animation: showButton 1s forwards;
    }

    &--hide {
      animation: hideButton 1s forwards;
    }

    @keyframes openNavBar {
      from {
        top: 0px;
      }

      to {
        top: 100px;
      }
    }

    @keyframes closedNavBar {
      from {
        top: 100px;
      }

      to {
        top: 0px;
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
  }
`;
