import React, { Component } from "react";

class Envio extends Component {
  render() {
    if (this.props.costoEnvio === "G") {
      return (
        <div className="envioG">
          <img src={require(`../assets/images/camion.png`)}></img>Envio Gratis a
          todo el país
        </div>
      );
    } else {
      return (
        <div className="envio">
          Costo de Envio al interior de la república Argentina: ${this.props.costoEnvio}
        </div>
      );
    }
  }
}

export default Envio;
