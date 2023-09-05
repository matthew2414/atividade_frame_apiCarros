import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CarrosVelhos from './Carros_velhos'
import CarrosEsportivos from './Carros_esportivos'
import CarrosComuns from './Carros_comuns'

function Home() {
    return (
        <>
            <label> Este é o nosso projeto! Selecione um tipo de carro abaixo: </label> <p> </p>

            <div> 
                <Navigation />
                <Route path="/screen1" exact component={CarrosComuns} />
                <button> Carros Velhos </button>
                <button> Carros Esportivos </button>
                <button> Carros Comuns </button>
            </div>
        </>
    )
}

export default Home