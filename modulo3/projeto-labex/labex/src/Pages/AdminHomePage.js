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
  ListAdm,
  Titulo,
  TituloS,
  Global
} from "../Style/Style";
import labex2 from "../img/labex2.png";
import { goCreate, goHome, goToDetailPage } from "../Routes/Coordinator";
import { useProtectedtPage } from "../Hooks/useProtectedPage";
import { goToLogin } from "../Routes/Coordinator";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";
import { Spinner, useToast } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function AdminHomePage() {
  useProtectedtPage();
  const navigate = useNavigate();
  const [trips, getTrip] = useRequestData(`${BASE_URL}/raoni/trips`, {});
  const toast = useToast();

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
        getTrip(`${BASE_URL}/raoni/trips`);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  function AlertDialogExample({ trip }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();

    return (
      <>
        <IconButton
          colorScheme="orange"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<BsFillTrashFill />}
          onClick={onOpen}
        >
          Delete
        </IconButton>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Deletar Viagem
              </AlertDialogHeader>

              <AlertDialogBody>
                Tem certeza? Você não poderá desfazer a ação após deletar!
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => deleteTrip(trip)}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  }
  const tripList =
    trips &&
    trips.map((trip) => {
      return (
        <BoxTrip2 key={trip.id}>
          <BoxTrip4 onClick={() => goToDetailPage(navigate, trip.id)}>
            <TituloS>{trip.name}</TituloS>
          </BoxTrip4>
          <AlertDialogExample trip={trip.id} />
        </BoxTrip2>
      );
    });

  return (
    <ChakraProvider>
      <Global></Global>
      <Container>
        <Logo src={labex2} />
        <Titulo >Painel Administrativo</Titulo>
        <Buttons>
          <Button
            colorScheme="blue"
            color="#ED8936"
            size="md"
            variant="outline"
            onClick={() => goHome(navigate)}
          >
            Voltar
          </Button>
          <Button
            min-width={[300]}
            colorScheme="blue"
            color="#ED8936"
            size="md"
            variant="outline"
            onClick={() => goCreate(navigate)}
          >
            Criar Viagem
          </Button>
          <Button
            colorScheme="blue"
            color="#ED8936"
            size="md"
            variant="outline"
            onClick={logout}
          >
            Logout
          </Button>
        </Buttons>
        <ListAdm>
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
        </ListAdm>
      </Container>
    </ChakraProvider>
  );
}
