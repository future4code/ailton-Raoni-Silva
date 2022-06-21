import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    arrayPost: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "raoni",
        fotoUsuario: "https://picsum.photos/32",
        fotoPost: "https://picsum.photos/199",
      },
      {
        nomeUsuario: "juliana",
        fotoUsuario: "https://picsum.photos/25",
        fotoPost: "https://picsum.photos/19",
      },
    ],
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };
    const novosPosts = [...this.state.arrayPost, novoPost];
    this.setState({ arrayPost: novosPosts })
    this.setState({valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""})
  };
  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    console.log(this.state.arrayPost);
    const posts = this.state.arrayPost.map((post) => {
      return (
        <Post
          key={post.nomeUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />
        <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Adicionar Link Foto Perfil"}
        />
        <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Adicionar Link Foto Post"}
        />
        <button onClick={this.adicionarPost}>Adicionar</button>
        {posts}
      </MainContainer>
    );
  }
}

export default App;
