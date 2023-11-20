import React, { Component } from 'react'
import '../assets/stylestabla.css'

export default class Renta extends Component {
  render() {
    return (
      <div>

        <div class="container">

          <div class="form-content">
            <h1>RENTA</h1>
            
              <form>

                  <h3>Auto:</h3>
                  <div class="input-field">
                    <input type="number" placeholder="Tipo de auto" id="Auto" name="Auto"
                    required></input>
                  </div>
                  <h3>Pago del alquiler de un auto por día:</h3>
                  <div class="input-field">
                    <input type="number" placeholder="Costo alquiler" id="Alquiler" name="Alquiler"
                    required></input>
                  </div>
                  <div class="btn-field">
                    <button id="siguiente" type="button">Siguiente </button>  
                  </div>

                </form>

          </div>

        </div>
      </div>
    )
  }
}
