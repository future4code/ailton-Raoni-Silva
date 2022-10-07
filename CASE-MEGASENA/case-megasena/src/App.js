import React from "react";
import styled from "styled-components";
import mega from "./img/MEGA-SENA.png";
import trevo from "./img/Logo_Sena.png";
import Contest from "./Components/contest";
import ContestNumber from "./Components/contestNumber";
import Results from "./Components/results";

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Header = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #6befa3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 40% 40% 0% 0%;
  margin-top: 37vh;
  width: 100%;
  height: 60%;
  background-color: #ededed;
`;

const Select = styled.select`
  border-radius: 10px;
  border: 0;
  width: 10rem;
  height: 40px;
  margin-top: 3rem;
  padding-left: 1rem;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Img = styled.img`
  width: 40%;
`;
const Img2 = styled.img`
  width: 90%;
`;
function App() {
  return (
    <Screen>
      <Header>
        <Contest />
        <Logo>
          <Img src={trevo} alt="logo mega" />
          <Img2 src={mega} alt="logo mega" />
        </Logo>
        <ContestNumber />
      </Header>

      <Results />

      <h3>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </h3>
    </Screen>
  );
}

export default App;
