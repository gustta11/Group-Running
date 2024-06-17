import './AcessoriaAtualizar.css'
import './Grupo.css'
import {useState} from 'react'
import { useForm } from "react-hook-form" 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'


const tellValidacao = /^\(\d{2}\) \d{5}-\d{4}$|^\d{11}$/;

const schema = yup.object().shape({
    id_acessoria:yup.number().positive('Digite um número positivo').integer().required('Campo obrigatório'),
    nome_acessoria: yup.string().required('Nome é obrigatório').min(3,'Deve ter no mínimo 3 caracteres'),
    contato_acessoria: yup.string('Digite um número válido').required('Campo obrigatório').matches(tellValidacao,'Formato inválido de número'),
    finalidade_acessoria: yup.string().required('Finalidade é obrigatória'),
    cidade_acessoria: yup.string().required("Cidade é obrigatória"),
    estado_acessoria: yup.string().required("Estado é obrigatório"),
    valor_acessoria: yup.number('Digite um número').positive('Digite um valor positivo').required("Valor é obrigatório")

})



const AcessoriaAtualizar =()=>{

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
          const response = await fetch('http://localhost:3000/acessoria', {
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(data)

          })
          
          if(response.ok){
            setMensagem('Dados atualizados com sucesso!')
            reset()
          }else{
            setMensagem('Erro ao atualizar os dados')
          }
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
            type="text"
            placeholder="ID"
            {...register('id_acessoria')}
            className="inputs"
          />
          {errors.id_acessoria && <span className='error'>{errors.id_acessoria.message}</span>}
          <input
            type="text"
            placeholder="NOME"
            {...register('nome_acessoria')}
            className="inputs"
          />
          {errors.nome_acessoria && <span className='error'>{errors.nome_acessoria.message}</span>}
          <input
            type="text"
            {...register('contato_acessoria')}
            placeholder="CONTATO"
            className="inputs"
          />
          {errors.contato_acessoria && <span className='error'>{errors.contato_acessoria.message}</span>}
          <input
            type="text"
            placeholder="FINALIDADE"
            {...register('finalidade_acessoria')}
            className="inputs"
          />
          {errors.finalidade_acessoria && <span className='error'>{errors.finalidade_acessoria.message}</span>}
          <input
            type="text"
            {...register('cidade_acessoria')}
            placeholder="CIDADE"
            className="inputs"
          />
          {errors.cidade_acessoria && <span className='error'>{errors.cidade_acessoria.message}</span>}
          <input
            type="text"
            {...register('estado_acessoria')}
            placeholder="ESTADO"
            className="inputs"
          />
          {errors.estado_acessoria && <span className='error'>{errors.estado_acessoria.message}</span>}
          <input
            type="text"
            {...register('valor_acessoria')}
            placeholder="VALOR"
            className="inputs"
          />
          {errors.valor_acessoria && <span className='error'>{errors.valor_acessoria.message}</span>}
          <button type='submit' className="botao">Cadastrar</button>
          {mensagemDeSucesso && <p className='mensagemSucesso'>{mensagemDeSucesso}</p>}
        </form>
        <div className="footer-form-acessoria">
  
        </div>
      </div>
    );
}

export default AcessoriaAtualizar;