import React from "react";

export default function Mega () {

    function gerarNumeros(qtdNum) {

        const Mega = [] 

        for (let i = 0; i < qtdNum; i++) {
            const Aleatorio = Math.floor(Math.random() * (60 - 1 + 1)) + 1
            Mega[i] = Aleatorio
            
            
        } return Mega

    }

    return (
        <div>
            <h2>teste</h2>
            {gerarNumeros(7)}
        </div>
    )
}