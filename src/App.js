import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContainer from "./Container/LoginContainer";
import DashBoardContainer from "./Container/DashBoardContainer";

function App() {
  return (
    <div className="App">
      {/* <Pratic></Pratic>
      <ProductList></ProductList> */}
      <LoginContainer />
      {/* <DashBoardContainer /> */}
    </div>
  );
}

export default App;
