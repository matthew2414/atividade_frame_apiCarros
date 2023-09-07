import React from "react";
import './Card.css';

function CardCar({car}) {
    return (
        <div className="car-card">
            <img src={car.car.imagem_url}/>
            <h3>{car.car.modelo}</h3>
            <p>Ano: {car.car.ano}</p>
            <p>Cor: {car.car.cor}</p>
        </div>
    )
}

export default CardCar