import './App.css'
import Titulo from './../components/Titulo';
import Footer from './../components/Footer';
import Navegacao from './../components/Navegacao';
import{ BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Grupo from './../pages/Grupo';


function App() {

  return (
    <Router>
      <div className='layout-grid'>
        <header>
            <Titulo/>
        </header>

        <main>
            <Routes>
            <Route path='/' element={<Navegacao/>}/>
            <Route path='/Grupo' element={<Grupo/>}/>
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
