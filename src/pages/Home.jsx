import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CarrosVelhos from '../pages/Carros_velhos'

function Home() {
    return (
        <>
            <label> Este é o nosso projeto! Selecione um tipo de carro abaixo: </label> <p> </p>
            <div> 
                <button> Carros Velhos </button>
                <button> Carros Esportivos </button>
                <button> Carros Comuns </button>

            </div>
        </>
    )
}

export default Home