import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaLista from "./Components/TelaLista"

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro GoToList={this.GoToList}/>
      case "lista":
        return <TelaLista GoToRegister={this.GoToRegister}/>
      default:
        return <div>"erro"</div>
    }
  }

  GoToList = () => {
      this.setState({telaAtual:"lista"})
  }

  GoToRegister = () => {
      this.setState({telaAtual:"cadastro"})
  }

  render() {
    return (
      <div>
        {this.escolherTela()}
      </div>
    );
  }
}

export default App;
