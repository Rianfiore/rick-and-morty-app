import styled from "styled-components";

export const Switcher = styled.div`
  .switcher {
    background-color: ${(props) => props.theme.switchColor.background};
    width: 60px;
    height: 30px;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 60px;
      height: 30px;
      opacity: 0;
      position: absolute;
      z-index: 2;

      &:hover {
        cursor: pointer;
      }
    }

    &__circle {
      background-color: ${(props) => props.theme.switchColor.circle};
      width: 30px;
      height: 30px;
      position: fixed;
      border-radius: 20px;

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

    &__icon-one {
      width: 50%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__icon-two {
      width: 50%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
