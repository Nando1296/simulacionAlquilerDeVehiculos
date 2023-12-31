import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//Components
import Navbar from './components/Navbar'
//pages
import Costos from './pages/costos'
import Dias from './pages/dias'
import Renta from './pages/renta'
import Vehiculos from './pages/vehiculos'
import Inicio from './pages/inicio'
import Simular from './pages/simular'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/Costos" exact Component={Costos}></Route>
      <Route path="/Dias" exact Component={Dias}></Route>
      <Route path="/Renta" exact Component={Renta}></Route>
      <Route path="/Vehiculos" exact Component={Vehiculos}></Route>
      <Route path="/Inicio" exact Component={Inicio}></Route>
      <Route path="/Simular" exact Component={Simular}></Route>
      </Routes>
    </Router>
  );
}

export default App;
