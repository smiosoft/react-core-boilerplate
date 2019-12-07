import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PRIMARY, SECONDARY } from '../../utils/style/colours';

const Wrapper = styled.nav`
  padding-top: .5rem;
  background: ${SECONDARY.background};
  border-bottom: 1px solid ${PRIMARY.highlight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const Link = styled(NavLink)`
  padding: .5rem 2rem;
  margin-bottom: -1px;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 5px solid transparent;
  border-bottom: 1px solid transparent;
  border-radius: .2rem .2rem 0 0;
  text-decoration: none;
  color: ${PRIMARY.colour};

  &:hover {
    color: ${PRIMARY.highlight};
  }

  &.active {
    background: ${PRIMARY.background};
    border-color: ${PRIMARY.highlight} ${PRIMARY.highlight} ${PRIMARY.background};
  }
`;

const Navbar = () => (
  <Wrapper>
    <Link exact to="/">HOME</Link>
    <Link exact to="/counter">COUNTER</Link>
  </Wrapper>
);

export default Navbar;
