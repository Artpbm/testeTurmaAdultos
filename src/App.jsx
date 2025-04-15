
// import style from './App.module.css'
import { Menu } from './components/menu'
import img01 from './assets/images/gg.jpg'
import  { cards } from './assets/mock/cards'
import { useState } from 'react'

function App() {
  const defaultPhoneNumber = "5441999999999"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const hadleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})

  }

  const handleZap = () => {
    const {name, email, message} = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlZAPZAP, "_blank")
  }

  return (
    <>
      <Menu option01='Sessão 01' option02='Sessão 02' option03='Contato' option04='Calculadora' option05='Média' option06='IMC' option07='Requisicao'></Menu>
      <main>
        <section id='s1'>
          <h2>sessao 1</h2>
          {/* <img src={img01} alt="O avião preto no sol" width={200} height={"auto"}/> */}
          {cards.map((item, index) => {
            return(
              <div key={index}>
                <h5>{item.text}</h5>
                <p>{item.maiscoisa}</p>
                <img src={item.img} alt={item.text} width={200} height={"auto"} />
              </div>
            )
          }
          
          )}
        </section >  
        <section id='s2'>
          <h2>contato</h2>
          <br />
          <input placeholder='Insira seus nome'  type="text" id='name' name='name' value={formData.name} onChange={hadleChange} required  />
          <input placeholder='Insira seu E-mail' type="text" id='email' name='email' value={formData.email} onChange={hadleChange} required/>
          <textarea placeholder='Insira sua mensagem' type="text" id='message' name='message' value={formData.message} onChange={hadleChange} cols={30} rows={10} required></textarea>
          <button onClick={handleZap}>Enviar Mensagem</button>
        </section>
        <section id='s3'>
          <h2>sessao 3</h2>
        </section>
      </main>
    </>
  )
}

export default App
