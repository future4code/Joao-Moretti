import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import TelaCadastro from "./TelaCadastro"


const List = styled.div`
border: 1px solid black;
width: 300px;
padding: 10px;
margin: auto;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
font-family: 'Satisfy', cursive;
`

const Button = styled.button`
    cursor: pointer;
    border:none;
    padding: 5px;
    width: 30px;
    color: white;
    background-color: red;
    font-family: 'Satisfy', cursive;
`

const H1 = styled.h1`
    text-align: center;
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

class TelaLista extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios();
    }

    pegarUsuarios = () => {
        axios
            .get(url, headers)
            .then((res) => {
                console.log(res)
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                console.log(err.response.data.messege)
            })
    }

    deletarUsuarios = (id) => {
        const urli = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios
            .delete(urli, headers)
            .then(()=> {
                alert('apagado')
                this.pegarUsuarios()
            })
            .catch(()=> {
                alert('erro')
            })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return <List key={usuario.id}>{usuario.name}
                <Button onClick={()=> this.deletarUsuarios(usuario.id)}>X</Button>
            </List>
        })
        return <div>
            <Botao onClick={this.props.GoToRegister}>Ir para o cadastro</Botao>

            <H1>Usuários:</H1>
            {listaUsuarios}
        </div>
    }
}

export default TelaLista