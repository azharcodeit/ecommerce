import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Products, Cart } from "./components";
import history from "./history";

const App = () => {
  return (
    <>
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
