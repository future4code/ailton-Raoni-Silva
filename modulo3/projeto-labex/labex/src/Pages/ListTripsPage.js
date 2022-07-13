import React from "react";
import { Buttons, Button, ContainerList, BoxTrip3, Logo } from "../Style/Style";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/Coordinator";
import { goToForm } from "../Routes/Coordinator";
import { BASE_URL } from "../Contants/Contants";
import { useRequestData } from "../Hooks/useRequestData";
import labex2 from "../img/labex2.png"

export default function ListTripsPage() {
  const navigate = useNavigate();
  const [trips] = useRequestData(`${BASE_URL}/raoni/trips`);

  const tripList =
    trips &&
    trips.map((trip) => {
      return (
        <BoxTrip3 key={trip.name}>
          <h3>Nome: {trip.name}</h3>
          <h3>Descrição: {trip.description} </h3>
          <h3>Planeta: {trip.planet} </h3>
          <h3>Duração: {trip.durationInDays}  dias</h3>
          <h3>Data: {trip.date}</h3>
        </BoxTrip3>
      );
    });

  return (
    <ContainerList>
      <Logo src={labex2} />
      <Buttons>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <Button onClick={() => goToForm(navigate)}>Inscrever-se</Button>
      </Buttons>
      <h1>Lista de Viagens</h1>
      {tripList}
    </ContainerList>
  );
}
