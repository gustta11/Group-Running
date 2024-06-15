import './Grupo.css'
import {useState} from 'react'


const Grupo =()=>{

  const[valores, setValores] = useState({
    nome_grupo:'',
    contato_grupo:'',
    finalidade_grupo:'',
    cidade_grupo:'',
    estado_grupo:'',
  })

    const handleChange = (e)=>{
      const{name,value} = e.target
      setValores(prevState =>({...prevState, [name]:value}))
    }

    const handleSubmit = async (e)=>{
      e.preventDefault()

      try{
          console.log('Dados a serem enviados:',valores)
          const response = await fetch('http://localhost:3000/grupo', {
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
      <div className="layout-geral-grupo">
        <div className="header-form-grupo">
      
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome_grupo"
            value={valores.nome_grupo}
            placeholder="NOME"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="contato_grupo"
            value={valores.contato_grupo}
            placeholder="CONTATO"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="finalidade_grupo"
            value={valores.finalidade_grupo}
            placeholder="FINALIDADE"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="cidade_grupo"
            value={valores.cidade_grupo}
            placeholder="CIDADE"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="estado_grupo"
            value={valores.estado_grupo}
            placeholder="ESTADO"
            onChange={handleChange}
            className="inputs"
          />
          <button  type='submit' className="botao">Cadastrar</button>
        </form>
        <div className="footer-form-group">
      
        </div>
      </div>
    );
}

export default Grupo;