import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../Contants/Contants";
import { useParams } from "react-router-dom";
import {
  Flex,
  BoxTrip5,
  BoxTrip3,
  BoxTrip,
  Container,
  Logo,
  Titulo,
  Subtitulo,
  TituloS,
} from "../Style/Style";
import labex2 from "../img/labex2.png";
import { goBack } from "../Routes/Coordinator";
import { useProtectedtPage } from "../Hooks/useProtectedPage";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function TripDetailsPage() {
  useProtectedtPage();
  const navigate = useNavigate();
  const [tripDetail, setTripDetail] = useState([]);
const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);
  const params = useParams();
  const [trips, getTripDetails] = useRequestData(`/trip/${params}`)
  const toast = useToast();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BASE_URL}/raoni/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setTripDetail(res.data.trip);
        setCandidates(res.data.trip.candidates);
        setApproved(res.data.trip.approved);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [params]);

  const decideCandidate = (id, status) => {
    const body = {
      approve: status,
    };
    const token = localStorage.getItem("token");
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/raoni/trips/${params.id}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        status === true
          ? toast({
              title: "Candidato Aprovado!",
              description: "Candidato passou no processo!",
              status: "success",
              duration: 9000,
              position: "top",
              isClosable: true,
            })
          : toast({
              title: "Candidato Reprovado!",
              description: "Candidato não passou no processo!",
              status: "error",
              duration: 9000,
              position: "top",
              isClosable: true,
            });
            getTripDetails(`${BASE_URL}/trip/${id}`)
      })
      .catch((err) => {});
  };

  const infoCandidate =
    candidates &&
    candidates.map((candidate) => {
      return (
        <BoxTrip5 key={candidate.name}>
          <h3>Nome: {candidate.name}</h3>
          <p>
            <strong>Profissão:</strong> {candidate.profession}
          </p>
          <p>
            <strong>Idade:</strong> {candidate.age} anos
          </p>
          <p>
            <strong>País:</strong> {candidate.country}
          </p>
          <p>
            <strong>Texto de Candidatura:</strong> {candidate.applicationText}
          </p>
          <Flex>
            <Button
              width={20}
              margin={1}
              colorScheme="blue"
              color="#ED8936"
              size="md"
              variant="outline"
              onClick={() => {
                decideCandidate(candidate.id, true);
              }}
            >
              Aprovar
            </Button>{" "}
            <Button
              margin={1}
              width={20}
              colorScheme="blue"
              color="#ED8936"
              size="md"
              variant="outline"
              onClick={() => {
                decideCandidate(candidate.id, false);
              }}
            >
              Reprovar
            </Button>
          </Flex>
        </BoxTrip5>
      );
    });
  const candidateApproved =
    approved &&
    approved.map((cand) => {
      return (
        <BoxTrip5 key={cand.name}>
          <TituloS>Nome: {cand.name}</TituloS>
          <p>
            <strong>Profissão:</strong> {cand.profession}
          </p>
          <p>
            <strong>Idade:</strong> {cand.age} anos
          </p>
          <p>
            <strong>País:</strong> {cand.country}
          </p>
          <p>
            <strong>Texto de Candidatura:</strong> {cand.applicationText}
          </p>
        </BoxTrip5>
      );
    });

  return (
    <ChakraProvider>
      <Container>
        <Logo src={labex2} />
        <Titulo>Viagens Detalhadas</Titulo>
        <BoxTrip>
          <TituloS>{tripDetail.name}</TituloS>
          <p>
            <strong>Descrição:</strong> {tripDetail.description}
          </p>
          <p>
            <strong>Planeta:</strong> {tripDetail.planet}
          </p>
          <p>
            <strong>Duração:</strong> {tripDetail.durationInDays} dias
          </p>
          <p>
            <strong>Data:</strong> {tripDetail.date}
          </p>
        </BoxTrip>
        <Button
          colorScheme="blue"
          color="#ED8936"
          size="md"
          variant="outline"
          onClick={() => {
            goBack(navigate);
          }}
        >
          {" "}
          Voltar
        </Button>
        <Subtitulo>Candidatos Pendentes</Subtitulo>
        {infoCandidate && infoCandidate.length > 0 ? (
          infoCandidate
        ) : (
          <p>Não há candidatos para aprovação.</p>
        )}

        <Subtitulo> Candidatos Aprovados</Subtitulo>

        {candidateApproved}
      </Container>
    </ChakraProvider>
  );
}
