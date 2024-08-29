import styled from "styled-components";
import { fadeIn } from "../../helpers/utils";

export const WrapperCard = styled.div`
  ${fadeIn()};
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  min-width: 320px;
  width: 100%;
  background-color: #ffffff;

  .card__likes-absolute {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
      margin: 0;
      font-size: 23px;
      line-height: 10px;
      text-transform: uppercase;
      color: #ffffff;
      font-weight: 400;
      font-family: "Open Sans";
      text-align: center;
    }
    .card__likes-like__absolute {
      cursor: pointer;
    }

    .card__likes-unlike__absolute {
      cursor: not-allowed;
    }
  }

  .card__price:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 110px solid #ffffff;
    border-right: 110px solid transparent;
  }

  .card__price {
    span {
      position: absolute;
      top: 20px;
      left: 5px;
      z-index: 1;
      font-size: 20px;
      line-height: 15px;
      text-transform: uppercase;
      color: #000000;
      font-weight: 500;
      font-family: "Brandon Grotesque";
    }
  }
  .card__img {
    width: 100%;
    max-height: 360px;
    object-fit: cover;
  }

  .card__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    p {
      margin: 0;
      font-size: 29px;
      line-height: 25px;
      text-transform: uppercase;
      color: #000000;
      font-weight: 400;
      font-family: "Open Sans", sans-serif;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 300px;
    }

    span {
      display: inline-flex;
      gap: 8px;
      font-size: 18px;
      line-height: 25px;
      color: #c2c2bd;
      font-weight: 400;
      font-family: "Droid Serif";
      text-align: center;
      filter: drop-shadow(0.5px 0.866px 0px #ffffff);
      span {
        color: #000000;
      }
    }
  }

  .card__likes {
    border-top: 1px solid #e2e2e2;
    display: flex;

    justify-content: space-around;
    width: 100%;
    .card__likes-border {
      border-left: 1px solid #e2e2e2;
      border-right: 1px solid #e2e2e2;
    }

    .card__likes-like,
    .card__likes-dislike {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      justify-content: center;
    }

    .card__likes-like {
      cursor: pointer;
    }

    .card__likes-dislike {
      cursor: not-allowed;
    }
  }

  @media screen and (min-width: 550px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`;
