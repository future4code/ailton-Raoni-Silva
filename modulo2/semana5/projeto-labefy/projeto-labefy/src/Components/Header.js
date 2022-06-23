import React from "react";
import styled from "styled-components";
import LogoCompleta from "../img-labefy/logocompleta.png";

const DivHeader = styled.div`
  background-color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  height: 20%;
`;

const Search = styled.section`
  padding: 2rem;
`;

const Logo = styled.img`
  width: 16rem;
  padding-left: 2rem;
`;

const Button = styled.button`
  width: 8rem;
  height: 2rem;
  color: white;
  border: 0;
  border-radius: 1rem;
  background-color: orangered;
`;

const Input = styled.input`
  width: 16rem;
  height: 2rem;
  border: 0;
  border-radius: 1rem;

  margin-right: 1rem;
`;

export const Header = () => {
  return (
    <DivHeader>
      <Logo src={LogoCompleta} alt="Logo" />

      <Search>
        {" "}
        <Input type="text" placeholder="Nome da Playlist"></Input>
        <Button>Criar Playlist</Button>
      </Search>
    </DivHeader>
  );
};
