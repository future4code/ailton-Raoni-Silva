import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import TelaDetalhe from "./Components/TelaDetalhe";
import TelaPlaylists from "./Components/TelaPlaylists";
import axios from "axios";



const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

export default class App extends React.Component {
  state = {
    paginaAtual: "playlist",
    playlistClicada: [],
  };
  catchLists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, {
        headers: {
          Authorization: "raoni-silva-ailton",
        },
      })
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        // console.log(response);
      })
      .catch((error) => {
        alert("Ocorreu um problema, tente novamente");
      });
  };
  irPaginaDetalhe = (id) => {
    this.setState({ paginaAtual: "detalhe", playlistClicada: id });
  };

  irPaginaPlaylist = () => {
    this.setState({ paginaAtual: "playlist", playlistClicada: "" });
  };
  paginaSelecionada = () => {
    switch (this.state.paginaAtual) {
      case "playlist":
        return <TelaPlaylists irPaginaDetalhe={this.irPaginaDetalhe} />;
      case "detalhe":
        return (
          <TelaDetalhe
            irPaginaPlaylist={this.irPaginaPlaylist}
            id={this.state.playlistClicada}
          />
        );
      default:
        return <TelaPlaylists irPaginaDetalhe={this.irPaginaDetalhe} />;
    }
  };
  render() {
    return <ContainerAll>{this.paginaSelecionada()}</ContainerAll>;
  }
}
