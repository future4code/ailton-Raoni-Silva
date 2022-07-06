import React from "react";
import styled from "styled-components";
import Model from "../img/ela.jpeg";

const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  max-height: 90vh;
  align-items: center;
`;

const PhotoBox = styled.img`
  width: 100%;
  display: block;
  width: 90%;
  border-radius: 10px;
`;
const Name = styled.h1`
  width: 20rem;
  padding-left: 3rem;
  font-size: 30px;
`;
const Descricao = styled.h2`
  width: 30vw;
  height: 10vh;
  padding-left: 3rem;
`;
const InfoPerfil = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0;
  width: 30vw;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  border-radius: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10rem;
`;

export default function Home() {
  return (
    <PerfilContainer>
      <InfoPerfil>
        <Name>
          <strong>Maria Janaina, 30</strong>
        </Name>
        <Descricao>Apaixonada por esportes, advogada.</Descricao>
      </InfoPerfil>
      <PhotoBox src={Model} alt="Model" />
    </PerfilContainer>
  );
}
