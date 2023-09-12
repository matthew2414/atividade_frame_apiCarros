import Header from '../../components/Header/Header'
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card'
import '../Carros_velhos/Velhos.modules.css'


function CarrosVelhos() {

    const [dados, setDados] = useState([]);
    
    useEffect(() => {

        const buscarcarros = async ()=>{ 

            const response = await fetch('https://raw.githubusercontent.com/matthew2414/apiCarros/main/ApiCarros.json')
            const carros = await response.json()
            setDados(carros.carros_velhos)
            console.log(carros.carros_velhos);
        }

        buscarcarros()
    }, [])


    return (
        <>
            <Header> </Header>

            <h1> Carros Velhos </h1>
            <div className='Car_Velho'>

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

export default CarrosVelhos