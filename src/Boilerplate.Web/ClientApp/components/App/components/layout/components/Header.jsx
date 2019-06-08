import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { APP_SIZE, PRIMARY } from '../../../utils/style/variables';
import media from '../../../utils/style/media';

const Header = styled.header`
  height: ${APP_SIZE.header};
  background: ${PRIMARY.background};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  ${media.medium`
    flex-direction: column;
  `}
`;

const AppHeader = () => (
  <Header>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/some-page">Some Page</NavLink>
    </Nav>
  </Header>
);

export default AppHeader;
