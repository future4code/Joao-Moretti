import axios from "axios";
import React from "react";
// import styled from "styled-components";

// const Div = styled.div`
//     display: flex;
//     border: 1px solid red;
//     width: 25%;
//     margin: auto;
//     padding: 50px;
//     flex-direction: column;
//     margin-top: 100px;
// `

// const Input = styled.input`
//     display: flex;
//     width: 35%;
//     margin: auto;
//     margin-top: 20px;
 
// `
// const Button = styled.button`
//       width: 70px;
//       margin:auto;
//       margin-top: 10px;
//       border: none;
//       height: 30px;
// `


const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
  headers:{
    Authorization: 'joao-moretti-lovelace'
  }

}

class App extends React.Component {
  state = {
    usuarios: [],
    inputNome: "",
    inputEmail: ""
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  pegarUsuarios = () => {
    axios
    .get(url, headers)
    .then((res)=> {
      console.log(res)
      this.setState({usuarios: res.data.array})
    })
    .catch((err)=> {
      console.log(err.response.data.messege)
    })

  } 

  criarUsuarios = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    axios
    .post(url, body, headers)
    .then((res) =>{
      alert('sucesso')
      this.setState({inputNome:""})
      this.setState({inputEmail:""})
      this.pegarUsuarios()
      console.log(res)

    })
    .catch((err) => {
      alert('erro', err.response.data.messege)

    })
  }

  render(){
      // const listaUsuarios = this.state.usuarios((usuario) => {
      //   return <li key={usuario.id}>{usuario.name}</li>
      // })
    
    return (
      <div>
      
        <input
        value={this.state.inputNome}
        onChange={this.onChangeNome}
        placeholder='Nome'
        />

        <input
        value={this.state.inputEmail}
        onChange={this.onChangeEmail}
        placeholder='E-mail'
        />

        <button onClick={this.criarUsuarios}>Salvar</button>
        {/* {listaUsuarios} */}
       
      </div>
    );
  }
}

export default App;
