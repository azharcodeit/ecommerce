import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Products, Cart } from './components';
import Homepage from './pages/Homepage';
import products from './mocks/MockProducts';
import MainpageLayout from './layouts/MainpageLayout';

const App = () => {
  // const [cartItems, setCartItems] = useState(0);
  // т.к. переместил Navbar в HomePageLayout && MainLayout, можно передать onAdd коллбэк как props в HomePageLayout && MainLayout
  const onAdd = products => {
    // setCartItems(prevState => prevState + 1);
  };
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainpageLayout>
              <Homepage />
            </MainpageLayout>
          )}
        />
        <Route
          exact
          path="/products"
          render={() => (
            <MainpageLayout>
              <Products products={products} onAdd={onAdd} />
            </MainpageLayout>
          )}
        />
        <Route
          exact
          path="/cart"
          render={() => (
            <MainpageLayout>
              <Cart />
            </MainpageLayout>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
