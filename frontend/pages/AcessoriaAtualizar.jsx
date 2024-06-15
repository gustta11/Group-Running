import './AcessoriaAtualizar.css'

import {useState} from 'react'


const AcessoriaAtualizar =()=>{

  const[NovosValores, setNovosValores] = useState({
    id_acessoria:'',
    nome_acessoria:'',
    contato_acessoria:'',
    finalidade_acessoria:'',
    cidade_acessoria:'',
    estado_acessoria:'',
    valor_acessoria:''
  })

    const handleChange = (e)=>{
      const{name,value} = e.target
      setNovosValores(prevState =>({...prevState, [name]:value}))
    }

    const handleSubmit = async (e)=>{
      e.preventDefault()

      try{
          console.log('Dados a serem enviados:',NovosValores)
          const response = await fetch(`http://localhost:3000/acessoria/${NovosValores.id_acessoria}`, {
              method:'PUT',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(NovosValores)
          
              

          })
          const json = await response.json()
          console.log(response)
          console.log(json)
      }catch (err){
          console.error("Erro ao enviar", err)
      }
  }


    return (
      <div className="layout-geral-acessoria">
        <div className="header-form-acessoria">
      
        </div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="id_acessoria"
            value={NovosValores.id_acessoria}
            placeholder="ID"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="nome_acessoria"
            value={NovosValores.nome_acessoria}
            placeholder="NOME"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="contato_acessoria"
            value={NovosValores.contato_acessoria}
            placeholder="CONTATO"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="finalidade_acessoria"
            value={NovosValores.finalidade_acessoria}
            placeholder="FINALIDADE"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="cidade_acessoria"
            value={NovosValores.cidade_acessoria}
            placeholder="CIDADE"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="estado_acessoria"
            value={NovosValores.estado_acessoria}
            placeholder="ESTADO"
            onChange={handleChange}
            className="inputs"
          />
            <input
            type="text"
            name="valor_acessoria"
            value={NovosValores.valor_acessoria}
            placeholder="VALOR"
            onChange={handleChange}
            className="inputs"
          />
          <button  type='submit' className="botao">Cadastrar</button>
        </form>
        <div className="footer-form-acessoria">
      
        </div>
      </div>
    );
}

export default AcessoriaAtualizar;