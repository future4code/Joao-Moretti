import React from 'react'
import styled from 'styled-components'
import Etapa3 from './Etapa3'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Segundo extends React.Component {
    state = {
        curso: "",
        unidade: ""
    }

    onChangeCurso = (event) => {
        this.setState({curso: event.target.value})
    }

    onChangeUnidade = (event) => {
        this.setState({unidade: event.target.value})
    }

    render (){
        return (
            <Div>
                <h2>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

                <p>4. Qual curso?</p>
                <input
                value={this.state.curso}
                onChange={this.onChangeCurso}
                placeholder="Curso"
                />

                <p>Qual unidade de ensino?</p>
                <input
                value={this.state.unidade}
                onChange={this.onChangeUnidade}
                placeholder="Unidade"
                />
                <button>Próxima etapa</button>
                <Etapa3/>
            </Div>
             )

        
    }

}

export default Segundo