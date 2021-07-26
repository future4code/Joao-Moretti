import React from "react";
import styled from "styled-components";
import Final from './Final'

const Terceiro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Etapa3 extends React.Component {
    state = {
        cursoImcompleto: "",
        complementar: ""
    }

    onChangeImcompleto = (event) => {
        this.setState({cursoImcompleto: event.target.value})
    }

    onChangeComplementar = (event) => {
        this.setState({complementar: event.target.value})
    }

    render(){
        return(
             <Terceiro>

            <h2>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <p>Por que não terminou um curso de graduação?</p>
            <input
            value={this.state.cursoImcompleto}
            onChange={this.onChangeImcompleto}
            placeholder="Graduação"
            />

            <p>Você fez algum curso complementar?</p>
            <input
            value={this.state.complementar}
            onChange={this.onChangeComplementar}
            placeholder="."
            />

            <Final/>
        </Terceiro>
        )
    }
}

export default Etapa3