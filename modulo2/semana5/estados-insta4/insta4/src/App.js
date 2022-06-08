import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
          <Post
          nomeUsuario={'raoni'}
          fotoUsuario={'https://picsum.photos/32'}
          fotoPost={'https://picsum.photos/199'}
        /> 
         <Post
        nomeUsuario={'juliana'}
        fotoUsuario={'https://picsum.photos/25'}
        fotoPost={'https://picsum.photos/19'}
      />
      </MainContainer>
    );
  }
}

export default App;
