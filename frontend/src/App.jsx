import './App.css'
import Titulo from './../components/Titulo';
import Footer from './../components/Footer';
import Navegacao from './../components/Navegacao';
import{ BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Grupo from './../pages/Grupo';
import Acessoria from '../pages/Acessoria';
import Home from '../pages/Home';


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
