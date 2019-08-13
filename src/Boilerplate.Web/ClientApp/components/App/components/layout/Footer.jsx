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

const Wrapper = styled.footer`
  height: ${APP_SIZE.footer};
  background-color: ${PRIMARY.background};
`;

const Footer = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
