import styled from "styled-components";

export const Button = styled.div`
  .button {
    color: #006400;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;

    border-radius: 100%;
    border: 5px solid #006400;

    transition: all 0.1s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #efefef;
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
      width: 35px;
      height: 35px;

      font-weight: 1000;

      border: 2px solid #006400;
    }

    &--selected {
      background-color: #006400;
      color: white;

      &:hover {
        cursor: pointer;
        background-color: #006400;
        transform: scale(105%);

        color: white;

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
  }
`;
