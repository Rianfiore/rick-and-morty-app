import styled from "styled-components";

export const Pagination = styled.div`
  .pagination {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    gap: 25px;

    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 50px;

      &__not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65vw;
        height: 75vh;

        color: #006400;
        text-transform: uppercase;
        font-size: 40px;
      }

      &__cards {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        gap: 15px;

        padding: 2.5% 0%;

        width: 65vw;
        height: 75vh;

        border-bottom: 5px solid rgba(0, 0, 0, 0.2);
        border-radius: 50px;

        filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.2));
      }
    }

    &__footer {
      display: flex;

      justify-content: center;

      gap: 1vw;

      &__page-indicator {
        display: flex;
        justify-content: center;
        align-items: center;

        &__page-group {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 5px;

          &__truncated-page {
            display: flex;
            align-items: center;
            gap: 5px;

            &__button-left {
              display: flex;
              align-items: center;
              position: absolute;

              right: 56.8%;

              &__truncated-point {
                background-color: #006400;
                width: 5px;
                height: 5px;
                border-radius: 100%;
                margin: 0px 2px;
                transform: translateX(100%);
              }
            }

            &__button-right {
              display: flex;
              align-items: center;
              position: absolute;

              left: 56.8%;

              &__truncated-point {
                background-color: #006400;
                width: 5px;
                height: 5px;
                border-radius: 100%;
                margin: 0px 2px;
                transform: translateX(-100%);
              }
            }
          }
        }
      }
    }
  }

  .button__page-indicator {
    &--left {
      position: absolute;
      right: 62.5%;
    }

    &--right {
      position: absolute;
      left: 62.5%;
    }
  }
`;
