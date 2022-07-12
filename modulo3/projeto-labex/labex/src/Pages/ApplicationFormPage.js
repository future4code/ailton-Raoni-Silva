import React from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../Style/Style";
import {Container} from "../Style/Style"

export default function ApplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
    
      <h1> Inscreva-se para uma viagem</h1>
   
      <select>
        <option>Escolha uma viagem</option>
      </select>
      <input placeholder="Nome"></input>
      <input placeholder="Idade"></input>
      <input placeholder="Texto de Candidatura"></input>
      <input placeholder="Profissão"></input>
      <select>
        <option>Escolha uma país</option>
      </select>
      
      <Buttons>
        <button onClick={goBack}>Voltar</button>
        <button>Enviar</button>
      </Buttons>
   
    </Container>
  );
}
