import styled from "styled-components";

export const WrapperMain = styled.div<{ isfilter: boolean }>`
  margin: 0;
  width: 100%;

  background-color: #ffffff;

  .wrapper__main {
    margin: 0;
    padding: 24px 0;
    width: 95%;
    margin: 1rem auto 0;
  }

  .wrapper__header-main {
    width: 100%;
  }

  .wrapper__main-content {
    width: 100%;
    background-color: #f5f5f5;
    height: ${({ isfilter }) => (isfilter ? "100vh" : null)};
  }

  .container-2 {
    width: 100%;
    background-color: blue;
  }

  .main__grid-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .main__grid-error {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-size: 24px;
  }

  .main__grid-images {
    width: 100%;
    padding: 24px 0;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .main__grid-loading {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    .container {
      max-width: 1500px;
    }

    .main__grid-images {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`;
