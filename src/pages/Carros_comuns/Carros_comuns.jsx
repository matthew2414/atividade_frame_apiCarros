import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'

function CarrosComuns() {

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

            <h1> Carros Comuns </h1>
        </>
    )
}

export default CarrosComuns