import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { APP_SIZE, PRIMARY } from '../../../utils/style/variables';

const Main = styled.main`
  min-height: ${APP_SIZE.main};
  background: ${PRIMARY.background};
`;

const propTypes = {
  children: PropTypes.node.isRequired,
};

const AppMain = ({ children }) => (
  <Main>
    {children}
  </Main>
);

AppMain.propTypes = propTypes;

export default AppMain;
