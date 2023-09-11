import './Card.modules.css'
import React from 'react'

function Card(carros) {
    return(
        <div id="div-card"> 
            <img id="img-card" src={carros.imagem_url} /> <p></p>
            
            <div> 
                <h3 id="modelo"> Modelo: {carros.modelo}</h3> <p></p>
                <h3 id="ano"> Ano: {carros.ano}</h3> <p></p>
                <h3 id="cor"> Cor: {carros.cor}</h3> <p></p>
            </div>
        </div>  
    )
}

export default Card