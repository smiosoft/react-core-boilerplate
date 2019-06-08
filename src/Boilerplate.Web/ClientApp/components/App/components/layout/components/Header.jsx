import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { APP_SIZE, PRIMARY, SECONDARY } from '../../../utils/style/variables';

const Header = styled.header`
  height: ${APP_SIZE.header};
  background: ${SECONDARY.background};
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid ${PRIMARY.colour};
`;

const Nav = styled.nav`
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

const AppHeader = () => (
  <Header>
    <h1>React Core Boilerplate</h1>
    <Nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
    </Nav>
  </Header>
);

export default AppHeader;
