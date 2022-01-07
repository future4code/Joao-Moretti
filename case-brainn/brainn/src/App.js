import React from "react"
import Router from "./route/Router";
import { createGlobalStyle } from 'styled-components';
import MegaSenaPage from "./page/megaSena/MegaSenaPage";
import { switchCoordinator } from "./route/SwitchCoordinator";
import GlobalState from "./global/GlobalState";


const App = () => {

  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
    }
  
    p {
      margin: 0;
      
    }
  
    /* Outros estilos globais */
  `;

  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
