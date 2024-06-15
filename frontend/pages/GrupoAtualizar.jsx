import './GrupoAtualizar.css'
import {useState} from 'react'


const GrupoAtualizar =()=>{

  const[NovosValores, setNovosValores] = useState({
    id_grupo:'',
    nome_grupo:'',
    contato_grupo:'',
    finalidade_grupo:'',
    cidade_grupo:'',
    estado_grupo:'',
  })

    const handleChange = (e)=>{
      const{name,value} = e.target
      setNovosValores(prevState =>({...prevState, [name]:value}))
    }

    const handleSubmit = async (e)=>{
      e.preventDefault()

      try{
          console.log('Dados a serem enviados:',NovosValores)
          const response = await fetch(`http://localhost:3000/grupo/${NovosValores.id_grupo}`, {
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
      <div className="layout-geral-grupo">
        <div className="header-form-grupo">
      
        </div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="id_grupo"
            value={NovosValores.id_grupo}
            placeholder="ID"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="nome_grupo"
            value={NovosValores.nome_grupo}
            placeholder="NOME"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="contato_grupo"
            value={NovosValores.contato_grupo}
            placeholder="CONTATO"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="finalidade_grupo"
            value={NovosValores.finalidade_grupo}
            placeholder="FINALIDADE"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="cidade_grupo"
            value={NovosValores.cidade_grupo}
            placeholder="CIDADE"
            onChange={handleChange}
            className="inputs"
          />
          <input
            type="text"
            name="estado_grupo"
            value={NovosValores.estado_grupo}
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

export default GrupoAtualizar;