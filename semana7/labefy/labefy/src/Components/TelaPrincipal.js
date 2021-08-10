import axios from 'axios'
import React from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
import TelaAdicionarTracks from './TelaAdicionarTracks'

class TelaPrincipal extends React.Component {
    state = {
        inputForPlaylists: '',
        telaTracks: false
    }

    adicionarTracks = () => {
        switch(this.state.telaTracks){
            case true:
                return <TelaAdicionarTracks/>
            default:
                return <div>
                    
                    <input
                    value={this.state.inputForPlaylists}
                    onChange={this.inputPlaylists} />
                    <button onClick={this.irParaTracks}>Salvar</button>
                </div> 
            }
    }

    irParaTracks = () => {
        this.setState({telaTracks: true})
    }
    adicionarPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.inputPlaylists
        }

        axios.post(url, body, {
            headers: {
                Authorization: 'joao-moretti-lovelace'
            }
        })
            .then(() => {
                alert('Playlist criada com sucesso')
                this.setState({ inputPlaylists: '' })
            })
            .catch((err) => {
                console.log(err.response)
                alert('Erro')
            })
    }


    inputPlaylists = (event) => {
        this.setState({ inputForPlaylists: event.target.value })
    }

    render() {
        return <div>
                {this.adicionarTracks()}
        </div>
    }
}

export default TelaPrincipal