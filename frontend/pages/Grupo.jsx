import './Grupo.css'
import {useState} from 'react'
import { useForm } from "react-hook-form" 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const tellValidacao = /^\(\d{2}\) \d{5}-\d{4}$|^\d{11}$/;


const schema = yup.object().shape({
  nome_grupo:yup.string().required('Campo obrigatório').min(3,'Deve ter no mínimo 3 caracteres'),
  contato_grupo:yup.string().required('Campo obrigatório').matches(tellValidacao, 'Formato de número inválido'),
  finalidade_grupo:yup.string().required('Campo obrigatório'),
  cidade_grupo:yup.string().required('Campo obrigatório'),
  estado_grupo:yup.string().required('Campo obrigatório')
})



const Grupo =()=>{


  const [mensagemDeSucesso, setMensagem] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({resolver:yupResolver(schema)})


    const onSubmit = async (data)=>{


    
      

      try{
          console.log('Dados a serem enviados:',data)
          const response = await fetch('http://localhost:3000/grupo', {
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
          
              

          })
          if (response.ok){
            setMensagem('Dados cadastrados com sucesso')
            reset()
          }else{
            setMensagem('Erro ao enviar dados.')
          }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="NOME"
            {...register('nome_grupo')}
            className="inputs"
          />
          {errors.nome_grupo && <span className='error'>{errors.nome_grupo.message}</span>}
          <input
            type="text"
            name="contato_grupo"
            {...register('contato_grupo')}
            placeholder="CONTATO"
            className="inputs"
          />
          {errors.contato_grupo && <span className='error'>{errors.contato_grupo.message}</span>}
          <input
            type="text"
            {...register('finalidade_grupo')}
            placeholder="FINALIDADE"
            className="inputs"
          />
          {errors.finalidade_grupo && <span className='error'>{errors.finalidade_grupo.message}</span>}
          <input
            type="text"
            {...register('cidade_grupo')}
            placeholder="CIDADE"
            className="inputs"
          />
          {errors.cidade_grupo && <span className='error'>{errors.cidade_grupo.message}</span>}
          <input
            type="text"
            {...register('estado_grupo')}
            placeholder="ESTADO"
            className="inputs"
          />
          {errors.estado_grupo && <span className='error'>{errors.estado_grupo.message}</span>}
          <button  type='submit' className="botao">Cadastrar</button>
          {mensagemDeSucesso && <p className='mensagemSucesso'>{mensagemDeSucesso}</p>}
        </form>
        <div className="footer-form-group">
       

        </div>
      </div>
    );
}

export default Grupo;