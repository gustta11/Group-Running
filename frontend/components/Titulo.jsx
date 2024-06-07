import './Titulo.css'
import {Link} from 'react-router-dom'

const Titulo =()=>{
    
    
    return(
        <div className='layout-geral-titulo'>
            <Link to='/'>
                <h1>Running Group</h1>
            </Link>
        </div>
    )
}

export default Titulo