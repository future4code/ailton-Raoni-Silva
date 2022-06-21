import React from "react";
import styled from "styled-components";
import InputPergunta from "./EspacoPergunta";

class Etapa3 extends React.Component {
  render() {
    return (
      <div className="Etapa1">
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <InputPergunta />
        <p>6. Você fez algum curso complementar?</p>
        <InputPergunta />
    
        <p></p>
      </div>
    );
  }
}

export default Etapa3;