import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Div = styled.div`
    display: flex;
    border: 1px solid red;
    width: 25%;
    margin: auto;
    padding: 50px;
    flex-direction: column;
    margin-top: 200px;
`

const Input = styled.input`
    display: flex;
    width: 35%;
    margin: auto;
    margin-top: 20px;
    font-family: 'Satisfy', cursive;
 
`
const Button = styled.button`
      width: 70px;
      margin:auto;
      margin-top: 10px;
      border: none;
      height: 30px;
      color: white;
      background-color: red;
      font-family: 'Satisfy', cursive;
`

const H1 = styled.h1`
    text-align: center;
    position: relative;
    top: 170px;
    font-family: 'Permanent Marker', cursive;
`
const Botao = styled.button`
    border: none;
    background-color: black;
    color: white;
    font-family: 'Permanent Marker', cursive;
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: 'joao-moretti-lovelace'
    }
}

class TelaCadastro extends React.Component {
    state = {
        inputNome: "",
        inputEmail: ""
    }

    onChangeNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    criarUsuarios = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        axios
            .post(url, body, headers)
            .then((res) => {
                alert('sucesso')
                this.setState({ inputNome: "" })
                this.setState({ inputEmail: "" })
                console.log(res)

            })
            .catch((err) => {
                console.log('erro', err.response)

            })
    }

    render() {
        return <div>
            <Botao onClick={this.props.GoToList}>Ir para a lista</Botao>
            <H1>Cadastro:</H1>
            <Div>
                <Input
                    value={this.state.inputNome}
                    onChange={this.onChangeNome}
                    placeholder='Nome'
                />

                <Input
                    value={this.state.inputEmail}
                    onChange={this.onChangeEmail}
                    placeholder='E-mail'
                />

                <Button onClick={this.criarUsuarios}>Salvar</Button>

            </Div>
        </div>
    }
}

export default TelaCadastro