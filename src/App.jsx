import React from "react";
import { Switch, Route } from "react-router-dom";

import { NavBar, NavLink } from "./components";
import { NotFound, Home } from "./pages";

const App = () => (
  <div>
    <NavBar>
      <NavLink to="/">Home</NavLink>
    </NavBar>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
