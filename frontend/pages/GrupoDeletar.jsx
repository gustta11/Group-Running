import './GrupoDeletar.css'
import {useState} from 'react'

const GrupoDeletar = () =>{


    const [NovosValores, setNovosValores] = useState({
        id_grupo:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
            setNovosValores(prevState =>({...prevState, [name]:value}))

    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        

        try{
            
            const response = await fetch(`http://localhost:3000/grupo/${NovosValores.id_grupo}`, {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(NovosValores)
                
            })
            
            const json = await response.json()
            console.log(response)
            console.log(json)
             return
        }catch (err){
            console.error("Erro ao enviar", err)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        
        <label >ID:</label>
        <input type="number" name='id_grupo' value={NovosValores.id_grupo} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
       
       <button onClick={handleSubmit}>Inativar</button>
        </form>
    )
    
}

export default GrupoDeletar;