import React from "react";
import styled from "styled-components";
import Model from "../img/ela.jpeg";

const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  max-height: 90vh;
  min-height: 55vh;
  background-color: #171717;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  
`;

const PhotoPerfil = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  margin-left: 1rem;
margin-right: 1rem;
`;
const ContainerPerfil2 = styled.div`
display: flex;
width: 30vw;
height: 5rem;
background-color:#242424 ;
align-items: center;
gap:1rem;
`
const Name = styled.h1`
  width: 20rem;
  padding-left: 1rem;
  font-size: 20px;

`;

export default function MatchScreen() {
  return (
    <PerfilContainer>
      <ContainerPerfil2>
      <PhotoPerfil src={Model} alt="Model"/>
      <Name><strong>Maria Janaina, 30</strong></Name>
      </ContainerPerfil2>
      
    
    </PerfilContainer>
  );
}
