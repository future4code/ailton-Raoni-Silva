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
  min-height: 100vh;
  @media screen and (max-device-width: 800px) {
    background-image: url("https://img.freepik.com/premium-vector/abstract-creative-design-modern-white-gray-geometric-stripes-pattern-background-vector-illustration_78474-1059.jpg?w=2000");
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

export const ContainerLike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const BoxPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
`;

export const Line = styled.img`
  width: 20rem;
  border: 0.5px solid;
  color: #ff3d00;
`;

export const BoxFeed = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 18rem;
  min-height: 2rem;
  border: 1px solid #ff3d00;
  border-radius: 1.2rem;
  margin: 1rem;
  padding: 0.5rem;
  
  /* justify-content: center; */
`;
export const P2 = styled.p`
  @font-face {
    font-family: "roboto";
    src: url(${roboto});
  }
  font-family: roboto;
  font-size: 11px;
`;
export const Title = styled.h4`
  @font-face {
    font-family: "roboto";
    src: url(${roboto});
  }
  font-family: roboto;
  margin: 0;
  display: flex;

`;
