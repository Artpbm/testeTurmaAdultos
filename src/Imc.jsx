import React, { useState } from 'react'
import style from './Imc.module.css'

export default function imc(){

    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [respImc, setRespImc] = useState()

    const imcs = () => {
        const peso = parseFloat(n1)
        const altura = parseFloat(n2)

        const resIMC = peso / (altura * altura)
        setRespImc(resIMC)
    }

    const Imcses = (a) => {
        if(a < 18.5) return "Abaixo do peso"
        else if(a < 24.9) return "Peso normal"
        else if(a < 29.9) return "Sobrepeso"
        else if(a < 34.9) return "Obesidade grau I"
        else if(a < 39.9) return "Obesidade grau II"
    }
    return(
        <>
        <h1>Indice de Massa Corporal</h1>
        <br />
        <div>
        <h4>Digite suas informações</h4>
        <input type="number" value={ n1 } onChange={(e) => setN1(e.target.value)} placeholder='Digite seu peso'/>
        <input type="number" value={ n2 } onChange={(e) => setN2(e.target.value)} placeholder='Digite a sua altura'/>
        </div>
        <div>
        <h4>Você é</h4>
        <p>
            <button onClick={imcs}>IMC</button>
            {isNaN(respImc) ? ("Digite valores válidos") 
            : (<> <br /> IMC: {respImc.toFixed(2)} <br /> {Imcses(respImc)}</>)}
        </p>
        </div>
        </>

    )
}