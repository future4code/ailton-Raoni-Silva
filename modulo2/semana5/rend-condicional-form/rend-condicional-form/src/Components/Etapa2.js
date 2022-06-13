import React from "react";
import styled from "styled-components";
import InputPergunta from "./EspacoPergunta";

class Etapa2 extends React.Component {
  render() {
    return (
      <div className="Etapa1">
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <p>5. Qual curso?</p>
        <InputPergunta />
        <p>6. Qual a unidade de ensino?</p>
        <InputPergunta />
    
        <p></p>
      </div>
    );
  }
}

export default Etapa2;
