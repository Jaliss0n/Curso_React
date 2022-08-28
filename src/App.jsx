import React from "react"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import './App.css'
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"

export default () => {
    return (

        <div className='App'>
            <h1>Fundamentos React </h1>

            <div className="Cards">

                <Card titulo="#13 MegaCena" color="#424232">
                    <Mega/>
                </Card>

                <Card titulo="#12 Contador" color="#424242">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="#11 Componente Controlado (Input)" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="#10 Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>


                <Card titulo="#09 Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="#08 Renderizaçao Condicional" color="#982395">

                </Card>

                <Card titulo="#07 Tabela" color="#FF8C65">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 Repeticao" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>


                <Card titulo="#05 Componente com Filho" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
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