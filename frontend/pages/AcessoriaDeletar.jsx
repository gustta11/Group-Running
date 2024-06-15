import './AcessoriaDeletar.css'
import {useState} from 'react'


const AcessoriaDeletar = () =>{


    const [NovosValores, setNovosValores] = useState({
        id_acessoria:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
            setNovosValores(prevState =>({...prevState, [name]:value}))

    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        

        try{
            
            const response = await fetch(`http://localhost:3000/acessoria/${NovosValores.id_acessoria}`, {
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
        <input type="number" name='id_acessoria' value={NovosValores.id_acessoria} placeholder="Digite aqui" onChange={handleChange} className='inputs'/>
       
       <button onClick={handleSubmit}>Inativar</button>
        </form>
    )
    
}

export default AcessoriaDeletar;