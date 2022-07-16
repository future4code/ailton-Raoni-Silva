import React from "react";
import { Buttons, Container, Logo1 } from "../Style/Style";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { goToLista } from "../Routes/Coordinator";
import { goToLogin } from "../Routes/Coordinator";
import labex2 from "../img/labex2.png";
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'





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
    <ChakraProvider>
    <Container>
      <GlobalStyle> </GlobalStyle>
      <Logo1 src={labex2} />
      <Buttons>
        <Button colorScheme='blue' color='#ED8936' size='md' variant='outline' onClick={() => goToLista(navigate)}>Viagens</Button>
        <Button colorScheme='blue' color='#ED8936' size='md' variant='outline' onClick={() => goToLogin(navigate)}>Área de Admin</Button>
      </Buttons>
    </Container>
    </ChakraProvider>
  );
}
