import React from "react";
import useRequestData from "../Hooks/useRequestData";
import styled from "styled-components";

const ContainerResults = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 100vw;
`;
const Ball = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 200%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const Results = () => {
  const result = useRequestData(
    [],
    `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2359`
  );
  console.log(result?.numeros);
  return (
    <ContainerResults>
      <Ball>{result?.numeros[0]}</Ball>
      <Ball>{result?.numeros[1]}</Ball>
      <Ball>{result?.numeros[2]}</Ball>
      <Ball>{result?.numeros[3]}</Ball>
      <Ball>{result?.numeros[4]}</Ball>
      <Ball>{result?.numeros[5]}</Ball>
    </ContainerResults>
  );
};

export default Results;
