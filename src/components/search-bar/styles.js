import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;

  .search-bar {
    background-color: #006400;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 25px;
    padding: 5px 0px;

    width: 500px;
    height: 40px;

    &:hover {
      .search-bar__input {
        background-color: #f9f9f9;
      }

      .search-bar__button {
        background-color: #f9f9f9;

        &:hover {
          background-color: #006400;
          cursor: pointer;

          transition: all 0.2s ease-in-out;

          &:active {
            background-color: #5cad4a;
            transform: scale(90%);

            transition: all 0.1s ease-in-out;
          }
        }
      }
    }

    &:focus {
      .search-bar__input {
        background-color: #f9f9f9;
      }
    }

    &__input {
      background-color: white;
      color: #006400;

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

      &::placeholder {
        color: #006400;

        font-family: "Righteous", cursive;
        letter-spacing: 3px;

        padding: 10px 0px;
      }

      &:focus {
        outline: none;

        color: #006400;

        font-family: "Righteous", cursive;
        letter-spacing: 3px;
      }
    }

    &__button {
      background-color: white;
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
        background-color: #5cad4a;
      }
    }
  }
`;
