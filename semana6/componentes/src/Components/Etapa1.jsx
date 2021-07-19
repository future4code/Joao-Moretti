import React from 'react'
import styled from 'styled-components'
import Segundo from './Segundo'

const Principal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
class Etapa1 extends React.Component{
    state = {
        
    nome:"",
    idade:"",
    email: "",
    proximaEtapa: false
    
    }

//     outraTela = () => {
//         if(this.state.proximaEtapa){
//             return <Segundo proximaEtapa={this.botaoEtapa}/>
//         }
//     }
    

//     botaoEtapa = () => {
//     this.setState({proximaEtapa: true})
//   }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})

    }

    onChangeIdade = (event) => {
        this.setState({idade: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    render(){
    
    return <Principal>
        <h2>Etapa 1 - DADOS GERAIS</h2>
        <p>1. Qual é o seu nome?</p>
        <input
        value={this.state.usuario}
        onChange={this.onChangeNome}
        placeholder="Nome"
        />
        <p>2. Qual é a sua idade?</p>
        <input
        value={this.state.Idade}
        onChange={this.onChangeMensagem}
        placeholder="Idade"
        />
        <p>3. Qual é o seu e-mail?</p>
        <input
        value={this.state.email}
        onChange={this.onChangeEmail}
        placeholder="Email"
        />
        <button onClick={this.outraTela}>Próxima etapa</button>
        {this.outraTela}
        <Segundo/>
        
    </Principal>
}
}

export default Etapa1