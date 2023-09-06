import styles from './Home.css'
import React from 'react';  
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'

const Home = () =>{

    return (    
        <>
            <Header> </Header>

            <div id="alinhar">
                <label>
                   <h3> Olá! Este é o nosso trabalho sobre a Api de Carros. </h3> 
                   <br></br>
                    <h4> Selecione abaixo o tipo de carro desejado: </h4>
                </label>

                <div>
                    <Link to="/velhos"> <button>  Carros Velhos </button> </Link>
                    <Link to="/esportivos"> <button>  Carros Esportivos </button> </Link>
                    <Link to="/comuns"> <button>  Carros Comuns </button> </Link>
                </div>
            </div>
        </>
    )
}

export default Home