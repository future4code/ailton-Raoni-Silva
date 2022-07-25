import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  GlobalStyle,
  Container,
  Logo,
  P,
  ContainerLogo,
  ContainerInterno,
  Line,
  P2
} from "./../LoginPage/styled";
import logo1 from "./../../assets/Img/logo1.png";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import background from "./../../assets/Img/world.jpg";

const LoginPage = () => {
  return (
    <Container>
  
      <GlobalStyle></GlobalStyle>
      <ContainerInterno>
        <ContainerLogo>
          <Logo src={logo1} />
          <P>
            O mundo acontece <strong>aqui.</strong>
          </P>
        </ContainerLogo>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">Login</InputLabel>
            <Input
              id="Login"
              sx={{ m: 1, width: "23ch" }}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ m: 1, width: "25ch" }}
            id="password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Box>

        <Button sx={{ m: 1, width: "23ch" }} size="small" variant="contained">
          Entrar
        </Button>
      
        <Line/>
        <Button sx={{ m: 1, width: "40ch" }} size="small" variant="contained">
          Inscreva-se agora e viva o hoje!
        </Button>
        <P2>
          <strong>Ao se inscrever, você concorda com os Termos de Serviço <br/> e a Política de Privacidade, incluindo o Uso de Cookies.</strong>
          </P2>
      </ContainerInterno>
    </Container>
  );
};

export default LoginPage;
