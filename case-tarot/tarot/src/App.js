import GlobalState from "./globals/GlobalState";
import Router from "./router/Router";
import { createGlobalStyle } from 'styled-components';
import Header from "./components/Header";
 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #181818;
  }

  p {
    margin: 0;
  }
`;


function App() {
  return (
    <GlobalState>
      <GlobalStyle/>
      <Header />
      <Router />
      
    </GlobalState>
  );
}

export default App;
