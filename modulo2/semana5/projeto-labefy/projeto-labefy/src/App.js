import React from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import styled from "styled-components";
import axios from "axios";

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 98vw;
  height: 98vh;
`;

export default class App extends React.Component {
  render() {
    return (
      <ContainerAll>
        <Header />
        <Main />
       <Footer />
      </ContainerAll>
    );
  }
}
