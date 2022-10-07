import React from "react";
import { BASE_URL } from "../Constants/urls";
import useRequestData from "../Hooks/useRequestData";


const ContestNumber = () => {
  const contestNumber = useRequestData([], `${BASE_URL}-concursos`);
//   console.log(contestNumber);

  return (
  <div>
      <h2> Concurso N˚ {contestNumber[0]?.concursoId}</h2>

  </div>
  );
};


export default ContestNumber