import React from "react";
import Home from "./Home/Home";
import MatchScreen from "./MatchScreen.js/MatchScreen";
import styled from "styled-components";
import { useState } from "react";

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  justify-self: center;
  width: 40%;
  height: 60%;
`;


export default function App() {
  const [tela, setTela] = useState("home");

 const atualizaTela = (id) => {
   
  };

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

  return (
    <ContainerAll>
      <div>RENDERIZA</div>
      <button onClick={trocaTela()}>Troca Tela</button>
      <Home/>
      <MatchScreen/>
    </ContainerAll>
  );
}
