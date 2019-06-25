import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import {routes} from './routes'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route)=> <Route key={route.name} {...route} />)}
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
