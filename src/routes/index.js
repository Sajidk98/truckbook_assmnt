import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "../pages/Details";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default Routes;
