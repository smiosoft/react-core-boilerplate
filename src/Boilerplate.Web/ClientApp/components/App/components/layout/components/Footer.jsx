import React from 'react';
import styled from 'styled-components';

import { APP_SIZE, PRIMARY } from '../../../utils/style/variables';

const Footer = styled.footer`
  height: ${APP_SIZE.footer};
  background: ${PRIMARY.background};
`;

const AppFooter = () => (
  <Footer>
    <p>FOOTER</p>
  </Footer>
);


export default AppFooter;
