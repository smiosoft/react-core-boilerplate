import React from 'react';

import Styles from './Navbar.styles';

function Navbar() {
  return (
    <Styles.Wrapper>
      <Styles.Link to="/">HOME</Styles.Link>
      <Styles.Link to="/counter">COUNTER</Styles.Link>
    </Styles.Wrapper>
  );
}

export default Navbar;
