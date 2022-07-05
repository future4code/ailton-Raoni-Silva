import React from "react";
import MatchScreen from "../MatchScreen.js/MatchScreen";
import { useState } from "react";
import styled from "styled-components";
import Perfil from "../Perfil/Perfil";

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 70%;
`;

const DivButton = styled.div`
  display: flex;
  gap: 14rem;
`;

export default function App() {
  const [tela, setTela] = useState("perfil");

  const trocaTela = () => {
    switch (tela) {
      case "perfil":
        return <Perfil />;
      case "matchScreen":
        return <MatchScreen />;
      default:
        return <Perfil />;
    }
  };

  const matchScreen = () => {
    setTela("matchScreen");
  };

  const perfilPage = () => {
    setTela("perfil");
  };

  return (
    <ContainerAll>
      <DivButton>
        <Button onClick={() => perfilPage()}>Home</Button>
        <Button onClick={() => matchScreen()}>Match</Button>
      </DivButton>
      {trocaTela()}
    </ContainerAll>
  );
}
