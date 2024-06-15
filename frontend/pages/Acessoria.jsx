import './Acessoria.css'
import './Grupo.css'
import {useState} from 'react'

const Acessoria =()=>{

  const[valores, setValores] = useState({
    nome_acessoria:'',
    contato_acessoria:'',
    finalidade_acessoria:'',
    cidade_acessoria:'',
    estado_acessoria:'',
    valor_acessoria:''
  })

    const handleChange = (e)=>{
      const{name,value} = e.target
      setValores(prevState =>({...prevState, [name]:value}))
    }

    const handleSubmit = async (e)=>{
      e.preventDefault()

      try{
          console.log('Dados a serem enviados:',valores)
          const response = await fetch('http://localhost:3000/acessoria', {
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(valores)

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
            name="nome_acessoria"
            value={valores.nome_acessoria}
            placeholder="NOME"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="contato_acessoria"
            value={valores.contato_acessoria}
            placeholder="CONTATO"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="finalidade_acessoria"
            value={valores.finalidade_acessoria}
            placeholder="FINALIDADE"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="cidade_acessoria"
            value={valores.cidade_acessoria}
            placeholder="CIDADE"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="estado_acessoria"
            value={valores.estado_acessoria}
            placeholder="ESTADO"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="valor_acessoria"
            value={valores.valor_acessoria}
            placeholder="VALOR"
            onChange={handleChange}
            className="inputs"
          />
          <button type='submit' className="botao">Cadastrar</button>
        </form>
        <div className="footer-form-acessoria">
  
        </div>
      </div>
    );
}

export default Acessoria;