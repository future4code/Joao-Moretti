import React from 'react'
import './CardPequeno.css'


function CardPequeno (props){
    return(
        <div className="exercicio">
            <div className="exe1">
            <img src={props.imagem}/>
            <p> {props.texto}</p>
            </div>

            <div className="exe2">
            <img src={props.foto}/>
            <p>{props.endereco}</p>
            </div>
        </div>
            
           
    )
}

export default CardPequeno