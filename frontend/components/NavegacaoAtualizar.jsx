import "./Navegacao.css";
import {Link} from 'react-router-dom'



const NavegacaoAtualizar = () => {
    return (
      <div className="layout-geral-navegacao">
        <div className="layout-titulo-navegacao-cadastro">
          <h3>Atualizar</h3>
        </div>
  
        <div className="layout-links-navegacao-cadastro">
          <div className="layout-header-navegacao">
            
          </div>
          <div className="layout-botoes-navegacao">
            <Link to='/GrupoAtualizar'><button className="botao-grupo">GRUPO</button></Link>
            <Link to='/AcessoriaAtualizar'><button className="botao-grupo">ACESSORIA</button></Link>
          </div>
          <div className="layout-footer-navegacao">
           
          </div>
        </div>
      </div>
    );
  };
  
  export default NavegacaoAtualizar;