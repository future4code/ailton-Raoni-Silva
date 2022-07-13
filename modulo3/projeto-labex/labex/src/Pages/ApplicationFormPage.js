import React from "react";
import { useNavigate } from "react-router-dom";
import { Buttons, Button, Logo } from "../Style/Style";
import { Container, Inputs, Select } from "../Style/Style";
import { goBack } from "../Routes/Coordinator";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../Contants/Contants";
import { useRequestData } from "../Hooks/useRequestData";
import { countries } from "../Contants/Country";
import labex2 from "../img/labex2.png"

export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const [tripId, setTripId] = useState("");
  const [candidate, setCandidate] = useState({});
  const [trips] = useRequestData(`${BASE_URL}/raoni/trips`);

  const onChangeCandidate = (e) => {
    setCandidate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeTrip = (e) => {
    setTripId(e.target.value);
  };

  const sendCandidate = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/raoni/trips/${tripId}/apply`;
    const body = {
      name: candidate.name,
      age: candidate.age,
      applicationText: candidate.applicationText,
      profession: candidate.profession,
      country: candidate.country,
    };
    axios
      .post(url, body)
      .then((res) => {
        alert("Sua candidatura foi enviada, boa sorte!");
        setCandidate({
          name: "",
          age: "",
          applicationText: "",
          profession: "",
          country: "",
        });
        setTripId("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tripList =
    trips &&
    trips.map((trip) => {
      return (
        <option key={trip.id} value={trip.id}>
          {trip.name}
        </option>
      );
    });

  return (
    <Container>
       <Logo src={labex2} />
      <h1> Inscreva-se para uma viagem</h1>

      <Select defaultValue="" onChange={onChangeTrip}>
        <option value="" disabled>
          Escolha uma Viagem
        </option>
        {tripList}
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
      <Inputs
        name="profession"
        value={candidate.profession}
        onChange={onChangeCandidate}
        placeholder="Profissão"
      ></Inputs>
      <Select
        defaultValue=""
        name="country"
        value={candidate.country}
        onChange={onChangeCandidate}
        placeholder="País"
      >
        <option value={""} disabled>
          Escolha uma país
        </option>
        {countries.map((country) => {
          return (
            <option value={country} key={country}>
              {country}
            </option>
          );
        })}
        ;
      </Select>

      <Buttons>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <Button onClick={sendCandidate}>Enviar</Button>
      </Buttons>
    </Container>
  );
}
