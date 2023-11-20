import React, { Component } from 'react'
import './vehiculos.css';

export default class Vehiculos extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      vehiculos:[
        {id:1, marca:'Toyota', tipo:'SUV', costo:'350Bs.'},
        {id:2 , marca:'Toyota', tipo:'Sedan', costo:'200 Bs.'},
        {id:3 , marca:'Honda', tipo:'Deportivo', costo:'400Bs.'},
        {id:4 , marca:'Honda', tipo:'SUV', costo:'350Bs.'},
        {id:5 , marca:'Suzuki', tipo:'SUV', costo:'350Bs.'},
        {id:6 , marca:'Suzuki', tipo:'Sedan', costo:'200Bs.'},
        {id:7 , marca:'Mitsubishi', tipo:'Deportivo', costo:'400Bs.'},
        {id:8, marca:'Audi', tipo:'Lujo', costo:'700Bs.'},
        {id:9 , marca:'Nissan', tipo:'Sedan', costo:'200Bs.'},
        {id:10 , marca:'Nissan', tipo:'SUV', costo:'350Bs.'},
        {id:11 , marca:'JEEP', tipo:'Todo Terreno', costo:'500 Bs.'},
        {id:12 , marca:'JEEP', tipo:'Todo Terreno', costo:'500 Bs.'},
      ],
    };
  }

  render() {
    return (
      <div class="vehiculos">
          <div class="contenedor-vehiculos">
            {this.state.vehiculos.map(vehiculo => (
                <div key={vehiculo.id} className="card">
                <div className="textos">
                  <h3>Datos del vehículo</h3>
                  <p>Marca: {vehiculo.marca}</p>
                  <p>Tipo: {vehiculo.tipo}</p>
                  <p>Costo: {vehiculo.costo}</p>
                </div>
              </div>
            ))}
          </div>

          <div class="ml-auto">
              <button id="btn4" className="btn4 btn-primary" type="">Siguiente</button>
          </div>
      </div>
    )
  }
}


