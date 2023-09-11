import Header from '../../components/Header/Header'
import React, { useState, useEffect } from 'react';

function CarrosVelhos() {

    const [dados, setDados] = useState([]);
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/matthew2414/apiCarros/main/ApiCarros.json')
          .then((response) => response.json())
          .then((data) => setDados(data))
          .catch((error) => console.error(error));
    }, []);


    return (
        <>
            <Header> </Header>

            <h1> Carros Velhos </h1>
            <div className='Car_Velho'>
             
            </div>
        </>
    )
}

export default CarrosVelhos