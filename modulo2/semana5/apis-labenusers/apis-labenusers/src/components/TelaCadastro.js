import React from "react";
import styled from "styled-components";
import axios from "axios";

const H2 = styled.h2`
  padding-left: 2rem;
`;

const Button = styled.button`
  margin-left: 2rem;
  color: white;
  background-color: rgb(50, 157, 239);
  border-radius: 5px;
  border: 0px;
  height: 3rem;
  width: 8rem;
`;
const Input2 = styled.input`
  height: 2rem;
  width: 20rem;
  margin: 1rem;
`;
const Label = styled.label`
  margin: 1rem;
`;
const Input = styled.input`
  color: white;
  background-color: rgb(50, 157, 239);
  border-radius: 5px;
  border: 0px;
  height: 2rem;
  width: 6rem;
`;

export default class TelaCadastro extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUsers = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
   
    axios
      .post(url, body, {
          headers: {
            Authorization: "raoni-silva-ailton",
          },
        })
      .then((response) => {
        alert("Usuário criado com sucesso!");
        this.setState({inputName:"", inputEmail:""})
      })
      .catch((error) => {
        alert("Deu erro!");
        this.setState({inputName:"", inputEmail:""})
      });
  };
  render() {
    return (
      <div>
        <H2>Tela Inicial:</H2>
        <Button onClick={this.props.irParaLista}>
          Ir para Lista de Usuários
        </Button>

        <hr />
        <Label>
          <Input2
            value={this.state.inputName}
            onChange={this.onChangeInputName}
            placeholder="Nome"
            type="text"
            name="name"
          />
          <Input2
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
            placeholder="Email"
            type="text"
            name="email"
          />
        </Label>
        <Input onClick={this.createUsers} type="submit" value="Criar Usuário" />
      </div>
    );
  }
}
