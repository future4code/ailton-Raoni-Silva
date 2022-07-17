import React from "react";
import { Container, Logo, Buttons, Inputs, Titulo } from "../Style/Style";
import labex2 from "../img/labex2.png";
import { useProtectedtPage } from "../Hooks/useProtectedPage";
import { planets } from "../Contants/Planet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { goBack } from "../Routes/Coordinator";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function CreateTripPage() {
  const navigate = useNavigate();
  useProtectedtPage();
  const [newTrip, setNewTrip] = useState({});
  const toast = useToast();

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
    <ChakraProvider>
      <Container>
        <Logo src={labex2} />
        <Titulo>Criar Viagem</Titulo>
        <Input
          w={[300, 400, 500]}
          width={510}
          name="name"
          value={newTrip.name}
          onChange={onChangeTrip}
          placeholder="Nome"
        ></Input>
        <Select
          w={[300, 400, 500]}
          width={510}
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
        <Input
          w={[300, 400, 500]}
          width={510}
          name="date"
          value={newTrip.date}
          onChange={onChangeTrip}
          placeholder="Data"
          type="date"
          required
        ></Input>
        <Input
          w={[300, 400, 500]}
          width={510}
          name="description"
          value={newTrip.description}
          onChange={onChangeTrip}
          placeholder="Descrição"
        ></Input>
        <Input
          w={[300, 400, 500]}
          width={510}
          name="durationInDays"
          type="number"
          value={newTrip.durationInDays}
          onChange={onChangeTrip}
          placeholder="Duração em dias"
        ></Input>
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
              sendTrip();
              toast({
                title: "Viagem criada!",
                description: "Viagem criada com sucesso.",
                status: "success",
                duration: 9000,
                position: "top",
                isClosable: true,
              });
            }}
          >
            Criar
          </Button>
        </Buttons>
      </Container>
    </ChakraProvider>
  );
}
