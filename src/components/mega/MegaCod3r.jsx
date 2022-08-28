import React from "react";


function gerarNumeroNaoContido(min,max,array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) :
    aleatorio
}


function gerarNumeros(qtde) {
    const numero = Array(qtde).fill(0)

    return numero
}

console.log(gerarNumeros(7))
