import { Router } from "./router/Router";
import { createGlobalStyle } from 'styled-components';


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

function App() {
  return (<>
    <GlobalStyle/>
     <Router/>
    </>
  );
}

export default App;
