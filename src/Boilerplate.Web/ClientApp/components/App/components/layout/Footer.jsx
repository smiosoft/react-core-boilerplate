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

const Wrapper = styled.footer`
  height: ${APP_SIZE.footer};
  background-color: ${SECONDARY.background};
  border-top: 1px solid ${PRIMARY.colour};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
