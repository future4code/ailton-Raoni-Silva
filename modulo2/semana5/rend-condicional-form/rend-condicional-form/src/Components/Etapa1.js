import React from "react";
import styled from "styled-components";
import InputPergunta from "./EspacoPergunta";

class Etapa1 extends React.Component {
  render() {
    return (
      <div className="Etapa1">
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual o seu nome?</p>
        <InputPergunta />
        <p>2. Qual sua idade?</p>
        <InputPergunta />
        <p>3. Qual o seu email?</p>
        <InputPergunta />
        <p>4. Qual a sua escolaridade?</p>
        <select name="Escolaridade">
          <option value="">Selecione</option>
          <option value="1">Ensino médio incompleto</option>
          <option value="2">Ensino médio completo</option>
          <option value="3">Superior incompleto</option>
          <option value="1">Superior completo</option>
        </select>
        <p></p>
      </div>
    );
  }
}

export default Etapa1;
