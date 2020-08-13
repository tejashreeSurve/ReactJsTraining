import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pratic from "./Pratic";
import Greet from "./Greet";
import ProductList from "./ProductList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Pratic></Pratic>
      <Greet name="Tejashree" />
      <ProductList></ProductList>
    </div>
  );
}

export default App;
