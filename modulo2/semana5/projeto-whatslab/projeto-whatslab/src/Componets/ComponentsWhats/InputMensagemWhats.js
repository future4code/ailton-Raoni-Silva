import React from "react";
import styled from "styled-components";

const InputMensage = styled.input`
  width: 413px;
`;
const InputContainer = styled.div`
  display: flex;
`;
class InputMensagemWhats extends React.Component {
  render() {
    return (
      <div>
        <InputContainer>
          <input
            value={this.props.valorInputNome}
            onChange={this.props.onChangeInputNome}
            placeholder={"Nome"}
          />
          <InputMensage
            value={this.props.valorInputMensagem}
            onChange={this.props.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.props.adicionarMensagem}>Adicionar</button>
        </InputContainer>
      </div>
    );
  }
}

export default InputMensagemWhats;
