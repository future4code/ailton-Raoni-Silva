import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../Contants/Contants";
import { useParams } from "react-router-dom";
import {
  BoxTrip3,
  BoxTrip,
  Container,
  Logo,
  Buttons,
  Button,
  ListAdm,
} from "../Style/Style";
import labex2 from "../img/labex2.png";
import { goBack } from "../Routes/Coordinator";
import { useProtectedtPage } from "../Hooks/useProtectedPage";

export default function TripDetailsPage() {
  useProtectedtPage();
  const navigate = useNavigate();
  const [tripDetail, setTripDetail] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [approved, setApproved] = useState([]);
  const params = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/raoni/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTripDetail(res.data.trip);
        setCandidate(res.data.trip.candidates);
        setApproved(res.data.trip.approved);
      })
      .catch((err) => {
        console.log(err.response);
      });
  });
  const infoCandidate =
    candidate &&
    candidate.map((info) => {
      return (
        <BoxTrip key={info.name}>
          <h3>Nome: {info.name}</h3>
          <p>
            <strong>Profissão:</strong> {info.profession}
          </p>
          <p>
            <strong>Idade:</strong> {info.age} anos
          </p>
          <p>
            <strong>País:</strong> {info.country}
          </p>
          <p>
            <strong>Texto de Candidatura:</strong> {info.applicationText}
          </p>
          <Button>Aprovar</Button> <Button>Reprovar</Button>
        </BoxTrip>
      );
    });
  return (
    <Container>
      <Logo src={labex2} />
      <h1>Viagens Detalhadas</h1>
      <BoxTrip>
        <h2>{tripDetail.name}</h2>
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
        onClick={() => {
          goBack(navigate);
        }}
      >
        {" "}
        Voltar
      </Button>
      <h2>Candidatos Pendentes</h2>
      {infoCandidate}
      <h2> Candidatos Aprovados</h2>
    </Container>
  );
}
