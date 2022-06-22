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

const UserLis = styled.div`
  border: 0px solid black;
  background-color: rgb(50, 157, 239);
  border-radius: 5px;
  width: 24rem;
  padding: 1rem;
  margin: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
`;
const DeleteButton = styled.button`
  border: 1px solid black;
  border-radius: 3px;
`;
export default class TelaListaUsuarios extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
        headers: {
          Authorization: "raoni-silva-ailton",
        },
      })
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletarUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "raoni-silva-ailton",
        },
      })
      .then((response) => {
          alert("Usuário deletado com sucesso!")
       this.getUsers();
      })
      .catch((error) => {
        alert("Usuário não foi deletado!")
      });
  };

  render() {
    const userslist = this.state.users.map((user) => {
      return (
        <UserLis key={user.id}>
          {user.name}
          <DeleteButton onClick={() => this.deletarUser(user.id)}>
            X
          </DeleteButton>
        </UserLis>
      );
    });
    return (
      <div>
        <H2>Lista Usuários</H2>
        <Button onClick={this.props.irParaCadastro}>
          Ir para Lista Cadastro
        </Button>
        <hr />
        {userslist}
      </div>
    );
  }
}
