import React from "react";
import Home from "./Home/Home";
import styled from "styled-components";

const ContainerAll = styled.div`
 border: 1px solid black;
  border-radius: 10px;
  width: 25vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color:whitesmoke;
  `;

export default function App() {

  

  return (
    <ContainerAll>
      <h1>AstroMatch</h1>
     <Home/>
     </ContainerAll>
  );
}
