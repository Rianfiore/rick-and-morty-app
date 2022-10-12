import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;

  .search-bar {
    background-color: ${(props) => props.theme.primaryColor.base};
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 15vw;
    padding: 0.4vw 0px;

    width: 31.5vw;
    height: 2.5vw;

    &:hover {
      .search-bar__input {
        background-color: ${(props) => props.theme.secondaryColor.base};
      }

      .search-bar__button {
        background-color: ${(props) => props.theme.secondaryColor.base};

        &:hover {
          background-color: ${(props) => props.theme.primaryColor.base};
          cursor: pointer;

          transition: all 0.2s ease-in-out;

          &:active {
            background-color: ${(props) => props.theme.primaryColor.light};
            transform: scale(90%);

            transition: all 0.1s ease-in-out;
          }
        }
      }
    }

    &:focus {
      .search-bar__input {
        background-color: ${(props) => props.theme.secondaryColor.base};
      }
    }

    &__input {
      background-color: ${(props) => props.theme.secondaryColor.dark};
      color: ${(props) => props.theme.primaryColor.base};

      padding: 0.4vw;
      padding-left: 1vw;

      border-top-left-radius: 10vw;
      border-bottom-left-radius: 10vw;
      border: none;

      width: 27vw;
      height: 1.5vw;

      font-size: clamp(8px, 1vw, 30px);
      font-family: "Righteous", cursive;
      letter-spacing: 3px;

      &--clear-icon {
        width: 24.7vw;
      }

      &::placeholder {
        color: ${(props) => props.theme.primaryColor.base};

        font-family: "Righteous", cursive;
        letter-spacing: 3px;

        padding: 0.7vw 0px;
      }

      &:focus {
        outline: none;

        color: ${(props) => props.theme.primaryColor.base};

        font-family: "Righteous", cursive;
        letter-spacing: 0.1vw;
      }
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.secondaryColor.dark};
      width: 2.3vw;
      height: 2.3vw;

      border-top-right-radius: 100%;
      border-bottom-right-radius: 100%;
      border: none;

      &:hover {
        img {
          filter: brightness(0%) invert(100%);
        }
      }

      &:active {
        background-color: ${(props) => props.theme.primaryColor.light};
      }

      &--inverse {
        img {
          filter: brightness(0%) invert(100%);
        }

        &:hover {
          img {
            filter: none;
          }
        }
      }

      &__image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1vw;
        height: 1vw;
      }

      &__first {
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;

        &:hover {
          img {
            filter: brightness(0%) invert(100%);
          }
        }
      }
    }

    @media (max-width: 1000px) {
      width: 60vw;
      height: 5.2vw;

      &__input {
        width: 52.5vw;
        height: 4vw;

        font-size: clamp(10px, 2vw, 30px);

        &--clear-icon {
          width: 47.8vw;
        }
      }

      &__button {
        width: 4.8vw;
        height: 4.8vw;

        &__image {
          width: 2vw;
          height: 2vw;
        }
      }
    }
  }
`;
