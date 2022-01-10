import React from 'react'
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #181818;
  }

  p {
    margin: 0;
  }

  /* Outros estilos globais */
`;


const App = () => {
  return (
    <div >
        <GlobalStyle/>
        <Router />
    </div>
  );
}

export default App;
