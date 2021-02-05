import styled, { css } from "styled-components";
import { scaleUpCenter } from "../../animations/keyframes";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 0 0 10px;
  .option {
    h2 {
      color: #1976d2;
      font-family: "Roboto", sans-serif;
      padding-left: 5px;
      font-size: 19px;
      font-weight: 300;
    }
    button {
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none;
      outline: none;
    }
  }
  .MuiFormControl-fullWidth {
    padding-right: 10px;
  }
  .center {
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    .option {
      display: flex;
      justify-content: center;
    }
    .isMobile {
      display: flex;
      margin-bottom: 20px;
      width: 100%;
    }
    .mobile-container {
      .center {
        text-align: left;
      }
    }
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  .title {
    width: 100%;
    display: flex;
    h3 {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 17px;
      width: 100%;
    }
  }
  .producer-data {
    margin-top: 10px;
    .producer-informations {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 15px;
    }
  }
  .edit-delete-button {
    width: 100%;
    display: flex;
    svg {
      margin: 0 5px 0 5px;
      cursor: pointer;
    }
  }
  .button-box {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
  }
  .no-content {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    .no-content {
      padding: 10px 0;
    }
    .title {
      flex-direction: column;
    }
    .producer-data {
      margin: 0;
      margin-left: 15px;
    }
    .producer-informations {
      height: 100%;
      margin: 0 !important;
      flex-direction: column;
      justify-content: space-between;
    }
    h3,
    span,
    .title {
      width: auto;
    }
    h3,
    input {
      padding: 7px 10px;
    }
    .edit-delete-button {
      justify-content: center;
      margin-right: 25px;
    }
  }
`;

export const Dropdown = styled.div`
  border-radius: 4px;
  border: 1px solid #c1c1c7;
  outline: none;
  min-height: 30px;
  height: auto;
  width: 150px;
  background: #1976d2;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  margin-left: -20px;
  cursor: pointer;
  .container {
    display: none;
    position: absolute;
    background: #fff;
    width: 100%;
    bottom: 0;
    height: auto;
    min-height: 48px;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    width: 100%;
  }
  span {
    color: #000;
    padding: 5px 0;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
  ${({ index, myRow }) =>
    index === myRow &&
    css`
      .container {
        animation: ${scaleUpCenter} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1)
          both;
        display: flex;
      }
    `}
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;
