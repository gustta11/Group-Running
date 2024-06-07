import './Grupo.css'


const Grupo =()=>{
    return(
        <div className='layout-geral-grupo'>
            <div className='header-form-grupo'>

            </div>
            <form >
                <input type="text" name='nome' placeholder='NOME' className='inputs'/>
                <input type="text" name='contato' placeholder='CONTATO' className='inputs'/>
                <input type="text" name='finalidade'  placeholder='FINALIDADE' className='inputs'/>
                <input type="text" name='cidade'  placeholder='CIDADE' className='inputs'/>
                <input type="text" name='estado'  placeholder='ESTADO' className='inputs'/>

            </form>
            <div className='footer-form-group'>

            </div>
        </div>
    )
}

export default Grupo;