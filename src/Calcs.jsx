import style from './Calcs.module.css'
import { useState, useEffect } from 'react'

export default function Calcs(){

    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMult, setRespMult] = useState()
    const [respDivi, setRespDivi] = useState()


    const somar = () => setRespSoma(parseFloat(n1) + parseFloat(n2))
    const subtr = () => setRespSub(parseFloat(n1) - parseFloat(n2))
    const multi = () => setRespMult(parseFloat(n1) * parseFloat(n2))
    const divis = () => setRespDivi(parseFloat(n1) / parseFloat(n2))

    const HandleAll = (a, b) => {  
        setRespSoma(parseFloat(a) + parseFloat(b))
        setRespSub(parseFloat(a) - parseFloat(b))
        setRespMult(parseFloat(a) * parseFloat(b))
        setRespDivi(parseFloat(a) / parseFloat(b))  
    }

    useEffect(() => {
        setRespSoma(parseFloat(n1) + parseFloat(n2))
        setRespSub(parseFloat(n1) - parseFloat(n2))
        setRespMult(parseFloat(n1) * parseFloat(n2))
        setRespDivi(parseFloat(n1) / parseFloat(n2))  
    }, [n1, n2])
    
   return(
        <>
        <h5><a href={"/"} className={style.backBtn}>voltar</a></h5>
        <h1>Cálculos</h1>
        <br />
        <div>
            <h4>Digite os números para os cálculos</h4>
            <input type="number" value={ n1 } onChange={(e) => setN1(e.target.value)} placeholder='Primeiro número'/>
            <input type="number" value={ n2 } onChange={(e) => setN2(e.target.value)} placeholder='Segundo número'/>
        </div>
            <h4>Resposta</h4>
            <p>
                <button onClick={somar}>Somar</button>
                {!isNaN(respSoma) ? respSoma : "Digite um numero válidos"}
            </p>
            <p>
            <button onClick={subtr}>Subtrair</button>
                {!isNaN(respSub)  ? respSub : "Digite um numero válidos"}

                </p>
            <p>
            <button onClick={multi}>Multiplicação</button>
            {!isNaN(respMult)  ? respMult : "Digite um numero válidos"}
                
            </p>
            <p>
            <button onClick={divis}>divisão</button>
            {n2 === "0" ? "Erro ao dividir por zero"
            : !isNaN(respDivi) && isFinite(respDivi) ? respDivi 
            : "Digite números válidos"}
                </p>
            <br />
            <button onClick={() => HandleAll(n1, n2)}>Calcular todas</button>
        </>
    )
}