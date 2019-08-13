import React from 'react';
import styled from 'styled-components';

import { APP_SIZE, PRIMARY } from '../../utils/style/variables';
import types from '../../types';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Wrapper = styled.header`
  height: ${APP_SIZE.header};
  background-color: ${PRIMARY.background};
`;

const Header = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
