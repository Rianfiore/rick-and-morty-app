import styled from "styled-components";

export const Switcher = styled.div`
  .switcher {
    background-color: ${(props) => props.theme.switchColor.background};

    min-width: 35px;
    width: 3.5vw;
    min-height: 15px;
    height: 1.5vw;

    border-radius: 2.7vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      min-width: 40px;
      width: 3.5vw;
      min-height: 15px;
      height: 1.5vw;
      opacity: 0;
      position: absolute;
      z-index: 2;

      &:hover {
        cursor: pointer;
      }
    }

    &__circle {
      background-color: ${(props) => props.theme.switchColor.circle};
      min-width: 15px;
      width: 1.5vw;
      min-height: 15px;
      height: 1.5vw;
      position: fixed;
      border-radius: 2vw;

      filter: drop-shadow(
        2px 2px 2px ${(props) => props.theme.dropShadowColor20}
      );

      &--enabled {
        animation: slideIn 0.5s forwards;
        border-right: 3px solid ${(props) => props.theme.secondaryColor.base};
      }

      &--disabled {
        animation: slideOut 0.5s forwards;
        border-left: 3px solid ${(props) => props.theme.secondaryColor.base};
      }

      @keyframes slideIn {
        from {
          transform: translateX(-0%);
        }
        to {
          transform: translateX(100%);
        }
      }

      @keyframes slideOut {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(-0%);
        }
      }
    }

    &__icon-one,
    &__icon-two {
      min-width: 10px;
      width: 4vw;
      max-width: 25px;

      min-height: 10px;
      height: 4vw;
      max-height: 25px;

      padding: 0.3vw;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 1000px) {
      &__icon-one,
      &__icon-two {
        width: 1vw;
        height: 1vw;

        position: relative;
      }
    }

    @media (max-width: 550px) {
      &__icon-one {
        margin-left: 0.5vw;
      }

      &__icon-two {
        margin-right: 0.5vw;
      }
    }
  }
`;
