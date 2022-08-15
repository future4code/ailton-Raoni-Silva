
import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";

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
  background-color: #242424;
  align-items: center;
  gap: 1rem;
`;

export default function MatchScreen({ matches }) {
  return (

    <PerfilContainer>
      {matches.map((perfil) => {
        return (
          <ContainerPerfil2 key={perfil}>
            <>
              <PhotoPerfil src={perfil.photo} />
              {perfil.name}, {perfil.age}
            </>
          </ContainerPerfil2>
        );
      })}
    </PerfilContainer>
  )
  )
}
