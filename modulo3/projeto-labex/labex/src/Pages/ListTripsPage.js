import React from "react";
import { Buttons } from "../Style/Style";
import { useNavigate } from "react-router-dom";

export default function ListTripsPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goToForm = () => {
    navigate("inscricao");
  };

  return (
    <div>
      <Buttons>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToForm}>Inscrever-se</button>
      </Buttons>
      <h2>Lista de Viagens</h2>
    </div>
  );
}
