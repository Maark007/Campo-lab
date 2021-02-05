import styled, { css } from "styled-components";

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
  .MuiInputBase-root.Mui-disabled {
    margin: 7px 0;
  }
  @media screen and (max-width: 700px) {
    .option {
      padding: 20px 20px 0 20px;
    }
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  .no-item {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
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
      flex-direction: column;
      width: 100%;
      margin-top: 15px;
      input {
        font-size: 17px;
      }
    }
  }
  .text-fields {
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: initial;
    .title {
      flex-direction: column;
      justify-content: space-around;
      padding: 15px 10px 0px 10px;
    }
    .text-fields {
      flex-direction: column;
    }
    .producer-data {
      width: 100%;
    }
    .producer-informations {
      height: 100%;
      margin: 0 !important;
      flex-direction: column;
      justify-content: space-between;
    }
    .mobile-conteiner {
      display: flex;
      margin-bottom: 30px;
    }
    span,
    .title {
      width: auto;
    }
  }
`;
