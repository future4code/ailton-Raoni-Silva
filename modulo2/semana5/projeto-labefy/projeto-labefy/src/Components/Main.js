import React from "react";
import styled from "styled-components";
import axios from "axios";


const DivMain = styled.div`
  background-color: rgb(21, 21, 21);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 60%;
`;

const ContainerMaster = styled.div`
  /* display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,1fr); */
`;
const ContainerList = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  width: 14rem;
  margin: 10px;
  background-color: #f2f7ff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #b9d3f8;
  }
`;
const ContainerX = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  background-color: #f2f7ff;
  padding: 10px;
  border-radius: 8px;
`;
const TituloList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #0e62b5;
  font-size: 20px;
  margin: 0 0 4px 0;
  font-weight: 600;
`;
const Playlist = styled.div`
  color: black;
`
// const DescricaoList = styled.p`
//   font-size: 18px;
//   margin: 0;
//   color: #242932;
// `;
export default class Main extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.catchLists();
  }
  componentDidUpdate() {
    this.catchLists();
  }

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

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "raoni-silva-ailton",
        },
      })
      .then((response) => {
        this.catchLists();
        alert("Usuário(a) deletado(a) com sucesso!");
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
      });
  };

  render() {
    const listaMusicas = this.state.playlists.map((lista) => {
      return (
        <ContainerX key={lista.id}
                    listaName={lista.name}
        ContainerList>
        <ContainerList
          
        
          onClick={() => this.props.irPaginaDetalhe(lista.id)}
          
        >
          <Playlist>Playlist:</Playlist>
          {lista.name}

          
        </ContainerList>
        <div>
            <button onClick={() => this.deletePlaylist(lista.id)}>X</button>
          </div>
        </ContainerX>
      );
    });

    return (
      <DivMain>
        <ContainerMaster>
         
          <TituloList  >{listaMusicas} </TituloList>
        </ContainerMaster>
      </DivMain>
    );
  }
}
