import React from "react";
import {
  Container,
  Logo,
  Buttons,
  Button,
  Select,
  Inputs,
} from "../Style/Style";
import labex2 from "../img/labex2.png";
import { useProtectedtPage } from "../Hooks/useProtectedPage";
import { planets } from "../Contants/Planet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { goBack } from "../Routes/Coordinator";

export default function CreateTripPage() {
  const navigate = useNavigate();
  useProtectedtPage();
  const [newTrip, setNewTrip] = useState({});
  

  const onChangeTrip = (e) => {
    setNewTrip((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendTrip = () => {
    const token = localStorage.getItem("token");
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/raoni/trips`;
    const body = {
      name: newTrip.name,
      planet: newTrip.planet,
      date: newTrip.date,
      description: newTrip.description,
      durationInDays: newTrip.durationInDays,
    };
    axios
      .post(url, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alert("Viagem criada com sucesso!");
        console.log(res);
        setNewTrip({
          name: "",
          planet: "",
          date: "",
          description: "",
          durationInDays: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Logo src={labex2} />
      <h1>Criar Viagem</h1>
      <Inputs
        name="name"
        value={newTrip.name}
        onChange={onChangeTrip}
        placeholder="Nome"
      ></Inputs>
      <Select
        defaultValue=""
        name="planet"
        value={newTrip.planet}
        onChange={onChangeTrip}
        placeholder="Planeta"
      >
        <option value={""} disabled>
          Escolha um planeta
        </option>
        {planets.map((planet) => {
          return (
            <option value={planet} key={planet}>
              {planet}
            </option>
          );
        })}
        ;
      </Select>
      <Inputs
        name="date"
        value={newTrip.date}
        onChange={onChangeTrip}
        placeholder="Data"
        type="date"
        required
      ></Inputs>
      <Inputs
        name="description"
        value={newTrip.description}
        onChange={onChangeTrip}
        placeholder="Descrição"
      ></Inputs>
      <Inputs
        name="durationInDays"
        type="number"
        value={newTrip.durationInDays}
        onChange={onChangeTrip}
        placeholder="Duração em dias"
      ></Inputs>
      <Buttons>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <Button onClick={sendTrip}>Criar</Button>
      </Buttons>
    </Container>
  );
}
