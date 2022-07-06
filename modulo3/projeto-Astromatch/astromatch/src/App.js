import React from "react";
import Home from "./Home/Home";
import MatchScreen from "./MatchScreen.js/MatchScreen";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Logo from "./img/logoAstro.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack, Icon } from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";
import { IoMdFlame } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Tahoma';
  };
  `;

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  align-items: center;
  width: 30vw;
  height: 95vh;
  border-radius: 2rem;
  margin-left: 30rem;
  margin-top: 2rem;
`;
const LogoCont = styled.div`
  display: flex;
  padding: 1rem;
  margin-right: 7rem;
`;
const LogoBox = styled.img`
  width: 10rem;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
  width: 30vw;
`;

export default function App() {
  const [tela, setTela] = useState("home");

  const trocaTela = () => {
    switch (tela) {
      case "home":
        return <Home />;
      case "matchScreen":
        return <MatchScreen />;
      default:
        return <Home />;
    }
  };
  const irHome = () => {
    setTela("home");
  };
  const irMatchScreen = () => {
    setTela("matchScreen");
  };

  return (
    <ChakraProvider>
      <ContainerAll>
        <GlobalStyle></GlobalStyle>
        <LogoCont>
          <Button
            onClick={() => irHome()}
            leftIcon={<Icon as={IoMdFlame} color={"#C53030"} w={10} h={10} />}
            colorScheme="Red"
            width={460}
            variant="solid"
            fontWeight="stronger"
            fontSize="30"
          >
            <LogoBox src={Logo} />
          </Button>
          <Button
            onClick={() => irMatchScreen()}
            leftIcon={
              <Icon as={BsFillChatDotsFill} color={"#C53030"} w={8} h={8} />
            }
            colorScheme="Red"
          ></Button>
        </LogoCont>

        {trocaTela()}

        <Footer>
          <Button
            leftIcon={
              <Icon as={BsFillHeartFill} color={"#C53030"} w={12} h={12} />
            }
            colorScheme="Red"
            variant="solid"
            h={4}
            fontWeight="thin"
            fontSize="16"
            marginBottom="1"
            marginTop="2"
          />
          <Button
            leftIcon={
              <Icon as={ImCancelCircle} color={"#C53030"} w={12} h={12} />
            }
            colorScheme="Red"
            variant="solid"
            h={4}
            fontWeight="thin"
            fontSize="16"
            marginBottom="1"
            marginTop="2"
          ></Button>
        </Footer>
      </ContainerAll>
    </ChakraProvider>
  );
}
