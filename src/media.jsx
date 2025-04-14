import { useState } from 'react'
import style from './media.module.css'

export default function Media(){
    const [n1, setN1] = useState ()
    const [n2, setN2] = useState ()
    const [n3, setN3] = useState ()
    const [n4, setN4] = useState ()
    const [n5, setN5] = useState ()
    const [respMedia, setRespMedia] = useState ()

    const medias = () => setRespMedia((parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5      )

    return(
        <>
        <h1>Média</h1>
        <br />
        <div>
            <h4>Digite suas notas escolares</h4>
            <input type="number" value={ n1 } onChange={(e) => setN1(e.target.value)} placeholder='Primeira nota'/>
            <input type="number" value={ n2 } onChange={(e) => setN2(e.target.value)} placeholder='Segunda nota'/>
            <input type="number" value={ n3 } onChange={(e) => setN3(e.target.value)} placeholder='Terceira nota'/>
            <input type="number" value={ n4 } onChange={(e) => setN4(e.target.value)} placeholder='Quarta nota'/>
            <input type="number" value={ n5 } onChange={(e) => setN5(e.target.value)} placeholder='Quinta nota'/>
        </div>
            <h4>Sua média é</h4>
            <p>
                <button onClick={medias}>Média</button>
                <br />
                { respMedia <= 7 ?  "Reprovou" : "Aprovado"}
                <br />
                { !isNaN(respMedia) ? respMedia : "Digite um número válido"}
            </p>
        </>
    )
}