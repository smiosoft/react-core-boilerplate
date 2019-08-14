import React from 'react';
import styled from 'styled-components';

import { APP_SIZE, PRIMARY, SECONDARY } from '../../utils/style/variables';
import types from '../../types';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Wrapper = styled.header`
  height: ${APP_SIZE.header};
  background-color: ${SECONDARY.background};
  border-bottom: 1px solid ${PRIMARY.colour};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Header = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
