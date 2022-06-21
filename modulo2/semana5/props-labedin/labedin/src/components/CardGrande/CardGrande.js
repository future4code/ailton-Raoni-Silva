import React from "react";
import styled from "styled-components";
import "./CardGrande.css";


const CardGrandeContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;
const CardImag = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const CardTitulo = styled.h4`
  margin-bottom: 15px;
`;
const CardDescricao = styled.p`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

function CardGrande(props) {
  return (
    <CardGrandeContainer>
      <CardImag src={props.imagem} />
      <div>
        <CardTitulo>{props.nome}</CardTitulo>
        <CardDescricao>{props.descricao}</CardDescricao>
      </div>
    </CardGrandeContainer>
  );
}

export default CardGrande;
