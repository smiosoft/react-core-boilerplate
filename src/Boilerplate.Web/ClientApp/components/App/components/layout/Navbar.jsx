import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PRIMARY } from '../../utils/style/variables';

const Wrapper = styled.nav`
  margin: auto auto .6rem auto;
`;

const Link = styled(NavLink)`
    padding: .5rem 2rem;
    border: 1px solid transparent;
    text-decoration: none;
    color: ${PRIMARY.colour};

    &.active {
    background: ${PRIMARY.background};
    border-color: ${PRIMARY.colour} ${PRIMARY.colour} transparent;
    border-radius: 3px 3px 0 0;
  }
`;

const Navbar = () => (
  <Wrapper>
    <Link exact to="/">Home</Link>
    <Link exact to="/counter">Counter</Link>
  </Wrapper>
);

export default Navbar;
