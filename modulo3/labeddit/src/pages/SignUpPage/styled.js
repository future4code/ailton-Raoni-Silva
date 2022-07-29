import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import roboto from "./../../assets/fonts/robotolight.ttf";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    width: 100vw;
    font-family: 'Roboto';
  
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

export const BackSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40vh;
  background-image: url("https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: 100vw;
  background-position: 0rem;
  background-repeat: no-repeat;
  @media screen and (max-device-width: 800px) {
    background-image: url("https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    height: 41vh;
    margin-bottom: 1rem;
  }
`;

export const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  @media screen and (max-device-width: 800px) {
  
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 10rem;
  padding-top: 5rem;
`;

export const Line = styled.img`
  width: 20rem;
  border: 0.5px solid;
  margin: 1rem;
  color: #ff3d00;
`;

export const Title = styled.h1`
  padding-bottom: 4rem;
  color: #ff3d00;
`;

export const P = styled.p`
  @font-face {
    font-family: "roboto";
    src: url(${roboto});
  }
  font-family: roboto;
`;

export const P2 = styled.p`
  @font-face {
    font-family: "roboto";
    src: url(${roboto});
  }
  font-size: 11px;
  text-align: center;
  margin: -5px;
`;
