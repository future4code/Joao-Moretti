import React from "react";
import styled from "styled-components";

const Finall = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Final extends React.Component{
   render(){
        return <Finall>
            <h2>O FORMULÁRIO ACABOU</h2>
            <p>Muito obrigado por participar!Entraremos em contato!</p>
        </Finall>
    }
}

export default Final