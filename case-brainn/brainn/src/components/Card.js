import React from "react";
import { useHistory } from "react-router-dom";
import { switchCoordinator } from "../route/SwitchCoordinator";
import { Button } from "./styled";

const Card = (props) => {
    const history = useHistory()
    return <Button onClick={() => switchCoordinator(props.item.nome, history)}>
     <strong> {props.item.nome} </strong>
    </Button>
}

export default Card