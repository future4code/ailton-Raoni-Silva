import styled from "styled-components";

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
export const Button = styled.button`
  width: 8rem;
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
  overflow: hidden;
  margin: 22px auto 0;
  width: 35rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  align-items: center;
`;

export const BoxTrip5 = styled.div`
background-color:#b3e5b6 ;
  overflow: hidden;
  margin: 22px auto 0;
  width: 35rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  align-items: center;
  margin-bottom: 2rem;
`;
export const BoxTrip2 = styled.div`
  overflow: hidden;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
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
  min-height:14rem ;
  width: 35rem;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  color: #898989;
`;
export const BoxTrip4 = styled.div`
  overflow: hidden;
  width: 30rem;
  font-family: Quicksand, arial, sans-serif;
  display: flex;

`;

export const ListAdm = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
export const ContainerList = styled.div`
  background-color: #f3f3f3;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 1rem;
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

export const Select = styled.select`
  width: 31rem;
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
