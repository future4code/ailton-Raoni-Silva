import React from "react";
import styled from "styled-components";
import axios from "axios";
import LogoCompleta from "../img-labefy/logocompleta.png";
import { Footer } from "./Footer";

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

const Button = styled.button`
  width: 10rem;
  height: 2rem;
  color: white;
  margin-right: 1rem;
  border: 0;
  border-radius: 1rem;
  background-color: orangered;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;
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
const DivMain = styled.div`
  background-color: rgb(21, 21, 21);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
  min-height: 60%;
  padding: 2rem;
`;
const Logo = styled.img`
  width: 16rem;
  padding-left: 2rem;
`;
const Input = styled.input`
  width: 16rem;
  height: 2rem;
  border: 0;
  border-radius: 1rem;
  margin-right: 1rem;
  text-align: center;
`;
const AddMusicas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Musics = styled.div`
  padding: 1rem;
  border-radius: 8px;
  color: black;
  background-color: orangered;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

const BoxMusica = styled.div`
  display: flex;
  gap: 2rem;
  border-radius: 5px;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  background-color: black;
  font-size: 20px;
  padding: 1rem;
  font-weight: 600;
`;

export default class TelaDetalhe extends React.Component {
  state = {
    musics: [],
    inputName: "",
    inputArtist: "",
    inputUrl: "",
  };

  componentDidMount() {
    this.getPlaylist();
  }

  getPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,
        {
          headers: {
            Authorization: "raoni-silva-ailton",
          },
        }
      )
      .then((response) => {
        this.setState({ musics: response.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  onChangeArtist = (e) => {
    this.setState({ inputArtist: e.target.value });
  };
  onChangeUrl = (e) => {
    this.setState({ inputUrl: e.target.value });
  };

  addMusic = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;
    const body = {
      name: this.state.inputName,
      artist: this.state.inputArtist,
      url: this.state.inputUrl,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "raoni-silva-ailton",
        },
      })
      .then((response) => {
        alert("Música adicionada com sucesso!");

        this.getPlaylist();
      })
      .catch((error) => {
        alert("A música não foi adicionada!");
      });

    this.setState({
      inputArtist: "",
      inputName: "",
      inputUrl: "",
    });
  };
  removeMusic = (trackId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${trackId}`,
        {
          headers: {
            Authorization: "raoni-silva-ailton",
          },
        }
      )
      .then(() => {
        this.getPlaylist();
        alert("Música removida!");
        
      })
      .catch((err) => {
        alert("Música não deletada!");
        console.log(err);
      });
  };
  render() {
    const musicas = this.state.musics.map((musica) => {
      return (
        <BoxMusica key={musica.id}>
          {musica.artist} - {musica.name}
          <audio controls>
            <source src={musica.url} type="audio/ogg" />
          </audio>
          <button onClick={() => this.removeMusic(musica.id)}>x</button>
        </BoxMusica>
      );
    });

    return (
      <ContainerAll>
        <DivHeader>
          <Logo src={LogoCompleta} alt="Logo" />
          <Button onClick={this.props.irPaginaPlaylist}>Playlists</Button>
        </DivHeader>

        <DivMain>
          <AddMusicas>
            <Input
              type="text"
              placeholder=" Adicionar Artista"
              value={this.state.inputArtist}
              onChange={this.onChangeArtist}
            ></Input>
            <Input
              type="text"
              placeholder="Adicionar Música"
              value={this.state.inputName}
              onChange={this.onChangeName}
            ></Input>
            <Input
              type="text"
              placeholder=" Adicionar Link da Música"
              value={this.state.inputUrl}
              onChange={this.onChangeUrl}
            ></Input>
            <Button onClick={this.addMusic}>Adicionar à playlist</Button>
          </AddMusicas>
          {<Musics>{musicas}</Musics>}
        </DivMain>
        <Footer />
      </ContainerAll>
    );
  }
}
