import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PRIMARY } from '../../utils/style/variables';

const Wrapper = styled.nav`
  margin: auto auto .35rem auto;

  a {
    padding: .25rem 1rem;
    border: 1px solid transparent;
    text-decoration: none;
    color: ${PRIMARY.colour};
  }

  .active {
    background: ${PRIMARY.background};
    border-color: ${PRIMARY.colour} ${PRIMARY.colour} transparent;
    border-radius: 3px 3px 0 0;
  }
`;

const Navbar = () => (
  <Wrapper>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/counter">Counter</NavLink>
  </Wrapper>
);

export default Navbar;
