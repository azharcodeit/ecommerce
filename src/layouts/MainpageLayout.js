import React from 'react';
import { Navbar, Footer } from '../components';

const MainpageLayout = props => {
  return (
    <div>
      <Navbar totalItems={/*cartItems*/ 1} />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainpageLayout;
