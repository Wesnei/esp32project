import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EstilosGlobais from './componentes/estilosGlobais'; 
import Dashboard from './paginas/Dashboard';
import Notificacoes from './paginas/Notificacoes';
import Config from './paginas/Config';
import Menu from './componentes/Menu';
import Banner from './componentes/Banner';
import Bemvindo from './paginas/Bemvindo';
import Footer from './componentes/Footer';

function App() {
  return (
    <Router>
      <EstilosGlobais /> 
      <Menu />
      <Routes>
        <Route path='/' element={<div><Banner /><Bemvindo /><Footer/></div>} />
        <Route path='/dashboard' element={<div><Dashboard /></div>} />
        <Route path='/notificacoes' element={<div><Notificacoes /></div>} />
        <Route path='/config' element={<div><Config /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
