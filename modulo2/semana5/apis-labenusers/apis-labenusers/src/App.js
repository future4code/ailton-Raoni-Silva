import React from "react";
import axios from "axios";
import styled from "styled-components";


const H2 = styled.h2`
  padding-left: 2rem;
`;

const Button = styled.button`
  margin-left: 2rem;
  color: white;
  background-color: rgb(50, 157, 239);
  border-radius: 5px;
  border-color: 0;
  height: 2rem;
  width: 8rem;
`;

const Label = styled.label`
  margin: 1rem;
`;
const Input = styled.input`
  color: white;
  background-color: rgb(50, 157, 239);
  border-radius: 5px;
  border-color: 0;
  height: 2rem;
  width: 6rem;
`;

const Input2 = styled.input`
  height: 2rem;
  width: 20rem;
  margin: 1rem;
`;
const Section = styled.section`
display:flex;
flex-direction: column;
justify-content: end;

`

export default class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "raoni-silva-ailton",
          },
        }
      )
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  createUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    console.log(body);
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "raoni-silva-ailton",
          },
        }
      )
      .then((response) => {
        this.getUsers();
        alert("Usuário criado com sucesso!");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Deu erro!");
      });
  };

  render() {
    const userslist = this.state.users.map((user) => {
      return (
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      );
    });
    return (
      
      <main>
        <H2>Tela Inicial:</H2>

        <hr />

        <Button>Trocar de Tela</Button>
        <main>
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
          <Input
            onClick={this.createUsers}
            type="submit"
            value="Criar Usuário"
          />
        </main>
        <section>{userslist}</section>
      </main>
    );
  }
}
