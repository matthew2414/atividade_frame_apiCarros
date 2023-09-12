import Header from '../../components/Header/Header'
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card'
import '../Carros_esportivos/Esportivos.modules.css'

function CarrosEsportivos() {

    const [dados, setDados] = useState([]);

    useEffect(() => {

        const buscarcarros = async ()=>{ 

            const response = await fetch('https://raw.githubusercontent.com/matthew2414/apiCarros/main/ApiCarros.json')
            const carros = await response.json()
            setDados(carros.carros_esportivos)
            console.log(carros.carros_esportivos);
        }

        buscarcarros()
    }, [])

    return (
        <>
            <Header> </Header>

            <h1> Carros Esportivos </h1>
            <div classname='Car_Esportivo'>
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

export default CarrosEsportivos

//sandra, tentei mas falhei