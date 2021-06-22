import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Products, Cart, Footer } from "./components";
import history from "./history";

const product = [
  {
    userId: 1,
    id: 1,
    name: "Дуб",
    description: "Дубовая",
    price: 500,
  },
  {
    userId: 2,
    id: 2,
    name: "Береза",
    description: "Березовая",
    price: 1500,
  },
  {
    userId: 3,
    id: 3,
    name: "Ламинат",
    description: "Ламинатная",
    price: 2000,
  },
  {
    userId: 4,
    id: 4,
    name: "Ленолеум",
    description: "Ленолеумовая",
    price: 1200,
  },
  {
    userId: 5,
    id: 5,
    name: "Дерево",
    description: "Деревяная",
    price: 1000,
  },
];

const App = () => {
  return (
    <>
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products">
              <Products products={product} />
            </Route>
            <Route exact path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
