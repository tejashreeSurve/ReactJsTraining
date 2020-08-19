import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginContainer from "../Container/LoginContainer";
import DashBoardContainer from "../Container/DashBoardContainer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <LoginContainer />
        </Route>
        <Route path="/dashboard">
          <DashBoardContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
