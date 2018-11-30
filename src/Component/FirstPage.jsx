import React, { Component } from "react";
import PropTypes from "prop-types";

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codePackage: ""
    };
  }

  handleCodeChange = e => {
    this.setState({
      codePackage: e.target.value
    });
  };

  handleSearchPackage = () => {
    this.props.handleSearch(this.state.codePackage);
  };
  
  render() {
    return (
      <div className="container">
        <h1 className="title">Rastreo de paquetes</h1>
        <p className="sub-title">
          ¿Necesitas el estado de tu paquete o una prueba de que fue enviado?
          Ingresa el código o numero de tu paquete abajo
        </p>
        <div>
          <div className="label-input">
            Ingrese el código o numero del paquete:
          </div>
          <input
            className="input-code"
            type="text"
            value={this.state.codePackage}
            onChange={this.handleCodeChange}
          />
          <button className="button-search" onClick={this.handleSearchPackage}>
            Buscar
          </button>
        </div>
      </div>
    );
  }
}

FirstPage.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default FirstPage;
