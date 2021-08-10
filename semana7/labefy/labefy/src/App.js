import React from "react";
import TelaPrincipal from "./Components/TelaPrincipal";


class App extends React.Component {
  state = {
      mudarTela: false
  }

  irParaPlaylists = () => {
    switch (this.state.mudarTela){
      case true:
        return <TelaPrincipal/>
      default:
        return <p><button onClick={this.botaoPlaylist}>Criar Playlist</button></p> 
    }
  }

  botaoPlaylist = () => {
    this.setState({mudarTela: true})
  }
  render(){

    return (
      <div>
        {this.irParaPlaylists()}
      </div>
    );
  }
  
}
  export default App;
