import React from "react";
import axios from "axios";
import styled from "styled-components";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuario";

const H2 = styled.h2`
  padding-left: 2rem;
`;

const Button = styled.button`
  margin-left: 2rem;
  color: white;
  background-color: rgb(50, 157, 239);
  border-radius: 5px;
  border-color: 0;
  height: 2rem;
  width: 8rem;
`;

const Label = styled.label`
  margin: 1rem;
`;
const Input = styled.input`
  color: white;
  background-color: rgb(50, 157, 239);
  border-radius: 5px;
  border-color: 0;
  height: 2rem;
  width: 6rem;
`;

const Input2 = styled.input`
  height: 2rem;
  width: 20rem;
  margin: 1rem;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />;
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />;
      default:
        return <div>Erro! Página não encontrada!</div>;
    }
  };

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irParaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return <div>{this.escolheTela()}</div>;
  }
}

