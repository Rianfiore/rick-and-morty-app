import styled from "styled-components";

export const Custom404 = styled.div`
  background-color: ${(props) => props.theme.primaryColor.dark};
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  position: fixed;
  z-index: 5;

  .not-found__image {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
