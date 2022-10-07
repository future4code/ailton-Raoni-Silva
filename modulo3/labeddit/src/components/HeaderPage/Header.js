import React, { useState } from "react";
import logo2 from "./../../assets/Img/logo2.png";
import { HeaderContainer, Logo, P2, Login, GlobalStyle } from "./styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [buttonText, setButtonText] = useState(token ? "Logout" : "Login");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const buttonTextAction = () => {
    if (token) {
      logout();
      setButtonText("Login");
      goToPage(navigate, "/");
    } else {
      goToPage(navigate, "/");
    }
  };

  return (
    <HeaderContainer>
      <GlobalStyle></GlobalStyle>
      <Logo src={logo2} />
      <Login>
        <AccountCircleIcon sx={{ color: "white", fontSize: 30 }} />
        <Button onClick={buttonTextAction}> {buttonText}</Button>
      </Login>
    </HeaderContainer>
  );
};

export default Header;
