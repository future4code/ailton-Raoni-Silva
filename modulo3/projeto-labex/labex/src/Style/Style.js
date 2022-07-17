import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`;

export const Buttons = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-content: center;
`;

export const ButtonDel = styled.button`
  width: 4rem;
  margin: 1rem;
  border-radius: 1rem;
  border: 0;
  height: 2rem;
  font-weight: bold;
  background-color: orangered;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
  color: white;
`;

export const BoxTrip = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.8rem;
  margin: 1rem;
  min-height: 8rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  @media (min-width: 500px) {
  }
`;

export const BoxTrip5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b3e5b6;
  padding: 1rem;
  overflow: hidden;
  min-width: 20rem;
  max-width: 25rem;
  min-height: 8rem;
  margin: 2rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  @media (min-width: 500px) {
  }
`;
export const BoxTrip2 = styled.div`
  @media (min-width: 500px) {
  }
  display: flex;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d9dada;
  }
  color: #898989;
`;
export const Flex = styled.div`
display: flex;

`
export const BoxTrip3 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
  min-height: 8rem;
  margin: 1rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  @media (min-width: 800px) {
  }
`;
export const BoxTrip4 = styled.div`

padding-right:4rem ;

`;

export const Titulo = styled.h1`
  font-size: 2rem;
  font-weight: bolder;
`;

export const Subtitulo = styled.h1`
  font-size: 2rem;
  font-weight: bolder;
`;
export const TituloS = styled.h1`
  font-size: 1.2rem;
  font-weight: bolder;
  color: black;
`;

export const ListAdm = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Inputs = styled.input`
  width: 30rem;
  border-radius: 1rem;
  border: 0;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 5px;
  margin: 1px;
`;

export const Logo = styled.img`
  width: 12rem;
`;

export const Logo1 = styled.img`
  width: 20rem;
`;
export const Select = styled.select`
  width: 31rem;
  border-radius: 1rem;
  border: 0;
  height: 2rem;
  padding-left: 0.5rem;
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;
