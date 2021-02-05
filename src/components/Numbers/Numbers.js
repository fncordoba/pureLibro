// Dependencias
import React, { Component } from 'react';

// Componentes
import Result from './Result';

// Estilos
import './Numbers.css';

class Numbers extends Component {
  state = {
    numbers: '', // Aquí guardaremos el valor de la entrada
    results: []  // En este estado guardaremos los resultados de las sumas
  };

  handleNumberChange = e => {
    const { target: { value } } = e;

    // Convertimos el valor cadena al valor matriz
    // "12345" => ["1", "2", "3", "4", "5"]
    const numbers = Array.from(value);

    // Summamos todos los numeros de la matriz
    // ["1", "2", "3", "4", "5"] => 15
    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    // Actualizamos el estado local
    this.setState({
      numbers: value,
      results: [...this.state.results, result]
    });
  }

  render() {
    return (
      <div className="Numbers">
        <input
          type="number"
          value={this.state.numbers}
          onChange={this.handleNumberChange}
          placeholder="Write numbers here..."
        />

        {/* Renderiación de la matriz resultante */}
        <ul>
          {this.state.results.map((result, i) => (
            <Result key={i} result={result} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Numbers;
