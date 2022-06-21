import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
            <p><strong>{props.campo} </strong> {props.descricao} </p>
            </div>
        </div>
    )
}

export default CardPequeno;


