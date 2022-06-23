import React from "react";
import styled from "styled-components";
import LogoCompleta from "../img-labefy/logocompleta.png";
import RedeSocial from "../img-labefy/insta.png";
import Twitter from "../img-labefy/twtt.png";
import Face from "../img-labefy/fb.png";

const DivFooter = styled.div`
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
const H3 = styled.h3`
  padding-left: 2rem;
`;
const RedesSociais = styled.div`
  display: flex;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 10rem;
  padding-right: 2rem;
`;

export const Footer = () => {
  return (
    <DivFooter>
      <H3> Todos os Direitos Reservados</H3>
      <RedesSociais>
        <img src={RedeSocial} alt="insta" />
        <img src={Twitter} alt="Twitter" />
        <img src={Face} alt="Facebook" />
      </RedesSociais>
      <Logo src={LogoCompleta} alt="Logo" />
    </DivFooter>
  );
};
