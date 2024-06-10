import './Home.css'
import {Link} from 'react-router-dom'

const Home = () =>{

    return(

        <div className='layout-geral-home'>
            <div className='layout-nav-home'>
                <Link to='/Cadastro'><button className='botaos'>Cadastrar</button></Link>
                <Link to='/Consulta'><button className='botaos'>Consultar</button></Link>
                <Link to='/Atualizar'><button className='botaos'>Atualizar</button></Link>
                <Link to='/Deletar'><button className='botaos'>Deletar</button></Link>
            </div>
        </div>



    )
}

export default Home

