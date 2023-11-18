import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//Components
import Sidebar from './components/sidebar';
import Costos from './components/costos'
import Dias from './components/dias'
import Renta from './components/renta'
import Vehiculos from './components/vehiculos'

function App() {
  return (
    <Router>
        <Sidebar/>
        <Route path="/inicio"></Route>
        <Route exact path="/inicio/costos" component={Costos}></Route>
        <Route exact path="/inicio/dias" component={Dias}></Route>
        <Route exact path="/inicio/renta" component={Renta}></Route>
        <Route exact path="/inicio/vehiculos" component={Vehiculos}></Route>
      
    </Router>
  );
}

export default App;
