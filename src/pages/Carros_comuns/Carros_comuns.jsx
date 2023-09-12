import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'

function CarrosComuns() {

    const [dados, setDados] = useState([]);

    useEffect(() => {

        const buscarcarros = async ()=>{ 

            const response = await fetch('https://raw.githubusercontent.com/matthew2414/apiCarros/main/ApiCarros.json')
            const carros = await response.json()
            setDados(carros.carros_comuns)
            console.log(carros.carros_comuns);
        }

        buscarcarros()
    }, [])

    return (
        <>
            <Header> </Header>

            <h1> Carros Comuns </h1>

            <div className='Car_Comun'>

                {
                    dados.map((car) => (
                        <Card
                            imagem={car.imagem_url}
                            modelo={car.modelo}
                            ano={car.ano}
                            cor={car.cor}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default CarrosComuns