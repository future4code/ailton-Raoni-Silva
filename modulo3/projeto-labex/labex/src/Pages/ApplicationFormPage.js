import React from "react";
import { useNavigate } from "react-router-dom";
import { Buttons, Logo } from "../Style/Style";
import { Container, Titulo } from "../Style/Style";
import { goBack } from "../Routes/Coordinator";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../Contants/Contants";
import { useRequestData } from "../Hooks/useRequestData";
import { countries } from "../Contants/Country";
import labex2 from "../img/labex2.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const [tripId, setTripId] = useState("");
  const [candidate, setCandidate] = useState({});
  const [trips] = useRequestData(`${BASE_URL}/raoni/trips`);
  const toast = useToast();

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
        setCandidate({
          name: "",
          age: "",
          applicationText: "",
          profession: "",
          country: "",
        });
        setTripId("");
      })
      .catch((err) => {});
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
    <ChakraProvider>
      <Container>
        <Logo src={labex2} />
        <Titulo> Inscreva-se para uma viagem</Titulo>

        <Select
          w={[300, 400, 500]}
          width={510}
          defaultValue=""
          onChange={onChangeTrip}
        >
          <option value="" disabled>
            Escolha uma Viagem
          </option>
          {tripList}
        </Select>
        <Input
          w={[300, 400, 500]}
          width={510}
          name="name"
          value={candidate.name}
          onChange={onChangeCandidate}
          placeholder="Nome"
        ></Input>
        <Input
          w={[300, 400, 500]}
          width={510}
          name="age"
          type="number"
          value={candidate.age}
          onChange={onChangeCandidate}
          placeholder="Idade"
        ></Input>
        <Input
          w={[300, 400, 500]}
          width={510}
          name="applicationText"
          value={candidate.applicationText}
          onChange={onChangeCandidate}
          placeholder="Texto de Candidatura"
        ></Input>
        <Input
          w={[300, 400, 500]}
          width={510}
          name="profession"
          value={candidate.profession}
          onChange={onChangeCandidate}
          placeholder="Profissão"
        ></Input>
        <Select
        w = { [ 300 , 400 , 500 ] }
          width={510}
          defaultValue=""
          name="country"
          value={candidate.country}
          onChange={onChangeCandidate}
          placeholder="Escolha um País"
        >
          <option value={""} disabled></option>
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
            onClick={() => {
              sendCandidate();
              toast({
                title: "Candidatura enviada!",
                description: "Boa sorte no processo seletivo!",
                status: "success",
                duration: 9000,
                position: "top",
                isClosable: true,
              });
            }}
          >
            Enviar
          </Button>
        </Buttons>
      </Container>
    </ChakraProvider>
  );
}
