import React from "react";
import styled from "styled-components";
import { Buttons, Container } from "../Style/Style";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    width: 100vw;
  height: 100vh;
  }
`;
    
    

export default function Home() {
  const navigate = useNavigate();

  const goToLista = () => {
    navigate("/listas");
  };

  const goToLogin = () => {
    navigate("login");
  };

  return (
    <Container>
      <GlobalStyle> </GlobalStyle>
      <h1>LabeX</h1>
      <Buttons>
        <button onClick={goToLista}>Viagens</button>
        <button onClick={goToLogin}>Área de Admin</button>
      </Buttons>
    </Container>
  );
}
