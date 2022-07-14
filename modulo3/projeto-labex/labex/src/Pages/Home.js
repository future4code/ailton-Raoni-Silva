import React from "react";
import { Buttons, Container, Button, Logo } from "../Style/Style";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { goToLista } from "../Routes/Coordinator";
import { goToLogin } from "../Routes/Coordinator";
import labex2 from "../img/labex2.png"


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    width: 100vw;
    font-family: "Cambria";
  
  }
`;

export default function Home() {
  const navigate = useNavigate();
  

  return (
    <Container>
      <GlobalStyle> </GlobalStyle>
      <Logo src={labex2} />
      <Buttons>
        <Button onClick={() => goToLista(navigate)}>Viagens</Button>
        <Button onClick={() => goToLogin(navigate)}>Área de Admin</Button>
      </Buttons>
    </Container>
  );
}
