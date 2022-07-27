import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  Container,
  Logo,
  P,
  ContainerLogo,
  ContainerInterno,
  Line,
  P2,
  Form,
} from "./../LoginPage/styled";
import logo1 from "./../../assets/Img/logo1.png";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
  useUnprotectedPage()
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clear, navigate);
    
  };

 

  return (
    <Container>
      <ContainerInterno>
        <ContainerLogo>
          <Logo src={logo1} />
          <P>
            O mundo acontece <strong>aqui.</strong>
          </P>
        </ContainerLogo>
        <Form onSubmit={onSubmitForm}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">Login</InputLabel>
            <Input
              id="Login"
              name={"email"}
              value={form.email}
              onChange={onChange}
              required
              type={"email"}
              sx={{ m: 1, width: "23ch" }}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            sx={{ m: 1, width: "25ch" }}
            id="password-input"
            name={"password"}
            value={form.password}
            onChange={onChange}
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />

          <Button
            type={"submit"}
            sx={{ m: 1, width: "23ch" }}
            size="small"
            variant="contained"
          >
            Entrar
          </Button>
        </Form>
        <Line />
        <Button
          sx={{ m: 1, width: "40ch" }}
          size="small"
          variant="contained"
          onClick={() => goToPage(navigate, "signup")}
        >
          Inscreva-se agora e viva o hoje!
        </Button>
        <P2>
          <strong>
            Ao se inscrever, você concorda com os Termos de Serviço <br /> e a
            Política de Privacidade, incluindo o Uso de Cookies.
          </strong>
        </P2>
      </ContainerInterno>
    </Container>
  );
};

export default LoginPage;
