import React from "react";
import Home from "./Home/Home";
import MatchScreen from "./MatchScreen.js/MatchScreen";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Logo from "./img/logoAstro.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack, Icon } from "@chakra-ui/react";
import { IoMdFlame } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";


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
  margin-left: 20rem;
  margin-top: 2rem;
`;
const LogoCont = styled.div`
  display: flex;
  padding: 1rem;
  margin-right: 3rem;
`;
const LogoBox = styled.img`
  width: 10rem;
`;

export default function App() {
  const [tela, setTela] = useState("home");
  const [matches, setMatches] = useState([]);

  
  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raoni/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const trocaTela = () => {
    switch (tela) {
      case "home":
        return <Home />;
      case "matchScreen":
        return <MatchScreen matches={matches} />;
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

  const putClear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raoni/clear"
      )
      .then((res) => {
       alert('Chats Apagados!')
      })
      .catch((err) => {
        console.log(err.response)
      });
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
            width={350}
            variant="solid"
            fontWeight="stronger"
            fontSize="30"
          >
            <LogoBox src={Logo} />
          </Button>
          <Button
            onClick={() => putClear()}
            leftIcon={
              <Icon as={AiOutlineClear} color={"#C53030"} w={8} h={8} />
            }

            backgroundColor={0}
            colorScheme="Red"
          ></Button>
          <Button
            onClick={() => irMatchScreen()}
            leftIcon={
              <Icon as={BsFillChatDotsFill} color={"#C53030"} w={8} h={8} />
            }
            colorScheme="Red"
          ></Button>
        </LogoCont>

        {trocaTela()}
      </ContainerAll>
    </ChakraProvider>
  );
}
