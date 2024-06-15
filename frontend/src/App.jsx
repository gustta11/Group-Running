import './App.css'
import Titulo from './../components/Titulo';
import Footer from './../components/Footer';
import Navegacao from './../components/Navegacao';
import{ BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Grupo from './../pages/Grupo';
import Acessoria from '../pages/Acessoria';
import Home from '../pages/Home';
import NavegacaoConsulta from './../components/NavegacaoConsulta';
import NavegacaoAtualizar from './../components/NavegacaoAtualizar';
import NavegacaoDeletar from './../components/NavegacaoDeletar';
import GrupoAtualizar from './../pages/GrupoAtualizar';
import GrupoConsulta from './../pages/GrupoConsulta';
import GrupoDeletar from './../pages/GrupoDeletar';
import AcessoriaAtualizar from './../pages/AcessoriaAtualizar';
import AcessoriaConsulta from './../pages/AcessoriaConsulta';
import AcessoriaDeletar from './../pages/AcessoriaDeletar';


function App() {

  return (
    <Router>
      <div className='layout-grid'>
        <header>
            <Titulo/>
        </header>

        <main>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Cadastro' element={<Navegacao/>}/>
            <Route path='/Consulta' element={<NavegacaoConsulta/>}/>
            <Route path='/Atualizar' element={<NavegacaoAtualizar/>}/>
            <Route path='/Deletar' element={<NavegacaoDeletar/>}/>
            <Route path='/GrupoAtualizar' element={<GrupoAtualizar/>}/>
            <Route path='/AcessoriaAtualizar' element={<AcessoriaAtualizar/>}/>
            <Route path='/GrupoConsulta' element={<GrupoConsulta/>}/>
            <Route path='/AcessoriaConsulta' element={<AcessoriaConsulta/>}/>
            <Route path='/GrupoDeletar' element={<GrupoDeletar/>}/>
            <Route path='/AcessoriaDeletar' element={<AcessoriaDeletar/>}/>
            <Route path='/Grupo' element={<Grupo/>}/>
            <Route path='/Acessoria' element={<Acessoria/>}/>
           </Routes>
        </main>

        <footer>
            <Footer/>
        </footer>
      </div>
      </Router>
  )
}

export default App
