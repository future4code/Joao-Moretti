import React from "react";
import { ButtonContainer, Container, TextContainer } from "./styled";

const Number = (props) => {
    return <Container>
    <ButtonContainer>
        <TextContainer>
        <p> <strong> {props.item} </strong> </p>
        </TextContainer>
    </ButtonContainer>
    </Container>
}

export default Number