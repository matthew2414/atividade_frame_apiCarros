import './Card.modules.css'
import React from 'react'

function Card({imagem, modelo, ano, cor}) {
    return(
        <div id="div-card"> 
            <img id="img-card" src={imagem} /> <p></p>
            
            <div> 
                <h3 id="modelo"> Modelo: {modelo}</h3> <p></p>
                <h3 id="ano"> Ano: {ano}</h3> <p></p>
                <h3 id="cor"> Cor: {cor}</h3> <p></p>
            </div>
        </div>  
    )
}

export default Card