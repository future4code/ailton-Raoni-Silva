import React from "react";
import { BASE_URL } from "../Constants/urls";
import useRequestData from "../Hooks/useRequestData";
import styled from "styled-components";

const Select = styled.select`
  border-radius: 10px;
  border: 0;
  width: 10rem;
  height: 40px;
  margin-top: 3rem;
  padding-left: 1rem;
  
`;

const Contest = () => {
  const contest = useRequestData([], `${BASE_URL}`);
//   console.log(contest);


  return (
    <div>
      <Select>
      <option value="mega">{contest[0]?.nome?.toUpperCase()}</option>
        <option value="quina">{contest[1]?.nome?.toUpperCase()}</option>
        <option value="lotofacil">{contest[2]?.nome?.toUpperCase()}</option>
        <option value="lotomania">{contest[3]?.nome?.toUpperCase()}</option>
        <option value="timemania">{contest[4]?.nome?.toUpperCase()}</option>
        <option value="dia de sorte">{contest[5]?.nome?.toUpperCase()}</option>
      </Select>
    </div>
  );
};

export default Contest;
