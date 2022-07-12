import React from "react";
import { useNavigate } from "react-router-dom";
import { Buttons, Button } from "../Style/Style";
import { Container, Inputs, Select } from "../Style/Style";
import { goBack } from "../Routes/Coordinator";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../Contants/Contants";
import { useRequestData } from "../Hooks/useRequestData";



export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState({});
  const [trips] = useRequestData(`${BASE_URL}/raoni/trips`);

  const onChangeCandidate = (e) => {
    setCandidate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(candidate)

  // useEffect(() => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/raoni/trips/jMeGtPUYmlS00IkK3BWW/apply`;
  //   const body = {
  //     candidate,
  //   };
  //   axios
  //     .post(url, body)
  //     .then((res) => {
  //       setCandidate([]);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const tripList =
    trips &&
    trips.map((trip) => {
      return <option>{trip.name} </option>;
    });

  return (
    <Container>
      <h1> Inscreva-se para uma viagem</h1>

      <Select>
        <option value="" selected>
          Escolha uma Viagem
        </option>
        <option>{tripList}</option>
      </Select>
      <Inputs
        name="name"
        value={candidate.name}
        onChange={onChangeCandidate}
        placeholder="Nome"
      ></Inputs>
      <Inputs
        name="age"
        value={candidate.age}
        onChange={onChangeCandidate}
        placeholder="Idade"
      ></Inputs>
      <Inputs
        name="applicationText"
        value={candidate.applicationText}
        onChange={onChangeCandidate}
        placeholder="Texto de Candidatura"
      ></Inputs>
      <Inputs name="profession" value={candidate.profession}
        onChange={onChangeCandidate} placeholder="Profissão"></Inputs>
      <Select>
        <option>Escolha uma país</option>
      </Select>

      <Buttons>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <Button>Enviar</Button>
      </Buttons>
    </Container>
  );
}

