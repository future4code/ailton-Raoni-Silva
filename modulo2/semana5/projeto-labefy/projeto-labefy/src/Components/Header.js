import React from "react";
import styled from "styled-components";
import LogoCompleta from "../img-labefy/logocompleta.png";
import axios from "axios";

const DivHeader = styled.div`
  background-color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  height: 20%;
`;

const Search = styled.section`
  padding: 2rem;
`;

const Logo = styled.img`
  width: 16rem;
  padding-left: 2rem;
`;

const Button = styled.button`
  width: 8rem;
  height: 2rem;
  color: white;
  border: 0;
  border-radius: 1rem;
  background-color: orangered;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;

const Input = styled.input`
  width: 16rem;
  height: 2rem;
  border: 0;
  border-radius: 1rem;
  margin-right: 1rem;
`;
export default class Header extends React.Component {
  state = {
    nomePlaylist: "",
  };

  handleNomePlaylist = (e) => {
    this.setState({ nomePlaylist: e.target.value });
  };
  

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.nomePlaylist,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "raoni-silva-ailton",
        },
      })
      .then((response) => {
        alert("Playlist criada com sucesso!");
        this.setState({nomePlaylist: response.data})
      })
      .catch((error) => {
        alert("A playlist não foi criada!");
      });
  };

  render() {
    return (
      <DivHeader>
        <Logo src={LogoCompleta} alt="Logo" />

        <Search>
          <Input
            type="text"
            placeholder=" Nome da Playlist"
            value={this.state.nomePlaylist}
            onChange={this.handleNomePlaylist}
          ></Input>
          <Button onClick={this.createPlaylist}>Criar Playlist</Button>
        </Search>
      </DivHeader>
    );
  }
}
