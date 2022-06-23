import React from "react";
import styled from "styled-components";

const DivMain = styled.div`
  background-color: rgb(21, 21, 21);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 60%;
`;

const ContainerMaster = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  
`;
const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 10px;
  background-color: #f2f7ff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #b9d3f8;
  }
`;
const TituloList = styled.p`
  color: #0e62b5;
  font-size: 20px;
  margin: 0 0 4px 0;
  font-weight: 600;
`;
const DescricaoList = styled.p`
  font-size: 18px;
  margin: 0;
  color: #242932;
`;

export const Main = () => {
  return (
    <DivMain>
      <ContainerMaster>
        <ContainerList>
          <TituloList>Músicas de Praia </TituloList>
          <DescricaoList> Músicas para curtir uma praia.</DescricaoList>
        </ContainerList>
        <ContainerList>
          <TituloList>Músicas de Praia </TituloList>
          <DescricaoList> Músicas para curtir uma praia.</DescricaoList>
        </ContainerList>
        <ContainerList>
          <TituloList>Músicas de Praia </TituloList>
          <DescricaoList> Músicas para curtir uma praia.</DescricaoList>
        </ContainerList>
        <ContainerList>
          <TituloList>Músicas de Praia </TituloList>
          <DescricaoList> Músicas para curtir uma praia.</DescricaoList>
        </ContainerList>
        <ContainerList>
          <TituloList>Músicas de Praia </TituloList>
          <DescricaoList> Músicas para curtir uma praia.</DescricaoList>
        </ContainerList>
        <ContainerList>
          <TituloList>Músicas de Praia </TituloList>
          <DescricaoList> Músicas para curtir uma praia.</DescricaoList>
        </ContainerList>
      </ContainerMaster>
    </DivMain>
  );
};
