import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  img {
    padding: 15px;
    height: 100px;
  }
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px;
  .filter {
    display: flex;
    flex-direction: column;
  }
  .filter-content {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    margin: 5px 0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    :hover {
      background: #1976d2;
      color: #fff;
      transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      svg {
        fill: #fff !important;
      }
    }
    span {
      padding-left: 10px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
    }
  }
  .selected {
    background: #1976d2;
    color: #fff;
    svg {
      fill: #fff !important;
    }
  }
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  @media screen and (max-width: 1100px) {
    width: 95%;
  }
  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;
