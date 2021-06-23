import React, { Component, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Будет удалены компоненты, после создания в pages
import { Products, Cart } from './components';

import MainpageLayout from './layouts/MainpageLayout';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';

import products from './mocks/MockProducts';
import { auth, handleUserProfile } from './firebase/utils';

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({ ...initialState });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    // const [cartItems, setCartItems] = useState(0);
    // т.к. переместил Navbar в HomePageLayout && MainLayout, можно передать onAdd коллбэк как props в HomePageLayout && MainLayout
    let onAdd = products => {
      // setCartItems(prevState => prevState + 1);
    };

    const { currentUser } = this.state;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              // later  will be changed to redux state management
              <MainpageLayout currentUser={currentUser}>
                <Homepage />
              </MainpageLayout>
            )}
          />
          <Route
            exact
            path="/products"
            render={() => (
              <MainpageLayout currentUser={currentUser}>
                <Products products={products} onAdd={onAdd} />
              </MainpageLayout>
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <MainpageLayout currentUser={currentUser}>
                <Cart />
              </MainpageLayout>
            )}
          />
          <Route
            exact
            path="/login"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainpageLayout currentUser={currentUser}>
                  <Login />
                </MainpageLayout>
              )
            }
          />
          <Route
            exact
            path="/registration"
            render={() => (
              <MainpageLayout currentUser={currentUser}>
                <Registration />
              </MainpageLayout>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
