import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../Contants/Contants";
import {
  BoxTrip2,
  BoxTrip4,
  Container,
  Logo,
  Buttons,
  Button,
  ListAdm,
  ButtonDel,
} from "../Style/Style";
import labex2 from "../img/labex2.png";
import { goCreate, goHome, goToDetailPage } from "../Routes/Coordinator";
import { useProtectedtPage } from "../Hooks/useProtectedPage";
import { goToLogin } from "../Routes/Coordinator";
import axios from "axios";


export default function AdminHomePage() {
  useProtectedtPage();
  const navigate = useNavigate();
  const [trips, getTrip] = useRequestData(`${BASE_URL}/raoni/trips`, {});


  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  };

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");

    axios
      .delete(`${BASE_URL}/raoni/trips/${id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alert("Viagem deletada!");
        getTrip(`${BASE_URL}/raoni/trips`)
        
      })
      .catch((err) => { 
        console.log("Nao Funcionou", err.response);
      });
  };

  const tripList =
    trips &&
    trips.map((trip) => {
      return (
        <BoxTrip2 key={trip.id}>
          <BoxTrip4 onClick={() => goToDetailPage(navigate, trip.id)}>
            <h3>{trip.name}</h3>
          </BoxTrip4>
          <ButtonDel onClick={() => deleteTrip(trip.id)}>
            Delete
          </ButtonDel>
        </BoxTrip2>
      );
    });

  return (
    <Container>
      <Logo src={labex2} />
      <h1>Painel Administrativo</h1>
      <Buttons>
        <Button onClick={() => goHome(navigate)}>Voltar</Button>
        <Button onClick={() => goCreate(navigate)}>Criar Viagem</Button>
        <Button onClick={logout}>Logout</Button>
      </Buttons>
      <ListAdm>
        {tripList && tripList.length > 0 ? tripList : <p>Carregando...</p>}
      </ListAdm>
    </Container>
  );
}
