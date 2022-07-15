import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../Contants/Contants";
import { useParams } from "react-router-dom";
import {
  BoxTrip5,
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
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);
  const params = useParams();

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
  },[params]);
  
 

  const decideCandidate = (id) => {
    const body = {
      approve: true,
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
        alert("Candidato aprovado!");
        console.log(res)
      })
      .catch((err) => {
        console.log("AQUI", err);
      });
  };
  const infoCandidate =
    candidates &&
    candidates.map((candidate) => {
      return (
        <BoxTrip key={candidate.name}>
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
          <Button onClick={() => decideCandidate(candidate.id)}>Aprovar</Button>{" "}
          <Button onClick={() => decideCandidate(false)}>Reprovar</Button>
        </BoxTrip>
      );
    });
const candidateApproved = approved && approved.map((cand) => {
  return (
    <BoxTrip5 key={cand.name}>
      <h3>Nome: {cand.name}</h3>
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

})

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
      {infoCandidate && infoCandidate.length > 0 ? (
        infoCandidate
      ) : (
        <p>Não há candidatos para aprovação.</p>
      )}

      <h2> Candidatos Aprovados</h2>

        {candidateApproved}
      
    </Container>
  );
}
