import styles from './Card.modules.css'
import React from 'react'

function Card() {
    return(
        <div id="div-card"> 
            <img id="img-card" /> <p></p>
            
            <div> 
                <label id="modelo"> Modelo: </label> <p></p>
                <label id="ano"> Ano: </label> <p></p>
                <label id="cor"> Cor: </label> <p></p>
            </div>
        </div>  
    )
}

export default Card