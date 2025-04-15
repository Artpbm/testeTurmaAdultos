import { useState, useEffect } from 'react'
import style from './Rec.module.css'
import { api } from './api/api'
import { Card } from './components/card'



export default function Req(){

const [data, setData] = useState([])
const [page, setPage] = useState("")
const [searchName, setSearchName] = useState("") 

const [erro, setErro] = useState(false)

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
        <section className={style.wrapPage}>
            <h1 className={style.titlename}>Rick and Morty API</h1>
            <input type="text" placeholder='Digite uma página (1/42)' value={page} onChange={(e) => setPage(e.target.value)}/>
            {erro && <p>Página não encontrada</p>}

            <input type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
            <div className={style.wrapCard}>
            {data.map((item, index) => {
                return(
                    <div key={index}>
                        <Card name={item.name} image={item.image}/>
                    </div>
                    
                )
        })}
        </div>
        </section>
        
    )
}