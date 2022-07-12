import React from "react";
import { Buttons, Container, Inputs, Button } from "../Style/Style";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/Coordinator";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <h2>Login</h2>

        <Inputs placeholder="E-mail"></Inputs>
        <Inputs placeholder="Senha"></Inputs>

        <Buttons>
          <Button onClick={() => goBack(navigate)}>Voltar</Button> <Button>Entrar</Button>
        </Buttons>
      </Container>
    </div>
  );
}
