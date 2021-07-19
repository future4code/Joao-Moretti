import React from "react";
import Etapa1 from './Components/Etapa1'
import styled from "styled-components";

const Main = styled.div`
  height: 100vh;
  background-color: aliceblue;
`

class App extends React.Component {
  state = {
    proximaEtapa: true
  }

//   outraTela = () => {
//     if(this.state.proximaEtapa){
//         return <Segundo proximaEtapa={this.botaoEtapa}/>
//     }
// }


//   botaoEtapa = () => {
//     this.setState({proximaEtapa: true})
// }

  render() {
    return (
       <Main>
         <Etapa1 
         
         />
       </Main>
    );
  }
}
  

export default App;
