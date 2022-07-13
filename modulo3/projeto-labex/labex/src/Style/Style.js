import styled from "styled-components";

export const Buttons = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-content: center;
`;

export const Button = styled.button`
  width: 8rem;
  margin-top: 1rem;
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
  overflow: hidden;
  margin: 22px auto 0;
  width: 35rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  align-items: center;
`;
export const BoxTrip2 = styled.div`
  overflow: hidden;
  padding-left: 1rem;
  width: 35rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d9dada;
  }
  color: #898989;
`;
export const BoxTrip3 = styled.div`
  overflow: hidden;
  margin-bottom: 1rem;
  width: 35rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
    cursor: pointer;
  &:hover {
    background-color: #d9dada;
  }
  color: #898989;
`;

export const ListAdm = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
export const ContainerList = styled.div`
  background-color: #f3f3f3;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;

export const Inputs = styled.input`
  width: 20rem;
  border-radius: 1rem;
  border: 0;
  height: 2rem;
  padding-left: 1rem;
`;

export const Logo = styled.img`
  width: 12rem;
`;

export const Select = styled.select`
  width: 21rem;
  border-radius: 1rem;
  border: 0;
  height: 2rem;
  padding-left: 0.5rem;
`;

export const Container = styled.div`
  background-color: #f3f3f3;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;
