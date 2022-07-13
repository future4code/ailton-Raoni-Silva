import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../Contants/Contants";
import {
  BoxTrip2,
  Container,
  Logo,
  Buttons,
  Button,
  ListAdm,
} from "../Style/Style";
import labex2 from "../img/labex2.png";
import { goHome, goToDetailPage } from "../Routes/Coordinator";

export default function AdminHomePage() {
  const navigate = useNavigate();
  const [trips] = useRequestData(`${BASE_URL}/raoni/trips`, {});
  
  

  const tripList =
    trips &&
    trips.map((trip) => {
      return (
        <BoxTrip2
          onClick={() => goToDetailPage(navigate, trip.id)}
          key={trip.id}
        >
          <h3>{trip.name}</h3>
        </BoxTrip2>
      );
    });

  return (
    <Container>
      <Logo src={labex2} />
      <h1>Painel Administrativo</h1>
      <Buttons>
        <Button onClick={() => goHome(navigate)}>Voltar</Button>
        <Button>Criar Viagem</Button>
        <Button>Logout</Button>
      </Buttons>
      <ListAdm>
        {tripList && tripList.length > 0 ? tripList : <p>Carregando...</p>}
      </ListAdm>
    </Container>
  );
}
