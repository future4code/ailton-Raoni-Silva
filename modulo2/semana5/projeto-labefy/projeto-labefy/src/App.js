import React from "react";
import Header  from "./Components/Header";
import Main  from "./Components/Main";
import { Footer } from "./Components/Footer";
import styled from "styled-components";
import axios from "axios";

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
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
