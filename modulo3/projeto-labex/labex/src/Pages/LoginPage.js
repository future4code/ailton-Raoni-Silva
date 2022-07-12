import React from "react";
import { Buttons, Container, Inputs } from "../Style/Style";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Container>
        <h2>Login</h2>

        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>

        <Buttons>
          <button onClick={goBack}>Voltar</button> <button>Entrar</button>
        </Buttons>
      </Container>
    </div>
  );
}
