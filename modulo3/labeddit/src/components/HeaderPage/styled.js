import styled from "styled-components";
import roboto from "./../../assets/fonts/robotolight.ttf";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    width: 100vw;
    font-family: 'Roboto';
  
  }
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  @media screen and (max-device-width: 800px) {
    height: 8vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`;

export const Logo = styled.img`
  width: 3rem;
  align-items: center;
  margin-left: 1rem;
  gap: 1rem;
  @media screen and (max-device-width: 800px) {
    width: 2rem;
    align-items: center;
    margin-left: 1rem;
    padding-top: 0rem;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-right: 2rem;
  @media screen and (max-device-width: 800px) {
    width: 1rem;
    margin-right: 6rem;
  }
`;

export const P2 = styled.p`
  @font-face {
    font-family: "roboto";
    src: url(${roboto});
  }
  font-size: 20px;
  text-align: center;
  color: white;

  @media screen and (max-device-width: 800px) {
    @font-face {
      font-family: "roboto";
      src: url(${roboto});
    }
    font-size: 16px;
    text-align: center;
    color: white;
  }
`;
