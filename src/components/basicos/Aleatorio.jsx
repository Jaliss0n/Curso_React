import React from "react";

export default function Aleatorio (props)  {

    const {min, max} = props

    const ale = Math.floor(Math.random() * (max - min)) + min

    return (
        <div>
            <h3><strong>Valor minimo {min}</strong></h3>
            <h3><strong>Valor maximo {max}</strong></h3>
            <h3><strong>Aleatorio da vez é {ale}</strong></h3>
        </div>
    )
}