import React from "react";
import { Buttons, Container, Inputs, Button, Logo } from "../Style/Style";
import { useNavigate } from "react-router-dom";
import { goHome, goToAdminHome } from "../Routes/Coordinator";
import labex2 from "../img/labex2.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLoginAdm } from "../Hooks/useLoginAdm";



export default function LoginPage() {
  useLoginAdm()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = () => {
    setEmail("");
    setPassword("");
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/raoni/login",
        body
      )
      .then((res) => {
        alert("Bem-vindo(a)!");
        localStorage.setItem("token", res.data.token);
        goToAdminHome(navigate);
      })
      .catch((err) => {
        alert("Verifique se seu login ou senha estão corretos.");
      });
  };

  return (
    <div>
      <Container>
        <Logo src={labex2} />
        <h2>Login</h2>
        <Inputs
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        ></Inputs>
        <Inputs
          placeholder="Senha"
          type="password"
          value={password}
          onChange={onChangePassword}
        ></Inputs>

        <Buttons>
          <Button onClick={() => goHome(navigate)}>Voltar</Button>{" "}
          <Button onClick={onSubmitLogin}>Entrar</Button>
        </Buttons>
      </Container>
    </div>
  );
}
