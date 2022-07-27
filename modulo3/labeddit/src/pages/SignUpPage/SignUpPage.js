import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  GlobalStyle,
  Container,
  Title,
  ContainerInterno,
  Line,
  P2,
  BackSignUp,
  Form,
} from "./../SignUpPage/styled";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Header from "../../components/HeaderPage/Header";
import Checkbox from "@mui/material/Checkbox";
import useForm from "../../hooks/useForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignUpPage = () => {
  const navigate = useNavigate() 
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    signUp(form, clear, navigate)
  };

  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Header />

      <BackSignUp>
        <Title>
          Olá, boas vindas ao <br /> LabEddit!
        </Title>
      </BackSignUp>
      <Form onSubmit={onSubmitForm}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ m: 1, width: "35ch" }}
            id="user-name"
            name={"username"}
            value={form.username}
            onChange={onChange}
            required
            type={"text"}
            label="Nome do Usuário(a)"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ m: 1, width: "35ch" }}
            id="email"
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            type={"email"}
            label="Email"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ m: 1, width: "35ch" }}
            id="password-input"
            name={"password"}
            value={form.password}
            onChange={onChange}
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Box>
        <P2>
          <Checkbox {...label} defaultChecked  required/>
          <strong>Eu concordo em receber emails sobre</strong>
        </P2>
        <P2>
          <strong>coisas legais do LabEddit!</strong>
        </P2>

        <Button
        type={"submit"} 
        sx={{ m: 4, width: "23ch" }} size="small" variant="contained">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default SignUpPage;
