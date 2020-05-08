import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import DetalleProducto from "./components/DetalleProducto";
import Direccion from "./components/Direccion";
import Productos from "./components/Productos";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/direccion" component={Direccion}></Route>
        <Route path="/productos" component={Productos}></Route>
        <Route path="/detalleProducto/:id" component={DetalleProducto}></Route>
        <Route exact path="/*" component={Home}></Route>
      </Switch>
    );
  }
}

export default App;
