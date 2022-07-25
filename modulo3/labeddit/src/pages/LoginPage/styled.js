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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-image:url("https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
  @media screen and (max-device-width: 800px) {
    background-image:url("https://img.freepik.com/premium-vector/abstract-creative-design-modern-white-gray-geometric-stripes-pattern-background-vector-illustration_78474-1059.jpg?w=2000");
  }
 
`;

export const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  
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
  color:#ff3d00;
`;

export const Title = styled.h2`
  @font-face {
    font-family: "roboto";
    src: url(${roboto});
  }
  font-family: roboto;
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
  font-size:11px;
`;