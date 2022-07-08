import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import {Footer} from "./Footer";

const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

export default class TelaPlaylists extends React.Component {
    render() {
        return (
            <ContainerAll>  
         <ContainerAll>
        <Header  irPaginaPlaylist={this.props.irPaginaPlaylist}/>
        <Main irPaginaDetalhe={this.props.irPaginaDetalhe} />
       <Footer />
      </ContainerAll>
          </ContainerAll>
        )
    }
}