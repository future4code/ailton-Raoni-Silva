import styled from "styled-components";
import Model from "../img/ela.jpeg";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Stack, Icon, Center } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 90vh;

  align-items: center;
`;

const PhotoBox = styled.img`
  max-height: 70vh;
  width: 90%;
  display: block;
  border-radius: 10px;
`;
const Name = styled.h1`
  width: 20rem;
  padding-left: 2rem;
  font-size: 30px;
  text-shadow: 0.1em 0.1em 0.2em black;
`;
const Descricao = styled.h2`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 10vh;
  padding-left: 2rem;
  text-shadow: 0.1em 0.1em 0.2em black;
`;
const InfoPerfil = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0;
  width: 30vw;
  border-radius: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10rem;
`;
const ContainerEspera = styled.div`
  display: flex;
  padding-top: 15rem;
`;

const ContainerButton = styled.div`
  display: flex;
  gap: 10rem;
  padding-top: 32rem;
  position: absolute;
`;
export default function Home() {
  const [personChoice, setPersonChoice] = useState([]);

  const getPerson = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raoni/person"
      )
      .then((res) => {
        setPersonChoice(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const postPerson = (person) => {
    const body = {
      id: personChoice.id,
      choice: person,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raoni/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
        getPerson();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPerson();
  }, []);

  const likeClick = () => {
    postPerson(true);
  };

  const noLikeClick = () => {
    postPerson(false);
  };

  return (
    <PerfilContainer>
      {personChoice.name && personChoice.photo ? (
        <InfoPerfil>
          <Name>
            <strong>
              {personChoice.name}, {personChoice.age}
            </strong>
          </Name>
          <Descricao>{personChoice.bio}</Descricao>
        </InfoPerfil>
      ) : (
        <ContainerEspera>
          <CircularProgress isIndeterminate color={"#C53030"} />
        </ContainerEspera>
      )}
      <PhotoBox src={personChoice.photo} alt={personChoice.photo_alt} />
      <ContainerButton>
        <Button
          onClick={noLikeClick}
          leftIcon={
            <Icon as={ImCancelCircle} color={"#C53030"} w={12} h={12} />
          }
          colorScheme="Red"
          variant="solid"
          h={4}
          fontWeight="thin"
          fontSize="16"
          marginBottom="1"
          marginTop="2"
        ></Button>
        <Button
          onClick={likeClick}
          leftIcon={
            <Icon as={BsFillHeartFill} color={"#C53030"} w={12} h={12} />
          }
          colorScheme="Red"
          variant="solid"
          h={4}
          fontWeight="thin"
          fontSize="16"
          marginBottom="1"
          marginTop="2"
        />
      </ContainerButton>
    </PerfilContainer>
  );
}
