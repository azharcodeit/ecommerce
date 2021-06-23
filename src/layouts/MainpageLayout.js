import React from 'react';
import { Navbar, Footer } from '../components';

const MainpageLayout = props => {
  return (
    <div>
      <Navbar {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainpageLayout;
