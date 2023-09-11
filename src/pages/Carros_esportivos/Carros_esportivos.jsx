import Header from '../../components/Header/Header'
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card'


function CarrosEsportivos() {

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

            <h1> Carros Esportivos </h1>
            <div>
                
            </div>
        </>
    )
}

export default CarrosEsportivos

//sandra, tentei mas falhei