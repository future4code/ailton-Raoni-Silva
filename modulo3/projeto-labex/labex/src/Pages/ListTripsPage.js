import React from "react";
import { Buttons, Container, BoxTrip3, Logo, Titulo } from "../Style/Style";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/Coordinator";
import { goToForm } from "../Routes/Coordinator";
import { BASE_URL } from "../Contants/Contants";
import { useRequestData } from "../Hooks/useRequestData";
import labex2 from "../img/labex2.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export default function ListTripsPage() {
  const navigate = useNavigate();
  const [trips] = useRequestData(`${BASE_URL}/raoni/trips`);

  const tripList =
    trips &&
    trips.map((trip) => {
      return (
        <BoxTrip3 key={trip.name}>
          <h3><strong>Nome:</strong> {trip.name}</h3>
          <h3><strong>Descrição:</strong> {trip.description} </h3>
          <h3><strong>Planeta:</strong> {trip.planet} </h3>
          <h3><strong>Duração:</strong> {trip.durationInDays} dias</h3>
          <h3><strong>Data:</strong> {trip.date}</h3>
        </BoxTrip3>
      );
    });

  return (
    <ChakraProvider>
      <Container>
        <Logo src={labex2} />
        <Buttons>
          <Button
            colorScheme="blue"
            color="#ED8936"
            size="md"
            variant="outline"
            onClick={() => goBack(navigate)}
          >
            Voltar
          </Button>
          <Button
            colorScheme="blue"
            color="#ED8936"
            size="md"
            variant="outline"
            onClick={() => goToForm(navigate)}
          >
            Inscrever-se
          </Button>
        </Buttons>
        <Titulo>Lista de Viagens</Titulo>
        {tripList && tripList.length > 0 ? (
          tripList
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#DD6B20
            "
            size="xl"
          />
        )}
      </Container>
    </ChakraProvider>
  );
}
