import React from "react";
import { Buttons, Container, Inputs, Logo, Titulo } from "../Style/Style";
import { useNavigate } from "react-router-dom";
import { goHome, goToAdminHome } from "../Routes/Coordinator";
import labex2 from "../img/labex2.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLoginAdm } from "../Hooks/useLoginAdm";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function LoginPage() {
  useLoginAdm();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

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
        localStorage.setItem("token", res.data.token);
        toast({
          title: "Bem Vindo(a).",
          description: "Login realizado com sucesso.",
          status: "success",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
        setTimeout(() => {
          goToAdminHome(navigate);
        }, 2000);
      })
      .catch((err) => {
        toast({
          title: "Acesso negado",
          description: "Verifique se seu login ou senha estão corretos.",
          status: "error",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
      });
  };

  return (
    <ChakraProvider>
      <Container w={[400]}>
        <Logo src={labex2} />
        <Titulo>Login</Titulo>
        <Input
          w={[300, 400, 500]}
          width={510}
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        ></Input>
        <Input
          w={[300, 400, 500]}
          width={510}
          placeholder="Senha"
          type="password"
          value={password}
          onChange={onChangePassword}
        ></Input>

        <Buttons>
          <Button
            colorScheme="blue"
            color="#ED8936"
            size="md"
            variant="outline"
            onClick={() => goHome(navigate)}
          >
            Voltar
          </Button>
          <Button
            colorScheme="blue"
            color="#ED8936"
            size="md"
            variant="outline"
            onClick={() => {
              onSubmitLogin();
            }}
          >
            Entrar
          </Button>
        </Buttons>
      </Container>
    </ChakraProvider>
  );
}
