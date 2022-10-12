import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;

  .search-bar {
    background-color: ${(props) => props.theme.primaryColor.base};
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 25px;
    padding: 5px 0px;

    width: 500px;
    height: 40px;

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

      padding: 5px;
      padding-left: 15px;

      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      border: none;

      width: 432px;
      height: 22px;

      font-size: 20px;
      font-family: "Righteous", cursive;
      letter-spacing: 3px;

      &--clear-icon {
        width: 400px;
      }

      &::placeholder {
        color: ${(props) => props.theme.primaryColor.base};

        font-family: "Righteous", cursive;
        letter-spacing: 3px;

        padding: 10px 0px;
      }

      &:focus {
        outline: none;

        color: ${(props) => props.theme.primaryColor.base};

        font-family: "Righteous", cursive;
        letter-spacing: 3px;
      }
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.secondaryColor.dark};
      width: 32px;
      height: 32px;

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
  }
`;
