import './App.css'
import React from 'react'

import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import FamiliaMembro from './components/basicos/FamiliaMembro'

export default _ =>

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#07 - Desafio Repetição" color="#5F9EA0">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Lista de Alunos" color="#B22222">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#708090">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" ></FamiliaMembro>
                    <FamiliaMembro nome="Ana" ></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo" ></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio aleatorio" color="#1E90FF">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento" color="#FF69B4">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Parametro" color="#00FF7F">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={6.5}>
                </ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro" color="#9932CC">
                <Primeiro></Primeiro>
            </Card>
        </div>


    </div>

