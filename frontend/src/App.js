
/*import './App.css';*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
