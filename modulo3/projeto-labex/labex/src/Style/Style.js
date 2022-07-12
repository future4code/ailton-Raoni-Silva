import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
  height: 100vh;
  }
`;

export const Buttons = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-content: center;
`;

export const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const Container = styled.div`
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
