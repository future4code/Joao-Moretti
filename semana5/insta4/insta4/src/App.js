import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Poste from './components/Poste/Poste'
import jotape from './img/jotape.jpg'
import anime from './img/anime.jpg'
import Posta from './components/posta/posta';
import kakashi from './img/kakashi.jpg'
import animeart from './img/animeart.jpg'
import Formulario from './components/formulario/formulario';

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

        <Poste 
        nome={'Joao'}
        fotoPerfil={jotape}
        fotoPost={anime}
        />

        <Posta
        nome={'Jotape'}
        foto={kakashi}
        post={animeart}
        />

      </MainContainer>

        
      


      
    )
  }
}

export default App;
