import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function calcImparPar(n) {
    const resultado =  n % 2 === 0 ? 'Par' : 'Impar'
    return resultado
}


const UseEffect = (props) => { //Use Effect se trata de laterar um efeito colateral
    
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    //////////////////////////////////////////////////
    const [num, setNum] = useState(1)
    const [impPar, setImparPar] = useState()

    useEffect(function(){
        setImparPar(calcImparPar(num))
    },num)



    ///////////////////////////////////////////////
    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = 'Eita!!!'
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            
            <SectionTitle title='Exercicico #01'/>

            <div className='center'>
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe': fatorial }</span>

                </div>
                <input type="number" className="text" 
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title='Exercicico #02'/>
            <div className="center">
                <div>
                    <span className="text">Situação: </span>
                    <span className="text red">{impPar}</span>
                </div>
                <input type="number" className="text" 
                    value={num} onChange={e => setNum(e.target.value)}
                />
            </div>

            
        </div>
    )
}

export default UseEffect
