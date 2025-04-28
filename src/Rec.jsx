import { useState, useEffect } from 'react'
import style from './Rec.module.css'
import { api } from './api/api'
import { Card } from './components/card'
import  ModalInfo   from './components/modalinfo'
import Tilt from 'react-parallax-tilt'

export default function Req(){

const [data, setData] = useState([])
const [page, setPage] = useState("")
const [searchName, setSearchName] = useState("") 
const [erro, setErro] = useState(false)
const [modal, setModal] = useState()

useEffect(() => {
        
    api.get(`/character?page=${page}&name=${searchName}`).then((res) => {
        setData(res.data.results)
        }).catch((error) => {
            console.log(error)
            setErro(true)
        })
    }, [page, searchName])

    console.log(data)

    return(
        <>
        {modal !== undefined && <ModalInfo data={data[modal]} close={() => setModal()}/>}
        <section className={style.wrapPage}>
            <h1 className={style.titlename}>Rick and Morty API</h1>
            <input type="text" placeholder='Digite uma página (1/42)' value={page} onChange={(e) => setPage(e.target.value)}/>
            {erro && <p>Página não encontrada</p>}

            <input type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
            <div className={style.wrapCard}>
            {data.map((item, index) => {
                return(
                    <div key={index} style={{display: "flex", flexDirection: "column", gap: "10px", border: "2px solid black" }}>
                        <Tilt>
                        <Card name={item.name} image={item.image}/>
                        </Tilt>
                        <button onClick={() => setModal(index)}>Info = {item.name} </button>
                    </div>
    
                )
        })}
        </div>
        </section>
        </>
    )
}