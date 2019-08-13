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

const Wrapper = styled.main`
  height: ${APP_SIZE.main};
  background-color: ${PRIMARY.background};
`;

const Main = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
