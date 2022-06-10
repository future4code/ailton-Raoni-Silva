import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import InputMensagemWhats from "./Componets/ComponentsWhats/InputMensagemWhats";

const MensagemUser = styled.p`
margin-left:10px;
padding-top: 10px;


`
const ContainerWhats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WhatsContainer = styled.div`
  display: flex;
  width: 40rem;
  height: 100vh;
  border: solid black;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

class App extends React.Component {
  state = {
    mensagem: [],

    valorInputNome: "",
    valorInputMensagem: "",
  };
  adicionarMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };

    const novasMensagens = [...this.state.mensagem, novaMensagem];

    this.setState({ mensagem: novasMensagens });
    this.setState({ valorInputMensagem: "" });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };
  render() {
    const mensagemRecebida = this.state.mensagem.map((mensage) => {
      return (
        <MensagemUser>
          <strong>{mensage.nome}</strong>: {mensage.mensagem} <br/>
        </MensagemUser>
      );
    });
    return (
      <ContainerWhats>
        <WhatsContainer>
        <div>{mensagemRecebida}</div>
          <InputMensagemWhats
            adicionarMensagem={this.adicionarMensagem}
            onChangeInputNome={this.onChangeInputNome}
            onChangeInputMensagem={this.onChangeInputMensagem}
            valorInputNome={this.state.valorInputNome}
            valorInputMensagem={this.state.valorInputMensagem}
          />
        </WhatsContainer>
      </ContainerWhats>
    );
  }
}

export default App;
