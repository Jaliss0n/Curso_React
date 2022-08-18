import React from "react"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia"
import './App.css'

export default (props) => {
    return (

        <div className='App'>
            <h1>Fundamentos React </h1>

            <div className="Cards">
                <Card titulo="#05 Componente com Filho" color="#00C8F8">
                    <Familia sobrenome="Ferreira"/>
                </Card>

                <Card titulo="#04 Desafio Aleatorio" color="#FA6900">
                    <Aleatorio max={6} min={2} />
                </Card>

                <Card titulo="#03 Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 Com Parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro"
                        nota={9.7}
                    />
                </Card>

                <Card titulo="#01 Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>

                </Card>

            </div>



        </div>
    )
}