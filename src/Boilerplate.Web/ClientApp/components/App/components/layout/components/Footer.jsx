import React from 'react';
import styled from 'styled-components';

import { APP_SIZE, PRIMARY, SECONDARY } from '../../../utils/style/variables';

const Footer = styled.footer`
  height: ${APP_SIZE.footer};
  background: ${SECONDARY.background};
  border-top: 1px solid ${PRIMARY.colour};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  color: ${PRIMARY.colour};
`;

const AppFooter = () => (
  <Footer>
    <Link href="https://github.com/smiosoft/react-core-boilerplate">View Project Source</Link>
  </Footer>
);


export default AppFooter;
